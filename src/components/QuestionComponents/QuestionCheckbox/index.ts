/**
 * @Description checkbox组件
 * @Author      liuyushuang
 * */

import Component from "./Component";
import PropComponent from "./PropComponent";
import StatComponent from "./StatComponent";
import { QuestionCheckboxDefaultProps } from "./interface";

export * from "./interface";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "多选",
  type: "questionCheckbox", // 要和后端统一好
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionCheckboxDefaultProps,
};
