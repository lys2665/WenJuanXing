import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/ComponentsReducer";

function useGetComponentInfo() {
  const components = useSelector<StateType>(
    (state) => state.components.present
  ) as ComponentsStateType;

  const { componentList = [], selectedId, copiedComponent } = components;

  const selectedComponent = componentList.find((c) => c.fe_id === selectedId) || null;

  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent
  };
}

export default useGetComponentInfo;
