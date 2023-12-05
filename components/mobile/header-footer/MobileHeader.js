import Link from "next/link";
import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";

const listMenu = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/our-process",
    name: "Our Process",
  },
  {
    link: "/listings",
    name: "Listings",
  },
  {
    link: "/agency",
    name: "Agency",
  },
  {
    link: "/blogs",
    name: "Blogs",
  },
];

export default function MobileHeader({ activeMenu }) {
  const [values, setValues] = useState({
    isMobileNavbarOpen: null,
  });

  /*========================================================
                    react-burger-menu event handlers
      ========================================================*/

  const handleOnStateChange = (stateVal) => {
    setValues({
      isMobileNavbarOpen: stateVal.isOpen,
    });
  };

  const closeMobileNavbar = () => {
    setValues({ isMobileNavbarOpen: false });
  };

  const renderCheckUsOut = () => {
    return (
      <>
        <div className="mobile-header-check-out-div">
          <div className="mobile-header-check-out-img-section d-flex align-items-center justify-content-center">
            <img
              src={"/imgs/mobile/icons/black-m-icon.svg"}
              alt="myrl"
              className="mobile-footer-m-icon"
            />
            <img
              src={"/imgs/mobile/icons/black-hand-icon.svg"}
              alt="myrl"
              className="mobile-footer-black-hand-icon"
            />
            <img
              src={"/imgs/mobile/icons/black-in-icon.svg"}
              alt="linked"
              className="mobile-footer-in-icon"
            />
          </div>
          <h5 className="d-flex align-items-center justify-content-center mobile-font-10-proxima-nova-400 mobile-header-check-out-text">
            <span className="mobile-font-16-proxima-nova-700"> ©&nbsp;</span>
            2021 Myrl tech
          </h5>
        </div>{" "}
      </>
    );
  };

  return (
    <>
      <nav>
        <div className="d-flex justify-content-between align-items-center mobile-navbar">
          <Link href="/">
            <a>
              <img
                src="/imgs/desktop/logo/augmnt-logo.svg"
                alt="logo"
                className="mobile-augmnt-logo-img"
              />
            </a>
          </Link>
          <Menu
            right
            isOpen={values.isMobileNavbarOpen}
            onStateChange={(stateVal) => handleOnStateChange(stateVal)}
            overlayClassName={"myOverlay"}
            customBurgerIcon={
              <img
                src="/imgs/mobile/icons/menu-icon.svg"
                className="front"
                alt="nav front"
              />
            }
            customCrossIcon={<i className="fa fa-close" />}
            burgerButtonClassName={"menu"}
          >
            <div className="menu-myrl-logo-img-div">
              <img
                src="/imgs/desktop/logo/augmnt-logo.svg"
                alt="logo"
                className="menu-augmnt-logo-img"
              />
            </div>
            {listMenu.map((data, index) => (
              <div
                key={index}
                className={
                  activeMenu === data.name
                    ? "menu-item menu-item--active"
                    : "menu-item"
                }
              >
                <Link href={data.link}>
                  <a>
                    <h5
                      onClick={() => closeMobileNavbar()}
                      className="mobile-font-14-proxima-nova-700"
                    >
                      {data.name}
                    </h5>
                  </a>
                </Link>
              </div>
            ))}
            {renderCheckUsOut()}
          </Menu>
        </div>
      </nav>
    </>
  );
}
