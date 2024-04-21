import React from 'react'

const ContactPage = () => {
  return (
    <div id="contactPg">
        <div className="container mt-5 pt-3">
            <div className="row align-items-center g-lg-5 py-5">
                <div className="col-lg-7 text-center text-lg-start">
                    <div className="display-3 fw-bold lh-1 text-body-emphasis mb-3">Questions?<br /> 
                        <p id="text">Let's Get In Touch</p>
                    </div>
                    <br />
                    <div className="container d-flex justify-content-evenly" id="mediaQQ">
                        {/* <p className="d-flex justify-content-evenly fs-6"><i className="fa-solid fa-location-dot fa-xl mx-2" style={{color: "black"}}></i>1 Mile-end Road, Diep River<br/> Cape Town, South Africa</p> */}
                        <br/>
                        <p className="d-flex justify-content-evenly fs-6"><i className="fa-solid fa-phone-volume fa-xl mx-2" style={{color: "black"}}></i>Contact No. <br/> +27 67 995 9955</p>
                        <br />
                        <p className="d-flex justify-content-evenly fs-6"><i className="fa-solid fa-envelope fa-xl mx-2" style={{color: "black"}}></i>Email address : <br/> jkanticphotography@gmail.com</p>
                    </div>
                    <br />
                    <div className="d-flex justify-content-evenly">   
                        <a href="https://www.instagram.com/jkantic_/" className="icon-icon" id="ic"><i className="fa-brands fa-instagram fa-xl" style={{color: "black"}}></i></a>
                        
                        <a href="https://facebook.com" className="icon-icon" id="ic"><i className="fa-brands fa-facebook fa-xl" style={{color: "black"}}></i></a>

                        <a href="https://wa.me/+27 679959955" className="icon-icon" id="ic"><i className="fa-brands fa-whatsapp fa-xl" style={{color: "black"}}></i></a>
                    </div>
                </div>
                <div className="col-md-10 mx-auto col-lg-5">
                    <form className="p-4 p-md-5" 
                    action=""
                    method="POST"
                    >
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-1 border-dark-subtle border-top-0 border-start-0 border-end-0 rounded-0" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Name</label>
                            {/* <div v-if="formErrors.name" className="text-danger">{{ formErrors.name }}</div> */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control border-1 border-dark-subtle border-top-0 border-start-0 border-end-0 rounded-0" id="floatingEmailAdd" placeholder="Password" name="floatingEmail"/>
                            <label htmlFor="floatingEmail">Email</label>
                            {/* <div v-if="formErrors.email" className="text-danger">{{ formErrors.email }}</div> */}
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control border-1 border-top-0 border-start-0 border-end-0 border-dark-subtle rounded-0" id="floatingYourMessage" placeholder="Password" name="floatingMessage" />
                            <label htmlFor="floatingMessage">Your message</label>
                            {/* <div v-if="formErrors.textarea" className="text-danger">{{ formErrors.textarea }}</div> */}
                        </div>
                        <button className="w-100 btn btn-lg border-1" type="submit">Contact</button>
                        <br />
                        <p className="d-flex justify-content-end mt-5 fs-5">JKANTIC Photography 2024 &copy; | All rights reserved</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage;
