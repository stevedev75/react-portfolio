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



        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "530px" }}
  //  style={{ width: "485px" }} //          
            src="https://user-images.githubusercontent.com/77076615/115097293-377d4780-9ef7-11eb-8d50-8f72443b26f7.png"
            alt="Pandemic Travel Dashboard"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Pandemic Travel Dashboard</MDBCardTitle>
            <MDBCardText>
	    
            As a group, we wanted an application to generate a COVID-19 health/safety
             dashboard displaying current country data statistics as well as the top 
             news headline (from the New York Times) for that country.
            </MDBCardText>
            <MDBBtn
	// GitHub Repo URL for this project below //
              href="https://github.com/Nishyo-coder/Project-One-Pandemic-Travel"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>


        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "530px" }}
            src="https://user-images.githubusercontent.com/77076615/114306392-e65df580-9aa9-11eb-88c4-04dda67e5c1e.png"
            alt="Weather Dashboard"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
            <MDBCardText>
            In this assignment, I wanted to show the current day, plus a five day weather forecast for
            a specific city that included the core details most people are concerned with, including visual icons for each day for quick reviewing.
            </MDBCardText>
            <MDBBtn
	// GitHub Repo URL for this project below //
              href="https://github.com/stevedev75/weather-dashboard"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>


        <MDBCard className="border border-dark">
          <MDBCardImage
            style={{ width: "530px" }}
            src="https://user-images.githubusercontent.com/77076615/113415057-65f21300-938c-11eb-884d-4eafce735dab.png"
            alt="Work Day Scheduler"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Scheduler</MDBCardTitle>
            <MDBCardText>
            In this assignment, I wanted to create a dynamic app wherein the user is able to schedule different Work
            tasks for any hour of a typical 9 to 5 workday. 
            </MDBCardText>
            <MDBBtn
	// GitHub Repo URL for this project below //
              href="https://github.com/stevedev75/Work-Day-Scheduler"
              color="primary"
              size="md"
            >
              <MDBIcon icon="clone left" className="mr-1" />
              View
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>



      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
