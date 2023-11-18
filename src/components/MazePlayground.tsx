import config from "../config";
import MazeGrid from "./MazeGrid";

const MazePlayground = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <header style={{ color: config.theme.headerColor }}>
        <h1>Maze Rotate</h1>
      </header>
      <MazeGrid />
      <footer style={{ color: config.theme.footerColor, padding: 20 }}>
        &copy; 2023 Yuchen Wang | MIT LICENSED
      </footer>
    </div>
  );
};

export default MazePlayground;
