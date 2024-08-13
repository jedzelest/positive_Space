import style from "./App.module.scss";
import Button from "./components/Button/Button";
import Intro from "./components/Intro/Intro";
import Navigation from "./components/Navigation/Navigation";
import { navigationList } from "./components/Navigation/NavigationData";

function App() {
  const imagePath = "src/assets/positiveSpace.png";
  return (
    <>
      <div className={style.body_style}>
        <Navigation
          logo={imagePath}
          isLoggedIn={true}
          navList={navigationList}
        />
        <Intro />
      </div>
    </>
  );
}

export default App;
