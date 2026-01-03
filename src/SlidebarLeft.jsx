import './SlidebarLeft.css';

export default function SidebarLeft() {
  return (
    <aside className="sidebar-left">
      <div className="player-info">
        <div className="avatar">IMG</div>
        <div>
          <h1>Name</h1>
          <p>React Football Club (RFC)</p>
        </div>
      </div>

      <div className="rating">93</div>
      <p>Note globale</p>
    </aside>
  );
}