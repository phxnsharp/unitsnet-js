/** IrradianceUnits enumeration */
export declare enum IrradianceUnits {
    /** */
    WattsPerSquareMeter = 0,
    /** */
    WattsPerSquareCentimeter = 1,
    /** */
    PicowattsPerSquareMeter = 2,
    /** */
    NanowattsPerSquareMeter = 3,
    /** */
    MicrowattsPerSquareMeter = 4,
    /** */
    KilowattsPerSquareMeter = 5,
    /** */
    MegawattsPerSquareMeter = 6,
    /** */
    PicowattsPerSquareCentimeter = 7,
    /** */
    NanowattsPerSquareCentimeter = 8,
    /** */
    MicrowattsPerSquareCentimeter = 9,
    /** */
    KilowattsPerSquareCentimeter = 10,
    /** */
    MegawattsPerSquareCentimeter = 11
}
/** Irradiance is the intensity of ultraviolet (UV) or visible light incident on a surface. */
export declare class Irradiance {
    private value;
    private wattspersquaremeterLazy;
    private wattspersquarecentimeterLazy;
    private picowattspersquaremeterLazy;
    private nanowattspersquaremeterLazy;
    private microwattspersquaremeterLazy;
    private kilowattspersquaremeterLazy;
    private megawattspersquaremeterLazy;
    private picowattspersquarecentimeterLazy;
    private nanowattspersquarecentimeterLazy;
    private microwattspersquarecentimeterLazy;
    private kilowattspersquarecentimeterLazy;
    private megawattspersquarecentimeterLazy;
    /**
     * Create a new Irradiance.
     * @param value The value.
     * @param fromUnit The ‘Irradiance’ unit to create from.
     * The default unit is WattsPerSquareMeter
     */
    constructor(value: number, fromUnit?: IrradianceUnits);
    /**
     * The base value of Irradiance is WattsPerSquareMeter.
     * This accessor used when needs a value for calculations and it's better to use directly the base value
     */
    get BaseValue(): number;
    /** */
    get WattsPerSquareMeter(): number;
    /** */
    get WattsPerSquareCentimeter(): number;
    /** */
    get PicowattsPerSquareMeter(): number;
    /** */
    get NanowattsPerSquareMeter(): number;
    /** */
    get MicrowattsPerSquareMeter(): number;
    /** */
    get KilowattsPerSquareMeter(): number;
    /** */
    get MegawattsPerSquareMeter(): number;
    /** */
    get PicowattsPerSquareCentimeter(): number;
    /** */
    get NanowattsPerSquareCentimeter(): number;
    /** */
    get MicrowattsPerSquareCentimeter(): number;
    /** */
    get KilowattsPerSquareCentimeter(): number;
    /** */
    get MegawattsPerSquareCentimeter(): number;
    /**
     * Create a new Irradiance instance from a WattsPerSquareMeter
     *
     * @param value The unit as WattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromWattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a WattsPerSquareCentimeter
     *
     * @param value The unit as WattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromWattsPerSquareCentimeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a PicowattsPerSquareMeter
     *
     * @param value The unit as PicowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromPicowattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a NanowattsPerSquareMeter
     *
     * @param value The unit as NanowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromNanowattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareMeter
     *
     * @param value The unit as MicrowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMicrowattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a KilowattsPerSquareMeter
     *
     * @param value The unit as KilowattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromKilowattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a MegawattsPerSquareMeter
     *
     * @param value The unit as MegawattsPerSquareMeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMegawattsPerSquareMeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a PicowattsPerSquareCentimeter
     *
     * @param value The unit as PicowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromPicowattsPerSquareCentimeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a NanowattsPerSquareCentimeter
     *
     * @param value The unit as NanowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromNanowattsPerSquareCentimeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a MicrowattsPerSquareCentimeter
     *
     * @param value The unit as MicrowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMicrowattsPerSquareCentimeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a KilowattsPerSquareCentimeter
     *
     * @param value The unit as KilowattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromKilowattsPerSquareCentimeter(value: number): Irradiance;
    /**
     * Create a new Irradiance instance from a MegawattsPerSquareCentimeter
     *
     * @param value The unit as MegawattsPerSquareCentimeter to create a new Irradiance from.
     * @returns The new Irradiance instance.
     */
    static FromMegawattsPerSquareCentimeter(value: number): Irradiance;
    private convertFromBase;
    private convertToBase;
    /**
     * Format the Irradiance to string.
     * Note! the default format for Irradiance is WattsPerSquareMeter.
     * To specify the unit fromat set the 'toUnit' parameter.
     * @param toUnit The unit to format the Irradiance.
     * @returns The string format of the Irradiance.
     */
    toString(toUnit?: IrradianceUnits): string;
    /**
     * Check if the given Irradiance are equals to the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns True if the given Irradiance are equal to the current Irradiance.
     */
    equals(irradiance: Irradiance): boolean;
    /**
     * Compare the given Irradiance against the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns 0 if they are equal, -1 if the current Irradiance is less then other, 1 if the current Irradiance is greater then other.
     */
    compareTo(irradiance: Irradiance): number;
    /**
     * Add the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    add(irradiance: Irradiance): Irradiance;
    /**
     * Subtract the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    subtract(irradiance: Irradiance): Irradiance;
    /**
     * Multiply the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    multiply(irradiance: Irradiance): Irradiance;
    /**
     * Divide the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    divide(irradiance: Irradiance): Irradiance;
    /**
     * Modulo the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    modulo(irradiance: Irradiance): Irradiance;
    /**
     * Pow the given Irradiance with the current Irradiance.
     * @param irradiance The other Irradiance.
     * @returns A new Irradiance instance with the results.
     */
    pow(irradiance: Irradiance): Irradiance;
}
//# sourceMappingURL=irradiance.g.d.ts.map