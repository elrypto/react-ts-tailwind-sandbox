import React from 'react'

/*  allows client to add additional tailwind styles (twClasses) to be appended 
    another option/alternative is to expose some design 
    system options (sm, lg, xl, blue, grey, etc.)
*/
interface ButtonProps extends React.HTMLAttributes<HTMLAnchorElement> {
  type?: string;
  twClasses?: string;
}


const BASE_BUTTON_CLASSES = `inline-block px-5 py-3 rounded-lg text-sm
  focus:outline-none focus:shadow-outline uppercase tracking-wider font-semibold`;

const DEFAULT_BUTTON = `${BASE_BUTTON_CLASSES} bg-gray-400 hover:bg-gray-300 
  active:bg-gray-500 text-gray-800`;

const PRIMARY_BUTTON = `${BASE_BUTTON_CLASSES} bg-indigo-500 hover:bg-indigo-400 
  active:bg-indigo-600 text-white`;

/* 
  Passes through children, additional tailwind classes and 
  button props (expecting onClick)
*/
export const Button = ({ children, type, twClasses, ...buttonProps }: ButtonProps) => {
  let buttonClasses = '';

  switch (type) {
    case "primary":
      buttonClasses = PRIMARY_BUTTON;
      break;
    case "secondary":
      break;
    case "ghost":
      break;
    default:
      buttonClasses = DEFAULT_BUTTON;
  }

  return (
    <a href="#"
      className={`${buttonClasses} ${twClasses}`}
      {...buttonProps}
    >
      {children}
    </a>
  )
}
