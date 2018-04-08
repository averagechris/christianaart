import React from "react";
import ActionIcon from "./actionIcon.js";

export default props => {
  let { imageKey, src, title, onClick, icons } = props;

  return (
    <div className="pa1 mr2" onClick={e => onClick(e, imageKey)}>
      <div
        href="#"
        style={{ backgroundImage: `url(${src})` }}
        className="dim br2 bg-center ba b--black-10 w5 h5 cover pointer"
      />
      <div className="pt2 br bl bb br2 b--black-10 tc">
        <span className="ttc f5 fw5 lh-title pointer">{title}</span>
        <div className="flex pv1 ph2 justify-end">
          <div className="tc">
            {icons.map(i => (
              <ActionIcon {...i} key={`action-icon-${i.text}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
