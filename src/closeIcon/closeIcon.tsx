import style from "./close.module.css";

const CloseIcon = ({ onClick: close }: any) => {
  return <div onClick={close} className={style.close} title="Close" />;
};

export default CloseIcon;
