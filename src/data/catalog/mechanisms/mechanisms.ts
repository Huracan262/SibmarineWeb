import RouteId from '../../../enums/RouteId';
import strops from './strops/strops';
import vints from './vints/vints';
import boats from './boats/boats';

const mechanisms = {
    title: 'Механизмы',
    url: RouteId.CATALOG_MECHANISMS,
    img: '',
    items: [
        strops,
        vints,
        boats,
    ],
};

export default mechanisms;
