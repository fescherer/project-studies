import './style.css';

import { ReactComponent as LinkedinIcon } from "./Linkedin.svg";
import { ReactComponent as YoutubeIcon } from "./Youtube.svg";
import { ReactComponent as InstagramIcon } from "./Instagram.svg";

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons"> Felipe Scherer:  
                <a href="https://www.linkedin.com/in/ofelipescherer/" target="_blank"  rel="noopener noreferrer"><LinkedinIcon /></a>

                <a href="https://github.com/ofelipescherer" target="_blank"  rel="noopener noreferrer"><InstagramIcon /></a>
            </div>
            <div className="footer-icons"> Dev Superior:
            <a href="https://youtube.com/devsuperior" target="_blank"  rel="noopener noreferrer"><YoutubeIcon /></a>

            <a href="https://www.linkedin.com/school/devsuperior/" target="_blank"  rel="noopener noreferrer"><LinkedinIcon /></a>

            <a href="https://www.instagram.com/devsuperior.ig/" target="_blank"  rel="noopener noreferrer"><InstagramIcon /></a>
            </div>
        </footer>
    )
}

export default Footer;