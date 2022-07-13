const NavBar = (props) => {
    return(
        <div>
            <h1>{props.navHeading}</h1>
        <ul>
            <li><a href="#">Beranda</a></li>
            <li><a href="#">about</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">{props.navValue}</a></li>
            <li><a href="#">{props.navBarValue}</a></li>
        </ul>
    </div>
    )
}

export default NavBar