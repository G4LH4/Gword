import React, { useState } from "react";
import configIcon from "../../../public/setting.png";

const CreateASettings = (props) => {
  const [enabled, setEnabled] = useState(true);

  const className = enabled ? "" : "disabled";

  // const HandleClick = () => {};

  return (
    <a href="" className="enabled">
      <img src={configIcon} id="settings"></img>
    </a>
  );
};
export default CreateASettings;
