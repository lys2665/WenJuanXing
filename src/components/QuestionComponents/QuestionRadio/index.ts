/**
 * @description 问卷radio
 * @author liuyushuang
 */

import Component from "./Component";
import { QuestionRadioDefaultProps } from "./interface";
import PropComponent from "./PropComponent";
import StatComponent from "./StatComponent";

export * from "./interface";

// 组建的配置
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "单选",
  type: "questionRadio",
  Component, //画布显示的组件
  PropComponent, // 修改属性
  defaultProps: QuestionRadioDefaultProps,
  StatComponent
};
