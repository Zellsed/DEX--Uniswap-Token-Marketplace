import React from "react";
import Selector from "./Selector";

const SwapField = React.forwardRef(({ obj }, inputRef) => {
  const { id, value = "", setValue, defaultValue, setToken, ignoreValue } = obj;

  async function getInputClassname() {
    let className =
      "w-full outline-none h-8 px-2 appearance-none text-3xl bg-transparent";
    return className;
  }

  return (
    <div className="flex items-center justify-between rounded-xl">
      <input
        ref={inputRef}
        className={getInputClassname()}
        type={"number"}
        value={value}
        placeholder={"0.0"}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        style={{ borderRadius: "5px", color: "black" }}
      />

      <Selector
        id={id}
        setToken={setToken}
        defaultValue={defaultValue}
        ignoreValue={ignoreValue}
        className="ml-auto"
      />
    </div>
  );
});

export default SwapField;
