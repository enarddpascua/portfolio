import { useState } from "react";
import "./styles.css";
import HambIcon from "./ui/HambIcon";

function BoxInfo({ children, title = "" }) {
  const [expand, setExpand] = useState(false);

  return (
    <section className={`box-info-section ${expand ? "expand" : "shrink"}`}>
      <div className="head-wrapper">
        <h3>{title}</h3>
        <HambIcon expand={expand} setExpand={setExpand} />
      </div>
      <div className={` ${!expand && "hide"}`}>{children}</div>
    </section>
  );
}

export default BoxInfo;
