function headerplace() {
document.write(`
<div class="container">
    <div class="row">
        <div class="col-md-3 col-lg-3 col-xl-3">
            <div class="mainlogo"><a href="index.html"><img src="images/logo.webp" alt=""></a></div>
        </div>
        <div class="col-md-9 col-lg-9 col-xl-9 dasktop-menutop">
            <!-- desktop menu -->
            <div class="desktop-menu">
                <ul>
                    <li><a href="#">Company</a>
                        <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box companymenu-box">
                                    <div class="megamenubox01"><img src="images/company-menu.webp" alt=""></div>
                                    <div class="megamenubox02">
                                        <h3>Company</h3>
                                        <ul>
                                            <li><a href="overview.html">Overview</a></li>
                                             <li><a href="social-responsibilities.html">Social Responsibilities</a></li>
                                            <li><a href="awards-and-recognitions.html">Awards and Recognitions</a></li>
                                            <!--  <li><a href="core-team.html">Core Team</a></li>
                                          <li><a href="message-from-the-chairman.html">Message from the Chairman</a></li>
                                          <li><a href="financials-highlights">Financials Highlights</a></li> -->
                                            <!-- <li><a href="locations.html">Our Reach </a></li> -->
                                        </ul>
                                        <!--  <ul class="secondchild">
                                            <li><a href="social-responsibilities.html">Social Responsibilities</a></li>
                                            <li><a href="awards-and-recognitions.html">Awards and Recognitions</a></li>
                                        </ul> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Solutions </a>
                        <div class="mega-menu">
                            <div class="mega-cont">
                                <ul class="solotion-menu">
                                    <li><a href="identification.html"><img src="images/solo01.webp" alt="">
                                            <span>Identification</span></a></li>
                                    <li><a href="sustainability.html"><img src="images/solo02.webp" alt="">
                                            <span>Sustainability</span></a></li>
                                    <li><a href="connected-electronics.html"><img src="images/solo03.webp" alt="">
                                            <span>Connected Electronics</span></a></li>
                                    <li><a href="compliance-services.html"><img src="images/solo04.webp" alt="">
                                            <span>Compliance Services</span></a></li>
                                    <li><a href="digital-services.html"><img src="images/solo05.webp" alt="">
                                            <span>Digital Services</span></a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">Businesses</a>
                        <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box">
                                    <div class="megamenubox01"><img src="images/bus-menu.webp" alt=""></div>
                                    <div class="megamenubox02">
                                        <h3>Businesses</h3>
                                        <ul>
                                            <li><a href="high-security-registration-plates.html">High Security
                                                    Registration Plates (HSRP)</a></li>
                                            <li><a href="intelligent-transport-management-systems.html">Intelligent
                                                    Transport Management Systems (ITMS)</a></li>
                                            <li><a href="registered-vehicle-scrapping-facility.html">Registered Vehicle
                                                    Scrapping Facility</a></li>
                                            <li><a href="automated-testing-station.html">Automated Testing Station</a>
                                            </li>
                                            <!-- <li><a href="iot-m2m-services.html">IoT M2M Services</a></li> -->
                                            <li><a href="registration-and-rto-services.html">Registration & RTO
                                                    Services</a></li>
                                            <li><a href="automated-driving-testing-tracks.html">Automated Driving
                                                    Testing Tracks</a></li>
                                                    <li><a href="reflective-safety-solutions.html">Reflective Safety Solutions</a></li>
                                        </ul>
                                        <ul class="secondchild">
                                            <li><a href="doorstep-car-repair-and-rto-services.html">Doorstep Car Repair
                                                    and RTO Services</a></li>
                                            <li><a href="smart-driving-license-and-rc.html">Smart Driving License &
                                                    RC</a></li>
                                            <li><a href="diesel-exhaust-fluid.html">Diesel Exhaust Fluid</a></li>
                                            <li><a href="smart-card-manufacturing.html">Smart Card Manufacturing</a>
                                            </li>
                                            <li><a href="microdots.html">Microdots</a></li>
                                            <li><a href="pollution-under-control.html">Pollution Under Control (PUC)</a>
                                            </li>
                                             <li><a href="fdas-&-fdss-for-buses.html">FDAS & FDSS for Buses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#">News & Media </a>
                      <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box companymenu-box">
                                    <div class="megamenubox01"><img src="images/news-media.webp" alt=""></div>
                                    <div class="megamenubox02">
                                         <h3>News & Media</h3>
                                        <ul>
                                            <li><a href="news-&-media.html">News & Media</a></li>
                                            <li><a href="events.html">Events</a></li>
                                             <li><a href="road-safety-book.html">Road Safety Book</a></li>
                                            <li><a href="https://rosmertatech.com/news-&-media/video-coverage/">Video Coverage</a></li>
                                            
                                        </ul>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                   
                   
                    <li><a href="automotive-manufacturers.html">Customers</a>
                        <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box customersmenu-box">
                                    <div class="megamenubox01"><img src="images/customers-menu.webp" alt=""></div>
                                    <div class="megamenubox02">
                                        <h3>Customers</h3>
                                        <ul class="customersul">
                                            <li><a href="automotive-manufacturers.html">Automotive Manufacturers</a>
                                            </li>
                                            <li><a href="two-wheelers.html">Two Wheelers</a></li>
                                            <li><a href="three-wheelers.html">Three Wheelers</a></li>
                                            <li><a href="automotive-manufacturers.html">Four Wheelers</a></li>
                                            <li><a href="commercial-vehicles.html">Commercial Vehicles</a></li>
                                            <li><a href="agri-machinery.html">Agri-Machinery</a></li>
                                        </ul>
                                        <ul class="secondchild">
                                            <li><a href="state-governments.html">State governments</a></li>
                                            <li><a href="telecom.html">Telecom</a></li>
                                            <li><a href="banking.html">Banking</a></li>
                                            <!--  <li><a href="other-verticals.html">Other Verticals</a></li> -->
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="#/">Investors</a>
                        <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box ">
                                    <div class="megamenubox01"><img src="images/investor-menu.webp" alt=""></div>
                                    <div class="megamenubox02">
                                        <h3>Investors</h3>
                                        <ul>
                                            <li><a href="annual-returns.html">Annual Returns</a></li>
                                            <li><a href="dividend.html">Dividend</a></li>
                                            <li><a href="csr.html">CSR</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><a href="contact-us.html">Contact Us</a>

                        <div class="mega-menu">
                            <div class="mega-cont">
                                <div class="megamenu-box contactemnu-box">
                                    <div class="megamenubox01"><img src="images/cu-menu.webp" alt=""></div>
                                    <div class="megamenubox02">
                                        <div class="contactus-cont">
                                            <div class="contactus-box">
                                                <ul class="conbus-ul">
                                                    <li><a href="business-enquiries.html">Business Enquiries</a></li>
                                                    <li><a href="supply-to-us.html">Supply to Us</a></li>
                                                    <li><a href="join-our-team.html">Join our Team</a></li>
                                                </ul>
                                            </div>
                                            <div class="contactus-box">
                                                <p>Email</p>
                                                <a href="mailto:contact@rosmertatech.com">contact@rosmertatech.com</a>
                                                <div class="contphone">
                                                    <p>Phone No.</p>
                                                    <a href="tel:+91-124-4990800">+91-124-4990800</a>
                                                </div>
                                            </div>
                                            <div class="contactus-box">
                                                <p>Social Media Channels</p>
                                                <div class="manusocial-icon"> <a
                                                        href="https://www.linkedin.com/company/rosmerta-group"
                                                        target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                                                    <!--  <a href=""><i class="fa-brands fa-x-twitter"></i></a>
                                             <a href=""><i class="fa-brands fa-youtube"></i></a>
                                             <a href=""><i class="fa-brands fa-facebook-f"></i></a> -->
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- end desktop menu -->
            <!-- mobile menu -->
            <div class="header">
                <nav id='cssmenu'>
                    <div class="logo"><a href="index.html">Responsive </a></div>
                    <div id="head-mobile"></div>
                    <div class="button"></div>
                    <ul>
                        <li><a href='index.html' class='active'>Company</a>
                            <ul>
                                <li><a href="overview.html">Overview</a></li>
                                <!--  <li><a href="core-team.html">Core Team</a></li>
                                          <li><a href="message-from-the-chairman.html">Message from the Chairman</a></li>
                                          <li><a href="financials-highlights">Financials Highlights</a></li> -->
                                <!-- <li><a href="locations.html">Our Reach </a></li> -->
                                <li><a href="social-responsibilities.html">Social Responsibilities</a></li>
                                <li><a href="awards-and-recognitions.html">Awards and Recognitions</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Solutions </a>
                            <ul>
                                <li><a href="identification.html">Identification</a></li>
                                <li><a href="sustainability.html">Sustainability</a></li>
                                <li><a href="connected-electronics.html">Connected Electronics</a></li>
                                <li><a href="compliance-services.html">Compliance Services</a></li>
                                <li><a href="digital-services.html">Digital Services</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Businesses</a>
                            <ul>
                                <li><a href="high-security-registration-plates.html">High Security Registration Plates
                                        (HSRP)</a></li>
                                <li><a href="intelligent-transport-management-systems.html">Intelligent Transport
                                        Management Systems (ITMS)</a></li>
                                <li><a href="registered-vehicle-scrapping-facility.html">Registered Vehicle Scrapping
                                        Facility</a></li>
                                <li><a href="automated-testing-station.html">Automated Testing Station</a></li>
                                <!-- <li><a href="iot-m2m-services.html">IoT M2M Services</a></li> -->
                                <li><a href="registration-and-rto-services.html">Registration & RTO Services</a></li>
                                <li><a href="automated-driving-testing-tracks.html">Automated Driving Testing Tracks</a>
                                </li>
                                <li><a href="doorstep-car-repair-and-rto-services.html">Doorstep Car Repair and RTO
                                        Services</a></li>
                                <li><a href="smart-driving-license-and-rc.html">Smart Driving License & RC</a></li>
                                <li><a href="diesel-exhaust-fluid.html">Diesel Exhaust Fluid</a></li>
                                <li><a href="smart-card-manufacturing.html">Smart Card Manufacturing</a></li>
                                <li><a href="microdots.html">Microdots</a></li>
                                <li><a href="pollution-under-control.html">Pollution Under Control (PUC)</a></li>
                                 <li><a href="reflective-safety-solutions.html">Reflective Safety Solutions</a></li>
                                  <li><a href="fdas-&-fdss-for-buses.html">FDAS & FDSS for Buses</a></li>
                            </ul>
                        </li>
                        <li><a href="news-&-media.html">News & Media</a>
                             <ul>
                             <li><a href="events.html">Events</a></li>
                             <li><a href="road-safety-book.html">Road Safety Book</a></li>
                              <li><a href="https://rosmertatech.com/news-&-media/video-coverage/">Video Coverage</a></li>
                            
                             </ul>
                        </li>
                        
                        <li><a href="automotive-manufacturers.html">Customers</a>
                            <ul>
                                <li><a href="two-wheelers.html">Two Wheelers</a></li>
                                <li><a href="three-wheelers.html">Three Wheelers</a></li>
                                <li><a href="automotive-manufacturers.html">Four Wheelers</a></li>
                                <li><a href="commercial-vehicles.html">Commercial Vehicles</a></li>
                                <li><a href="agri-machinery.html">Agri-Machinery</a></li>
                                <li><a href="state-governments.html">State governments</a></li>
                                <li><a href="telecom.html">Telecom</a></li>
                                <li><a href="banking.html">Banking</a></li>
                                <!--  <li><a href="other-verticals.html">Other Verticals</a></li> -->

                            </ul>
                        </li>
                        <li><a href="#/">Investors</a>
                            <ul>
                                <li><a href="annual-returns.html">Annual Returns</a></li>
                                <li><a href="dividend.html">Dividend</a></li>
                                <li><a href="csr.html">CSR</a></li>
                            </ul>
                        </li>
                        <li><a href="contact-us.html">Contact Us</a>
                            <ul>
                                <li><a href="business-enquiries.html">Business Enquiries</a></li>
                                <li><a href="supply-to-us.html">Supply to Us</a></li>
                                <li><a href="join-our-team.html">Join our Team</a></li>
                            </ul>
                        </li>

                    </ul>
                </nav>
            </div>
            <!-- end mobile menu -->
        </div>
    </div>
</div>
`);
};

function footerplace() {
document.write(`
<div class="customer-container">
    <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12" data-aos="fade-up" data-aos-delay="200">
            <div class="footer-cont">
                <div class="footerbox">
                    <h3 class="accordion01">Company</h3>
                    <ul class="footer-ul panel01">
                        <li><a href="overview.html">Overview</a></li>
                        <!--  <li><a href="core-team.html">Core Team</a></li>
                                  <li><a href="message-from-the-chairman.html">Message from the Chairman</a></li>
                                  <li><a href="financials-highlights">Financials Highlights</a></li> -->
                        <!-- <li><a href="locations.html">Our Reach </a></li> -->
                        <li><a href="social-responsibilities.html">Social Responsibilities</a></li>
                        <li><a href="awards-and-recognitions.html">Awards and Recognitions</a></li>
                    </ul>
                </div>
                <div class="footerbox">
                    <h3 class="accordion01">Solutions</h3>
                    <ul class="footer-ul panel01">
                        <li><a href="identification.html">Identification</a></li>
                        <li><a href="sustainability.html">Sustainability</a></li>
                        <li><a href="connected-electronics.html">Connected Electronics</a></li>
                        <li><a href="compliance-services.html">Compliance Services</a></li>
                        <li><a href="digital-services.html">Digital Services</a></li>
                    </ul>
                </div>
                <div class="footerbox">
                    <h3 class="accordion01">Businesses</h3>
                    <ul class="footer-ul panel01">
                        <li><a href="high-security-registration-plates.html">High Security Registration Plates
                                (HSRP)</a></li>
                        <li><a href="intelligent-transport-management-systems.html">Intelligent Transport Management
                                Systems (ITMS)</a></li>
                        <li><a href="registered-vehicle-scrapping-facility.html">Registered Vehicle Scrapping
                                Facility</a></li>
                        <li><a href="automated-testing-station.html">Automated Testing Station</a></li>
                        <!-- <li><a href="iot-m2m-services.html">IoT M2M Services</a></li> -->
                        <li><a href="registration-and-rto-services.html">Registration & RTO Services</a></li>
                        <li><a href="automated-driving-testing-tracks.html">Automated Driving Testing Tracks</a></li>
                        <li><a href="doorstep-car-repair-and-rto-services.html">Doorstep Car Repair and RTO Services</a>
                        </li>
                        <li><a href="smart-driving-license-and-rc.html">Smart Driving License & RC</a></li>
                        <li><a href="diesel-exhaust-fluid.html">Diesel Exhaust Fluid</a></li>
                        <li><a href="smart-card-manufacturing.html">Smart Card Manufacturing</a></li>
                        <li><a href="microdots.html">Microdots</a></li>
                        <li><a href="pollution-under-control.html">Pollution Under Control (PUC)</a></li>
                         <li><a href="reflective-safety-solutions.html">Reflective Safety Solutions</a></li>
                         <li><a href="fdas-&-fdss-for-buses.html">FDAS & FDSS for Buses</a></li>
                    </ul>
                </div>
                <div class="footerbox">
                    <h3 class="accordion01"><a href="news-&-media.html">News & Media</a></h3>
                   <!-- <h3 class="accordion01"><a href="events.html">Events</a></h3>
                    <h3 class="accordion01"><a href="road-safety-book.html">Road Safety Book</a></h3>   -->
                     <ul class="footer-ul panel01">
                        <li><a href="events.html">Events</a></li>
                        <li><a href="road-safety-book.html">Road Safety Book</a></li>
                        <li><a href="https://rosmertatech.com/news-&-media/video-coverage/">Video Coverage</a></li>
                        
                   </ul>
                </div>
                <div class="footerbox">
                    <h3 class="accordion01">Customers</h3>
                    <ul class="footer-ul panel01">
                        <li><a href="automotive-manufacturers.html">Automotive Manufacturers</a></li>
                        <li><a href="state-governments.html">State governments</a></li>
                        <li><a href="telecom.html">Telecom</a></li>
                        <li><a href="banking.html">Banking</a></li>
                        <!--  <li><a href="other-verticals.html">Other Verticals</a></li> -->
                    </ul>
                </div>
                <div class="footerbox">
                    <h3 class="accordion01">Contact Us</h3>
                    <ul class="footer-ul panel01">
                        <li><a href="business-enquiries.html">Business Enquiries</a></li>
                        <li><a href="supply-to-us.html">Supply to Us</a></li>
                        <li><a href="join-our-team.html">Join our Team</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </div>
</div>
<div class="bottom-footer">
    <div class="container">
        <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-12">
                <div class="footer-bottom">
                    <p>Copyright ©
                        <script> document.write(new Date().getFullYear()) </script>, Rosmerta. All rights reserved.
                    </p>
                    <p> <a href="refund-and-cancellation-policy.html" class="trems">Refund Policy</a>
					<a href="safe-and-secure-transactions.html" class="trems">Safe Transactions</a>
					<a href="whistleblower-and-anonymous-reporting.html" class="trems">Whistle Blower</a>  
                    <a href="terms-and-conditions.html" class="trems">Terms & Conditions</a>
                    <a class="trems" href="privacy-policy.html">Privacy Policy </a>
                     <!--<a class="trems darkgrey lightertext" href="whistleblower-and-anonymous-reporting.html">Whistle Blower Policy </a>--></p>
                </div>
            </div>
        </div>
    </div>
</div>
`);

}

function reventsplace() {
document.write(`
<div class="container-adtt">
         <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-12">
               <div class="sub-heading aboutevents">
                  <h2 data-aos="fade-up" data-aos-delay="200">Related Events</h2>
                 
               </div>
            </div>
         </div>
         <div class="row">
            <div class="col-md-12 col-lg-12 col-xl-12 business-col" data-aos="fade-up" data-aos-delay="600">
               <div class="content">
                 <div class="slider related-items">


                   <div>
                     <div class="high-box">
                       <div class="events-box">
                         <div class="event-img"><a href="fada-vyapar-event-details.html" target="_blank"><img src="images/fada2026-events.webp" alt=""></a> </div>
                          <div class="event-text">
                                <h4><i class="fa-solid fa-location-dot"></i> Sovereign 2, Hotel Le Méridien</h4>
                                <h3><a href="fada-vyapar-event-details.html" target="_blank">FADA Vyapar Delhi</a></h3>
                                <p>Following the continued success of our previous editions, Vyapar Delhi returns for its 3rd Edition in Delhi</p>
                                <div class="event-date">
                                <p><i class="fa-solid fa-calendar-days"></i> April 17, 2026</p>
                                <a href="fada-vyapar-event-details.html" target="_blank">To Know More</a>
                            </div>
                            </div>
                        </div>
                        </div>
                     </div>

                   <div>
                     <div class="high-box">
                       <div class="events-box">
                         <div class="event-img"><a href="siam-sustainable-mobility-week-event-details.html" target="_blank"><img src="images/siam2026-events.webp" alt=""></a> </div>
                          <div class="event-text">
                                <h4><i class="fa-solid fa-location-dot"></i> India Habitat Centre, New Delhi</h4>
                                <h3><a href="siam-sustainable-mobility-week-event-details.html" target="_blank">SIAM Sustainable Mobility Week</a></h3>
                                <p>SIAM’s Conference on ‘Automotive Material Compliance & Sustainability’ is designed to serve as a pivotal platform </p>
                                <div class="event-date">
                                <p><i class="fa-solid fa-calendar-days"></i> February 16-19, 2026</p>
                                <a href="siam-sustainable-mobility-week-event-details.html" target="_blank">To Know More</a>
                            </div>
                            </div>
                        </div>
                        </div>
                     </div>

                     

                  <div>
                        <div class="high-box">
                       <div class="events-box">
                       <div class="event-img"><a href="acma-automechanika-event-details.html" target="_blank"><img src="images/acmaauto-events.webp" alt=""></a> </div>
                        <div class="event-text">
                           <h4><i class="fa-solid fa-location-dot"></i> Yashobhoomi (IICC), New Delhi</h4>
                           <h3><a href="acma-automechanika-event-details.html" target="_blank">ACMA Automechanika New Delhi 2026</a></h3>
                           <p>ACMA Automechanika New Delhi is India’s leading international trade fair for the automotive aftermarket</p>
                           <div class="event-date">
                            <p><i class="fa-solid fa-calendar-days"></i> February 05-07, 2026</p>
                            <a href="acma-automechanika-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                     </div>
                        </div>
                     </div>

                   <div>
                        <div class="high-box">
                       <div class="events-box">
                       <div class="event-img"><a href="siatexpo-event-details.html" target="_blank"><img src="images/statexpo-events.webp" alt=""></a> </div>
                        <div class="event-text">
                           <h4><i class="fa-solid fa-location-dot"></i> PIECC, Moshi, Pune, India</h4>
                           <h3><a href="siatexpo-event-details.html" target="_blank">SIAT EXPO </a></h3>
                           <p>SIAT 2026, the 19th edition of the Symposium on International Automotive Technology</p>
                           <div class="event-date">
                            <p><i class="fa-solid fa-calendar-days"></i> January 28-30, 2026</p>
                             <a href="siatexpo-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                     </div>
                        </div>
                     </div>

                  <div>
                        <div class="high-box">
                           <div class="events-box">
                       <div class="event-img"><a href="ackodrive-event-details.html" target="_blank"><img src="images/ackodrive-events.webp" alt=""></a> </div>
                        <div class="event-text">
                           <h4><i class="fa-solid fa-location-dot"></i> Chennai</h4>
                           <h3><a href="ackodrive-event-details.html" target="_blank">ACKO Drive </a></h3>
                           <p>The ACKO Drive Awards recognise excellence across India’s automotive industry</p>
                           <div class="event-date">
                            <p><i class="fa-solid fa-calendar-days"></i> December 19-20, 2025</p>
                             <a href="ackodrive-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                     </div>
                        </div>
                     </div>


                    <div>
                        <div class="high-box">
                           <div class="events-box">
                        <div class="event-img"><a href="84thirc-event-details.html" target="_blank"><img src="images/84thasirc-events.webp" alt=""></a> </div>
                        <div class="event-text">
                           <h4><i class="fa-solid fa-location-dot"></i> Janta Maidan Bhubaneswar (ODISHA)</h4>
                           <h3><a href="84thirc-event-details.html" target="_blank">84th Annual Session Indian Road Congress </a></h3>
                           <p>The 84th Annual Session of the Indian Roads Congress (IRC) will be held at Janata Maidan, Bhubaneswar</p>
                           <div class="event-date">
                           <p><i class="fa-solid fa-calendar-days"></i> November 07-10, 2025</p>
                           <a href="84thirc-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                     </div>
                        </div>
                     </div>

                      <div>
                        <div class="high-box">
                          <div class="events-box">
                        <div class="event-img"><a href="gyanmandir-event-details.html" target="_blank"><img src="images/gyan-mandir-events.webp" alt=""></a> </div>
                        <div class="event-text">
                            <h4><i class="fa-solid fa-location-dot"></i> Naraina Vihar, New Delhi</h4>
                            <h3><a href="gyanmandir-event-details.html" target="_blank">Gyan Mandir Khelotsav 2025</a></h3>
                            <p>We are thrilled to have partnered with Gyan Mandir Public School as the Road Safety Partner for Gyan Khelotsav 2025 </p>
                            <div class="event-date">
                            <p><i class="fa-solid fa-calendar-days"></i> November 02, 2025</p>
                            <a href="gyanmandir-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                        </div>
                        </div>
                     </div>



                    <div>
                        <div class="high-box">
                           <div class="events-box">
                        <div class="event-img"><a href="smc-event-details.html" target="_blank"><img src="images/smc-events.webp" alt=""></a> </div>
                        <div class="event-text">
                           <h4><i class="fa-solid fa-location-dot"></i> Indore Madhya Pradesh</h4>
                           <h3><a href="smc-event-details.html" target="_blank">Sustainable Mobility Conclave </a></h3>
                           <p>Rosmerta Technologies is thrilled to be the title sponsor of the Sustainable Mobility Conclave 2025</p>

                           <div class="event-date">
                           <p><i class="fa-solid fa-calendar-days"></i> September 05-06, 2025</p>
                           <a href="smc-event-details.html" target="_blank">To Know More</a>
                        </div>
                        </div>
                     </div>
                        </div>
                     </div>

                     
                     <div>
                        <div class="high-box">
                           <div class="events-box">
                           <div class="event-img"><a href="asdc-event-details.html" target="_blank"><img src="images/asdc-events.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> New Delhi</h4>
                              <h3><a href="asdc-event-details.html" target="_blank">ASDC - Annual Conclave 2025 </a></h3>
                              <p>Rosmerta Technologies is proud to be a Silver Sponsor of the ASDC - Automotive Skills Development Council  </p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 09, 2025</p>
                              <a href="asdc-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                        </div>
                     </div>

                      <div>
                        <div class="high-box">
                          <div class="events-box">
                           <div class="event-img"><a href="fada-event-details.html" target="_blank"><img src="images/event01.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> Hotel Le Meridien, New Delhi</h4>
                              <h3><a href="fada-event-details.html" target="_blank">FADA </a></h3>
                              <p>FADA’s important industry gathering - the 4th Finance & Insurance Summit and 7th Auto Retail Conclave 2025</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 10, 2025</p>
                              <a href="fada-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                        </div>
                     </div>

                    
                     <div>
                        <div class="high-box">
                         <div class="events-box">
                           <div class="event-img"><a href="siam-event-details.html" target="_blank"><img src="images/event02.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> Hotel Taj Palace, New Delhi</h4>
                              <h3><a href="siam-event-details.html" target="_blank">SIAM Annual Convention</a></h3>
                              <p>India's automotive sector stands as a cornerstone of the nation's economic advancement and its broader vision</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 11, 2025</p>
                              <a href="siam-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                        </div>
                     </div>
                     
                      <div>
                        <div class="high-box">
                          <div class="events-box">
                           <div class="event-img"><a href="acma-event-details.html" target="_blank"><img src="images/event03.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> Hotel Taj Palace, New Delhi</h4>
                              <h3><a href="acma-event-details.html" target="_blank">65<sup>th</sup> ACMA ANNUAL SESSION  </a></h3>
                              <p>Through our collaboration with the Government of India, trade alliances, and technological advancements</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 12, 2025</p>
                              <a href="acma-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                          
                        </div>
                     </div>

                       <div>
                        <div class="high-box">
                           <div class="events-box">
                           <div class="event-img"><a href="safe-event-details.html" target="_blank"><img src="images/safe-events.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i>Bharat Mandapam, New Delhi</h4>
                              <h3><a href="safe-event-details.html" target="_blank">26th SAFE Annual Convention</a></h3>
                              <p>Rosmerta Technologies is proud to participate in the 26th SAFE Annual Convention 2025</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 18, 2025</p>
                              <a href="safe-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                          
                        </div>
                     </div>

                      <div>
                        <div class="high-box">
                           <div class="events-box">
                           <div class="event-img"><a href="trade-show-event-details.html" target="_blank"><img src="images/tradeshow-events.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i>India Expo Centre & Mart, Greater Noida</h4>
                              <h3><a href="trade-show-event-details.html" target="_blank">UP International Trade Show</a></h3>
                              <p>The UP International Trade Show 2025 is the flagship B2B and B2C event of the Uttar Pradesh Government</p>
                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> September 25-29, 2025</p>
                              <a href="trade-show-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                          
                        </div>
                     </div>

                                     
                     <div>
                        <div class="high-box">
                          <div class="events-box">
                           <div class="event-img"><a href="imc-event-details.html" target="_blank"><img src="images/event04.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> Yashobhoomi Convention Center, Delhi</h4>
                              <h3><a href="imc-event-details.html" target="_blank">(IMC) India Mobile Congress </a></h3>
                              <p>Rosmerta Technologies is thrilled to participate in India Mobile Congress 2025 known as Asia’s</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i>  October 08-11, 2025</p>
                              <a href="imc-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                         
                        </div>
                     </div>

                       <div>
                        <div class="high-box">
                           <div class="events-box">
                           <div class="event-img"><a href="trafficinfratechexpo-event-details.html" target="_blank"><img src="images/event05.webp" alt=""></a> </div>
                           <div class="event-text">
                              <h4><i class="fa-solid fa-location-dot"></i> Pragati Maidan, New Delhi</h4>
                              <h3><a href="trafficinfratechexpo-event-details.html" target="_blank">Traffic Infratech Expo</a></h3>
                              <p>The Traffic Infra Tech Expo 2025 is set to return this October 2025. This shall bring together India’s</p>

                              <div class="event-date">
                              <p><i class="fa-solid fa-calendar-days"></i> October 07-09, 2025</p>
                              <a href="trafficinfratechexpo-event-details.html" target="_blank">To Know More</a>
                           </div>
                           </div>
                        </div>
                           </div>
                        </div>
                     </div>
               </div>
            </div>
         </div>
     
       </div>
`);
}