import {interpolateViridis, interpolateTurbo, interpolateBuGn, interpolateRdBu} from 'd3-scale-chromatic';

export function mapColorSchemeNameToInterpolator(name) {
    let interp = () => {};
    switch (name) {
        case "BlueGreen":
            interp = interpolateBuGn;
            break;
        case "Viridis":
            interp = interpolateViridis;
            break;
        case "Turbo":
            interp = interpolateTurbo;
            break;
        case "Diverging":
            interp = interpolateRdBu;
            break;
    }
    //console.log("interp ", interp);
    return(interp);
}