import config from "../config";
import MazeUnit from "./MazeUnit";

const createUnits = () => {
  const units = [];
  {
    for (let y = 0; y < config.default.unitCount.Y; y++) {
      for (let x = 0; x < config.default.unitCount.X; x++) {
        units.push(<MazeUnit key={`maze_${x}_${y}`} x={x} y={y} />);
      }
    }
  }
  return units;
};

const MazeGrid = () => {

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: config.theme.unitBackgroundColor,
        padding: 20,
        borderRadius: 20,
        width: config.default.unitSize.width * config.default.unitCount.X,
        height: config.default.unitSize.height * config.default.unitCount.Y,
      }}
    >
      {createUnits()}
    </div>
  );
};

export default MazeGrid;
