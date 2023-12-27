import { message } from "antd";
import axios from "axios";

const baseURL = "/";
// const baseURL = import.meta.env.VITE_HOME_URL;

const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json;charse=UTF-8",
        WithCredentials: true,
    },
});

instance.interceptors.request.use(
    async function (config) {
        return config;
    },
    function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        // 对响应数据做点什么
        return response.data;
    },
    function (error) {
        if (error.response.status === 401) {
            message.warning("无权限访问此页面");
        } else if (
            error.code === "ECONNABORTED" ||
            error.message === "Network Error" ||
            error.message.includes("timeout")
        ) {
            message.warning("请求超时");
        } else {
            if (error.response?.data?.message) {
                message.warning(error.response?.data?.message);
            } else {
                message.warning("请求异常，请稍后重试");
            }
        }
        if (error.response.data) {
            return error.response.data;
        }
    },
);

export const requestPost = async (
    api: string,
    params?: object | string,
): Promise<never> => {
    return new Promise((resolve, reject) => {
        instance
            .post(api, params)
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const requestGet = async (
    api: string,
    params?: object,
): Promise<never> => {
    return new Promise((resolve, reject) => {
        instance
            .get(api, {
                params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const requestPut = async (
    api: string,
    params?: object | string,
): Promise<never> => {
    return new Promise((resolve, reject) => {
        instance
            .put(api, params)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const requestDelete = async (
    api: string,
    params?: object,
): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        instance
            .delete(api, {
                params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};

export const requestFormDataPost = async (
    api: string,
    params: Record<string, never>,
): Promise<unknown> => {
    const paramFormData = new FormData();
    for (const key of Object.keys(params)) {
        // eslint-disable-next-line no-undefined
        if (params[key] !== null && params[key] !== undefined) {
            paramFormData.append(key, params[key]);
        }
    }
    return new Promise((resolve, reject) => {
        instance
            .post(api, paramFormData, {
                headers: {"Content-type": "multipart/form-data"},
            })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export const requestFormDataPut = async (
    api: string,
    params: Record<string, never>,
): Promise<unknown> => {
    const paramFormData = new FormData();
    for (const key of Object.keys(params)) {
        // eslint-disable-next-line no-undefined
        if (params[key] !== null && params[key] !== undefined) {
            paramFormData.append(key, params[key]);
        }
    }
    return new Promise((resolve, reject) => {
        instance
            .put(api, paramFormData, {
                headers: {"Content-type": "multipart/form-data"},
            })
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
};