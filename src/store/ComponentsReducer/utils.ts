import { ComponentInfoType, ComponentsStateType } from ".";

export function getNextSelectedId(
  fe_id: string,
  componentList: ComponentInfoType[]
) {
    const visibleComponentList = componentList.filter(c => !c.isHidden)
  const index = visibleComponentList.findIndex((c) => fe_id === c.fe_id);
  if (index < 0) return "";

  // 重新计算selectedId
  let newSelectedId = "";
  const length = visibleComponentList.length;
  if (length <= 1) {
    newSelectedId = "";
  } else {
    if (index + 1 === length) {
      newSelectedId = visibleComponentList[index - 1].fe_id;
    } else {
      newSelectedId = visibleComponentList[index + 1].fe_id;
    }
  }

  return newSelectedId;
}

/**
 * 插入新组建
 * @param state
 * @param newComponent 新组件
 */

export function insertNewComponent(state: ComponentsStateType, newComponent: ComponentInfoType) {
  const { selectedId, componentList } = state;
      const index = componentList.findIndex((c) => c.fe_id === selectedId);

      if (index < 0) {
        // 未选中任何组件
        state.componentList.push(newComponent);
      } else {
        state.componentList.splice(index + 1, 0, newComponent);
      }
      state.selectedId = newComponent.fe_id;
}