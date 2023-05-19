import { APIClient } from "./api_helper";
import * as url from "./url_helper";

const api = new APIClient();

// Login Method
export const postJwtLogin = (data, headers) => api.create(url.POST_LOGIN, data, headers);

export const getDashboard = () => api.get(url.GET_DASHBOARD);

export const getAllUsersRequests = () => api.get(url.GET_USERS_REQUESTS);
export const getAllUsersActive = () => api.get(url.GET_USERS_ACTIVE);
export const getTop10 = () => api.get(url.GET_TOP_10);
export const approveUser = (data, headers) => api.create(url.APPROVE_USER, data, headers);
export const rejectUser = (id) => api.delete(`${url.REJECT_USER}/${id}`, {});
export const getUserPayments = () => api.get(url.GET_USER_PAYMENTS);

export const getAllJobs = () => api.get(url.GET_ALL_JOBS);
export const getAllCompletedJobs = () => api.get(url.GET_ALL_COMPLETED_JOBS);
export const addJobPost = (data, headers) => api.create(url.ADD_JOB, data, headers);
export const saveAmount = (data, headers) => api.create(url.SAVE_JOB_AMOUNT, data, headers);

export const getNotice = () => api.get(url.GET_NOTICE);
export const updateNotice = (data, headers) => api.create(url.UPDATE_NOTICE, data, headers);

export const uploadFile = (data, headers) => api.create(url.UPLOAD_FILE, data, headers);

export const getWallet = (id) => api.get(`${url.GET_WALLET}?userId=${id}&page=1&size=10`);
