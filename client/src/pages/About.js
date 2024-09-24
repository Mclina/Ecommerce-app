import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommerce app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          There are limitless offers and deals on this online store. Enjoy up to 80% discount on selected items of the day during the flash sales. We also have Half Price Deals where our shoppers buy selected products like smart watch, mobile phones, laptops, phone accessories, and clothing pieces for half the original price. Get the best prices you can find on the best deals page. 
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;