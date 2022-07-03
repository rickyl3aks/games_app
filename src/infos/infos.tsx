import "./infos.css";

export const Infos = ({ open, game }: any) => {
  if (open === game.id) {
    var genres;
    var date;
    var rating;
    genres = game.genres;
    date = game.released;
    rating = game.rating;
  }

  return (
    <div style={{ color: "white", margin: "0rem 0.5rem" }}>
      {date && (
        <>
          <hr style={{ margin: 5 }} />
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
