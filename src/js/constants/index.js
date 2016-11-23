import Map_brush from './Map_brush';

const params = {
  URL: {
    DEVICE_TYPES: '/devicemanager/devicetypes',
    DEVICES: '/devicemanager/devices',
    DATA_MAP: '/data/map/',
    DATA_BUSINESS: '/data/business/',
    DATA_CONF_DECK: '/data/conf/deck'
  },
  TYPE: {
    MSG_RECEIVE: 'msg_receive',

    DECK_ADD_BOX: 'deck_add_box',
    DECK_DEL_BOX: 'deck_del_box',
    DECK_RM_PARENT: 'deck_rm_parent',
    DECK_SET_BOX: 'deck_set_box',
    DECK_SET_ALL: 'deck_set_all',

    INIT_DEVICE_TYPE: 'init_device_type',
    LOAD_ALL_DEVICES: 'load_all_devices',
    ACTIVE: 'module_active',
    LOGIN: 'app_login',

    TOGGLE_SIDEBAR: 'toggle_sidebar'
  },
  Map_brush
};

module.exports = params;
