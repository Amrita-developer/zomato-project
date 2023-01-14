const Navbar=()=>
{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-fixed-top ">
                    <button
                        className="navbar-toggler navbar-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className=" collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-4" >
                            <li className="nav-item active ">
                                <a href="#" className="nav-link">Investor Relations</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Add Restaurant</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Login</a>
                            </li>

                            <li className="nav-item">
                                <a href="#" className="nav-link">Sign up</a>
                            </li>
                        </ul>
                    </div>
                </nav>
        </>
    )
}
export default Navbar;