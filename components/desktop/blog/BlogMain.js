import React, { Fragment } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import BlogMainAuthor from "./BlogMainAuthor";
import BlogMainCardOne from "./BlogMainCardOne";

const blogData = [
  {
    name: "Augmenting Your Engineering Team: Simplifying the Process",
    category: " Engineering and Technology",
    shortDesc:
      "Augmenting your engineering team with top-tier talent doesn't have to be a daunting task. In fact, with the right approach, it can be a seamless and efficient process. Here's a guide to simplify the augmentation of your engineering team and ensure a successful integration of new members.",
    imgUrl: "imgs/desktop/blog/2-blog.png",
  },
  {
    name: "Navigating Success: Managing a Multi-Cultural Engineering Team",
    category: " Engineering and Technology",
    shortDesc:
      "Leading a multi-cultural engineering team presents unique challenges and opportunities. Embracing diversity can enhance creativity and problem-solving, but effective management is crucial. Here's a guide to help you navigate the complexities and ensure the success of your multi-cultural engineering team.",
    imgUrl: "imgs/desktop/blog/3-blog.png",
  },
  {
    name: "Unlocking Strategic Advantages: Outsourcing Engineering Tasks to South East Asia",
    category: " Engineering and Technology",
    shortDesc:
      "In the dynamic landscape of global business, outsourcing has emerged as a powerful strategy, especially when it comes to engineering tasks. South East Asia, with its vibrant economies and skilled workforce, has become a prime destination for companies looking to enhance efficiency and remain competitive. In this blog, we'll explore why outsourcing engineering tasks to South East Asia makes strategic sense.",
    imgUrl: "imgs/desktop/blog/4-blog.png",
  },
];

export default function BlogMain() {
  /*======================================================
          renderBlogCardTwo
  ======================================================*/
  const renderBlogCardTwo = (data) => {
    return (
      <article className="row mx-0 align-items-start flex-nowrap blog-main-card-2">
        <div className="blog-main-card-2__imgBlock flex-shrink-0">
          <img src={data.imgUrl} alt="" />
        </div>
        <div className="blog-main-card-2__contentBlock">
          <ul className="blog-main-card-2__contentBlock-ul">
            <li>{data.category}</li>
          </ul>
          <h2 className="font-24-proxima-nova-700 blog-main-card-2__contentBlock-titleText">
            {/* Lorem <b>ipsum</b> dolor sit amet, consectetur adipiscing elit, */}
            {data.name}
          </h2>
          <p className="blog-main-card-1__desc font-14-nunito-sans-400">
            {data.shortDesc}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. */}
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
          <Link href={`/blog-detail?data=${encodeURIComponent(data.name)}`}>
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
          {blogData?.map((data, index) => (
            <Fragment key={index}>{renderBlogCardTwo(data)}</Fragment>
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
