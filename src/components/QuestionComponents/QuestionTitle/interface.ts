
export type QuestionTitlePropsType = {
    text?: string,
    level?: 1 | 2 | 3
    isCenter?: boolean
}


export const QuestionTitleDefaultProps = {
    text: '一行标题',
    level: 1 as 1,
    isCenter: false
}