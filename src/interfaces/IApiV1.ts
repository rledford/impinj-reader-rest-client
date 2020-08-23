export default interface IApiV1 {
  /**
   * Gets the reader's status
   */
  getStatus: () => Promise<any>;

  /**
   * Gets the reader's MQTT settings
   */
  getMqtt: () => Promise<any>;

  /**
   * Updates the reader's MQTT settings with the provided payload
   * @param payload object defining the new mqtt settings
   */
  updateMqtt: (payload: object) => Promise<any>;

  /**
   * Gets a list of readers supported profiles (e.g. inventory, location, direction)
   */
  getSupportedProfiles: () => Promise<any>;

  /**
   * Gets the reader-specific JSON schema used to validate inventory presets
   */
  getInventoryPresetsSchema: () => Promise<any>;

  /**
   * Gets available inventory presets
   */
  getInventoryPresets: () => Promise<any>;

  /**
   * Gets the inventory preset with id {presetId}
   * @param id presetId
   */
  getInventoryPresetById: (id: string) => Promise<any>;

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
  startInventoryPreset: (id: string) => Promise<any>;

  /**
   * Stops the currently running profile preset
   */
  stopInventoryPreset: () => Promise<any>;
}
