import http from 'http';
import https from 'https';

import HttpRequestOptions from '../types/HttpRequestOptions';
import HttpMethod from '../enums/HttpMethod';
import HttpRequestError from './HttpRequestError';

const ALLOWED_PAYLOAD_METHODS = [
  HttpMethod.put,
  HttpMethod.patch,
  HttpMethod.post
];

export function send<T>(options: HttpRequestOptions): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    let method = options.method || HttpMethod.get;

    const request = options.secure ? https.request : http.request;
    const req = request(Object.assign({}, options, { method }), res => {
      res.setEncoding('utf8');

      const body: any[] = [];

      res.on('data', (chunk: any) => {
        body.push(chunk);
      });

      res.on('end', () => {
        let data;
        if (options.json) {
          try {
            data = JSON.parse(body.join(''));
          } catch (unused) {}
        } else {
          data = body.join('');
        }
        if (res.statusCode && (res.statusCode < 200 || res.statusCode > 399)) {
          reject(
            new HttpRequestError({
              message: `Server responded with status code ${res.statusCode}`,
              response: {
                status: res.statusCode,
                data: data
              }
            })
          );
        } else {
          resolve(data);
        }
      });
    });

    req.setTimeout(options.timeout || 5000, () => {
      if (typeof req.destroy === 'function') {
        req.destroy(new Error('Request timeout'));
      } else {
        req.abort();
      }
    });

    req.on('error', err => {
      reject(new HttpRequestError(err));
    });

    if (ALLOWED_PAYLOAD_METHODS.indexOf(method) >= 0) {
      let payload = '';
      if (options.payload) {
        if (options.json) {
          try {
            payload = JSON.stringify(options.payload);
          } catch (err) {
            return reject(err);
          }
        } else {
          try {
            payload = options.payload.toString();
          } catch (err) {
            reject(err);
          }
        }
      }

      req.write(payload);
    }

    req.end();
  });
}
