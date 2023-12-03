import classes from "./myInput.module.css";

const MyInput = (props) => {
  return (
    <input
      className={classes.inp}
      {...props}
      placeholder="write something..."
    ></input>
  );
};

export default MyInput;
