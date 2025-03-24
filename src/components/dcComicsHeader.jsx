import DcLogo from '../assets/img/dc-logo.png'

function DcHeader() {

    return (
        <header className='page_margins'>

            <img height={82} src={DcLogo} alt="" />

            <ul id='site_map'>
                <li>
                    <p>CHARACTERS</p>
                    <div className='highlight_bar'></div>
                </li>

                <li id='active_element'>
                    <p>COMICS</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>MOVIES</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>TV</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>GAMES</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>COLLECTIBLES</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>VIDEOS</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>FANS</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>NEWS</p>
                    <div className='highlight_bar'></div>
                </li>

                <li>
                    <p>SHOP</p>
                    <div className='highlight_bar'></div>
                </li>
            </ul>
        </header>

    )
}

export default DcHeader


/* <img src={DCLogo} alt="" />*/