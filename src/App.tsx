import MazePlayground from "./components/MazePlayground";
import config from "./config";

function App() {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: config.theme.pageBackgroundColor,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <MazePlayground />
    </div>
  );
}

export default App;
