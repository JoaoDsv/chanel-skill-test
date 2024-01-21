import ArrowRight from "./arrow-right";
import ArrowLeft from "./arrow-left";

import "./music-menu.css";

function MusicMenu({ tracks }) {
  return (
    <div className="music-menu-wrapper">
      <ul className="layer first-layer">
        <li className="menu-item">Music menu</li>
      </ul>
      <ul className="layer second-layer">
        <li className="menu-item">
          <ArrowLeft />
        </li>
      </ul>
      <ul className="layer third-layer">
        <li className="menu-item">
          <ArrowLeft />
        </li>
      </ul>
    </div>
  );
}

export default MusicMenu;
