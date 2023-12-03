"use client";
import classes from "./mainForm.module.css";
import { useState } from "react";
import MyInput from "@/app/ui/input/myInput";
import FormButton from "@/app/ui/fromButton/formButton";

const MainForm = () => {
  const [formState, setFormState] = useState("");
  const handle = (e) => {
    setFormState(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form}>
      <MyInput value={formState} onChange={handle} />
      <FormButton onClick={submit}>Search</FormButton>
    </form>
  );
};

export default MainForm;
