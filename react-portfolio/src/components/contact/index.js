import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const ContactInfo = () => {
    return (
        <MDBContainer className="mt-5">
            <MDBRow>
                <MDBCol md="12" className="text-center">
                    <h2>Contact Me</h2>
                    <hr class="solid bg-dark" />

                    <hr className="hr-light w-25" />
                    <h3>Phone</h3>
                    <hr className="hr-dark w-25" />
                    <a href="tel:610-742-7738">
                        <MDBIcon icon="phone-alt" /> 610-742-7738
                    </a>

                    <hr className="hr-light w-25" />
                    <h3>email</h3>
                    <hr className="hr-dark w-25" />
                    <a href="mailto:stephendever.cr@gmail.com">
                        <MDBIcon icon="envelope" /> stephendever.cr@gmail.com
                    </a>

                    <h3>LinkedIn</h3>
                    <hr className="hr-dark w-25" />
                    <a href="https://www.linkedin.com/in/stephendever/">
                        <MDBIcon fab icon="linkedin-in" />
                    </a>

                    <h3>GitHub</h3>
                    <hr className="hr-dark w-25" />
                    <a href="https://github.com/stevedev75">
                    <MDBIcon fab icon="github"/>
                    </a>

        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
};
export default ContactInfo;