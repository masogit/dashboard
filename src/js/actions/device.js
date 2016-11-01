import { types } from '../reducers';
import { Rest } from 'grommet';

const url_deviceTypes = "http://www.zhiyuninfo.com:8080/devicemanager-1.0/dmrest/devicetypes";
export function loadDeviceTypes() {
  Rest.default.setHeader('Access-Control-Allow-Origin', 'http://www.zhiyuninfo.com');
  Rest.default.get(url_deviceTypes).then((data) => {
    console.log(data);
  }, (reason) => {
    console.log(reason);
  });
  let deviceTypes = ['燃烧器', '锅炉', '天气检测'];
  return {
    type: types.INIT_DEVICE_TYPE,
    deviceTypes
  };
};
