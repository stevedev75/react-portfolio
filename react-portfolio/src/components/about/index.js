
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AboutMe = () => {
  return (
    <MDBContainer className="mt-5">
      <MDBRow>
        <MDBCol md="12">
          <h2>About Me</h2>
          <hr class="solid bg-dark" />
          <img
            style={{ height: "285px" }}
            src= "https://avatars.githubusercontent.com/u/77076615?v=4"
            class="rounded-circle"
            class="float-left pr-4 pb-3 img-fluid">
            </img>
          
          <p style={{ fontSize: "18px" }}>
           Hello! My name is Stephen Dever, and I am currently a Full Stack Web Development student in
           the University of Pennsylvania’s coding bootcamp. Previously, I worked in and around the higher education arena for over twenty years both at the university level as well as in the private sector, as an independent educational counselor. I hold a bachelor’s degree in English and a master’s degree in Education.
          </p>
          <p style={{ fontSize: "18px" }}>
            In my most recent roles, I was a power user of various educational technology products and 
            platforms which piqued my interest in web development, eventually leading me to this exciting pivot.Now, as I am entering the “Career 2.0” phase of my life I couldn’t be more pleased about what I have already learned and what I will be learning during the rest of this six-month program.
          </p>
 	  <p style={{ fontSize: "18px" }}>
            So far, we have had practical experience with HTML, CSS, JavaScript, jQuery, Bootstrap,
            APIs, Node.js, express, MySQL, GitHub, Heroku, MondoDB, React and more. In addition, we will be continuing our "hands-on" studies and developing many other in-demand programming skills throughout the course of this bootcamp. Stay tuned as I will be updating both the content and the style of this web page frequently!
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};