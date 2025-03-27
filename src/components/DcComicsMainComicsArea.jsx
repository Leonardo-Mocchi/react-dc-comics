import ComicCard from "./DcComicsMainCard"

function DcComicsMainComicsArea({ comics }) {

    return (
        <div id="comics_cards">
            {comics.map((comic) => (
                <ComicCard key={comic.id} thumb={comic.thumb} series={comic.series} />
            ))}
        </div>
    )
}

export default DcComicsMainComicsArea