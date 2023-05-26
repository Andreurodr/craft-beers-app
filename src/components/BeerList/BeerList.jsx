

const BeerList = ({beers}) => {
    const renderBeers = () => {
        return beers.map((beer) => <article className="beer_card" key={beer.id}>
            <img className="beer_img" src={beer.image_url}></img>
            <h4>{beer.name}</h4>
            <h5>{beer.tagline}</h5>
            <p>{beer.description}</p>
        </article>)
    }

    return(
        <section className="section">
        {renderBeers()}
        </section>
    )
}

export default BeerList


