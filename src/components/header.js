import React from "react";
import cface from "../static/images/christiana_face.jpg";

export default props => (
  <header className="tc pv3 pv5-ns">
    <img
      src={cface}
      alt="christiana odum"
      className="br-100 pa1 ba b--black-10 h3 w3"
    />
    <h1 className="f5 f4-ns fw6 tracked"> Christiana Odum </h1>
    <h2 className="f6 fw4 ttu tracked"> Artist in Nashville, Tennessee </h2>
    <nav class="bt bb tc mw7 center mt4">
      {props.links.map(l => {
        let classes = `${l.active && "bb "} ${l.color ||
          "hover-bg-lightest-blue"} f6 f5-l link bg-animate black-80 dib pa3 ph4-l bg-white-10 bn`;
        return (
          <button onClick={l.onClick} className={classes}>
            {l.text}
          </button>
        );
      })}
    </nav>
  </header>
);
