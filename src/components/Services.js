import React from 'react'

const Services = () => {
    return (
        <div class="container" style={{ marginTop: "250px" }}>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="section-title">
                        <span>Why choose us?</span>
                        <h2>Offer for you</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="chooseus__item">
                        <div class="icon d-flex justify-content-center" >
                            <i class="fa-solid fa-microscope" style={{ fontSize: "50px" }}></i>
                        </div>
                        <h5 className='fw-bold text-center py-1' >Advanced equipment</h5>
                        <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="chooseus__item">
                        <div class="icon d-flex justify-content-center" >
                            <i class="fa-solid fa-briefcase-medical" style={{ fontSize: "50px" }}></i>
                        </div>
                        <h5 class="text-center fw-bold py-1">Qualified doctors</h5>
                        <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="chooseus__item">
                        <div class="icon d-flex justify-content-center" >
                            <i class="fa-solid fa-book-medical" style={{ fontSize: "50px" }}></i>
                        </div>
                        <h5 class="text-center fw-bold py-1">Certified services</h5>
                        <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="chooseus__item">
                        <div class="icon d-flex justify-content-center" >
                        <i class="fa-solid fa-truck-medical" style={{ fontSize: "50px" }}></i>
                        </div>
                        <h5 class="text-center fw-bold py-1">Emergency care</h5>
                        <p>Lorem ipsum amet, consectetur adipiscing elit, sed do eiusmod tempor cididunt facilisis.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services