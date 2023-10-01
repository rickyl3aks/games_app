import { useState, useRef } from "react";
import { useEffect } from "react";
import { games, screenshots } from "./models";
import "./images.css";

export const Images = ({ screenshots }: games) => {
  const [index, setIndex] = useState<number>(0);
  const delay = 2500;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const bk = (screenshots as unknown as screenshots[]).map((e: unknown) => e);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === bk.length - 1 ? 0 : prevIndex + 1)), delay);

    return () => {
      resetTimeout();
    };
  }, [bk.length, index]);

  return (
    <div className="slideShow">
      <div
        className="slideShowSlider"
        style={{
          transform: `translate3d(${-index * 100}%, 0, 0)`,
        }}
      >
        {(screenshots as unknown as screenshots[]).map((screenshots: screenshots) => {
          return (
            <div key={screenshots.id} className="slide">
              <img
                src={screenshots.image}
                alt={screenshots.id}
                loading="lazy"
                style={{
                  width: 300,
                  height: 180,
                  borderRadius: ".5rem .5rem 0rem 0rem",

                  display: "inline-block",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
