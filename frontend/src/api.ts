import type { Topic } from "./data/types";
import { topics } from "./data/topics";

function findStaticTopic(topicId: string) {
  const topic = topics.find((item) => item.id === topicId);

  if (!topic) {
    throw new Error("Tema não encontrado.");
  }

  return topic;
}

export function getTopics() {
  return Promise.resolve(topics);
}

export function getTopic(topicId: string) {
  return Promise.resolve(findStaticTopic(topicId));
}
