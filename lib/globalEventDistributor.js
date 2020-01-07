function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

var GlobalEventDistributor =
/*#__PURE__*/
function () {
  function GlobalEventDistributor() {
    classCallCheck(this, GlobalEventDistributor);

    this.stores = [];
  }

  createClass(GlobalEventDistributor, [{
    key: "registerStore",
    value: function registerStore(store) {
      this.stores.push(store);
    }
  }, {
    key: "dispatch",
    value: function dispatch(event) {
      this.stores.forEach(function (s) {
        return s.dispatch(event);
      });
    }
  }]);

  return GlobalEventDistributor;
}();

export { GlobalEventDistributor };
//# sourceMappingURL=globalEventDistributor.js.map
