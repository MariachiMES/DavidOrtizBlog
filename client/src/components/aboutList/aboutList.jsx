import "./aboutList.css";

export default function AboutList({
  id,
  title,
  subtitle,
  icon,
  active,
  setSelected,
}) {
  return (
    <article
      className={active ? "about__card active" : "about__card"}
      onClick={() => setSelected(id)}
    >
      <div className="about__icon">{icon}</div>
      <h5>{title}</h5>
      <small>{subtitle}</small>
    </article>
  );
}
