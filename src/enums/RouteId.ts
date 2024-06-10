enum RouteId {
    HOME = 'home',
    ABOUT = 'about',
    ITEM = 'item',
    CONTACTS = 'contacts',
    CATALOG = 'catalog',
        CATALOG_MECHANISMS = 'mechanisms',
            CATALOG_MECHANISMS_STROPS = 'strops',
            CATALOG_MECHANISMS_VINTS = 'vints',
            CATALOG_MECHANISMS_BOATS = 'boats',

        CATALOG_ELECTRICAL = 'electrical',
            CATALOG_ELECTRICAL_AVTOMATS = 'avtomats',
            CATALOG_ELECTRICAL_CONTACTORS = 'contactors',
            CATALOG_ELECTRICAL_CABELS = 'cabels',

        CATALOG_RADIO = 'radios',
            CATALOG_RADIO_LOCATORS = 'locators',
            CATALOG_RADIO_RADIO_STATIONS = 'radio-stations',
            CATALOG_RADIO_WALKIE_TALKIES = 'walkie-talkies',

    SERVICES = 'services',
        SERVICES_HULL_WORKS = 'hull-works',
        SERVICES_ELECTRICAL = 'electrical',
        SERVICES_MAINTENANCE = 'maintenance',
}

export default RouteId;
