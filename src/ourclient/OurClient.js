import React from 'react'
import ClientData from './ClientData'

const OurClient = () => {
  return (
    <div> 
   <section class="wrapper  bg_color3 py-32 ">
    <div class=" py-32 mx-auto">
      <div class="row flex-column align-items-center  ">
        <div class="col-lg-5 col-md-10 col-xs-12   ">
          <h5 class="space text-color-development_color_1 py-8">
            TESTIMONIALS
          </h5>
          <h3 class="h3 content py-8">
            What Our Client says
          </h3>
          <p class="p content py-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id pharetra ex. Mauris fringilla et tellus ac
            porttitor.
          </p>
        </div>
      </div>
      <div class="row justify-content-evenly">
        {ClientData.map((item)=>{
          return(

            <div class="col-lg-4 col-md-8 col-xs-12  px-lg-20 py-lg-24 px-md-48 py-md-36 px-16 py-16">
              <div class=" cardteam px-lg-28 py-lg-24 px-18 py-16  border-radius-10">
              <div class="display-flex justify-content-center py-8  border-bottom mx-lg-16">
                <div class="  ">
                  <img src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/Travel Agency/men1.png"
                    alt="image" class="border-circle" />
                </div>
                <div class=" pl-16">
                  <h6 class=" teamname font-weight-700 text-color-development_color_4  ">
                    {item.name}
                  </h6>
                  <p class="body1 text-color-development_color_3">
                    {item.title}
                  </p>
                </div>
              </div>
              <p class="body1 font-weight-300 text-color-development_color_3 py-10 ">
              {item.des}
              </p>
              <div class="">
                <div class="text-align-end">
                  <img src="https://grorapidassets.s3.amazonaws.com/images/webinartemplate/Travel Agency/Icon Color.png"
                    alt="image" class="" />
                </div>
              </div>
            </div>
          </div>
          )
        }) }  
      </div>
    </div>
  </section>
  </div>
  )
}

export default OurClient