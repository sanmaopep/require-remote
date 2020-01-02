var _isEmpty = function(o) {
  return (
    o == null ||
    (o instanceof Array && o.length == 0) ||
    (typeof o == "object" && Object.keys(o).length == 0)
  );
};

function runRemoteCode(remoteCode) {
  let exports = {};
  let module = { exports: {} };

  try {
    eval(remoteCode);
  } catch (ex) {
    throw new Error("Exception evaluating remote code '" + remoteCode + "'");
  }

  if (!_isEmpty(exports) && _isEmpty(module.exports)) {
    module.exports = exports;
  }

  return module.exports;
}

module.exports = runRemoteCode;
