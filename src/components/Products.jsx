import React, {useState} from "react";
import {
  MDBAnimation,
  MDBContainer,
  MDBBtn,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
} from "mdbreact";
import MediaQuery from "react-responsive";
import PEOB from "./Products/PrivateEquityOwnedBusinesses";
import VF from "./Products/VendorFinance";
import RT from "./Products/RecentTransactions";
import ES from "./Products/EnergySolutions";

const Products = () => {
  const [productPage, setProductPage] = useState(null);
  return (
    <MDBContainer className="cards w-75" fluid>
      {/*Mobile*/}
      <MediaQuery maxDeviceWidth={1200}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <h1 className="white-text text-center">Products</h1>
        </MDBAnimation>
        <MDBAnimation type="fadeIn" delay=".3s">
          <hr className="hr-light w-75" />
        </MDBAnimation>
        <MDBContainer fluid>
          <MDBAnimation type="fadeIn" delay=".3s">
            <MDBNav className="mobileMenu">
              <MDBNavItem>
                <MDBNavLink to="/commercialBusiness">
                  <MDBBtn color="danger">Commercial Businesses</MDBBtn>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/vendorFinance">
                  <MDBBtn color="danger">Vendor Finance</MDBBtn>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/energyFinance">
                  <MDBBtn color="danger">Energy Finance</MDBBtn>
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/recentTransactions">
                  <MDBBtn color="danger">Recent Transactions</MDBBtn>
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </MDBAnimation>
        </MDBContainer>
      </MediaQuery>
      {/*Web Browser*/}
      <MediaQuery minDeviceWidth={1201}>
        <MDBAnimation type="fadeIn" delay=".3s">
          <MDBContainer className="productsTab" fluid>
            <h1 className="white-text">Products:</h1>
            <div>
              <MDBBtn
                color="danger"
                size="sm"
                onClick={() => setProductPage("PEOB")}
              >
                Commercial Businesses
              </MDBBtn>
              <MDBBtn
                color="danger"
                size="sm"
                onClick={() => setProductPage("VF")}
              >
                Vendor Finance
              </MDBBtn>
              <MDBBtn
                color="danger"
                size="sm"
                onClick={() => setProductPage("ES")}
              >
                Energy Finance
              </MDBBtn>
              <MDBBtn
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
