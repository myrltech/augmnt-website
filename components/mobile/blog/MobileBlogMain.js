import React from "react";
import Link from "next/link";

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

export default function MobileBlogMain() {
  return (
    <div className="m-blog-main">
      <h2 className="m-blog-main-title font-32-poiret-one-400">Blogs</h2>
      <h3 className="m-blog-main-text1 font-14-proxima-nova-700">Featured</h3>

      {blogData?.map((data, index) => (
        <div key={index} className="m-blog-main-card">
          <Link href={`/blog-detail?data=${encodeURIComponent(data.name)}`}>
            <a>
              <div className="m-blog-main-card__imgBlock">
                <img src={data.imgUrl} alt="" />
              </div>
            </a>
          </Link>
          <div className="m-blog-main-card__content">
            <p className="m-blog-main-card__content__text1">Collaborate</p>
            <Link href={`/blog-detail?data=${encodeURIComponent(data.name)}`}>
              <a>
                <h4 className="m-blog-main-card__content__text2">
                  {data.name}
                </h4>
              </a>
            </Link>
            {/* <p className="m-blog-main-card__content__text3">{data.name}</p> */}
            <hr className="m-blog-main-card__hr" />
            <div className="d-flex justify-content-between align-items-center m-blog-main-card__row">
              <p className="m-blog-main-card__row__text1">
                <img
                  src="/imgs/desktop/blog/blog-author-img2.jpeg"
                  alt="author"
                />
                Akhil Sharma
              </p>
              <p className="m-blog-main-card__row__text2">
                <img src="/imgs/desktop/blog/gray-clock-icon.svg" alt="clock" />
                2 min read
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
