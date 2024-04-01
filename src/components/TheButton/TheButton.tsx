import './TheButton.css'
import { Link } from "react-router-dom";
import React from "react";

function TheButton({ children, to, href, onClick, shadow, accent, border, mini }: ButtonProps) {
  const buttonClass = "button" +
    (shadow ? " button--shadow" : "") +
    (accent ? " button--accent" : "") +
    (mini ? " button--mini" : "") +
    (border ? " button--border" : "");
  return (
    onClick ?
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
    :
    (to ?
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
      :
      <a href={href} className={buttonClass}>
        {children}
      </a>
    )
  )
}

type ButtonProps = {
  children: React.ReactNode;
  to?: string | object;
  onClick?: () => void;
  href?: string;
  shadow?: boolean;
  accent?: boolean;
  border?: boolean;
  mini?: boolean;
}


export default TheButton
