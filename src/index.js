const os = require("os");
const axios = require("axios").default;
// server runs default port: 2525

function tele(serveraddr) {
  axios({
    method: "post",
    url: `${serveraddr}`,
    data: {
      loadavg: os.loadavg(),
      totalmem: os.totalmem(),
      os: os.type(),
      arch: os.arch(),
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      return new Error(
        `Lima Telemetry Project Error! Post request to provided Lima server has failed! Provided error:${err}`
      );
    });
}
module.exports = tele;
