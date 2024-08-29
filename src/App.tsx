import style from "./App.module.scss";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import { primary_image } from "./components/Intro/IntroData";
import { openingText } from "./components/Intro/IntroData";
import { paragraph } from "./components/Intro/IntroData";
import { author } from "./components/Intro/IntroData";
import { links } from "./components/Intro/IntroData";
import { skillList } from "./components/Services/ServicesData";
import GeneralLayout from "./layouts/GeneralLayout";
import BiographyLayout from "./layouts/BiographyLayout";
import { SampleWorksLayout } from "./layouts/SampleWorksLayout";

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
          <BiographyLayout />
          <SampleWorksLayout />
        </GeneralLayout>
      </div>
    </>
  );
}

export default App;
