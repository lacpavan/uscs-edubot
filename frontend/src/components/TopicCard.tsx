import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import type { ComponentType, CSSProperties } from "react";
import type { Topic } from "../data/types";

interface TopicCardProps {
  topic: Topic;
  index: number;
  isActive: boolean;
  onSelect: (topicId: string) => void;
}

export function TopicCard({ topic, index, isActive, onSelect }: TopicCardProps) {
  const Icon =
    (Icons[topic.icon as keyof typeof Icons] as ComponentType<{
      size?: number;
      strokeWidth?: number;
    }>) || Icons.MessagesSquare;

  return (
    <motion.button
      layout="position"
      className={`topic-card topicCard topic-${topic.id} ${isActive ? "is-active selected" : ""}`}
      onClick={() => onSelect(topic.id)}
      style={{ "--topic-color": topic.color } as CSSProperties}
      type="button"
      initial={{ opacity: 0, y: 18, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: 8 }}
      transition={{ duration: 0.28, ease: "easeOut", delay: index * 0.015 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={isActive}
      aria-label={`Selecionar tema ${topic.title}`}
    >
      <span className="topic-icon iconBubble" aria-hidden="true">
        <Icon strokeWidth={2.2} />
      </span>

      <span className="topic-copy cardText">
        <strong className="topic-title">{topic.title}</strong>
        <small className="topic-description">{topic.description}</small>
      </span>
    </motion.button>
  );
}
