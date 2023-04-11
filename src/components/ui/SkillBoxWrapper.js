import "./styles.css";

function SkillBoxWrapper({ children, bgColor, textColor }) {
  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <span className="text" style={{ color: textColor }}>
        {children}
      </span>
    </div>
  );
}

export default SkillBoxWrapper;
