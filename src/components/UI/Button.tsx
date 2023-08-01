import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  disabled?: any;
  classNames?: string;
  outline?: boolean;
  buttonType: "button" | "submit" | "reset";
  to?: string;
  primary?: boolean;
  onClick?: () => void;
  loader?: any;
};

const Button = ({
  text,
  disabled,
  buttonType,
  classNames,
  to,
  onClick,
}: ButtonProps) => {

  if (to) {
    return (
      <Link
        to={to}
        className={`bg-primary p-5 text-center text-white rounded-md ${classNames}`}
      >
        {text}
      </Link>
    );
  }


  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`bg-[#5570F1] green-btn p-3 text-white rounded-md ${classNames}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  buttonType: "button",
};

export default Button;
