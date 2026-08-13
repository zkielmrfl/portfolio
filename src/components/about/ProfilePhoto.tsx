"use client";

import { useEffect, useState } from "react";
import { personal } from "@/data/personal";

type ProfilePhotoProps = {
  variant?: "hero" | "profile";
};

const initials = personal.name
  .split(" ")
  .filter(Boolean)
  .map((part) => part[0])
  .join("")
  .slice(0, 2)
  .toUpperCase();

export function ProfilePhoto({ variant = "profile" }: ProfilePhotoProps) {
  const [missing, setMissing] = useState(false);
  const photoSrc = variant === "hero" ? `${personal.heroPhoto}?v=${personal.heroPhotoVersion}` : personal.profilePhoto;

  useEffect(() => {
    setMissing(false);
  }, [photoSrc]);

  return (
    <div className={`profile-photo ${variant}`} aria-label={`${personal.name} photo`}>
      {!missing ? (
        <img
          src={photoSrc}
          alt={`${personal.name} portrait`}
          onError={() => setMissing(true)}
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
