import axios from 'axios';

import { API } from './api';

axios.defaults.headers['x-icode'] = API.requestToken;
axios.defaults.headers['Content-Type'] = 'application/json';
