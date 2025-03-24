import DigiComics from '../assets/img/buy-comics-digital-comics.png'
import Merch from '../assets/img/buy-comics-merchandise.png'
import ShopLocator from '../assets/img/buy-comics-shop-locator.png'
import Subscription from '../assets/img/buy-comics-subscriptions.png'
import DcVisa from '../assets/img/buy-dc-power-visa.svg'



function DcComicsMainJumbotron() {

    return (
        <div id="jumbotron_links_section">
            <div className="page_margins">
                <ul id="jumbotron_links">
                    <li>
                        <img width={55} src={DigiComics} alt="" />
                        <p>DIGITAL COMICS</p>
                    </li>
                    <li>
                        <img width={55} src={Merch} alt="" />
                        <p>DC MERCHANDISE</p>
                    </li>
                    <li>
                        <img width={55} src={Subscription} alt="" />
                        <p>SUBSCRIPTION</p>
                    </li>
                    <li>
                        <img width={40} src={ShopLocator} alt="" />
                        <p>COMIC SHOP LOCATOR</p>
                    </li>
                    <li>
                        <img width={60} src={DcVisa} alt="" />
                        <p>DC POWER VISA</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default DcComicsMainJumbotron
