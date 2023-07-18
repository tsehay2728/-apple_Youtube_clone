import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Four04 from "./Four04";
function IphoneProducts() {
  const [iProducts, setIphone] = useState([]);
  let { idp } = useParams();

  useEffect(() => {
    fetch("./IphonDataURL.json")
      .then((res) => res.json())
      .then((dataIpho) => {
        let objeIphone = dataIpho.Products;
        let singleIphone = objeIphone.filter((el) => el.product_url == idp);
        setIphone(singleIphone);
      })
      .catch(() => {
        console.log("Something is wrong ! unable to fetch !");
      });
  }, [idp]);
  console.log(iProducts.length);

  if (iProducts.length) {
    return (
      <>
        <section className="internal-page-wrapper top-100">
          <div className="container">
            {iProducts.map((el) => {
              let id = el.product_url;
              let title = el.product_name;
              let img = el.product_img;
              let Brief = el.product_brief_description;
              let StartPrice = el.starting_price;
              let PriceRange = el.price_range;
              let productPage = "/iPhone" + id;
              let details = el.product_description;

              let productDiv = (
                <div key={id} className="bottom-100">
                  <div className="row justify-content-center text-center bottom-50">
                    <div className="col-12">
                      <div className="title-wraper bold">{title}</div>
                      <div className="brief-description">{Brief}</div>
                    </div>
                  </div>

                  <div className="row justify-content-center text-center product-holder h-100">
                    <div className={`col-sm-12 col-md-6 my-auto`}>
                      <div className="starting-price">
                        {`Starting at ${StartPrice}`}
                      </div>
                      <div className="monthly-price">{PriceRange}</div>
                      <div className="product-details">{details}</div>
                    </div>

                    <div className={`col-sm-12 col-md-6`}>
                      <div className="prodict-image">
                        <img src={img} />
                      </div>
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            })}
          </div>
        </section>
      </>
    );
  } else {
    return <Four04 />;
  }
}
export default IphoneProducts;
