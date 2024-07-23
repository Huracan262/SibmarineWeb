import RouteId from 'enums/RouteId';
import ermak360 from './ermak360/ermak360';
import navcomSrs310 from './navcom-srs310/navcom-srs310';

const stationaryVhf = {
    title: 'Стационарные УКВ радиостанции',
    url: RouteId.CATALOG_RADIO_STATIONARY_VHF,
    img: '/images/CategoryPage/stationary.jpg',
    items: [
        ermak360,
        navcomSrs310,
    ],
};

export default stationaryVhf;
