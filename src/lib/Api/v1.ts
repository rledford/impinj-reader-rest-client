import HttpMethod from '../../enums/HttpMethod';
import * as HttpRequest from '../HttpRequest';
import ImpinjReaderRestClient from '../ImpinjReaderRestClient';
import v1 from '../../interfaces/api/v1';

export default function (client: ImpinjReaderRestClient): v1 {
  return {
    getStatus() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `/api/v1/status`,
        headers: { Accept: 'application/json' }
      });
    },

    getMqtt() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `/api/v1/mqtt`,
        headers: { Accept: 'application/json' }
      });
    },

    updateMqtt(payload: object) {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.put,
        path: `/api/v1/mqtt`,
        payload,
        json: true,
        headers: { Accept: 'application/json' }
      });
    },

    getSupportedProfiles() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `api/v1/profiles`,
        headers: { Accept: 'application/json' }
      });
    },

    getInventoryPresetsSchema() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `api/v1/profiles/inventory/presets-schema`,
        headers: { Accept: 'application/json' }
      });
    },

    getInventoryPresets() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `/api/v1/profiles/inventory/presets`,
        headers: { Accept: 'application/json' }
      });
    },

    getInventoryPresetById(id: string) {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.get,
        path: `/api/v1/profiles/inventory/presets/${id}`,
        headers: { Accept: 'application/json' }
      });
    },

    updateInventoryPresetById(id: string, payload: object) {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.put,
        path: `/api/v1/profiles/inventory/presets/${id}`,
        headers: { Accept: 'application/json' },
        payload
      });
    },

    deleteInventoryPresetById(id: string) {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.delete,
        path: `/api/v1/profiles/inventory/presets/${id}`,
        headers: { Accept: 'application/json' }
      });
    },

    startInventoryPreset(id: string) {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.post,
        path: `/api/v1/profiles/inventory/presets/${id}/start`,
        headers: { Accept: 'application/json' }
      });
    },

    stopInventoryPreset() {
      return HttpRequest.send({
        ...client,
        method: HttpMethod.post,
        path: `/api/v1/profiles/stop`,
        headers: { Accept: 'application/json' }
      });
    }
  };
}
