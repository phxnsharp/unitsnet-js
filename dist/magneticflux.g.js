"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MagneticFluxUnits;
(function (MagneticFluxUnits) {
    MagneticFluxUnits[MagneticFluxUnits["Webers"] = 0] = "Webers";
})(MagneticFluxUnits = exports.MagneticFluxUnits || (exports.MagneticFluxUnits = {}));
class MagneticFlux {
    constructor(value, fromUnit) {
        this.webersLazy = null;
        this.value = this.convertToBase(value, fromUnit);
    }
    get Webers() {
        if (this.webersLazy !== null) {
            return this.webersLazy;
        }
        return this.webersLazy = this.convertFromBase(MagneticFluxUnits.Webers);
    }
    static FromWebers(value) {
        return new MagneticFlux(value, MagneticFluxUnits.Webers);
    }
    convertFromBase(toUnit) {
        switch (toUnit) {
            case MagneticFluxUnits.Webers:
                return this.value;
            default:
                break;
        }
        return NaN;
    }
    convertToBase(value, fromUnit) {
        switch (fromUnit) {
            case MagneticFluxUnits.Webers:
                return value;
            default:
                break;
        }
        return NaN;
    }
    toString(toUnit = MagneticFluxUnits.Webers) {
        switch (toUnit) {
            case MagneticFluxUnits.Webers:
                return this.Webers + ` Wb`;
            default:
                break;
        }
        return this.value.toString();
    }
}
exports.MagneticFlux = MagneticFlux;
//# sourceMappingURL=magneticflux.g.js.map