import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CaseStudyCardProps {
  title: string;
  challenge: string;
  approach: string;
  impact: string;
  tags: string[];
  delay?: number;
}

export const CaseStudyCard = ({ title, challenge, approach, impact, tags, delay = 0 }: CaseStudyCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">{title}</h3>
      
      <div className="space-y-4">
        <div>
          <p className="text-sm font-semibold text-accent mb-1">Challenge</p>
          <p className="text-muted-foreground">{challenge}</p>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div>
                <p className="text-sm font-semibold text-accent mb-1">Approach</p>
                <p className="text-muted-foreground">{approach}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-metric mb-1">Impact</p>
                <p className="text-muted-foreground font-medium">{impact}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full mt-4 text-accent hover:text-accent hover:bg-accent/10"
        >
          {isExpanded ? "Show Less" : "Read More"}
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
        </Button>
      </div>
    </motion.div>
  );
};
