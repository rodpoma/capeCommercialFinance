import React, {useState} from "react";
import {MDBAnimation, MDBContainer, MDBBtn} from "mdbreact";
import MediaQuery from "react-responsive";
import PEOB from "./Products/PrivateEquityOwnedBusinesses";
import VF from "./Products/VendorFinance";
import RT from "./Products/RecentTransactions";
import ES from "./Products/EnergySolutions";

const Products = () => {
  const [productPage, setProductPage] = useState(null);
  return (
    <MDBContainer className="cards">
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h1 className="white-text text-center">Products</h1>
        </MDBAnimation>
        <hr className="hr-light my-4 w-75" />
        <MDBContainer className="mobileMenu">
          <MDBBtn outline color="danger" onClick={() => setProductPage("PEOB")}>
            Commercial Businesses
          </MDBBtn>
          <MDBBtn outline color="danger" onClick={() => setProductPage("VF")}>
            Vendor Finance
          </MDBBtn>
          <MDBBtn outline color="danger" onClick={() => setProductPage("ES")}>
            Energy Solutions
          </MDBBtn>
          <MDBBtn outline color="danger" onClick={() => setProductPage("RT")}>
            Recent Transactions
          </MDBBtn>
        </MDBContainer>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <MDBContainer className="productsTab">
            <h1 className="white-text">Products:</h1>
            <div>
              <MDBBtn
                outline
                color="danger"
                size="sm"
                onClick={() => setProductPage("PEOB")}
              >
                Commercial Businesses
              </MDBBtn>
              <MDBBtn
                outline
                color="danger"
                size="sm"
                onClick={() => setProductPage("VF")}
              >
                Vendor Finance
              </MDBBtn>
              <MDBBtn
                outline
                color="danger"
                size="sm"
                onClick={() => setProductPage("ES")}
              >
                Energy Solutions
              </MDBBtn>
              <MDBBtn
                outline
                color="danger"
                size="sm"
                onClick={() => setProductPage("RT")}
              >
                Recent Transactions
              </MDBBtn>
            </div>
          </MDBContainer>
          <hr className="hr-light my-4" />
          {productPage === "VF" ? (
            <VF />
          ) : productPage === "PEOB" ? (
            <PEOB />
          ) : productPage === "ES" ? (
            <ES />
          ) : (
            <RT />
          )}
        </MDBAnimation>
      </MediaQuery>
    </MDBContainer>
  );
};

export default Products;
