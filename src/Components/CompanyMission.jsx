import React from 'react'

const CompanyValues = () => {
  return (
    <>

    <section id="CompanySection" className="col">

        <div className="col-lg-9 col-md-11 d-flex" id="mediaQ">

            <div>

                <img src="https://cdn-images.imagevenue.com/8d/a0/e6/ME17UZ8G_o.jpg" alt="pexels-kindel-media-7688460.jpg" className="img img-fluid shadow" width={500} height={500} loading="lazy" id="mediaImg"/>

            </div>

            <div className="text-white" id="mDQ">

                <div className="mx-4 px-5 mt-3" id="textVisualOne">
                    <h1>VISION</h1>
                    <br />
                    <p>A world of proud African brands</p>
                </div>
                <div className="mx-4 px-5 mt-3" id="textVisualTwo">
                    <h1>Mission</h1>
                    <br />
                    <p>To be the leader in visual storytelling that captures the diversity and beauty of our society</p> 
                </div>
            </div>

        </div>

    </section>
      
    </>
  )
}

export default CompanyValues
