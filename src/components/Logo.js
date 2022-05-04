import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images indiquées dans les attributs src se trouvent dans le dossier "public" */}
      <img src="./logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
