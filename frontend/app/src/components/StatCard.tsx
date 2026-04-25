import React from "react";
import { motion } from "framer-motion";
import type {StatCardProps} from "../types/dashboard";

const StatCard: React.FC<StatCardProps> = React.memo(({ title, value, unit, color }) => {
  return (
    <div className="stat-card" style={{ borderLeftColor: color }}>
      <div className="stat-title">{title}</div>
      <div className="stat-value">
        <motion.span
          key={value}
          initial={{ opacity: 0.5, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {value}
        </motion.span>
        <span className="stat-unit">{unit}</span>
      </div>
    </div>
  );
});

export default StatCard;