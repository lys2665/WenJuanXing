import { Typography } from "antd";
import React, { FC } from "react";
import {
  componentConfGroup,
  ComponentConfType,
} from "../../../components/QuestionComponents";
import styles from "./componentLib.module.scss";
import { useDispatch } from "react-redux";
import { addComponent } from "../../../store/ComponentsReducer";
import { nanoid } from "@reduxjs/toolkit";

const { Title } = Typography;

const Lib: FC = () => {
  const dispatch = useDispatch();

  function genComponent(c: ComponentConfType) {
    const { title, type, Component, defaultProps } = c;

    function handleClick() {
      dispatch(
        addComponent({ fe_id: nanoid(), title, type, props: defaultProps })
      );
    }

    return (
      <div key={type} className={styles.wrapper} onClick={handleClick}>
        <div className={styles.component}>
          <Component />
        </div>
      </div>
    );
  }

  return (
    <div>
      {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group;
        return (
          <div key={groupId}>
            <Title
              level={3}
              style={{ fontSize: "16px", marginTop: index > 0 ? "20px" : "0" }}
            >
              {groupName}
            </Title>
            <div>{components.map((c) => genComponent(c))}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Lib;
