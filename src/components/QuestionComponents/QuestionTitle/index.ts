/**
 * @description 问卷 输入框
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionTitleDefaultProps } from "./interface";

export * from "./interface";

// 配置 config
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "标题",
  type: 'questionTitle',
  Component,
  defaultProps: QuestionTitleDefaultProps
}