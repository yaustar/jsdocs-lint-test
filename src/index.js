/**
 * @interface SmoothedValueType
 */

/**
 * @function
 * @name SmoothedValueType#clone
 * @returns {SmoothedValueType} Returns a clone
 */

/**
 * @function
 * @name SmoothedValueType#copy
 * @param {SmoothedValueType} value
 * @returns {SmoothedValueType} Returns itself
 */

/**
 * @function
 * @name SmoothedValueType#lerp
 * @param {SmoothedValueType} a Start value
 * @param {SmoothedValueType} b End value
 * @param {number} t Lerp value
 * @returns {SmoothedValueType} Returns a clone
 */

// control a smoothed value
class SmoothedValue {
  /**
   * 
   * @param {SmoothedValueType} value 
   * @param {Number} transitionTime 
   */
  constructor(value, transitionTime = 0.25) {
    this.value = value.clone();
    this.start = value.clone();
    this.target = value.clone();
    this.transitionTime = transitionTime;
    this.timer = 0;
  }
}

/**
 * @class
 * @implements {SmoothedValueType}
 */
class Test1 {
  clone() {
    return this;
  }

  copy(value) {
    console.log(value);
    return this;
  }

  lerp() {
    return this;
  }
}

/**
 * @class
 * @implements {SmoothedValueType}
 */
class Test2 {
  clone() {
    return this;
  }

  lerp() {
    return this;
  }
}

const b = new SmoothedValue(new Test1());
console.log(b);

const c = new SmoothedValue(new Test2());
console.log(c);

