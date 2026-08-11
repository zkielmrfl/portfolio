import { gameConfig } from "./gameConfig";

export function nextScore(score: number, running: boolean) {
  return running ? score + Math.max(1, Math.round(gameConfig.obstacleSpeed / 4)) : score;
}
