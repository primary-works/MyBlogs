import React, { useMemo } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import type { HistoryChartProps, DataPoint } from '../types/dashboard';

// 用于 recharts 的格式化数据项
interface ChartDataItem extends DataPoint {
  time: string; // 格式化后的时间字符串
}

const HistoryChart: React.FC<HistoryChartProps> = React.memo(({ data }) => {
  // 格式化时间，用于 X 轴显示
  const formattedData = useMemo<ChartDataItem[]>(() => {
    return data.map((item) => ({
      ...item,
      time: new Date(item.timestamp).toLocaleTimeString([], { minute: '2-digit', second: '2-digit' }),
    }));
  }, [data]);

  return (
    <div className="chart-container">
      <h3>销量</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={formattedData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="cpu"
            stroke="#2f2b80"
            strokeWidth={2}
            dot={{ r: 3 }}
            animationDuration={300}
            isAnimationActive={true}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
});

export default HistoryChart;