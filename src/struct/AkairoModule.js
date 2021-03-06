const { AkairoHandlerEvents } = require('../util/Constants');

/**
 * Options for module.
 * @typedef {Object} ModuleOptions
 * @prop {string} [category='default'] - Category ID for organization purposes.
 */

class AkairoModule {
    /**
     * Creates a new module.
     * @param {string} id - ID of module.
     * @param {ModuleOptions} [options={}] - Options.
     */
    constructor(id, { category = 'default' } = {}) {
        /**
         * ID of the module.
         * @type {string}
         */
        this.id = id;

        /**
         * Category this belongs to.
         * @type {Category}
         */
        this.category = category;

        /**
         * Whether or not this is enabled.
         * @type {boolean}
         */
        this.enabled = true;

        /**
         * The filepath.
         * @readonly
         * @type {string}
         */
        this.filepath = null;

        /**
         * The Akairo client.
         * @readonly
         * @type {AkairoClient}
         */
        this.client = null;

        /**
         * The handler.
         * @readonly
         * @type {AkairoHandler}
         */
        this.handler = null;
    }

    /**
     * Reloads the module.
     * @returns {AkairoModule}
     */
    reload() {
        return this.handler.reload(this.id);
    }

    /**
     * Removes the module.
     * @returns {AkairoModule}
     */
    remove() {
        return this.handler.remove(this.id);
    }

    /**
     * Enables the module.
     * @returns {boolean}
     */
    enable() {
        if (this.enabled) return false;
        this.enabled = true;
        this.handler.emit(AkairoHandlerEvents.ENABLE, this);
        return true;
    }

    /**
     * Disables the module.
     * @returns {boolean}
     */
    disable() {
        if (!this.enabled) return false;
        this.enabled = false;
        this.handler.emit(AkairoHandlerEvents.DISABLE, this);
        return true;
    }

    /**
     * Returns the ID.
     * @returns {string}
     */
    toString() {
        return this.id;
    }
}

module.exports = AkairoModule;
