import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/private-policy.jpeg"
            alt="contactus"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
          <p>privacy policy no 1</p>
          <p>privacy policy no 2</p>
          <p>privacy policy no 3</p>
          <p>privacy policy no 4</p>
          <p>privacy policy no 5</p>
          <p>privacy policy no 6</p>
          <p>privacy policy no 7</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
