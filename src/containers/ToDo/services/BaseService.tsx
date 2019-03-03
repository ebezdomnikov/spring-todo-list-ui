import axios, {AxiosPromise} from "axios";

class BaseService<T> {

    constructor() {
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    }

    _get = (path: string): AxiosPromise<T> => {
        return axios.get(path);
    };

    _patch = (path: string, data: Object): AxiosPromise<T> => {
        return axios.patch(path, data);
    };

    _post = (path: string, data: Object): AxiosPromise<T> => {
        return axios.post(path, data);
    };
}

export default BaseService;
