import classNames from "classnames";
import { FC, HTMLAttributes } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <button className={classNames(styles.default, styles[variant])} {...rest}>
      {children}
    </button>
  );
};

export { Button };
