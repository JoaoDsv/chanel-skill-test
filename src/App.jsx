import { STATIC_DATA } from "./constants/static-data";

import MusicMenu from "./components/music-menu";

function App() {
  return (
    <>
      <h1 className="title-1">Music menu</h1>
      <MusicMenu tracks={STATIC_DATA} />
    </>
  );
}

export default App;
