const rp = require("request-promise");
const rmc = require("./runRemoteCode");

async function requireRemote(url) {
  const [_, suffix] = /\.([^.]*)$/.exec(url);

  const content = await rp(url);

  switch (suffix) {
    case "json":
      return JSON.parse(content);
    case "js":
    default:
      return rmc(content);
  }
}

module.exports = requireRemote;
