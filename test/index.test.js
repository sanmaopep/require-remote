var runRemoteCode = require("../runRemoteCode");
var requireRemote = require("../index");

test("#runRemoteCode()", () => {
  const input = {
    $module: `module.exports = function(){ return 'Hello' + ' ' + 'World'; }`
  };

  const fn = runRemoteCode(input.$module);
  expect(fn()).toBe("Hello World");
});

test("#requireRemoteJs", async () => {
  const input = {
    $remoteModule:
      "https://gist.githubusercontent.com/sanmaopep/ea4be9b524fa9d9e9644a55c593ba7bd/raw/a05e259eac18deabd34387e886707471eb62bab3/helloWorld.js"
  };

  const exportContent = await requireRemote(input.$remoteModule);
  expect(exportContent).toBe("Hello World");
});

test("#requireRemoteJson", async () => {
  const input = {
    $ref:
      "https://raw.githubusercontent.com/meraki/openapi/master/openapi/spec2.json"
  };

  const { swagger } = await requireRemote(input.$ref);
  expect(swagger).toBe("2.0");
});
