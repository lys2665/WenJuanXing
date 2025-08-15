/**
 * @description 问卷 多行输入
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionTextareaDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

// 配置 config
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "多行输入",
  type: "questionTextarea",
  Component,
  PropComponent,
  defaultProps: QuestionTextareaDefaultProps,
};
