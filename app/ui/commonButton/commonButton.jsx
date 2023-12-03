import classes from "./commonButton.module.css";
const CommonButton = ({ onClick, children }) => {
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default CommonButton;
