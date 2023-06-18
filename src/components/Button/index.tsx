import classNames from "classnames";
import { FC, HTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "primary" | "secondary";
} & HTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ variant, children, ...rest }) => {
  return (
    <button className={classNames(styles.default, variant)} {...rest}>
      {children}
    </button>
  );
};

export { Button };
