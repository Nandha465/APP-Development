import React from "react";
import MenuNavBar from "../components/menuNavBar/MenuNavBar";

import {
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function StaticFaqSection() {
  return (
    <div>
    <MenuNavBar />
    <MDBContainer>
      <section>
        <MDBTypography
          tag="h3"
          className="text-center mb-5 mt-5 pb-2 text-black fw-bold"
        >
          FAQ
        </MDBTypography>
        <p className="text-center mb-5">
          Find the answers for the most frequently asked questions below
        </p>

        <MDBRow>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon far icon="paper-plane text-primary pe-2" /> <strong> What is Meow Playground?</strong>
            </MDBTypography>
            <p>
             
                
              {" "}
              Meow Playground is a trusted destination for all your pet needs, 
              offering a wide range of products and services to keep your pets happy and healthy.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="pen-alt text-primary pe-2" /><strong> Where is Meow Playground located?</strong>
            </MDBTypography>
            <p>
              <strong>
                
              </strong>{" "}
              We are located at 4/503 AnnaNagar, Coimbatore, Tamil Nadu, 637410.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="user text-primary pe-2" /><strong> What types of pets do you cater to?</strong>
            </MDBTypography>
            <p>
            We cater to all kinds of pets, including dogs, cats, birds, small animals, and fish.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="rocket text-primary pe-2" /><strong>Do you have organic or natural pet products?</strong>
            </MDBTypography>
            <p>
            Yes, we offer a range of organic and natural pet products for pet owners who prefer these options.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="home text-primary pe-2" /><strong> Is your store pet-friendly?</strong>
            </MDBTypography>
            <p>
              <strong>
                
              </strong>{" "}
              Yes, we welcome well-behaved pets in our store. Please ensure your pet is on a 
              leash or in a carrier for the safety and comfort of all customers and pets.
            </p>
          </MDBCol>
          <MDBCol md="6" lg="4" className="mb-4">
            <MDBTypography tag="h6" className="mb-3 text-primary">
              <MDBIcon fas icon="book-open text-primary pe-2" /> <strong>Do you offer a loyalty or rewards program for frequent shoppers?</strong>
            </MDBTypography>
            <p>
            Yes, we have a loyalty program that rewards our valued customers. 
            You can learn more about it in-store or on our website.
            </p>
          </MDBCol>
        </MDBRow>
      </section>
    </MDBContainer>
    </div>
  );
}