import { UseCustomHook } from "../../context/Context";
import Button from "./Button";

export default ({onclick}) => {

  const { navigate, state } = UseCustomHook();
  return (
    <>
      <Button
        title="Buy"
        onclick={onclick}
      />
    </>
  );
};
