import * as ReaderStatus from '../../types/impinj/ReaderStatus';
import * as MqttConfig from '../../types/impinj/MqttConfig';
import * as InventoryPreset from '../../types/impinj/InventoryPreset';

export default interface v1 {
  /**
   * Gets the reader's status
   */
  getStatus: () => Promise<ReaderStatus.v1>;

  /**
   * Gets the reader's MQTT settings
   */
  getMqtt: () => Promise<MqttConfig.v1>;

  /**
   * Updates the reader's MQTT settings with the provided payload
   * @param payload object defining the new mqtt settings
   */
  updateMqtt: (payload: object) => Promise<any>;

  /**
   * Gets a list of readers supported profiles (e.g. inventory, location, direction)
   */
  getSupportedProfiles: () => Promise<string[]>;

  /**
   * Gets the reader-specific JSON schema used to validate inventory presets
   */
  getInventoryPresetsSchema: () => Promise<any>;

  /**
   * Gets available inventory presets
   */
  getInventoryPresets: () => Promise<string[]>;

  /**
   * Gets the inventory preset with id {presetId}
   * @param id presetId
   */
  getInventoryPresetById: (id: string) => Promise<InventoryPreset.v1>;

  /**
   * Updates the inventory preset with id {presetId} with the provided payload
   * @param id presetId
   * @param payload object defining the new preset settings
   */
  updateInventoryPresetById: (id: string, payload: object) => Promise<any>;

  /**
   * Deletes the inventory preset with id {presetId}
   * @param id presetId
   */
  deleteInventoryPresetById: (id: string) => Promise<any>;

  /**
   * Starts the reader with the inventory preset with id {presetId}
   * @param id presetId
   */
  startInventoryPresetById: (id: string) => Promise<any>;

  /**
   * Stops the currently running profile preset
   */
  stopInventoryPreset: () => Promise<any>;
}
