import './SlidebarRight.css';

export default function SidebarRight({ project, onClose }) {
  if (!project) {
    return (
      <aside className="sidebar-right empty">
        <p>Clique sur une carte pour voir les détails du projet</p>
      </aside>
    );
  }

  return (
    <aside className="sidebar-right">
      <h2>{project.title}</h2>
      <div className="project-rating">{project.overall}</div>

      <div className="section">
        <h3>Technologies</h3>
        <div className="tech-list">
          {project.techs.map(tech => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <p className="description">{project.desc}</p>

      <div className="buttons">
        <button>Démo live</button>
        <button>Code GitHub</button>
      </div>
    </aside>
  );
}