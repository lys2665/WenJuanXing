import React, { FC } from "react";
import { OptionType, QuestionCheckboxPropsType } from "./interface";
import { Form, Input, Checkbox, Space, Button } from "antd";
import { useForm } from "antd/es/form/Form";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { nanoid } from "@reduxjs/toolkit";

const PropComponent: FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType
) => {
  const { title, isVertical, list = [], onChange, disabled } = props;
  const [form] = useForm();

  function handleValuesChange() {
    if (onChange == null) return;
    const newValues = form.getFieldsValue() as QuestionCheckboxPropsType;
    const { list = [] } = newValues;
    list.forEach((opt) => {
      if (opt.value) return;
      opt.value = nanoid(5);
    });

    onChange(newValues);
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ title, isVertical, list }}
      onValuesChange={handleValuesChange}
      disabled={disabled}
    >
      <Form.Item
        label="标题"
        name="title"
        rules={[{ required: true, message: "请输入标题" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="选项">
        <Form.List name="list">
          {(fields, { add, remove }) => {
            return (
              <>
                {/* 遍历所有选项（可删除） */}
                {fields.map(({ key, name }, index) => {
                  return (
                    <Space key={key} align="baseline">
                      {/* 当前选项是否选中 */}
                      <Form.Item name={[name, 'checked']} valuePropName="checked">
                        <Checkbox />
                      </Form.Item>
                      {/* 当前选项 输入框 */}
                      <Form.Item
                        name={[name, "text"]}
                        rules={[
                          { required: true, message: "请输入选项文字" },
                          {
                            validator: (_, text) => {
                              const { list = [] } = form.getFieldsValue();

                              let num = 0;
                              list.forEach((opt: OptionType) => {
                                if (opt.text === text) num++;
                              });
                              if (num === 1) return Promise.resolve();
                              return Promise.reject(
                                new Error("和其他选项重复了")
                              );
                            },
                          },
                        ]}
                      >
                        <Input placeholder="请输入选项文字"></Input>
                      </Form.Item>

                      {index > 0 && (
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      )}
                    </Space>
                  );
                })}
                <Form.Item>
                  <Button
                    type="link"
                    block
                    onClick={() => add({ text: "", value: "", checked: false })}
                    icon={<PlusOutlined />}
                  >
                    添加选项
                  </Button>
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      </Form.Item>

      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>竖向排列</Checkbox>
      </Form.Item>
    </Form>
  );
};

export default PropComponent;
