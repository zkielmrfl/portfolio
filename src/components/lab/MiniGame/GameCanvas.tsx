import { cx } from "@/lib/utils";

export function GameCanvas({ running, jumping, onJump }: { running: boolean; jumping: boolean; onJump: () => void }) {
  return (
    <button className="game-canvas cat-canvas" type="button" aria-label="Make the cat jump" onClick={onJump}>
      <div className={running ? "moon active" : "moon"} aria-hidden />
      <div className="cloud c1" aria-hidden />
      <div className="cloud c2" aria-hidden />
      <div className={cx("cat-runner", jumping && "jumping")} aria-hidden>
        <span className="cat-tail" />
        <span className="cat-body" />
        <span className="cat-head">
          <i className="ear left" />
          <i className="ear right" />
          <i className="eye left" />
          <i className="eye right" />
        </span>
        <span className="paw p1" />
        <span className="paw p2" />
      </div>
      <span className={running ? "fish-obstacle active" : "fish-obstacle"} aria-hidden />
      <span className="ground-line" aria-hidden />
      <span className="tap-label" aria-hidden>{running ? "CLICK / TAP TO JUMP" : "START GAME TO ENABLE JUMP"}</span>
    </button>
  );
}
