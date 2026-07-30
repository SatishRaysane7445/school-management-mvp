import "./Button.css";

type ButtonProps = {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

const Button = ({
  title,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;