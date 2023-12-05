import React from "react";

export default function BlogMainAuthor({ imgPath, authorName, authorPost }) {
  return (
    <>
      <div className="row mx-0 flex-nowrap align-items-center blog-main-card-1__authorRow">
        <img src={imgPath} alt="author" className="flex-shrink-0" />
        <div className="flex-grow-1">
          <h3 className="blog-main-card-1__authorRow-text1 font-14-proxima-nova-700">
            {authorName}
          </h3>
          <p className="blog-main-card-1__authorRow-text2 font-14-nunito-sans-400">
            {authorPost}
          </p>
        </div>
      </div>
    </>
  );
}

BlogMainAuthor.defaultProps = {
  imgPath: "/imgs/desktop/blog/blog-author-img.svg",
  authorName: "Akhil Sharma",
  authorPost: "Founder, Myrl Tech",
};
