import React, { FC, useMemo } from "react";
import { QuestionRadioStatPropsType } from "./interface";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { STAT_COLORS } from "../../../constant";

function format(n: number) {
  return (n * 100).toFixed(2);
}

const StatComponent: FC<QuestionRadioStatPropsType> = (
  props: QuestionRadioStatPropsType
) => {
  const { stat = [] } = props;
  const sum = useMemo(() => {
    let s = 0;
    stat.forEach((i) => (s += i.count));
    return s;
  }, [stat]);
  return (
    <div style={{ width: "290px", height: "400px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="count"
            data={stat}
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
            label={(i) => `${i.name}: ${format(i.count / sum)}%`}
          >
            {stat.map((i, index) => {
              return <Cell key={index} fill={STAT_COLORS[index]} />;
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatComponent;
