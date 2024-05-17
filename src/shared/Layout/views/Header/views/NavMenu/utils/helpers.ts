export const getItems = (parentMenu): null | Array<any> => {
    if (!parentMenu || !parentMenu.items || parentMenu.items.length === 0) {
        return null;
    }

    return parentMenu.items.slice(0, 6);
};

export const isCurrent = (menuItems, subMenu): boolean => {
    const subMenuItems = getItems(subMenu);

    if (!menuItems || menuItems.length === 0 || !subMenuItems || subMenuItems.length === 0) {
        return false;
    }

    return menuItems[0].title === subMenuItems[0].title;
};
