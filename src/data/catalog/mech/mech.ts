import RouteId from 'enums/RouteId';
import nozzles from './nozzles/nozzles';
import propellers from './propellers/propellers';
import winches from './winches/winches';
import hooks from './hooks/hooks';
import valves from './valves/valves';
import hatches from './hatches/hatches';
import mooring from './mooring/mooring';

const mech = {
    title: 'Механизмы и оборудование',
    url: RouteId.CATALOG_MECH,
    img: '',
    items: [
        nozzles,
        propellers,
        winches,
        hooks,
        valves,
        hatches,
        mooring,
    ],
};

export default mech;
