import DcLogo from '../assets/img/dc-logo.png'

function DcHeader() {

    return (
        <header className='page_margins'>

            <img height={82} src={DcLogo} alt="" />

            <ul id='site_map'>
                <li> CHARACTERS
                    <div className='highlight_bar'></div>
                </li>
                <li>COMICS
                    <div id='active_bar' className='highlight_bar'></div>
                </li>
                <li>MOVIES
                    <div className='highlight_bar'></div>
                </li>
                <li>TV
                    <div className='highlight_bar'></div>
                </li>
                <li>GAMES
                    <div className='highlight_bar'></div>
                </li>
                <li>COLLECTIBLES
                    <div className='highlight_bar'></div>
                </li>
                <li>VIDEOS
                    <div className='highlight_bar'></div>
                </li>
                <li>FANS
                    <div className='highlight_bar'></div>
                </li>
                <li>NEWS
                    <div className='highlight_bar'></div>
                </li>
                <li>SHOP
                    <div className='highlight_bar'></div>
                </li>
            </ul>
        </header>

    )
}

export default DcHeader


/* <img src={DCLogo} alt="" />*/