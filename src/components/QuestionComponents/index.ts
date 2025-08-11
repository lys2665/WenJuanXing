import { FC } from "react";
import QuestionInputConf, { QuestionInputPropsType } from "./QuestionInput";
import QuestionTitleConf, { QuestionTitlePropsType } from "./QuestionTitle";

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType;

// 组建的配置
export type ComponentConfType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

// 全部的组建配置的列表
const componentList: ComponentConfType[] = [QuestionInputConf, QuestionTitleConf];

export function getComponentConfByType(type: string) {
  return componentList.find((c) => c.type === type);
}
