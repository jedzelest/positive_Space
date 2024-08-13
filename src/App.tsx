import style from "./App.module.scss";
import Button from "./components/Button/Button";
import Intro from "./components/Intro/Intro";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";
import { primary_image } from "./components/Intro/IntroData";
import { image_name_prop } from "./components/Intro/IntroData";
import { paragraph } from "./components/Intro/IntroData";
import { author } from "./components/Intro/IntroData";
import { links } from "./components/Intro/IntroData";

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
          primary_image={primary_image}
          onButtonClick={buttonClick}
          image_name_prop={image_name_prop}
          paragraph={paragraph}
          author={author}
          links={links}
        />
      </div>
    </>
  );
}

export default App;
