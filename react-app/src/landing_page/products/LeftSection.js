import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appleStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <img src={imageURL}></img>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="p-3">
            <a href={tryDemo}>Try demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn more
            </a>
          </div>
          <div className="mt-3 p-3">
            <a href={googlePlay}>
              <img src="Media/googlePlayBadge.svg"></img>
            </a>
            <a href={appleStore}>
              <img src="Media/appstoreBadge.svg"></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
