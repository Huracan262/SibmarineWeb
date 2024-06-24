import RouteId from 'enums/RouteId';
import ermak360 from './ermak360/ermak360';

const stationaryVhf = {
    title: 'Стационарные УКВ радиостанции',
    url: RouteId.CATALOG_RADIO_STATIONARY_VHF,
    img: '',
    items: [
        ermak360,
    ],
};

export default stationaryVhf;
