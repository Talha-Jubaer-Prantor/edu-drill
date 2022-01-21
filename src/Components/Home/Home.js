import React from 'react';
import './Home.css'
const Home = () => {
    return (
        <div>

{/* Top Bar Starts Here */}
<nav class="navbar navbar-light bg-light top-bar">
  <a className="navbar-brand" href="#">
    <span style={{color:'#647C90'}} ><h2><b>Edu Drill</b></h2></span> 
  </a>
</nav>
{/* Top Bar Ends Here */}

{/*Home Section-1 Starts Here */}

<div class='section-1 row'>
        <div class=' sec-1-left col-lg-7 col-sm-12 '>
            <h1><b style={{color:'#2a73cc'}}>Edu-Drill</b></h1>
            <h3 style={{fontSize:'35px'}}><b>Get $100 off a year of job-ready learning with Edu-Drill Plus</b></h3>
            <p style={{fontSize:'35px'}}>Receive a year of unlimited access to 7,000+ courses from world-class universities and companies for one all-inclusive subscription price. Success is yours. Start today.</p>
            <span class='btn-line d-flex'><button class="plus-btn"><b >Try Edu-Drill Plus</b></button><b style={{fontSize:'20px',paddingTop:'10px',paddingLeft:'3px'}}>$299 today,</b><span style={{paddingTop:"15px"}}>then $399/year</span></span>
            <br />
            <p>Limited time offer, 14-day money-back guarantee</p>
            <p>Claim this special limited-time offer by January 31, 2022. Valid for new Coursera Plus subscribers only.</p>
            </div>

        <div class='col-lg-5 col-sm-12'>
            <img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://images.ctfassets.net/wp1lcwdav1p1/7eofiKh0L33eDguxUXm8zv/66e6fb7a965f277703346606ab29dcf8/C__Offer_2.png?auto=format%2Ccompress&dpr=1&w=477&h=429" alt="" />
        </div>

</div>
{/*Home Section-1 Ends Here */}





{/*Home Section-2 STARTS Here */}
        <div class="section-2">
            <p>Learn from <b>170+</b> leading universities and companies with Coursera Plus</p>
            </div>
{/*Home Section-2 Ends Here */}




{/*Home Section-3 STARTS Here */}

            <div class="section-3">
                <div class='sec-3-content'>
                <p>Invest in your professional goals with Coursera Plus</p>
                <p>Get unlimited access to over 90% of courses, Guided Projects, Specializations, and Professional <br />
                 Certificates on Coursera, taught by top instructors from leading universities and companies.</p>
                </div>

                <div class='row' style={{textAlign:'center'}}>
                    <div class='col-lg-3 col-sm-12'><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/compass.png?auto=format%2Ccompress&dpr=1&w=&h=55" alt="" />
                    <h3>Learn anything</h3>
                    <p>Explore any interest or trending topic, take prerequisites, and advance your skills</p>
                    </div>
                    <div class='col-lg-3 col-sm-12'><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/money.png?auto=format%2Ccompress&dpr=1&w=&h=47" alt="" />
                    <h3>Save money</h3>
                    <p>Spend less money on your learning if you plan to take multiple courses this year</p>
                    </div>
                    <div class='col-lg-3 col-sm-12'><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/head.png?auto=format%2Ccompress&dpr=1&w=&h=55" alt="" />
                    <h3>Flexible learning</h3>
                    <p>Learn at your own pace, move between multiple courses, or switch to a different course</p>
                    </div>
                    <div class='col-lg-3 col-sm-12'><img src="https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/coursera_plus/landing_page/certificate.png?auto=format%2Ccompress&dpr=1&w=&h=40" alt="" />
                    <h3>Unlimited certificates</h3>
                    <p>Earn a certificate for every learning program that you complete at no additional cost</p>
                    </div>

                </div>
        
            </div>
{/*Home Section-3 Ends Here */}


</div>

    );
};

export default Home;