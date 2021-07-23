import React from "react";
import {
  MDBCardGroup,
  MDBIcon,
  MDBContainer,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";

const Projects = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBCardGroup deck className="mt-3">

// start of first example

        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "485px" }}
            src="https://user-images.githubusercontent.com/77076615/115097293-377d4780-9ef7-11eb-8d50-8f72443b26f7.png"
            alt="Pandemic Travel Dashboard"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Pandemic Travel Dashboardr</MDBCardTitle>
            <MDBCardText>
	    // brief description //
            As a group, we wanted an application to generate a COVID-19 health/safety dashboard displaying 
	   current country data statistics as well as the top news headline (from the New York Times) for that country.
            </MDBCardText>
            <MDBBtn
	// GitHub Repo URL for this project below //
              href="https://github.com/Nishyo-coder/Project-One-Pandemic-Travel"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View Project
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>

// end of first example//

      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
