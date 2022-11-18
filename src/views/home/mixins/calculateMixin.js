/**
 * @name: calculateMixin
 * @description：calculateMixin.js
 * @date: 2022/11/4 13:30
 * @author: yf_hu
 */

import { add, subtract } from "@vensst/js-toolkit";

export default {
  data() {
    return {
      num1: 0,
      num2: 0,
      value: 0,
    };
  },
  methods: {
    plus() {
      this.value = add(this.num1, this.num2);
    },
    minus() {
      this.value = subtract(this.num1, this.num2);
    },
    multiply() {
      this.value = this.$jstk.multiply(this.num1, this.num2);
    },
    divide() {
      this.value = this.$jstk.divide(this.num1, this.num2);
    },
  },
};
