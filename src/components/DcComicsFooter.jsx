import FooterLogo from "../assets/img/dc-logo-bg.png"
import FacebookLogo from "../assets/img/footer-facebook.png"
import TwitterLogo from "../assets/img/footer-twitter.png"
import YoutubeLogo from "../assets/img/footer-youtube.png"
import PinterestLogo from "../assets/img/footer-pinterest.png"
import PeriscopeLogo from "../assets/img/footer-periscope.png"




function DcFooter() {

    return (
        <footer>
            <div id="footer_links">
                <div className="page_margins">
                    <div id="links_columns">
                        <div>
                            <ul className="footer_link_list">
                                <h2 className="footer_title">DC COMICS</h2>

                                <li>Characters</li>
                                <li>Comics</li>
                                <li>Movies</li>
                                <li>TV</li>
                                <li>Games</li>
                                <li>Videos</li>
                                <li>News</li>
                            </ul>
                            <ul className="footer_link_list">
                                <h2 className="footer_title">SHOP</h2>

                                <li>Shop DC</li>
                                <li>Shop DC Collectibles</li>
                            </ul>
                        </div>

                        <ul className="footer_link_list">
                            <h2 className="footer_title">DC</h2>

                            <li>Terms Of Use</li>
                            <li>Privacy Policy (New)</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Subscriptions</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>

                        <ul className="footer_link_list">
                            <h2 className="footer_title">SITES</h2>

                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
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