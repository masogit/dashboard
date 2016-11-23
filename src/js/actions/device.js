import { TYPE, URL } from '../constants';
import { Rest } from 'grommet';

export function loadDeviceTypes() {
  return dispatch => {
    Rest.default.get(URL.DEVICE_TYPES).then((res) => {
      let deviceTypes = res.body;
      let deviceTypesMenus = deviceTypes.map((type) => {
        return type.name;
      });
      return dispatch({
        type: TYPE.INIT_DEVICE_TYPE,
        deviceTypesMenus,
        deviceTypes
      });
    });
  };
};

export function loadDevices() {
  return dispatch => {
    Rest.default.get(URL.DEVICES).then((res) => {
      let devices = res.body;
      console.log(devices);
      return dispatch({
        type: TYPE.LOAD_ALL_DEVICES,
        devices
      });
    });
  };
};
