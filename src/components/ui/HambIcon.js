import { Colors } from "../../const/Colors";

function HambIcon({ expand, setExpand }) {
  return (
    <div
      style={{ backgroundColor: Colors.neutral800 }}
      className="hamb-icon-wrapper"
      onClick={() => setExpand(!expand)}
    >
      <i
        className={`fa-regular ${
          expand ? "fa-window-minimize rotate-minus" : "fa-plus rotate-plus"
        } icon`}
      ></i>
    </div>
  );
}

export default HambIcon;
