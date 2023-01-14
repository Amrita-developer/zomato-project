import "../../Styles/Footer.css"
const Footer = () => {
    return (
       

            <div className="page-footer font-small mt-4" >

               
                <div className="container  text-md-left">
                    <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"}
                        height="25"
                        width="100" class="mt-4 ml-3" />
                    
                    <div className="row  mt-3 ">


                       
                        <div className="col-md-2 mx-auto">


                            
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-2">ABOUT ZOMATO</h6>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#">Who We Are</a>
                                </li>
                                <li>
                                    <a href="#!">Blog</a>
                                </li>
                                <li>
                                    <a href="#!">Work With US</a>
                                </li>
                                <li>
                                    <a href="#!">Report Fraud</a>
                                </li>
                            </ul>

                        </div>
                       

                        <hr className="clearfix w-100 d-md-none"/>

                           
                            <div className="col-md-2 mx-auto">

                               
                                <h6 className="font-weight-bold text-uppercase mt-3 mb-2">zomaverse</h6>

                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#!">Zomato</a>
                                    </li>
                                    <li>
                                        <a href="#!">Feeding India</a>
                                    </li>
                                    <li>
                                        <a href="#!">Hyperpure</a>
                                    </li>
                                    <li>
                                        <a href="#!">zomaland</a>
                                    </li>
                                </ul>

                            </div>
                            

                            <hr className="clearfix w-100 d-md-none"/>

                                
                                <div className="col-md-2 mx-auto">

                                    
                                    <h6 className="font-weight-bold text-uppercase mt-3 mb-2">for restaurants</h6>

                                    <ul className="list-unstyled">
                                        <li>
                                            <a href="#!">Partener With Us</a>
                                        </li>
                                        <li>
                                            <a href="#!">Apps For You</a>
                                        </li>

                                    </ul>

                                </div>
                                {/* <!-- Grid column --> */}

                                <hr className="clearfix w-100 d-md-none"/>

                                    <div className="col-md-2 mx-auto">

                                      
                                        <h6 className="font-weight-bold text-uppercase mt-3 mb-2">learn more</h6>

                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#!">Privacy</a>
                                            </li>
                                            <li>
                                                <a href="#!">Security</a>
                                            </li>
                                            <li>
                                                <a href="#!">Terms</a>
                                            </li>
                                            <li>
                                                <a href="#!">Sitemap</a>
                                            </li>
                                        </ul>
                                    </div>
                                   
                                    <hr className="clearfix w-100 d-md-none"/>
                                      
                                        <div className="col-md-2 mx-auto">
                                           
                                            <h6 className="font-weight-bold text-uppercase mt-3 mb-2">Social links</h6>
                                            <ul className="social-network social-circle">
                                                <li><a href="#" class="icoFacebook" title="Facebook"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#" class="icoLinkedin" title="Linkedin"><i class="fa fa-linkedin"></i></a></li>
                                                <li><a href="#" class="icoInstagram" title="Instagram"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#" class="icoTwitter" title="Twitter"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#" class="icoYouTube" title="Youtube"><i class="fa fa-youtube"></i></a></li>
                                            </ul>
                                            
                                            <ul className="list-unstyled mt-3">
                                                <li>
                                                    <a href="#">
                                                        <img src={require("../../Assets/app-store.png")} height="40" width="100" />
                                                    </a>
                                                </li>
                                                <li className="mt-3">
                                                    <a href="#">
                                                        <img src={require("../../Assets/google-play-badge.png")} height="40" width="100" />
                                                    </a>
                                                </li>




                                            </ul>
                                        </div>
                                    </div>

                                    <hr className="mt-4 ml-3" />
                                    <div className="footer-copyright ml-3 mb-3">By continuing past this page, you agree to our
                                        Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners.
                                        2008-2022 © Zomato™ Ltd. All rights reserved.
                                    </div>
                                </div>

                            </div>





                       
                        )
}
                        export default Footer;