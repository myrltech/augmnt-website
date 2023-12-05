import HeadTag from "../components/common/HeadTag";
import WebFooter from "../components/desktop/header-footer/WebFooter";
import WebNavbar from "../components/desktop/header-footer/WebNavbar";
import ListingMain from "../components/desktop/listing-agency/ListingMain";
// import HomeMain from "../components/desktop/home/HomeMain";
// import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileListingMain from "../components/mobile/listing-agency/MobileListingMain";
import MobileFooter from "../components/mobile/header-footer/MobileFooter";
import MobileHeader from "../components/mobile/header-footer/MobileHeader";

export default function agency() {
  return (
    <>
      <HeadTag title="Agency" />

      <div className="d-none d-md-block">
        <WebNavbar activeIndex="agency" />
        <ListingMain />
        <WebFooter activeMenu="agency" />
      </div>
      <div className="d-block d-md-none">
        <MobileHeader activeMenu="Agency" />
        <MobileListingMain />
        <MobileFooter activeIndex="Agency" />
      </div>
    </>
  );
  // return (
  //   <>
  //     {/* <HeadTag title="Augmnt" /> */}
  //     <div className="d-none d-md-block">
  //       <ListingMain />
  //     </div>
  //     <div className="d-block d-md-none">
  //       {/* <HomeMain /> */}
  //       <MobileListingMain />
  //     </div>

  //     {/* <div className="d-none d-md-block">
  //       <WebFooter />
  //     </div> */}
  //     {/* <div className="d-block d-md-none">
  //       <MobileFooter />
  //     </div> */}
  //   </>
  // );
}
