import { configureStore } from "@reduxjs/toolkit";

import userReducer, { UserStateType } from "./userReducer";
import componentsReducer, { ComponentsStateType } from "./ComponentsReducer";
import pageInfoReducer, { PageInfoType } from "./pageInfoReducer";
import undoable, { excludeAction, StateWithHistory } from "redux-undo";

export type StateType = {
  user: UserStateType;
  // components: ComponentsStateType;
  components: StateWithHistory<ComponentsStateType> //增加了undo
  pageInfo: PageInfoType;
};

export default configureStore({
  reducer: {
    user: userReducer,
    // 没有 undo
    // components: componentsReducer,

    // 增加 undo
    components: undoable(componentsReducer, {
      limit: 20,
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ])
    }),
    pageInfo: pageInfoReducer,
  },
});
