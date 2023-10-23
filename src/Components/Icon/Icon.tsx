import React from "react";

interface IIconProp {
  name: string
}

export function Icon({ name }: IIconProp) {
  switch (name) {
    case ('dropdownIcon'):
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
          <path d="M2.00098 8.00102L12 18L21.999 8.00102H2.00098Z" fill="black" />
        </svg>
      );
    case ('linkArrow'):
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5.3341 0L3.4541 1.88L9.5601 8L3.4541 14.12L5.3341 16L13.3341 8L5.3341 0Z" fill="black" />
        </svg>
      );
    default: return <svg></svg>
  }
};