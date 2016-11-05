import { TYPE } from '../constants';

const initialState = {
  records: [],
  types: [],
  markers: [],
  legends: {
    type: [],
    touchBy: []
  }
};

const handlers = {
  [TYPE.LOAD_ALL_DEVICES]: (state, action) => {
    let records = action.devices;
    let markers = getMarkers(records);
    let legends = {
      type: getLegends(records, 'type'),
      touchBy: getLegends(records, 'touchBy')
    };
    return {records, markers, legends};
  },
  [TYPE.INIT_DEVICE_TYPE]: (state, action) => ({types: action.deviceTypes})
};

function getMarkers(records) {
  return records.map((record) => {
    var data = {
      "type": "Feature",
      "properties": {
        "text": record.name
      },
      "geometry": {
        "type": "Point",
        "coordinates": [record.longitude, record.latitude]
      }
    };
    return data;
  });
}

function getLegends(records, field) {
  let grouped = {};
  records.forEach((record) => {
    if(grouped[record[field]])
      grouped[record[field]] += 1;
    else
      grouped[record[field]] = 1;
  });

  return Object.keys(grouped).map((key, index) => {
    return {
      label: key,
      value: grouped[key],
      colorIndex: `graph-${index + 1}`
    };
  });
}

export default function (state = initialState, action) {
  let handler = handlers[action.type];
  if (!handler) return state;
  return {...state, ...handler(state, action)};
};
