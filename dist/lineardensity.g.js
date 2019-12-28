"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** LinearDensityUnits enumeration */
var LinearDensityUnits;
(function (LinearDensityUnits) {
    /** */
    LinearDensityUnits[LinearDensityUnits["GramsPerMeter"] = 0] = "GramsPerMeter";
    /** */
    LinearDensityUnits[LinearDensityUnits["PoundsPerFoot"] = 1] = "PoundsPerFoot";
    /** */
    LinearDensityUnits[LinearDensityUnits["KilogramsPerMeter"] = 2] = "KilogramsPerMeter";
})(LinearDensityUnits = exports.LinearDensityUnits || (exports.LinearDensityUnits = {}));
/** The Linear Density, or more precisely, the linear mass density, of a substance is its mass per unit length.  The term linear density is most often used when describing the characteristics of one-dimensional objects, although linear density can also be used to describe the density of a three-dimensional quantity along one particular dimension. */
class LinearDensity {
    /**
     * Create a new LinearDensity.
     * @param value The value.
     * @param fromUnit The ‘LinearDensity’ unit to create from.
     * The default unit is KilogramsPerMeter
     */
    constructor(value, fromUnit = LinearDensityUnits.KilogramsPerMeter) {
        this.gramspermeterLazy = null;
        this.poundsperfootLazy = null;
        this.kilogramspermeterLazy = null;
        if (isNaN(value))
            throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }
    /**
     * The base value of LinearDensity is KilogramsPerMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue() {
        return this.value;
    }
    /** */
    get GramsPerMeter() {
        if (this.gramspermeterLazy !== null) {
            return this.gramspermeterLazy;
        }
        return this.gramspermeterLazy = this.convertFromBase(LinearDensityUnits.GramsPerMeter);
    }
    /** */
    get PoundsPerFoot() {
        if (this.poundsperfootLazy !== null) {
            return this.poundsperfootLazy;
        }
        return this.poundsperfootLazy = this.convertFromBase(LinearDensityUnits.PoundsPerFoot);
    }
    /** */
    get KilogramsPerMeter() {
        if (this.kilogramspermeterLazy !== null) {
            return this.kilogramspermeterLazy;
        }
        return this.kilogramspermeterLazy = this.convertFromBase(LinearDensityUnits.KilogramsPerMeter);
    }
    /**
     * Create a new LinearDensity instance from a GramsPerMeter
     *
     * @param value The unit as GramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromGramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.GramsPerMeter);
    }
    /**
     * Create a new LinearDensity instance from a PoundsPerFoot
     *
     * @param value The unit as PoundsPerFoot to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromPoundsPerFoot(value) {
        return new LinearDensity(value, LinearDensityUnits.PoundsPerFoot);
    }
    /**
     * Create a new LinearDensity instance from a KilogramsPerMeter
     *
     * @param value The unit as KilogramsPerMeter to create a new LinearDensity from.
     * @returns The new LinearDensity instance.
     */
    static FromKilogramsPerMeter(value) {
        return new LinearDensity(value, LinearDensityUnits.KilogramsPerMeter);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.value / 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return this.value / 1.48816394;
            case LinearDensityUnits.KilogramsPerMeter:
                return (this.value / 1e-3) / 1000;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return value * 1e-3;
            case LinearDensityUnits.PoundsPerFoot:
                return value * 1.48816394;
            case LinearDensityUnits.KilogramsPerMeter:
                return (value * 1e-3) * 1000;
            default:
                break;
        }
        return NaN;
    }
    /**
     * Format the LinearDensity to string.
     * Note! the default format for LinearDensity is KilogramsPerMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the LinearDensity.
     * @returns The string format of the LinearDensity.
     */
    toString(toUnit = LinearDensityUnits.KilogramsPerMeter) {
        switch (toUnit) {
            case LinearDensityUnits.GramsPerMeter:
                return this.GramsPerMeter + ` g/m`;
            case LinearDensityUnits.PoundsPerFoot:
                return this.PoundsPerFoot + ` lb/ft`;
            case LinearDensityUnits.KilogramsPerMeter:
                return this.KilogramsPerMeter + ` `;
            default:
                break;
        }
        return this.value.toString();
    }
    /**
     * Check if the given LinearDensity are equals to the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns True if the given LinearDensity are equal to the current LinearDensity.
     */
    equals(linearDensity) {
        return this.value === linearDensity.BaseValue;
    }
    /**
     * Compare the given LinearDensity against the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns 0 if they are equal, -1 if the current LinearDensity is less then other, 1 if the current LinearDensity is greater then other.
     */
    compareTo(linearDensity) {
        if (this.value > linearDensity.BaseValue)
            return 1;
        if (this.value < linearDensity.BaseValue)
            return -1;
        return 0;
    }
    /**
     * Add the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    add(linearDensity) {
        return new LinearDensity(this.value + linearDensity.BaseValue);
    }
    /**
     * Subtract the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    subtract(linearDensity) {
        return new LinearDensity(this.value - linearDensity.BaseValue);
    }
    /**
     * Multiply the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    multiply(linearDensity) {
        return new LinearDensity(this.value * linearDensity.BaseValue);
    }
    /**
     * Divide the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    divide(linearDensity) {
        return new LinearDensity(this.value / linearDensity.BaseValue);
    }
    /**
     * Modulo the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    modulo(linearDensity) {
        return new LinearDensity(this.value % linearDensity.BaseValue);
    }
    /**
     * Pow the given LinearDensity with the current LinearDensity.
     * @param linearDensity The other LinearDensity.
     * @returns A new LinearDensity instance with the results.
     */
    pow(linearDensity) {
        return new LinearDensity(this.value ** linearDensity.BaseValue);
    }
}
exports.LinearDensity = LinearDensity;
//# sourceMappingURL=lineardensity.g.js.map