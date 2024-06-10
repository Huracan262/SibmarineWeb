import RouteId from '../../../enums/RouteId';
import walkieTalkies from './ walkie-talkies/walkie-talkies';
import radioStations from './radio-stations/radio-stations';
import locators from './locators/locators';

const radio = {
    title: 'Радионавигационное оборудование',
    url: RouteId.CATALOG_RADIO,
    img: '',
    items: [
        locators,
        radioStations,
        walkieTalkies,
    ],
};

export default radio;
