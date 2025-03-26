import ComicCard from "./DcComicsMainCard"
import comics from "../data/comics"

function DcComicsMainComicsArea() {

    return (
        <div id="comics_cards">
            {comics.map((comic) => (
                <ComicCard
                    thumb={comic.thumb}
                    series={comic.series}
                />
            ))}
        </div>
    )
}

export default DcComicsMainComicsArea