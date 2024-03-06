import axios from "axios";
const baseUrl = process.env.REACT_APP_baseUrl;

const getHeader = () => {
    const authToken = localStorage.getItem("authToken");

    const headers = {
        Authorization: "Bearer " + authToken, //the token is a variable which holds the token
    };

    return headers;
};

const postRequest = async (path, data) => {
    let res = {
        success: false,
        msg: "Something went wrong, please try again later",
    };
    try {
        const response = await axios({
            method: "POST",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.msg = err.response?.data.msg || err.msg;
        return res;
    }
    return res;
};

const deleteRequest = async (path, data) => {
    let res = {
        success: false,
        msg: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "DELETE",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.msg = err.response?.data.msg || err.msg;
        return res;
    }
    return res;
};

const putRequest = async (path, data) => {
    let res = {
        success: false,
        msg: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "PUT",
            url: `${baseUrl}${path}`,
            data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.msg = err.response?.data.msg || err.msg;
        return res;
    }
    return res;
};

const getRequest = async (path) => {
    let res = {
        success: false,
        msg: "Something went wrong, please try again later",
    };

    try {
        const response = await axios({
            method: "GET",
            url: `${baseUrl}${path}`,
            // params: data,
            headers: getHeader(),
        });
        res = response.data;
    } catch (err) {
        res.msg = err.response?.data.msg || err.msg;
        return res;
    }
    return res;
};

export const login = async (data) => {
    const path = "/vendor/user/login";
    return await postRequest(path, data);
};

export const createEvent = async (data) => {
    const path = "/vendor/event";
    return await postRequest(path, data);
};

export const getEvents = async (page) => {
    const path = `/vendor/event?page=${page}`;
    return await getRequest(path);
};