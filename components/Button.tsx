import clsx from "clsx";
import { OnClickEvent } from "../types";

import LED from "./LED";

export interface ButtonProps {
  text: string;
  plain?: boolean;
  ledOn?: boolean;
  color?: "red" | "green";
  onClick?: (label?: string) => unknown;
}

const Button: React.FC<ButtonProps> = ({
  plain,
  text,
  color,
  onClick,
  ledOn = false
}) => {
  const bgColor = clsx({
    "bg-red-600": color === "red",
    "bg-green-400": color === "green",
    "bg-white": color !== "green" && color !== "red"
  });

  const handleClick = (label: string, event: OnClickEvent) => {
    if (onClick) onClick(label, event);
  };

  return (
    <div>
      <button
        key={text}
        type="button"
        onClick={e => handleClick(text, e)}
        className={`h-12 w-12 rounded-md ${bgColor}`}
      >
        {!plain ? <LED classes="-mt-2 m-0.5" on={ledOn} /> : <></>}
        <span className="text-xs text-black">{text}</span>
      </button>
    </div>
  );
};

export default Button;
