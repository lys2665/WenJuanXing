/**
 * @description 问卷 输入框
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionInputDefaultProps } from "./interface";

export * from "./interface";

// 组建的配置
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "输入框",
  type: "questionInput",
  Component,
  defaultProps: QuestionInputDefaultProps,
};
