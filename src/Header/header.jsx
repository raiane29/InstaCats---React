import './header.css'
import logo from "/cat 1.png"

const Header = () => {
    return(
        <>
        <header className='Header'><nav>
        <ul id="ul-header">
            <li>
                <img id='imagem-logo' src={logo} alt="logo" />
            </li>
            <li id='login'>LOGIN</li >
            <li id='registrar'>REGISTRAR</li>
        </ul></nav>
    </header>
    </>
    )
}

export default Header;