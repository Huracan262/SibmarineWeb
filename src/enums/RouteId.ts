enum RouteId {
    HOME = 'home',
    ABOUT = 'about',
    NEWS = 'news',
    // ITEM = 'item',
    CONTACTS = 'contacts',
    CATALOG = 'catalog',
        CATALOG_ELECTRO = 'electro',
            CATALOG_ELECTRO_PANNELS = 'pannels',
            CATALOG_ELECTRO_CABLES = 'cables',
            CATALOG_ELECTRO_POWER_SUPPLIES = 'power-supplies',
            CATALOG_ELECTRO_CHARGERS = 'chargers',
            CATALOG_ELECTRO_TRANSFORMERS = 'transformers',
        CATALOG_NAV = 'nav',
            CATALOG_NAV_COMPASSES = 'compasses',
            CATALOG_NAV_SONARS = 'sonars',
            CATALOG_NAV_RADARS = 'radars',
        CATALOG_RADIO = 'radio',
            CATALOG_RADIO_SHIP_COMMS = 'ship-comms',
            CATALOG_RADIO_PORTABLE_VHF = 'portable-vhf',
            CATALOG_RADIO_STATIONARY_VHF = 'stationary-vhf',
                ITEM_ERMAK360 = 'ermak360',
                ITEM_NAVCOM_SRS310 = 'navcom-srs310',
            CATALOG_RADIO_HF_MW = 'hf-mw',
            CATALOG_RADIO_ANTENNAS = 'antennas',
            CATALOG_RADIO_ACCESSORIES = 'accessories',
            CATALOG_RADIO_KVU_PARTS = 'kvu-parts',
        CATALOG_GMDSS = 'gmdss',
            CATALOG_GMDSS_EPIRBS = 'epirbs',
            CATALOG_GMDSS_SARTS = 'sarts',
            CATALOG_GMDSS_SES = 'ses',
            CATALOG_GMDSS_NAVTEX = 'navtex',
            CATALOG_GMDSS_ACCESSORIES = 'accessories',
            CATALOG_GMDSS_HYDROSTATICS = 'hydrostatics',
            CATALOG_GMDSS_TESTERS = 'testers',
        CATALOG_LIGHTING = 'lighting',
            CATALOG_LIGHTING_BUOYS = 'buoys',
            CATALOG_LIGHTING_LIGHTS = 'lights',
            CATALOG_LIGHTING_SIGNAL_RECEIVERS = 'signal-receivers',
            CATALOG_LIGHTING_EXPLOSION_PROOF = 'explosion-proof',
            CATALOG_LIGHTING_PROJECTORS = 'projectors',
            CATALOG_LIGHTING_LAMPS = 'lamps',
            CATALOG_LIGHTING_SWITCHES = 'switches',
        CATALOG_MECH = 'mech',
            CATALOG_MECH_NOZZLES = 'nozzles',
            CATALOG_MECH_PROPELLERS = 'propellers',
            CATALOG_MECH_WINCHES = 'winches',
            CATALOG_MECH_HOOKS = 'hooks',
            CATALOG_MECH_VALVES = 'valves',
            CATALOG_MECH_HATCHES = 'hatches',
            CATALOG_MECH_MOORING = 'mooring',
        CATALOG_SAFETY = 'safety',
            CATALOG_SAFETY_FIRE_SYSTEMS = 'fire-systems',
            CATALOG_SAFETY_CCTV = 'cctv',
            CATALOG_SAFETY_ACCESS_CONTROL = 'access-control',
            CATALOG_SAFETY_RESCUE = 'rescue',

    SERVICES = 'services',
        SERVICES_HULL_WORKS = 'hull-works',
        SERVICES_ELECTRICAL = 'electrical',
        SERVICES_MAINTENANCE = 'maintenance',
}

export default RouteId;
