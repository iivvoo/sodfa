function loadFromArrayBuffer(odfcanvas, data) {
  // overload the global read function with one that only reads
  // the data from this canvas
  var globalreadfunction = runtime.read,
  globalfilesizefunction = runtime.getFileSize,
  overridePath = "arraybuffer";
  runtime.read = function (path, offset, length, callback) {
    if (path !== overridePath) {
      globalreadfunction.apply(runtime,
                               [path, offset, length, callback]);
    } else {
      console.log(data);
      console.log(data.slice);
      callback(null, data.subarray(offset, offset + length));
    }
  };
  runtime.getFileSize = function (path, callback) {
    if (path !== overridePath) {
      globalfilesizefunction.apply(runtime, [path, callback]);
    } else {
      callback(data.length);
    }
  };
  odfcanvas.load(overridePath);
}
