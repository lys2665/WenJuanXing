/**
 * @description 问卷 info
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionInfoDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export * from "./interface";

// 配置 config
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "问卷信息",
  type: 'questionInfo',
  Component,
  PropComponent,
  defaultProps: QuestionInfoDefaultProps
}