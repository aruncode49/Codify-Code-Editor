import React from "react";

const SubmitButton = ({
  handleSubmit,
  text,
  color,
  hoverColor,
  px,
  py,
  type,
}) => {
  return (
    <button
      onClick={handleSubmit}
      className={`inline-block rounded-lg ${color} ${hoverColor} ${px} ${py} text-sm font-medium text-white`}
      type={type}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
