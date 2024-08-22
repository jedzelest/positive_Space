import { ReactNode } from "react";
import Navigation from "../components/Navigation/Navigation";
import {
  imagePath,
  navigationList,
} from "../components/Navigation/NavigationData";
import FixedNav from "../components/FixedNav/FixedNav";

interface Props {
  children: ReactNode;
}

const GeneralLayout = ({ children }: Props) => {
  return (
    <>
      <Navigation logo={imagePath} isLoggedIn={true} navList={navigationList} />
      {children}
      <FixedNav
        first_option="Gallery"
        second_option="About"
        third_option="Reviews"
      />
    </>
  );
};

export default GeneralLayout;
