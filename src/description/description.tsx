import { useState } from "react";

import style from "./description.module.css";
import { GetInfo } from "../API/APIRequest";
import { useDispatch, useSelector } from "react-redux";
import { setInfoData } from "../redux/features/infoData";

interface Game {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: any[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: {
    id: number;
    title: string;
    count: number;
    percent: number;
  }[];
  reactions: {
    [key: string]: number;
  };
  added: number;
  added_by_status: {
    yet: number;
    owned: number;
    beaten: number;
    toplay: number;
    dropped: number;
    playing: number;
  };
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacritic_url: string;
  parents_count: number;
  additions_count: number;
  game_series_count: number;
  user_game: any; // Define a proper type if needed
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  parent_platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
    };
  }[];
  platforms: {
    platform: {
      id: number;
      name: string;
      slug: string;
      image: string | null;
      year_end: string | null;
      year_start: string | null;
      games_count: number;
      image_background: string;
    };
    released_at: string;
    requirements: any; // Define a proper type if needed
  }[];
  stores: {
    id: number;
    url: string;
    store: {
      id: number;
      name: string;
      slug: string;
      domain: string;
      games_count: number;
      image_background: string;
    };
  }[];
  developers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  genres: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  tags: {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
  }[];
  publishers: {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
  }[];
  esrb_rating: {
    id: number;
    name: string;
    slug: string;
  };
  clip: any;
  description_raw: string;
}

const Description = ({ gameId }: { gameId: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const [info, setInfo] = useState<any>();

  const dispatch = useDispatch();
  const infoGame = useSelector((state: any) => state.infoData);

  const handleClick = async (gameId: string) => {
    setIsloading(true);
    if (infoGame && infoGame.hasOwnProperty(gameId)) {
      const infoResult = infoGame[gameId];
      setInfo(infoResult);
      setIsloading(false);
      return;
    }
    const data = await GetInfo(gameId);
    if (data !== null) {
      setIsOpen(true);
      const typeData: Game = data;
      const { description } = typeData;
      dispatch(setInfoData({ [gameId]: description }));
      setInfo(description);
      setIsloading(false);
    }
  };

  return (
    <div>
      <details open={isOpen} className={style.details}>
        <summary onClick={() => handleClick(gameId)} className={style.summary}>
          About...
        </summary>
        {isLoading ? (
          <div className={style.loader}>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
            <div className={style.dot}></div>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: info ?? "no info" }}></div>
        )}{" "}
      </details>
    </div>
  );
};

export default Description;
