# Impinj Reader REST Client

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API v1](#api-v1)
- [To Do](#to-do)

## Installation

```bash
npm i -S impinj-reader-rest-client
```

## Usage

```js
const ImpinjReaderRestClient = require('impinj-reader-rest-client');

const restClient = new ImpinjReaderRestClient({
  secure: true,
  hostname: 'reader-hostname-or-ip',
  port: 80,
  timeout: 5000
});

restClient.api.v1
  .getStatus()
  .then(status => {
    // process status data
  })
  .catch(err => {
    // handle error
  });
```

## Configuration

| Option   | Type   | Default          | Description                                       |
| -------- | ------ | ---------------- | ------------------------------------------------- |
| secure   | bool   | false            | If true, the client will only send HTTPS requests |
| hostname | string | 127.0.0.1        | Reader hostname or IP address                     |
| port     | number | 80               | Reader REST API port                              |
| username | string | root             | Reader REST API authorized username               |
| password | string | \*\*\*\*\*\*\*\* | Reader REST API password                          |
| timeout  | number | 5000             | Client request timeout (milliseconds)             |

_IMPORTANT_: Once an `ImpinjReaderRestClient` object is instantiated, attempting to change the configuration will not affect the client.

## API v1

_\[ImpinjReaderRestClient\].api.v1_

This package includes all data types used throughout the client so most IDEs should have autocompletion for the response data. The only method that has an ambiguous return value is _getInventoryPresetsSchema_ since the schema is different depending on the reader's capapbilities. Refer to the [Impinj RESTful Interface documentation](https://platform.impinj.com/site/docs/reader_api/index.gsp) to get additional API response details.

| Method                    | Args                                | Description                                                    |
| ------------------------- | ----------------------------------- | -------------------------------------------------------------- |
| getStatus                 |                                     | Gets the reader's status                                       |
| getMqtt                   |                                     | Gets the reader's MQTT settings                                |
| updateMqtt                | payload: **Object**                 | Updates the reader's MQTT settings with the provided _payload_ |
| getSupportedProfiles      |                                     | Gets a list of readers supported profiles                      |
| getInventoryPresetsSchema |                                     | Gets the reader-specific JSON schema                           |
| getInventoryPresets       |                                     | Gets available inventory presets                               |
| getInventoryPresetById    | id: **String**                      | Gets the inventory preset by ID                                |
| updateInventoryPresetById | id: **String**, payload: **Object** | Updates the inventory preset by ID with the provided _payload_ |
| deleteInventoryPresetById | id: **String**                      | Deletes the inventory preset by ID                             |
| startInventoryPresetById  | id: **String**                      | Starts the reader with the inventory preset by ID              |
| stopInventoryPreset       |                                     | Stops the currently running profile preset                     |

## To Do

- Add API v1 data stream capability
