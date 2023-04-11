import { Colors } from "../../const/Colors";
import "./styles.css";

function Numbering({ number }) {
  return (
    <div
      className="numbering-container"
      style={{ background: Colors.neutral800 }}
    >
      <p>{number}</p>
    </div>
  );
}
export default Numbering;
