import React, { useState, useEffect, useCallback } from 'react';
import StatCard from './StatCard';
import HistoryChart from './HistoryChart';
import type { DataPoint } from '../types/dashboard';

// 模拟生成新数据（实际业务中替换为 WebSocket）
const generateMockData = (prevCpu: number): DataPoint => {
  let newCpu = prevCpu + (Math.random() - 0.5) * 10;
  newCpu = Math.min(100, Math.max(0, newCpu));
  return {
    cpu: parseFloat(newCpu.toFixed(1)),
    timestamp: Date.now(),
  };
};

const RealTimeDashboard: React.FC = () => {
  const [currentCpu, setCurrentCpu] = useState<number>(45.2);
  const [history, setHistory] = useState<DataPoint[]>([]);

  const updateDashboard = useCallback((newCpuValue: number, newTimestamp: number) => {
    setCurrentCpu(newCpuValue);
    setHistory((prevHistory) => {
      const newPoint: DataPoint = { cpu: newCpuValue, timestamp: newTimestamp };
      const updated = [...prevHistory, newPoint];
      return updated.slice(-10); // 保留最近10条
    });
  }, []);

  // 模拟实时数据推送（每秒一条）
  useEffect(() => {
    const interval = setInterval(() => {
      const mock = generateMockData(currentCpu);
      updateDashboard(mock.cpu, mock.timestamp);
    }, 1000);

    return () => clearInterval(interval);
  }, [currentCpu, updateDashboard]);

  // 如果使用真实 WebSocket，代码示例：
  /*
  useEffect(() => {
    const ws = new WebSocket('wss://your-backend/stream');
    ws.onmessage = (event) => {
      const data: DataPoint = JSON.parse(event.data);
      updateDashboard(data.cpu, data.timestamp);
    };
    return () => ws.close();
  }, [updateDashboard]);
  */

  return (
    <div className="dashboard">
      <h1>📊 实时订单监控看板</h1>
      <div className="cards-grid">
        <StatCard title="销售数据" value={currentCpu} unit="" color="#f97316" />
        {/* 可继续添加更多指标 */}
      </div>
      <HistoryChart data={history} />
    </div>
  );
};

export default RealTimeDashboard;