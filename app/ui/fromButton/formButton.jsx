import classes from "./formButton.module.css";

const FormButton = ({ children, onClick, type = "submit" }) => {
  return (
    <button onClick={onClick} type={type} className={classes.btn}>
      {children}
    </button>
  );
};

export default FormButton;
