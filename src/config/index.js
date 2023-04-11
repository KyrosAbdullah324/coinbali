const DEV_MODE = true;
export const API_BASE =
  DEV_MODE === true
    ? "http://192.168.123.17:8001/api/v1/"
    : "";

export const SOCKET_BASE =
  DEV_MODE === true
    ? "http://192.168.123.17:8001"
    : "";

export const IMG_URL =
  DEV_MODE === true
    ? "http://192.168.123.17:8001/images/"
    : "";
