// import Head from "next/head";
// import Image from "next/image";
import HeadTag from "../components/common/HeadTag";
import LandingPageHome from "../components/desktop/home/LandingPageHome";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHomeMain from "../components/mobile/home/MobileHomeMain";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <HeadTag title="Augmnt" />
      <div className="d-none d-md-block">
        <LandingPageHome />
      </div>
      <div className="d-block d-md-none">
        <MobileHomeMain />
        <MobileFooter activeIndex="home" />
      </div>
    </>
  );
}
