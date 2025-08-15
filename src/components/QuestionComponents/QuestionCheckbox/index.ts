/**
 * @description 问卷checkbox
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionCheckboxDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

// 组建的配置
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "多选",
  type: "questionCheckbox",
  Component, //画布显示的组件
  PropComponent, // 修改属性
  defaultProps: QuestionCheckboxDefaultProps,
};
