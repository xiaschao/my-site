import axios from 'axios';
import { showMessage } from '../utils';

const ins = axios.create();

ins.interceptors.response.use(
  (resp) => {
    if (resp.data.code !== 0) {
      showMessage({
        content: resp.data.msg,
        type: 'error',
      });
      return null;
    }
    return resp.data.data;
  },
  (error) => {
    showMessage({
      content: error,
      type: 'error',
    });
  }
);

export default ins;
