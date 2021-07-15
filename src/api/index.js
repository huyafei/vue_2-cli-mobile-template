import axios from "../utils/axios";

export function getAppToken(authCode) {
  return axios({
    url: `/lx/login`,
    method: "post",
    data: { code: authCode },
  });
}
