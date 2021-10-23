import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            {/* header */}
           
            <div className="row   justify-content-end">
                <div className="title col-lg-4 col-md-5 col-5 title">
                <Link to ='/'>
                    <h1>Irma</h1>
                    </Link>
                </div>
            </div>
            {/* header over  */}
        </div>
    );
}
export default Header;