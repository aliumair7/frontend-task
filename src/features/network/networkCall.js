import { message } from "antd";
import axios from "axios";
const snakeToCamel = (str) => {
  return str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", "")
    );
};
export const camelCaseKeys = (obj) =>
  Object.keys(obj).reduce(
    (ccObj, field) => ({
      ...ccObj,
      [snakeToCamel(field)]: obj[field],
    }),
    {}
  );
export default class NetworkCall {
  static async fetch(request) {
    try {
      const response = await NetworkCall.axios({
        method: request.method,
        url: request.url,
        data: request.body,
        headers: request.headers,
        responseType: request.responseType,
      });

      return response.data;
    } catch (err) {
      let error = err.response;
      console.log("NetworkCall Error: ", error);
      if (error === undefined) {
        message.error("Cannot connect to server");
        return Promise.reject({
          error: error,
        });
      } else {
        message.error(error.data.message);
      }

      if ("errors" in error.data)
        error.data.errors = camelCaseKeys(error.data.errors);
      return Promise.reject({
        error: error,
        message: error.data.message,
        statusCode: error.status,
      });
    }
  }
}
NetworkCall.axios = axios.create({
  baseURL: process.env.REACT_APP_BASE_API_URL,
  timeout: 1000,
  headers: {},
});
