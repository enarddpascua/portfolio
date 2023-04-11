import { Colors } from "../../const/Colors";
import SkillBoxWrapper from "../ui/SkillBoxWrapper";
import "./styles.css";
import profilePic from "../../assets/designs/profilePic.jpg";

function Header() {
  const skills = [
    {
      name: "javascript",
      bgColor: Colors.primary300,
      txtColor: Colors.neutral800,
    },
    { name: "reactJS", bgColor: Colors.primary500, txtColor: "white" },
    { name: "reactNative", bgColor: Colors.primary500, txtColor: "white" },
    { name: "java", bgColor: Colors.neutral800, txtColor: "white" },
    { name: "php", bgColor: Colors.grey, txtColor: Colors.neutral800 },
    { name: "figma", bgColor: Colors.primary300, txtColor: Colors.neutral800 },
  ];

  return (
    <section>
      <div className="left-container">
        <div className="name-wrapper">
          <h1>Hi, my name</h1>
          <h1>
            is <span className="name">Rey</span>
          </h1>
        </div>
        <div className="skills-container">
          {skills.map((skillObj, i) => (
            <SkillBoxWrapper
              key={i}
              bgColor={skillObj.bgColor}
              textColor={skillObj.txtColor}
            >
              {skillObj.name}
            </SkillBoxWrapper>
          ))}
        </div>
      </div>
      <div className="right-container">
        <div className="profile-pic-wrapper">
          <img src={profilePic} alt="profile-pic" />
        </div>
        <SkillBoxWrapper bgColor={Colors.neutral800} textColor="white">
          2 years{"\n"}
          Front-end developer
        </SkillBoxWrapper>
      </div>
    </section>
  );
}
export default Header;
