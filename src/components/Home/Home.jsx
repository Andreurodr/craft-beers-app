const Home = () => {

    const gif = require("../../images/cheers-salud.gif")

    return (
    <>
        <h1>The Craft Beer Hotspot</h1>
        <p>Where the brewery lovers find each other</p>
        <img className="img_home" src={gif} alt="cheers"/>
    </>
    )
}

export default Home