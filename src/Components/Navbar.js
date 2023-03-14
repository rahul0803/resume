
const Navbar = (props) => (

    <nav className="navbar">
        <div className="heading-div">
            <h1 className="heading"> Rahul Roy </h1>
        </div>

        {props.children}                                                             

        <div className="menu">
            <a href="#"> About </a>
            <a href="#"> Contact </a>
            <a href="#"> Blog </a>
            <a href="#"> Home </a>
            <a href="#"> Projects </a>
        </div>
    </nav>

)


export default Navbar;