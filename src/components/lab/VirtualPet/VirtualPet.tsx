"use client";

import { Heart, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

const reactions = [
  "Oreo leans into your hand.",
  "Oreo purrs and blinks slowly.",
  "Oreo makes tiny happy biscuits.",
  "Oreo flops over for more attention.",
  "Oreo chirps at the dashboard."
];

export function VirtualPet() {
  const [mood, setMood] = useState(54);
  const [pets, setPets] = useLocalStorage("oreo-pet-count", 0);
  const [reactionIndex, setReactionIndex] = useState(0);
  const [reacting, setReacting] = useState(false);

  const moodLabel = useMemo(() => {
    if (mood > 82) return "ECSTATIC";
    if (mood > 64) return "PURRING";
    if (mood > 38) return "CURIOUS";
    return "SLEEPY";
  }, [mood]);

  useEffect(() => {
    const timer = window.setInterval(() => setMood((current) => Math.max(30, current - 1)), 3600);
    return () => window.clearInterval(timer);
  }, []);

  function petOreo() {
    setMood((current) => Math.min(100, current + 12));
    setPets((current) => current + 1);
    setReactionIndex((current) => (current + 1) % reactions.length);
    setReacting(true);
    window.setTimeout(() => setReacting(false), 760);
  }

  return (
    <article className="panel lab-panel virtual-pet-panel">
      <div className="pet-header">
        <div>
          <p className="eyebrow">VIRTUAL PET: COMPANION MODE</p>
          <h3>Oreo</h3>
        </div>
        <span className="pet-mood">{moodLabel}</span>
      </div>
      <button className="pet-stage" type="button" onClick={petOreo} aria-label="Pet Oreo">
        <span className={reacting ? "oreo-cat reacting" : "oreo-cat"}>
          <i className="oreo-ear left" />
          <i className="oreo-ear right" />
          <i className="oreo-face">
            <b className="oreo-eye left" />
            <b className="oreo-eye right" />
            <b className="oreo-nose" />
          </i>
          <i className="oreo-body" />
          <i className="oreo-tail" />
          <i className="oreo-paw left" />
          <i className="oreo-paw right" />
        </span>
        <span className="pet-spark s1"><Sparkles size={18} /></span>
        <span className="pet-spark s2"><Heart size={16} /></span>
        <span className="tap-label">TAP THE PANEL OR BUTTON TO PET</span>
      </button>
      <div className="pet-status">
        <p>{reactions[reactionIndex]}</p>
        <div>
          <span>MOOD</span>
          <meter min={0} max={100} value={mood} aria-label="Oreo mood" />
        </div>
        <div>
          <span>PETS</span>
          <strong>{pets}</strong>
        </div>
      </div>
      <button className="btn primary pet-button" type="button" onClick={petOreo}>
        <Heart size={16} aria-hidden />
        Pet Oreo
      </button>
    </article>
  );
}
