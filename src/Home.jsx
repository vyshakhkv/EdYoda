import React, { useState } from 'react'
import '../src/Home.css'

function Home() {


    const [displayPrice, setPrice] = useState(179);
    let Rate = displayPrice-50
    
   


    return (
        <div className='homepage'>











            <div className="poster">
                <div className="heading">
                    <h1>Access curated courses worth</h1>
                    <br />
                    <h1>₹ <span id='strike'> 18,5000 </span>  at just <span>₹ 99 </span> per year!</h1>
                </div>
                <div className="poster2">
                    <div className="logos">
                        <ul>
                            <li><img src="./images/book.png" alt="" /></li>
                            <li> <img src="./images/time.png" alt="" /> </li>
                            <li><img src="./images/live.png" alt="" /> </li>
                            <li> <img src="./images/Cap.png" alt="" /></li>
                            <li><img src="./images/ads.png" alt="" /> </li>
                        </ul>
                    </div>

                    <div className="list">

                        <ul>
                            <li> <span> 100+</span> Job relevant courses </li>
                            <li><span>20,000+</span> Hours of content </li>
                            <li> <span>Exclusive </span> webinar access </li>
                            <li> Scholarship worth <span> ₹94,500 </span></li>
                            <li><span> Ad Free</span> learning experience </li>
                        </ul>

                    </div>
                </div>



            </div>

            <div className="form">
                <div className="first">
                    <div className="dot1">
                        <h1>1</h1>
                        <p>Sign up</p>
                    </div>
                    <div className="dot2">
                        <h1>2</h1>
                        <p>Subscribe</p>
                    </div>
                    <div className="head">
                        <p>Select your subcription plan</p>

                    </div>

                </div>
                <div className="second">
                    <div className="sec">
                        <div className="one">
                            <h5>Offer Expired</h5>
                        </div>
                        <div className="two">


                            <div className="a">
                                <input type="radio" name='radiovalues' />
                            </div>


                            <div className="b">
                                <p>12 months Subscription</p>

                            </div>
                            <div className="c">
                                <p>Total ₹99</p>
                                <p>₹88 <span id='mo'>/mo</span></p>
                            </div>


                        </div>





                    </div>
                    <div className="thi">

                        <div className="oneA">
                            <h5>Recommended</h5>
                        </div>
                        <div className="two">
                            <div className="a">
                                <input type="radio" value={179} name='radiovalues' onChange={(e) => setPrice(e.target.value)} />

                            </div>
                            <div className="b">
                                <p>12 months Subscription</p>

                            </div>
                            <div className="c">
                                <p>Total ₹179</p>
                                <p>₹15 <span id='mo'>/mo</span></p>
                            </div>


                        </div>






                    </div>
                    <div className="fou">

                        <div className="one">

                        </div>
                        <div className="two">
                            <div className="a">
                                <input type="radio" value={149} name='radiovalues' onChange={(e) => setPrice(e.target.value)} />

                            </div>
                            <div className="b">
                                <p>6 months Subscription</p>

                            </div>
                            <div className="c">
                                <p>Total ₹149</p>
                                <p>₹25 <span id='mo'>/mo</span> </p>
                            </div>


                        </div>

                    </div>
                    <div className="fiv">

                        <div className="one">

                        </div>
                        <div className="two">
                            <div className="a">
                                <input type="radio" name='radiovalues' value={99} onChange={(e) => setPrice(e.target.value)} />

                            </div>
                            <div className="b">
                                <p>3 months Subscription</p>

                            </div>
                            <div className="c">
                                <p>Total ₹99</p>
                                <p>₹33 <span id='mo'>/mo</span> </p>
                            </div>


                        </div>

                    </div>





                </div>
                {/* **************************************************************************************************************************************** */}
                <div className="third">
                    <div className="fee">
                        <li>Subscription fee</li>
                        <li>  ₹{displayPrice}</li>

                    </div>
                    <div className="offer">
                        <li style={{ color: '#DE4313' }}>Limited time offer </li>

                        <li>-₹50</li>
                        <p id="march">Offer valid till 25th March 2023 </p>

                    </div>
                    <div className="total">
                        <li>Total <span id='gst'>(Incl.of 18% GST)</span> </li>

                        <li>₹ {Rate}</li>

                    </div>

                </div>

                <div className="fourth">
                    <li><button className='cancel'>CANCEL</button></li>
                    <li><button className='proceed'>PROCEED TO PAY</button></li>

                </div>
                <div className="fifth">
                    <img src="./images/pay.png" alt="" />
                </div>





            </div>




        </div>
    )
}

export default Home