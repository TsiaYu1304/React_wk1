function ProductSlider() {
    return (
        
        <div>
            {/* <!--商品資訊-->    */}
           <div className="row area_imform">
                <div className="A_women col-lg-1 col-md-1 col-sm-1">
                    <img className="women_img" src="img/img_women.png" alt=""/>
                </div>
                {/* <div className="B_small_picture col-lg-2 col-md-3 col-sm-3">
                        <div className="slider-nav">
                            <div><img className="slider_img " src="./img/img_green_1.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_2.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_3.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_4.jpg" alt=""/></div>
                            <div><img className="slider_img spacing" src="./img/img_green_5.jpg" alt=""/></div>
                        </div>  
                </div> */}
                <div className="C_big_picture col-lg-5 col-md-8 col-sm-8">
                        <div className="main">
                            <div className="slider-for">
                                <div><img className="slider_img" src="img/img_greenbig_1.jpg" alt=""/></div>
                                {/* <div><img className="slider_img" src="img/img_greenbig_2.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_3.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_4.jpg" alt=""/></div>
                                <div><img className="slider_img" src="img/img_greenbig_5.jpg" alt=""/></div> */}
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
        </div>
    );
}
export default ProductSlider;

