import axios from "../utils/axios";

export function getAppToken(authCode) {
  return axios({
    url: `/test/login`,
    method: "post",
    data: { code: authCode },
  });
}
