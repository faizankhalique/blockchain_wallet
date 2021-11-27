import React from "react";

function Typography({ type, children, styles }) {
  if (type === "h1") return <h1 style={{ ...styles }}>{children}</h1>;
  if (type === "h2") return <h2 style={{ ...styles }}>{children}</h2>;
  if (type === "h3") return <h3 style={{ ...styles }}>{children}</h3>;
  if (type === "h4") return <h4 style={{ ...styles }}>{children}</h4>;
  if (type === "h5") return <h5 style={{ ...styles }}>{children}</h5>;
  if (type === "p") return <p style={{ ...styles }}>{children}</p>;
  return null;
}

export default Typography;
