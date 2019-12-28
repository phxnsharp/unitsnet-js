"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** CapacitanceUnits enumeration */
var CapacitanceUnits;
(function (CapacitanceUnits) {
    /** */
    CapacitanceUnits[CapacitanceUnits["Farads"] = 0] = "Farads";
    /** */
    CapacitanceUnits[CapacitanceUnits["Picofarads"] = 1] = "Picofarads";
    /** */
    CapacitanceUnits[CapacitanceUnits["Nanofarads"] = 2] = "Nanofarads";
    /** */
    CapacitanceUnits[CapacitanceUnits["Microfarads"] = 3] = "Microfarads";
    /** */
    CapacitanceUnits[CapacitanceUnits["Kilofarads"] = 4] = "Kilofarads";
    /** */
    CapacitanceUnits[CapacitanceUnits["Megafarads"] = 5] = "Megafarads";
})(CapacitanceUnits = exports.CapacitanceUnits || (exports.CapacitanceUnits = {}));
/** Capacitance is the ability of a body to store an electric charge. */
class Capacitance {
    /**
     * Create a new Capacitance.
     * @param value The value.
     * @param fromUnit The ‘Capacitance’ unit to create from.
     * The default unit is Farads
     */
    constructor(value, fromUnit = CapacitanceUnits.Farads) {
        this.faradsLazy = null;
        this.picofaradsLazy = null;
        this.nanofaradsLazy = null;
        this.microfaradsLazy = null;
        this.kilofaradsLazy = null;
        this.megafaradsLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of Capacitance is Farads.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get Farads() {
        if (this.faradsLazy !== null) {
            return this.faradsLazy;
        }
        return this.faradsLazy = this.convertFromBase(CapacitanceUnits.Farads);
    }
    /** */
    get Picofarads() {
        if (this.picofaradsLazy !== null) {
            return this.picofaradsLazy;
        }
        return this.picofaradsLazy = this.convertFromBase(CapacitanceUnits.Picofarads);
    }
    /** */
    get Nanofarads() {
        if (this.nanofaradsLazy !== null) {
            return this.nanofaradsLazy;
        }
        return this.nanofaradsLazy = this.convertFromBase(CapacitanceUnits.Nanofarads);
    }
    /** */
    get Microfarads() {
        if (this.microfaradsLazy !== null) {
            return this.microfaradsLazy;
        }
        return this.microfaradsLazy = this.convertFromBase(CapacitanceUnits.Microfarads);
    }
    /** */
    get Kilofarads() {
        if (this.kilofaradsLazy !== null) {
            return this.kilofaradsLazy;
        }
        return this.kilofaradsLazy = this.convertFromBase(CapacitanceUnits.Kilofarads);
    }
    /** */
    get Megafarads() {
        if (this.megafaradsLazy !== null) {
            return this.megafaradsLazy;
        }
        return this.megafaradsLazy = this.convertFromBase(CapacitanceUnits.Megafarads);
    }
    /**
     * Create a new Capacitance instance from a Farads
     *
     * @param value The unit as Farads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromFarads(value) {
        return new Capacitance(value, CapacitanceUnits.Farads);
    }
    /**
     * Create a new Capacitance instance from a Picofarads
     *
     * @param value The unit as Picofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromPicofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Picofarads);
    }
    /**
     * Create a new Capacitance instance from a Nanofarads
     *
     * @param value The unit as Nanofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromNanofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Nanofarads);
    }
    /**
     * Create a new Capacitance instance from a Microfarads
     *
     * @param value The unit as Microfarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromMicrofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Microfarads);
    }
    /**
     * Create a new Capacitance instance from a Kilofarads
     *
     * @param value The unit as Kilofarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromKilofarads(value) {
        return new Capacitance(value, CapacitanceUnits.Kilofarads);
    }
    /**
     * Create a new Capacitance instance from a Megafarads
     *
     * @param value The unit as Megafarads to create a new Capacitance from.
     * @returns The new Capacitance instance.
     */
    static FromMegafarads(value) {
        return new Capacitance(value, CapacitanceUnits.Megafarads);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case CapacitanceUnits.Farads:
                return this.value;
            case CapacitanceUnits.Picofarads:
                return (this.value) / 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (this.value) / 1e-9;
            case CapacitanceUnits.Microfarads:
                return (this.value) / 0.000001;
            case CapacitanceUnits.Kilofarads:
                return (this.value) / 1000;
            case CapacitanceUnits.Megafarads:
                return (this.value) / 1000000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case CapacitanceUnits.Farads:
                return value;
            case CapacitanceUnits.Picofarads:
                return (value) * 1e-12;
            case CapacitanceUnits.Nanofarads:
                return (value) * 1e-9;
            case CapacitanceUnits.Microfarads:
                return (value) * 0.000001;
            case CapacitanceUnits.Kilofarads:
                return (value) * 1000;
            case CapacitanceUnits.Megafarads:
                return (value) * 1000000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the Capacitance to string.
     * Note! the default format for Capacitance is Farads.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Capacitance.
     * @returns The string format of the Capacitance.
     */
    toString(toUnit = CapacitanceUnits.Farads) {
        switch (toUnit) {
            case CapacitanceUnits.Farads:
                return this.Farads + ` F`;
            case CapacitanceUnits.Picofarads:
                return this.Picofarads + ` `;
            case CapacitanceUnits.Nanofarads:
                return this.Nanofarads + ` `;
            case CapacitanceUnits.Microfarads:
                return this.Microfarads + ` `;
            case CapacitanceUnits.Kilofarads:
                return this.Kilofarads + ` `;
            case CapacitanceUnits.Megafarads:
                return this.Megafarads + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given Capacitance are equals to the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns True if the given Capacitance are equal to the current Capacitance.
     */
    equals(capacitance) {
        return this.value === capacitance.BaseValue;
    }
    /**
     * Compare the given Capacitance against the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns 0 if they are equal, -1 if the current Capacitance is less then other, 1 if the current Capacitance is greater then other.
     */
    compareTo(capacitance) {
        if (this.value > capacitance.BaseValue)
            return 1;
        if (this.value < capacitance.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    add(capacitance) {
        return new Capacitance(this.value + capacitance.BaseValue);
    }
    /**
     * Subtract the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    subtract(capacitance) {
        return new Capacitance(this.value - capacitance.BaseValue);
    }
    /**
     * Multiply the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    multiply(capacitance) {
        return new Capacitance(this.value * capacitance.BaseValue);
    }
    /**
     * Divide the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    divide(capacitance) {
        return new Capacitance(this.value / capacitance.BaseValue);
    }
    /**
     * Modulo the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    modulo(capacitance) {
        return new Capacitance(this.value % capacitance.BaseValue);
    }
    /**
     * Pow the given Capacitance with the current Capacitance.
     * @param capacitance The other Capacitance.
     * @returns A new Capacitance instance with the results.
     */
    pow(capacitance) {
        return new Capacitance(this.value ** capacitance.BaseValue);
    }
}
exports.Capacitance = Capacitance;
//# sourceMappingURL=capacitance.g.js.map