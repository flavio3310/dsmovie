import { ReactComponent as GithubIcons } from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return(
    <header>
        <nav className="container">
            <div className="dsmovie-nav-content">
                <h1>DSMovie</h1>
                <a href="https://github.com/flavio3310">
                    <div className="dsmovie-contact-container">
                        <GithubIcons />
                        <p className="dsmovie-contact-link">/devsuperior</p>
                    </div>
                </a>
            </div>
        </nav>
    </header>
    );
}

export default Navbar;