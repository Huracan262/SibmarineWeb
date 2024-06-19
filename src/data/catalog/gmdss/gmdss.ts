import RouteId from 'enums/RouteId';
import epirbs from './epirbs/epirbs';
import sarts from './sarts/sarts';
import ses from './ses/ses';
import navtex from './navtex/navtex';
import accessories from './accessories/accessories';
import hydrostatics from './hydrostatics/hydrostatics';
import testers from './testers/testers';

const gmdss = {
    title: 'Судовое оборудование ГМССБ',
    url: RouteId.CATALOG_GMDSS,
    img: '',
    items: [
        epirbs,
        sarts,
        ses,
        navtex,
        accessories,
        hydrostatics,
        testers,
    ],
};

export default gmdss;
