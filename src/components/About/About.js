import { useState } from "react";
import BoxInfo from "../BoxInfo";
import HambIcon from "../ui/HambIcon";
import "./styles.css";

function About() {
  const [expand, setExpand] = useState(false);

  return (
    <BoxInfo title="About">
      <div>
        <p>
          Software engineer based in Sydney, Australia. Always been passionate
          in software development. I have 2 years of professional experience in
          Front-end development and continuously learning different technologies
          to keep up to date with the technology trends.
        </p>
      </div>
      <div>
        <p>
          Currently taking my master’s degree in IT at King’s Own Institute
          (KOI) Sydney, and expect to finish in June this year (2023). This is
          also where I have enhanced and broadened my knowledge to different
          programming languages, and cyber-security fundamentals.
        </p>
      </div>
    </BoxInfo>
  );
}

export default About;
