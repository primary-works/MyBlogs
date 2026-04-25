// 实时数据点的结构
export interface DataPoint {
  cpu: number;       // CPU 使用率 0-100
  timestamp: number; // Unix 毫秒时间戳
}

// 统计卡片的属性
export interface StatCardProps {
  title: string; // 标题
  value: number; // 数值
  unit: string;  // 单位
  color: string; // 颜色
}

// 历史图表的属性
export interface HistoryChartProps {
  data: DataPoint[];
}