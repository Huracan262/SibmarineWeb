import RouteId from 'enums/RouteId';
import shipComms from './ship-comms/ship-comms';
import portableVhf from './portable-vhf/portable-vhf';
import stationaryVhf from './stationary-vhf/stationary-vhf';
import hfMw from './hf-mw/hf-mw';
import antennas from './antennas/antennas';
import accessories from './accessories/accessories';
import kvuParts from './kvu-parts/kvu-parts';

const radio = {
    title: 'Радиосвязь и КВУ',
    url: RouteId.CATALOG_RADIO,
    img: '/images/CategoryPage/radio.jpg',
    items: [
        shipComms,
        portableVhf,
        stationaryVhf,
        hfMw,
        antennas,
        accessories,
        kvuParts,
    ],
};

export default radio;
