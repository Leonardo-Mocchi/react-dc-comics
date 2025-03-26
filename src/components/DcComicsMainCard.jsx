function ComicCard({ thumb, series }) {

    return (
        <div className="card">
            <img src={thumb} alt={series} />
            <p>{series}</p>
        </div>
    )
}

export default ComicCard

/* height={188} width={185}  */