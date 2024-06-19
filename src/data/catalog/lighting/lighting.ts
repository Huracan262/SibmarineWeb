import RouteId from 'enums/RouteId';
import buoys from './buoys/buoys';
import explosionProof from './explosion-proof/explosionProof';
import lamps from './lamps/lamps';
import lights from './lights/lights';
import projectors from './projectors/projectors';
import signalReceivers from './signal-receivers/signalReceivers';
import switches from './switches/switches';

const lighting = {
    title: 'Светотехническое оборудование',
    url: RouteId.CATALOG_LIGHTING,
    img: '',
    items: [
        buoys,
        explosionProof,
        lamps,
        lights,
        projectors,
        signalReceivers,
        switches,
    ],
};

export default lighting;
