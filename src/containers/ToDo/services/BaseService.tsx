import axios, {AxiosPromise} from "axios";

const env = process.env;

class BaseService<T> {

    constructor() {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    __makeUrl = (path: string): string => {
        return `${env.REACT_APP_API_BASE_URL}/${path}`;
    };

    _get = (path: string): AxiosPromise<T> => {
        return axios.get(this.__makeUrl(path));
    };

    _patch = (path: string, data: Object): AxiosPromise<T> => {
        return axios.patch(this.__makeUrl(path), data);
    };

    _post = (path: string, data: Object): AxiosPromise<T> => {
        return axios.post(this.__makeUrl(path), data);
    };

    _delete = (path: string): AxiosPromise<T> => {
        return axios.delete(this.__makeUrl(path));
    };
}

export default BaseService;
