import style from "./footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        &copy;{" "}
        <a href="https://api.rawg.io/docs/" target="_blank" rel="noopener noreferrer">
          RAWG
        </a>{" "}
        - Source of Data and Images
      </div>
    </div>
  );
};

export default Footer;
