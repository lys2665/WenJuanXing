import { configureStore } from "@reduxjs/toolkit";

import userReducer, { UserStateType } from "./userReducer";
import componentsReducer, { ComponentsStateType } from "./ComponentsReducer";

export type StateType = {
  user: UserStateType;
  components: ComponentsStateType;
};

export default configureStore({
  reducer: {
    user: userReducer,

    components: componentsReducer,
    // 分模块， 扩展：问卷信息
  },
});
