import style from "./App.module.scss";
import Button from "./components/Button/Button";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import { primary_image } from "./components/Intro/IntroData";
import { openingText } from "./components/Intro/IntroData";
import { paragraph } from "./components/Intro/IntroData";
import { author } from "./components/Intro/IntroData";
import { links } from "./components/Intro/IntroData";
import { skillList } from "./components/Services/ServicesData";
import GeneralLayout from "./layout/GeneralLayout";
import InformationBox from "./components/InformationBox/InformationBox";
import { name, nationality } from "./components/InformationBox/InfoData";
import { date_of_birth } from "./components/InformationBox/InfoData";
import { email } from "./components/InformationBox/InfoData";
import { phone } from "./components/InformationBox/InfoData";

function App() {
  const buttonClick = () => {
    console.log("Button Click");
  };
  return (
    <>
      <div className={style.body_style}>
        <GeneralLayout>
          <Intro
            openingText={openingText}
            primary_image={primary_image}
            onButtonClick={buttonClick}
            paragraph={paragraph}
            author={author}
            links={links}
          />
          <Services header="Services" skillList={skillList} />
          <InformationBox
            name={name}
            date_of_birth={date_of_birth}
            email={email}
            phone={phone}
            nationality={nationality}
          />
        </GeneralLayout>
      </div>
    </>
  );
}

export default App;
