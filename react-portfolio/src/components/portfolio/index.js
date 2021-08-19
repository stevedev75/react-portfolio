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

      <MDBCard className="border border-dark center card text-center">
          <MDBCardImage
            style={{ width: "350px", innerHeight: "800"}}

            
            src="https://user-images.githubusercontent.com/77076615/129121542-c0bf91aa-d991-437d-99a0-6b2f5cc13a52.png"
            alt="Castaway Entertainment"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Castaway Entertainment</MDBCardTitle>
            <MDBCardText>

             I developed this "still-in-progress" app to be a fun way to let the user prioritize their favorite music and "pack" it
             away. It is meant to demonstrate a MERN stack app and CRUD processes.  
            </MDBCardText>

            <MDBBtn

              href="https://safe-reaches-62510.herokuapp.com/"
              color="primary"
              size="md"
            >
              App
            </MDBBtn>



            <MDBBtn
              href="https://github.com/stevedev75/castaway-entertainment"
              color="primary"
              size="md"
            >
              
              Repo
            </MDBBtn>


          </MDBCardBody>
        </MDBCard>





        <MDBCard className="border border-dark center card text-center">
          <MDBCardImage
            style={{ width: "350px", innerHeight: "800"}}

            
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

              href="https://nishyo-coder.github.io/Project-One-Pandemic-Travel/"
              color="primary"
              size="md"
            >
              App
            </MDBBtn>



            <MDBBtn
              href="https://github.com/Nishyo-coder/Project-One-Pandemic-Travel"
              color="primary"
              size="md"
            >
              
              Repo
            </MDBBtn>


          </MDBCardBody>
        </MDBCard>


        <MDBCard className="border border-dark card text-center">
          <MDBCardImage
             style={{ width: "350px", innerHeight: "800"}}
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

              href="https://stevedev75.github.io/weather-dashboard/"
              color="primary"
              size="md"
            >
          
              App
            </MDBBtn>


            <MDBBtn

              href="https://github.com/stevedev75/weather-dashboard"
              color="primary"
              size="md"
            >
             
              Repo
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>


        {/* <MDBCard className="border border-dark card text-center">
          <MDBCardImage
                     
            style={{ width: "350px", innerHeight: "700"}}
            src="https://user-images.githubusercontent.com/77076615/113415057-65f21300-938c-11eb-884d-4eafce735dab.png"
            alt="Work Day Scheduler"
            top
          />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Work Day Scheduler</MDBCardTitle>
            <MDBCardText>
              In this assignment, I wanted to create a practical app so the user can schedule, update and delete different Work
              tasks for any hour of a 9 to 5 workday.
            </MDBCardText>

            <MDBBtn

              href="https://stevedev75.github.io/Work-Day-Scheduler/"
              color="primary"
              size="md"
            >
        
              App
            </MDBBtn>

            <MDBBtn

              href="https://github.com/stevedev75/Work-Day-Scheduler"
              color="primary"
              size="md"
            >
              Repo
            </MDBBtn>
          </MDBCardBody>
        </MDBCard> */}



      </MDBCardGroup>
    </MDBContainer>
  );
};

export default Projects;
