import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import aphonData from "./IphonDataURL.json";

function Iphones() {
  const [iphoneProduct, setProducts] = useState([]);

  useEffect(() => {
    setProducts(aphonData.Products);
  }, []);

  let order = 1;
  return (
    <>
      <section className="internal-page-wrapper mt-5 ">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold" style={{ paddingTop: "70px" }}>
                Iphones
              </div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {iphoneProduct.map((el, index) => {
            console.log(iphoneProduct);
            let id = el.product_id;
            let name = el.product_name;
            let img = el.product_img;
            let Brief = el.product_brief_description;
            let StartPrice = el.starting_price;
            let PriceRange = el.price_range;
            let productPage = "/iPhone/" + id;

            let order1 = 1;
            let order2 = 2;
            if (order !== 1) {
              order1 = 2;
              order2 = 1;
              order--;
            } else {
              order++;
            }

            let productDiv = (
              <div
                key={id}
                className="row justify-content-center text-center text-center h-100 my-5"
              >
                <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{name}</div>
                  <div className="product-brief">{Brief}</div>
                  <div className="starting-price">
                    {`Starting at ${StartPrice}`}
                  </div>

                  <div className="monthly-price">{PriceRange}</div>
                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={productPage}>Learn more</Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="prodict-image">
                    <img src={img} alt="iPhone" />
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
}
export default Iphones;
