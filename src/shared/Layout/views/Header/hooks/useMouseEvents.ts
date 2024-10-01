import {useContext} from 'react';
import NavMenuContext from 'contexts/NavMenuContext';

const useMouseEvents = () => {
    const {timerId, setTimerId, setNavMenuItem} = useContext(NavMenuContext);

    const onMouseLeave = () => {
        setTimerId(setTimeout(() => setNavMenuItem(null), 500));
    };

    const onMouseEnter = (item: any): void => { // TODO - заменить "any"
        if (timerId !== null) {
            clearTimeout(timerId);
        }

        setNavMenuItem(item);
    };

    return {
        onMouseEnter,
        onMouseLeave,
    };
};

export default useMouseEvents;
