import { Colors } from "../../const/Colors";
import "./styles.css";

function ImageContainer({ img }) {
  console.log(img);
  return (
    <div className="image-container">
      <img src={img} alt="img" />
    </div>
  );
}

export default ImageContainer;
