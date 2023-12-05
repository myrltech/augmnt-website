import React, { Fragment } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import BlogMainAuthor from "./BlogMainAuthor";
import BlogMainCardOne from "./BlogMainCardOne";

export default function BlogMain() {
  /*======================================================
          renderBlogCardTwo
  ======================================================*/
  const renderBlogCardTwo = () => {
    return (
      <article className="row mx-0 align-items-start flex-nowrap blog-main-card-2">
        <div className="blog-main-card-2__imgBlock flex-shrink-0">
          <img src="/imgs/desktop/blog/blog-card-2.png" alt="" />
        </div>
        <div className="blog-main-card-2__contentBlock">
          <ul className="blog-main-card-2__contentBlock-ul">
            <li>Category Name</li>
          </ul>
          <h2 className="font-24-proxima-nova-700 blog-main-card-2__contentBlock-titleText">
            Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit,
          </h2>
          <p className="blog-main-card-1__desc font-14-nunito-sans-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className="row mx-0 flex-nowrap justify-content-between align-items-center blog-main-card-2__authorAndReadTimeRow">
            <div className="col-6">
              <BlogMainAuthor />
            </div>
            <p className="blog-main-card-1__btnRow__text font-14-proxima-nova-400">
              <img src="/imgs/desktop/blog/gray-clock-icon.svg" alt="clock" />2
              min read
            </p>
          </div>
          <Link href="/blog-detail">
            <a>
              <span className="blog-main-card-1__btn">Read More &#62;</span>
            </a>
          </Link>
        </div>
      </article>
    );
  };

  /*======================================================
          renderTabPanel
  ======================================================*/
  const renderTabPanel = () => {
    return (
      <div className="pt-45">
        <BlogMainCardOne />
        <div className="blog-main-card-fold-2">
          {[1, 2, 3].map((data, index) => (
            <Fragment key={index}>{renderBlogCardTwo()}</Fragment>
          ))}
          {/* {renderBlogCardTwo()} */}
        </div>
      </div>
    );
  };

  /*======================================================
          main
  ======================================================*/
  return (
    <>
      <div className="common-react-tabs common-react-tabs--blogs">
        <h1 className="font-72-proxima-nova-900 blog-main-title-blogs">
          Blogs
        </h1>
        {/* <Tabs> */}
        {/* <TabList> */}
        {/* <Tab>Technology</Tab> */}
        {/* <Tab>Start ups</Tab> */}
        {/* <Tab>Category Name</Tab> */}
        {/* </TabList> */}

        {renderTabPanel()}
        {/* <TabPanel></TabPanel> */}
        {/* <TabPanel>{renderTabPanel()}</TabPanel> */}
        {/* <TabPanel> */}
        {/* <p className="blog-main-card-1__authorRow-text1 font-14-proxima-nova-700 pl-72 pt-50 text-center"> */}
        {/* No Blogs Yet */}
        {/* </p> */}
        {/* </TabPanel> */}
        {/* </Tabs> */}
      </div>
    </>
  );
}
