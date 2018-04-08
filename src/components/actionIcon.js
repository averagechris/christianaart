import React from "react";

export default props => {
  let { text, ...restProps } = props;
  return (
    <span
      className="f5 ph1 h1 w2 ml2 courier pointer link black-40 ba br-100 b--black-40 dim"
      {...restProps}
    >
      {text}
    </span>
  );
};
