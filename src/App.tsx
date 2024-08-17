import style from "./App.module.scss";
import Button from "./components/Button/Button";
import Intro from "./components/Intro/Intro";
import Navigation from "./components/Navigation/Navigation";
import Services from "./components/Services/Services";
import { navigationList } from "./components/Navigation/NavigationData";
import { primary_image } from "./components/Intro/IntroData";
import { openingText } from "./components/Intro/IntroData";
import { paragraph } from "./components/Intro/IntroData";
import { author } from "./components/Intro/IntroData";
import { links } from "./components/Intro/IntroData";
import { skillList } from "./components/Services/ServicesData";
import FixedNav from "./components/FixedNav/FixedNav";

function App() {
  const imagePath = "src/assets/positiveSpace.png";
  const buttonClick = () => {
    console.log("Button Click");
  };
  return (
    <>
      <div className={style.body_style}>
        <Navigation
          logo={imagePath}
          isLoggedIn={true}
          navList={navigationList}
        />
        <Intro
          openingText={openingText}
          primary_image={primary_image}
          onButtonClick={buttonClick}
          paragraph={paragraph}
          author={author}
          links={links}
        />
        <Services header="Services" skillList={skillList} />
        <FixedNav
          first_option="Gallery"
          second_option="About"
          third_option="Reviews"
        />
      </div>
    </>
  );
}

export default App;
