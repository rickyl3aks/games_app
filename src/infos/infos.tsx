import GetTime from "../getTime/getTime";
import { Images } from "../images/images";
import Rating from "../rating/rating";
import style from "./infos.module.css";

export const Infos = ({ game, img }: any) => {
  const { name, genres, released: date, rating } = game;

  return (
    <div style={{ color: "grey", margin: "0rem 0.5rem" }}>
      {date && (
        <div className={style.container}>
          <div style={{ backgroundColor: `#${game.dominant_color}`, width: 300, margin: "auto" }} className={style.items}>
            <Images screenshots={img} />
          </div>
          <hr style={{ margin: 5 }} />
          <p>
            <span>Game:</span>
            <span>{name}</span>
          </p>
          <p>
            <span>Release date:</span>
            <span>{GetTime(date)}</span>
          </p>
          <p>
            <span>Genres: </span>
            <span>
              {genres.length === 0
                ? "not available"
                : genres
                    .map((e: any, idx: number) => {
                      const genreName = e.name;
                      return genreName;
                    })
                    .join(", ")}
            </span>
          </p>
          <div>
            <Rating star={rating} />
          </div>
        </div>
      )}
    </div>
  );
};
