import RouteId from 'enums/RouteId';
import compasses from './compasses/compasses';
import sonars from './sonars/sonars';
import radars from './radars/radars';

const nav = {
    title: 'Навигационное оборудование',
    url: RouteId.CATALOG_NAV,
    img: 'images/categoryPage/navigation.jpg',
    items: [
        compasses,
        sonars,
        radars,
    ],
};

export default nav;
