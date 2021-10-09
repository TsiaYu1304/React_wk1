function Footer() {
    return (
        <div>
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
        </div>
    );
}
export default Footer;