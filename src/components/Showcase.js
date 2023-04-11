import ImageContainer from "./ui/ImageContainer";
import Numbering from "./ui/Numbering";
import "./styles.css";

function Showcase({ number, image }) {
  return (
    <div className="showcase-container">
      <ImageContainer img={image} />
      <div className="number-container">
        <Numbering number={number} />
      </div>
    </div>
  );
}

export default Showcase;
