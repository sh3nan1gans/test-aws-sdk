const __extends = (child, parent) => {
  function fn() {
    this.constructor = child; // this can be omitted
  }
  fn.prototype = parent.prototype;
  child.prototype = new fn();
};

export default __extends;
