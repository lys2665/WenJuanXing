/**
 * @description 问卷 段落
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionParagraphDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

// 配置 config
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "段落",
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps
}