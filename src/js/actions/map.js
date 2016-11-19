/**
 * Created by huling on 11/5/2016.
 */
import { Rest } from 'grommet';
import { URL } from '../constants';

export function getMapJson(name) {
  return Rest.default.get(URL.DATA_MAP + name).then((res) => {
    return res.body;
  });
}

export function getBusinessJson(name) {
  return Rest.default.get(URL.DATA_BUSINESS + name).then((res) => {
    return res.body;
  });
}
