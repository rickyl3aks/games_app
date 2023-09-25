import { Images } from "../images/images";
import "./infos.css";

export const Infos = ({ game, img }: any) => {
  const { name, genres, released: date, rating } = game;

  const truncateString = (name: string) => {
    return name.slice(0, 30) + "...";
  };

  return (
    <div style={{ color: "grey", margin: "0rem 0.5rem" }}>
      {date && (
        <>
          <div style={{ backgroundColor: `#${game.dominant_color}`, width: 300 }} className="items">
            <Images screenshots={img} />
          </div>
          <hr style={{ margin: 5 }} />
          <p>
            <span>Game:</span>
            <span>{truncateString(name)}</span>
          </p>
          <p>
            <span>Release date:</span>
            <span>{date}</span>
          </p>
          <p>
            <span>Genres: </span>
            <span>{genres.map((e: any) => e.name).join(", ")}</span>
          </p>
          <p>
            <span>Rating: </span>
            <span>{rating}</span>
          </p>
        </>
      )}
    </div>
  );
};
