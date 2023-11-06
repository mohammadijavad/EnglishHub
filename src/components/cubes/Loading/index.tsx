import React from "react";

function Loading({ inline = false }: { inline: boolean }) {
  return <div className={inline ? "" : ""}>Loading</div>;
}

export default Loading;
