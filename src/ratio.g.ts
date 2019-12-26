export enum RatioUnits {
    DecimalFractions,
    Percent,
    PartsPerThousand,
    PartsPerMillion,
    PartsPerBillion,
    PartsPerTrillion
}

export class Ratio {
    private value: number;
    private decimalfractionsLazy: number | null = null;
    private percentLazy: number | null = null;
    private partsperthousandLazy: number | null = null;
    private partspermillionLazy: number | null = null;
    private partsperbillionLazy: number | null = null;
    private partspertrillionLazy: number | null = null;

    public constructor(value: number, fromUnit: RatioUnits) {
        this.value = this.convertToBase(value, fromUnit);
    }

    public get DecimalFractions(): number {
        if(this.decimalfractionsLazy !== null){
            return this.decimalfractionsLazy;
        }
        return this.decimalfractionsLazy = this.convertFromBase(RatioUnits.DecimalFractions);
    }

    public get Percent(): number {
        if(this.percentLazy !== null){
            return this.percentLazy;
        }
        return this.percentLazy = this.convertFromBase(RatioUnits.Percent);
    }

    public get PartsPerThousand(): number {
        if(this.partsperthousandLazy !== null){
            return this.partsperthousandLazy;
        }
        return this.partsperthousandLazy = this.convertFromBase(RatioUnits.PartsPerThousand);
    }

    public get PartsPerMillion(): number {
        if(this.partspermillionLazy !== null){
            return this.partspermillionLazy;
        }
        return this.partspermillionLazy = this.convertFromBase(RatioUnits.PartsPerMillion);
    }

    public get PartsPerBillion(): number {
        if(this.partsperbillionLazy !== null){
            return this.partsperbillionLazy;
        }
        return this.partsperbillionLazy = this.convertFromBase(RatioUnits.PartsPerBillion);
    }

    public get PartsPerTrillion(): number {
        if(this.partspertrillionLazy !== null){
            return this.partspertrillionLazy;
        }
        return this.partspertrillionLazy = this.convertFromBase(RatioUnits.PartsPerTrillion);
    }

    public static FromDecimalFractions(value: number): Ratio {
        return new Ratio(value, RatioUnits.DecimalFractions);
    }

    public static FromPercent(value: number): Ratio {
        return new Ratio(value, RatioUnits.Percent);
    }

    public static FromPartsPerThousand(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerThousand);
    }

    public static FromPartsPerMillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerMillion);
    }

    public static FromPartsPerBillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerBillion);
    }

    public static FromPartsPerTrillion(value: number): Ratio {
        return new Ratio(value, RatioUnits.PartsPerTrillion);
    }

    private convertFromBase(toUnit: RatioUnits): number {
        switch (toUnit) {
                
            case RatioUnits.DecimalFractions:
                return this.value;
            case RatioUnits.Percent:
                return this.value*1e2;
            case RatioUnits.PartsPerThousand:
                return this.value*1e3;
            case RatioUnits.PartsPerMillion:
                return this.value*1e6;
            case RatioUnits.PartsPerBillion:
                return this.value*1e9;
            case RatioUnits.PartsPerTrillion:
                return this.value*1e12;
            default:
                break;
        }
        return NaN;
    }

    private convertToBase(value: number, fromUnit: RatioUnits): number {
        switch (fromUnit) {
                
            case RatioUnits.DecimalFractions:
                return value;
            case RatioUnits.Percent:
                return value/1e2;
            case RatioUnits.PartsPerThousand:
                return value/1e3;
            case RatioUnits.PartsPerMillion:
                return value/1e6;
            case RatioUnits.PartsPerBillion:
                return value/1e9;
            case RatioUnits.PartsPerTrillion:
                return value/1e12;
            default:
                break;
        }
        return NaN;
    }

    public toString(toUnit: RatioUnits = RatioUnits.DecimalFractions): string {

        switch (toUnit) {
            
            case RatioUnits.DecimalFractions:
                return this.DecimalFractions + ` `;
            case RatioUnits.Percent:
                return this.Percent + ` %`;
            case RatioUnits.PartsPerThousand:
                return this.PartsPerThousand + ` ‰`;
            case RatioUnits.PartsPerMillion:
                return this.PartsPerMillion + ` ppm`;
            case RatioUnits.PartsPerBillion:
                return this.PartsPerBillion + ` ppb`;
            case RatioUnits.PartsPerTrillion:
                return this.PartsPerTrillion + ` ppt`;
        default:
            break;
        }
        return this.value.toString();
    }
}
