import { personal } from "@/data/personal";

export function ProfilePanel() {
  return (
    <aside className="profile-panel panel">
      <div className="portrait-placeholder" aria-label="Portrait placeholder">PROFILE</div>
      <dl>
        <div><dt>LOCATION</dt><dd>{personal.location}</dd></div>
        <div><dt>ROLE</dt><dd>{personal.role}</dd></div>
        <div><dt>FOCUS</dt><dd>{personal.focus}</dd></div>
        <div><dt>INTERESTS</dt><dd>{personal.interests.join(" / ")}</dd></div>
        <div><dt>CURRENTLY</dt><dd>{personal.currentlyLearning}</dd></div>
      </dl>
    </aside>
  );
}
