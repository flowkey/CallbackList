CallbackList = function() {
  this._callbacks = []; // all the functions are stored inside an array
}

CallbackList.prototype.add = function(fct) {
  this._callbacks.push(fct);
};

CallbackList.prototype.run = function(param, context) {
  var cbs = this._callbacks;
  for (var i = 0, N = (cbs && cbs.length); i < N; i++)
    cbs[i].call(context, param);
};

CallbackList.prototype.clear = function() {
  this._callbacks = [];
};
