import { getAccessToken } from './localStorage';
import { env_var } from '../config/env';
import axios from 'axios'

export interface AuthPayload {
  username: string;
  password: string;
}

interface ReturnAuthenticate {
    status: boolean,
    data: {}
}

export const authenticate = async (data: AuthPayload): Promise<ReturnAuthenticate> => {
  console.log('AQUIIIIII')
  let rest:ReturnAuthenticate = { status: false , data: "Something went wrong"};
    await axios.get(`https://api-challenge.free.beeceptor.com/auth`).then(function (response) {
      rest = { status: true, data: response.data}
      })
      .catch(function (error) {
        rest = { status: true, data: "Something went wrong"};
      });

    return rest
};

export const isAuthenticated = (): boolean => {
  return getAccessToken() ? true : false;
};