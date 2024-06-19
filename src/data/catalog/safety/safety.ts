import RouteId from 'enums/RouteId';
import fireSystems from './fire-systems/fireSystems';
import cctv from './cctv/cctv';
import accessControl from './access-control/accessControl';
import rescue from './rescue/Rescue';

const safety = {
    title: 'Системы безопасности',
    url: RouteId.CATALOG_SAFETY,
    img: '',
    items: [
        fireSystems,
        cctv,
        accessControl,
        rescue,
    ],
};

export default safety;
