import { games, screenshots } from "./models";

export const Images = ({ background, name, screenshots }: games) => {
  return (
    <div style={{ position: "relative" }}>
      {" "}
      <img
        src={background}
        alt={name}
        style={{
          width: 300,
          height: 180,
          borderRadius: ".5rem .5rem 0rem 0rem",
        }}
      ></img>
      {(screenshots as unknown as screenshots[]).map(
        (screenshots: screenshots) => {
          return (
            <div key={screenshots.id}>
              <img
                src={screenshots.image}
                alt={screenshots.id}
                style={{
                  width: 300,
                  height: 180,
                  borderRadius: ".5rem .5rem 0rem 0rem",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                }}
              />
            </div>
          );
        }
      )}
    </div>
  );
};
