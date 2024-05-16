import {createContext} from 'react';

const NavMenuContext = createContext({
    navMenuItem: null,
    setNavMenuItem: null,
    timerId: null,
    setTimerId: null,
});

export default NavMenuContext;
