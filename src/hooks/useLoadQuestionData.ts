import { useRequest } from "ahooks";
import { useParams } from "react-router-dom";
import { getQuestionService } from "../services/question";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetComponents } from "../store/ComponentsReducer";

function useLoadQuestionData() {
  const { id = "" } = useParams();
  const dispatch = useDispatch();

  // ajax 加载
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error("没有问卷 id");
      const data = await getQuestionService(id);
      return data;
    },
    {
      manual: true,
    }
  );

  // 根据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return;
    const { title = "", componentList = [] } = data;

    let selectedId = "";
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id;
    }
    dispatch(resetComponents({ componentList, selectedId }));
  }, [data]);

  // 判断 id 变化， 执行 ajax 加载问卷数据
  useEffect(() => {
    run(id);
  }, [id]);

  return { loading, error };
}

export default useLoadQuestionData;
