import FooterLogo from "../assets/img/dc-logo-bg.png"
import FacebookLogo from "../assets/img/footer-facebook.png"
import TwitterLogo from "../assets/img/footer-twitter.png"
import YoutubeLogo from "../assets/img/footer-youtube.png"
import PinterestLogo from "../assets/img/footer-pinterest.png"
import PeriscopeLogo from "../assets/img/footer-periscope.png"

function DcFooter({ links }) {

    return (
        <footer>
            <div id="footer_links">
                <div className="page_margins">
                    <div id="links_columns">
                        <div>
                            <ul className="footer_link_list">
                                <h2 className="footer_title">DC COMICS</h2>
                                {links.dcComics.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                            <ul className="footer_link_list">
                                <h2 className="footer_title">SHOP</h2>
                                {links.shop.map((link, index) => (
                                    <li key={index}>{link}</li>
                                ))}
                            </ul>
                        </div>

                        <ul className="footer_link_list">
                            <h2 className="footer_title">DC</h2>
                            {links.dc.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>

                        <ul className="footer_link_list">
                            <h2 className="footer_title">SITES</h2>
                            {links.sites.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    </div>

                    <img src={FooterLogo} alt="" />
                </div>
            </div>

            <div id="footer_social">
                <div className="page_margins">
                    <span>SIGN UP NOW!</span>
                    <div>
                        <p>FOLLOW US</p>
                        <img src={FacebookLogo} alt="" />
                        <img src={TwitterLogo} alt="" />
                        <img src={YoutubeLogo} alt="" />
                        <img src={PinterestLogo} alt="" />
                        <img src={PeriscopeLogo} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default DcFooter