import HeadTag from "../components/common/HeadTag";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import ListingMain from "../components/desktop/listings/ListingMain";
// import HomeMain from "../components/desktop/home/HomeMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileListingMain from "../components/mobile/listings/MobileListingMain";

export default function Home() {
  return (
    <>
      <HeadTag title="Augmnt" />
      <div className="d-none d-md-block">
        <ListingMain />
      </div>
      <div className="d-block d-md-none">
        {/* <HomeMain /> */}
        <MobileListingMain />
      </div>

      <div className="d-none d-md-block">
        <WebFooter />
      </div>
      <div className="d-block d-md-none">
        <MobileFooter />
      </div>
    </>
  );
}
