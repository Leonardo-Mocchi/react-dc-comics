import DcLogo from '../assets/img/dc-logo.png'

function DcHeader() {

    return (
        <header>
            <img src={DcLogo} alt="" />

            <ul id='site_map'>
                <li>CHARACTERS</li>
                <li>COMICS</li>
                <li>MOVIES</li>
                <li>TV</li>
                <li>GAMES</li>
                <li>COLLECTIBLES</li>
                <li>VIDEOS</li>
                <li>FANS</li>
                <li>NEWS</li>
                <li>SHOP</li>
            </ul>
        </header>

    )
}

export default DcHeader


/* <img src={DCLogo} alt="" />*/