import { types } from '../reducers';

export function loadDeviceTypes() {
  let deviceTypes = ['燃烧器', '锅炉', '天气检测'];
  return {
    type: types.INIT_DEVICE_TYPE,
    deviceTypes
  };
};
