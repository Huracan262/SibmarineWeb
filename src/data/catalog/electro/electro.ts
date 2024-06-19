import RouteId from 'enums/RouteId';
import pannels from './pannels/pannels';
import cables from './cables/cables';
import powerSupplies from './power-supplies/power-supplies';
import chargers from './chargers/chargers';
import transformers from './transformers/transformers';

const electro = {
    title: 'Электрооборудование и материалы',
    url: RouteId.CATALOG_ELECTRO,
    img: '',
    items: [
        pannels,
        cables,
        powerSupplies,
        chargers,
        transformers,
    ],
};

export default electro;
