export declare enum PermittivityUnits {
    FaradsPerMeter = 0
}
export declare class Permittivity {
    private value;
    private faradspermeterLazy;
    constructor(value: number, fromUnit: PermittivityUnits);
    get FaradsPerMeter(): number;
    static FromFaradsPerMeter(value: number): Permittivity;
    private convertFromBase;
    private convertToBase;
    toString(toUnit?: PermittivityUnits): string;
}
//# sourceMappingURL=permittivity.g.d.ts.map