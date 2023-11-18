import config from "../../config";

type Props = {
  x: number; // zero based
  y: number; // zero based
};

const SHOW_POSITION_LABEL = false;
const SHOW_BORDER = true;
const SHOW_DISPLAY = true;

const MazeUnit: React.FC<Props> = ({ x, y }) => {
  return (
    <div
      className=""
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxSizing: "border-box",
        border: SHOW_BORDER
          ? `1px solid ${config.theme.unitForegroundColor}`
          : undefined,
        color: config.theme.unitForegroundColor,
        width: config.default.unitSize.width,
        height: config.default.unitSize.height,
        backgroundColor: config.theme.unitBackgroundColor,
      }}
    >
      {SHOW_POSITION_LABEL && `${x}/${y}`}
      {SHOW_DISPLAY && (
        <>

          <div
            style={{
              width: config.default.unitSize.width / 3,
              height:  config.default.unitSize.height /3,
              boxSizing: "border-box",
              opacity: 0.5,
              backgroundColor: config.theme.unitForegroundColor,
            }}
          ></div>
        </>
      )}
    </div>
  );
};

export default MazeUnit;
