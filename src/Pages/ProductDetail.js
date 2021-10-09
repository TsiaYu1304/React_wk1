import Header from "../components/Header"
import Footer from "../components/Footer"
import ProductSlider from "../components/ProductSlider";
import MoreItem from "../components/MoreItem";
function ProductDetail(){

    return(
        <div>
            <Header />
            {/* container */}
            <div className="container ">
                <div className="mainpage">
                    <ProductSlider />
                    <MoreItem />
                </div>
            </div>
            {/* container over */}
            <Footer />
        </div>
    );
}
export default ProductDetail;