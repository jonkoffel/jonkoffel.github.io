import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  value: string;
  label: string;
  icon?: LucideIcon;
  variant?: "default" | "highlight";
  delay?: number;
}

export const MetricCard = ({ value, label, icon: Icon, variant = "default", delay = 0 }: MetricCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`metric-card ${
        variant === "highlight" 
          ? "bg-metric text-metric-foreground border-metric shadow-[var(--shadow-metric)]" 
          : "bg-card"
      }`}
    >
      {Icon && (
        <Icon className={`w-8 h-8 mb-3 ${variant === "highlight" ? "text-metric-foreground" : "text-accent"}`} />
      )}
      <div className={`text-3xl md:text-4xl font-bold ${variant === "highlight" ? "text-metric-foreground" : "text-foreground"}`}>{value}</div>
      <div className={`text-sm md:text-base ${variant === "highlight" ? "text-metric-foreground/90" : "text-muted-foreground"}`}>
        {label}
      </div>
    </motion.div>
  );
};
