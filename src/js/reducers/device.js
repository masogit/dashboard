import { types } from './index';

const initialState = {
  records: [
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'},
    {'NO.': '123123', NAME: 'Device 01', PROVIDER: 'HPE', CONSUMER: 'ABC', PRESSURE: '123p', TEMP: '38C', TIME: '2016-10-10 20:00:00', AGENT: 'DDD'}
  ],
  labels: "NO.,NAME,PROVIDER,CONSUMER,PRESSURE,TEMP,TIME,AGENT"
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ACTIVE:
      return { ...state, ...{activeIndex: action.index} };
    case types.LOGIN:
      return { ...state, ...{user: {name: action.login}}};
    default:
      return state;
  }
}
