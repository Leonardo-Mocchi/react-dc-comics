import DcComicsMainComicsArea from "./DcComicsMainComicsArea"

function DcComicsMainJumbotron({ comics }) {

    return (
        <div>
            <div id="jumbotron_top"></div>
            <div id="jumbotron_content">
                <div className="page_margins">
                    <div id="current_series_tag">CURRENT SERIES</div>

                    <DcComicsMainComicsArea comics={comics} />

                    <button id="load_more_btn" type="button">LOAD MORE</button>
                </div>
            </div>
        </div>
    )
}

export default DcComicsMainJumbotron