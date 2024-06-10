import RouteId from '../../../enums/RouteId';
import avtomats from './avtomats/avtomats';
import contactors from './contactors/contactors';
import cabels from './cabels/cabels';

const elektrical = {
    title: 'Электрооборудование',
    url: RouteId.CATALOG_ELECTRICAL,
    img: '',
    items: [
        avtomats,
        contactors,
        cabels,
    ],
};

export default elektrical;
