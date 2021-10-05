//import logo from './logo.svg';
//import './App.css';
//import './script3.js';

function App() {
  return (
    <div>
       {/* header */}
        <div className="row   justify-content-end">
          <div className="title col-lg-4 col-md-5 col-5">
            <h1>Irma</h1>
          </div>           
        </div>  
        {/* header over  */}


        {/* container */}
        <div className="container ">

        {/* <!--商品資訊-->    */}
        <div className=" humberger ">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>    
        <div className="mainpage">
            <div className="row area_imform">
                <div className="A_women col-lg-1 col-md-1 col-sm-1">
                    <img className="women_img" src="img/img_women.png" alt=""/>
                </div>
                <div className="B_small_picture col-lg-2 col-md-3 col-sm-3">
                        <div className="slider-nav">
                            <div><img className="slider_img " src="./img/img_green_1.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_2.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_3.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_4.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_5.jpg" alt=""/></div>
                        </div>  
                </div>
                <div className="C_big_picture col-lg-5 col-md-8 col-sm-8">
                        <div className="main">
                            <div className="slider-for">
                                <div><img className="slider_img" src="img/img_greenbig_1.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_2.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_3.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_4.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_5.jpg" alt=""/></div>
                            </div>  
                        </div>
                </div>
                <div className="D_content col-lg-4 col-md-12 col-sm-12">
                    <div className="text row">
                        <div className="text_font ">Floral Print Organza Tie-neck Shirt Dress </div>
                        <br />
                        <div className="text_font2">HKD12,200.00</div>
                    </div>
                    <div className="data row ">
                        <div className="data_icon col-lg-3 col-md-3 col-sm-3">
                            <div className="icon_tag">
                                <img className="icon_blue" src="./img/icon_open-book.png" alt=""/>
                            </div>
                            <div className="icon_tag">
                                <img className="icon_yellow" src="./img/icon_washing.png" alt=""/>
                            </div>
                            <div className="icon_tag">
                                <img className="icon_gray" src="./img/icon_ruler.png" alt=""/>
                            </div>
                        </div>
                        <div className="data_description col-lg-9 col-md-9 col-sm-9">
                            <div className="description_blue">
                                <p>A softly tailored shirt dress
                                in airy organza, abloom
                                with a painterly floral print.
                                A lace-trimmed silk slip
                                lines the design.</p>
                            </div>
                            <div className="description_yellow">
                                <p>Outer: 64% silk, 36% polyamide</p>
                                <p>Specialist dry clean</p>
                            </div>
                            <div className="description_gray">
                                <p>Colour Lawn green</p>
                                <p>Size &nbsp;02 &nbsp;04 &nbsp;06 &nbsp;08 &nbsp;10 &nbsp;12 &nbsp;14 &nbsp;16</p>
                            </div>
                            <div className="description_white">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        {/* <!--更多商品--> */}
        <div className="row moreitems_title">
            <div className="moreitems_title_text col-lg-6 col-md-6 col-sm-6 ">
                <h2 className="moreitems_title_text_">More Items</h2>
            </div>
        </div>
        <div className="row moreitems">
            <div className="moreitems_pic col-lg-3 col-md-6 col-sm-12">
                <img className="moreitems_pic_set" src="img/img_item_1.jpg" alt=""/>
            </div>

            <div className="moreitems_pic col-lg-3 col-md-6 col-sm-12">
                <img className="moreitems_pic_set" src="img/img_item_2.jpg" alt=""/>
            </div>

            <div className="moreitems_pic col-lg-3 col-md-6 col-sm-12">
                <img className="moreitems_pic_set" src="img/img_item_3.jpg" alt=""/>
            </div>

            <div className="moreitems_pic col-lg-3 col-md-6 col-sm-12">
                <img className="moreitems_pic_set" src="img/img_item_4.jpg" alt=""/>
            </div>
        </div>
        </div>
    </div>
    {/* container over */}



    {/* footer */}
    <div className="container-fluid mainpage">
        
        <div className="row footer">
          
            <div className="meetirma">
                <p className="footer_title">MEET IRMA</p>
                <p className="footer_text">About Irma</p>
                <p className="footer_text">Career</p>
                <p className="footer_text">Legal</p>
                <p className="right">©2018 Yue Chu-Cheng </p>
            </div>
            <div className="help">
                <p className="footer_title">MAY WE HELP YOU?</p>               
                <p className="footer_text">Contact Us</p>              
                <p className="footer_text">Shopping Services</p>               
                <p className="footer_text">Product Care</p>               
                <p className="footer_text">How to Shop Irma.com</p>
            </div>
            <div className="find">
                <p className="footer_title">FIND US ON</p>
                <div className="cicon">
                <img className="footer_img_f"  src="./img/icon_facebook.png" alt=""/>
                <img className="footer_img" src="./img/icon_instagram.png" alt=""/>
                <img className="footer_img" src="./img/icon_twitter.png" alt=""/>
                <img className="footer_img" src="./img/icon_pinterest.png" alt=""/>
            </div>
            </div>
            <div className="col-lg-3"></div>
        </div>
    </div>
    {/* footer over */}




    <script src='./js/script3.js'></script> 

    </div>
  );
}

export default App;
