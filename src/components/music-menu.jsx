import "./music-menu.css";

function MusicMenu({ tracks }) {
  return (
    <div className="music-menu-wrapper">
      <ul className="layer first-layer">
        <li className="menu-item">Music menu</li>
      </ul>
      <ul className="layer second-layer"></ul>
      <ul className="layer third-layer"></ul>
    </div>
  );
}

export default MusicMenu;
