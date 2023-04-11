import BoxInfo from "../BoxInfo";
import Showcase from "../Showcase";
import wholefoods1 from "../../assets/designs/wholefoods1.png";
import wholefoods2 from "../../assets/designs/wholefoods2.PNG";
import wholefoods3 from "../../assets/designs/wholefoods3.PNG";
import tinyHouse1 from "../../assets/designs/tinyHouse1.PNG";
import tinyHouse2 from "../../assets/designs/tinyHouse2.PNG";
import todoApp1 from "../../assets/designs/todoApp1.PNG";
import todoApp2 from "../../assets/designs/todoapp.mp4";
import Title from "../ui/Title";
import "./styles.css";
import SubTitle from "../ui/SubTitle";

function Designs() {
  return (
    <BoxInfo title="Projects and Designs">
      <div className="title-container">
        <Title>Whole foods mobile application</Title>
        <SubTitle>
          (Ongoing project - made with React Native and Firebase services)
        </SubTitle>
      </div>
      <div className="body-wrapper">
        <Showcase number={"01"} image={wholefoods1} />
        <Showcase number={"02"} image={wholefoods2} />
        <Showcase number={"03"} image={wholefoods3} />
      </div>
      <hr />
      <div className="title-container">
        <Title>Tiny House</Title>
        <SubTitle>(Design only)</SubTitle>
      </div>
      <div className="body-wrapper">
        <Showcase number={"01"} image={tinyHouse1} />
        <Showcase number={"02"} image={tinyHouse2} />
      </div>
      <hr />
      <div className="title-container">
        <Title>Simple Todo App with translation</Title>
        <SubTitle>(Made with Angular, NodeJS, Google Translate API)</SubTitle>
        <SubTitle>
          <a href="https://translate-todo.ts.r.appspot.com/#/">
            Translate todo app
          </a>
        </SubTitle>
      </div>
      <div className="body-wrapper">
        <Showcase number={"01"} image={todoApp1} />
        <div className="video-wrapper">
          <video controls>
            <source src={todoApp2} type="video/mp4" />
          </video>
        </div>
      </div>
    </BoxInfo>
  );
}

export default Designs;
