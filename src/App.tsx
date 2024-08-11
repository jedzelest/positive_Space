import style from "./App.module.scss";
import Button from "./components/Button/Button";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";

function App() {
  const buttonIcon = "src/assets/download_CV.png";
  const buttonClick = () => {
    console.log("Button Clicked!");
  };
  const imagePath = "src/assets/positiveSpace.png";
  return (
    <>
      <div className={style.body_style}>
        <Navigation
          logo={imagePath}
          isLoggedIn={true}
          navList={navigationList}
        />
        <Button context="Download CV" onClick={buttonClick} icon={buttonIcon} />
      </div>
    </>
  );
}

export default App;
