function MoreItem() {
    return (
        <div>
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
    );
}
export default MoreItem;