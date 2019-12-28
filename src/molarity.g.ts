/** MolarityUnits enumeration */
export enum MolarityUnits {
    /** */
    MolesPerCubicMeter,
    /** */
    MolesPerLiter,
    /** */
    PicomolesPerLiter,
    /** */
    NanomolesPerLiter,
    /** */
    MicromolesPerLiter,
    /** */
    CentimolesPerLiter,
    /** */
    DecimolesPerLiter
}

/** Molar concentration, also called molarity, amount concentration or substance concentration, is a measure of the concentration of a solute in a solution, or of any chemical species, in terms of amount of substance in a given volume. */
export class Molarity {
    private value: number;
    private molespercubicmeterLazy: number | null = null;
    private molesperliterLazy: number | null = null;
    private picomolesperliterLazy: number | null = null;
    private nanomolesperliterLazy: number | null = null;
    private micromolesperliterLazy: number | null = null;
    private centimolesperliterLazy: number | null = null;
    private decimolesperliterLazy: number | null = null;

    /**
     * Create a new Molarity.
     * @param value The value.
     * @param fromUnit The ‘Molarity’ unit to create from.
     * The default unit is MolesPerCubicMeter
     */
    public constructor(value: number, fromUnit: MolarityUnits = MolarityUnits.MolesPerCubicMeter) {

        if (isNaN(value)) throw new TypeError('invalid unit value ‘' + value + '’');
        this.value = this.convertToBase(value, fromUnit);
    }

    /**
     * The base value of Molarity is MolesPerCubicMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    public get BaseValue(): number {
        return this.value;
    }

    /** */
    public get MolesPerCubicMeter(): number {
        if(this.molespercubicmeterLazy !== null){
            return this.molespercubicmeterLazy;
        }
        return this.molespercubicmeterLazy = this.convertFromBase(MolarityUnits.MolesPerCubicMeter);
    }

    /** */
    public get MolesPerLiter(): number {
        if(this.molesperliterLazy !== null){
            return this.molesperliterLazy;
        }
        return this.molesperliterLazy = this.convertFromBase(MolarityUnits.MolesPerLiter);
    }

    /** */
    public get PicomolesPerLiter(): number {
        if(this.picomolesperliterLazy !== null){
            return this.picomolesperliterLazy;
        }
        return this.picomolesperliterLazy = this.convertFromBase(MolarityUnits.PicomolesPerLiter);
    }

    /** */
    public get NanomolesPerLiter(): number {
        if(this.nanomolesperliterLazy !== null){
            return this.nanomolesperliterLazy;
        }
        return this.nanomolesperliterLazy = this.convertFromBase(MolarityUnits.NanomolesPerLiter);
    }

    /** */
    public get MicromolesPerLiter(): number {
        if(this.micromolesperliterLazy !== null){
            return this.micromolesperliterLazy;
        }
        return this.micromolesperliterLazy = this.convertFromBase(MolarityUnits.MicromolesPerLiter);
    }

    /** */
    public get CentimolesPerLiter(): number {
        if(this.centimolesperliterLazy !== null){
            return this.centimolesperliterLazy;
        }
        return this.centimolesperliterLazy = this.convertFromBase(MolarityUnits.CentimolesPerLiter);
    }

    /** */
    public get DecimolesPerLiter(): number {
        if(this.decimolesperliterLazy !== null){
            return this.decimolesperliterLazy;
        }
        return this.decimolesperliterLazy = this.convertFromBase(MolarityUnits.DecimolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a MolesPerCubicMeter
     *
     * @param value The unit as MolesPerCubicMeter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMolesPerCubicMeter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerCubicMeter);
    }

    /**
     * Create a new Molarity instance from a MolesPerLiter
     *
     * @param value The unit as MolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a PicomolesPerLiter
     *
     * @param value The unit as PicomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromPicomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.PicomolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a NanomolesPerLiter
     *
     * @param value The unit as NanomolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromNanomolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.NanomolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a MicromolesPerLiter
     *
     * @param value The unit as MicromolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromMicromolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.MicromolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a CentimolesPerLiter
     *
     * @param value The unit as CentimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromCentimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.CentimolesPerLiter);
    }

    /**
     * Create a new Molarity instance from a DecimolesPerLiter
     *
     * @param value The unit as DecimolesPerLiter to create a new Molarity from.
     * @returns The new Molarity instance.
     */
    public static FromDecimolesPerLiter(value: number): Molarity {
        return new Molarity(value, MolarityUnits.DecimolesPerLiter);
    }

    private convertFromBase(toUnit: MolarityUnits): number {
        switch (toUnit) {
                
            case MolarityUnits.MolesPerCubicMeter:
                return this.value;
            case MolarityUnits.MolesPerLiter:
                return this.value*1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (this.value*1e-3) / 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (this.value*1e-3) / 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (this.value*1e-3) / 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (this.value*1e-3) / 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (this.value*1e-3) / 0.1;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: MolarityUnits): number {
        switch (fromUnit) {
                
            case MolarityUnits.MolesPerCubicMeter:
                return value;
            case MolarityUnits.MolesPerLiter:
                return value/1e-3;
            case MolarityUnits.PicomolesPerLiter:
                return (value/1e-3) * 1e-12;
            case MolarityUnits.NanomolesPerLiter:
                return (value/1e-3) * 1e-9;
            case MolarityUnits.MicromolesPerLiter:
                return (value/1e-3) * 0.000001;
            case MolarityUnits.CentimolesPerLiter:
                return (value/1e-3) * 0.01;
            case MolarityUnits.DecimolesPerLiter:
                return (value/1e-3) * 0.1;
            default:
                break;
        }
        return NaN;
    }

    /**
     * Format the Molarity to string.
     * Note! the default format for Molarity is MolesPerCubicMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Molarity.
     * @returns The string format of the Molarity.
     */
    public toString(toUnit: MolarityUnits = MolarityUnits.MolesPerCubicMeter): string {

        switch (toUnit) {
            
            case MolarityUnits.MolesPerCubicMeter:
                return this.MolesPerCubicMeter + ` mol/m³`;
            case MolarityUnits.MolesPerLiter:
                return this.MolesPerLiter + ` mol/L`;
            case MolarityUnits.PicomolesPerLiter:
                return this.PicomolesPerLiter + ` `;
            case MolarityUnits.NanomolesPerLiter:
                return this.NanomolesPerLiter + ` `;
            case MolarityUnits.MicromolesPerLiter:
                return this.MicromolesPerLiter + ` `;
            case MolarityUnits.CentimolesPerLiter:
                return this.CentimolesPerLiter + ` `;
            case MolarityUnits.DecimolesPerLiter:
                return this.DecimolesPerLiter + ` `;
        default:
            break;
        }
        return this.value.toString();
    }

    /**
     * Check if the given Molarity are equals to the current Molarity.
     * @param molarity The other Molarity.
     * @returns True if the given Molarity are equal to the current Molarity.
     */
    public equals(molarity: Molarity): boolean {
        return this.value === molarity.BaseValue;
    }

    /**
     * Compare the given Molarity against the current Molarity.
     * @param molarity The other Molarity.
     * @returns 0 if they are equal, -1 if the current Molarity is less then other, 1 if the current Molarity is greater then other.
     */
    public compareTo(molarity: Molarity): number {

        if (this.value > molarity.BaseValue)
            return 1;
        if (this.value < molarity.BaseValue)
            return -1;
        return 0;
    }

    /**
     * Add the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public add(molarity: Molarity): Molarity {
        return new Molarity(this.value + molarity.BaseValue)
    }

    /**
     * Subtract the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public subtract(molarity: Molarity): Molarity {
        return new Molarity(this.value - molarity.BaseValue)
    }

    /**
     * Multiply the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public multiply(molarity: Molarity): Molarity {
        return new Molarity(this.value * molarity.BaseValue)
    }

    /**
     * Divide the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public divide(molarity: Molarity): Molarity {
        return new Molarity(this.value / molarity.BaseValue)
    }

    /**
     * Modulo the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public modulo(molarity: Molarity): Molarity {
        return new Molarity(this.value % molarity.BaseValue)
    }

    /**
     * Pow the given Molarity with the current Molarity.
     * @param molarity The other Molarity.
     * @returns A new Molarity instance with the results.
     */
    public pow(molarity: Molarity): Molarity {
        return new Molarity(this.value ** molarity.BaseValue)
    }
}
