import React from "react";

import CloseIcon from "./closeicon.js";

export default props => {
  let { children, handleClose, transparent } = props;
  let classList =
    "relative top-0 top-1-m top-2-ns mw7-m mw8-ns center br3 .shadow-4 pa2";

  return (
    <div className="fixed top-0 left-0 db z-1 w-100 h-100 pt3 pt5-m pt7-ns bg-black-70 overflow-container">
      <div className={transparent ? classList : classList + " bg-white"}>
        <CloseIcon
          onClick={handleClose}
          color={transparent ? "white" : "black"}
        />
        {children}
      </div>
    </div>
  );
};
