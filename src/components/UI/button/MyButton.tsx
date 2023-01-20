import { ReactNode } from "react";
import classes from "./MyButton.module.css";

interface MyButtonProps extends React.ComponentPropsWithoutRef<"button">  {
    children: ReactNode;
}

const MyButton = ({children, ...props}: MyButtonProps) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton;