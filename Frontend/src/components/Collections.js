
import '../Styles/Collections.css';
const Collections = () => {

    const CollectionCards = [
        {
            title: 'Romantic Dining',
            image: 'romantic-dining.jpg',
            Description: '16 Places'
        },
        {
            title: 'Work Friendly Places',
            image: 'work-friendly-places.jpg',
            Description: '13 Places'
        },
        {
            title: 'Stunning Rooftop',
            image: 'rooftop.jpg',
            Description: '17 Places'
        },
        {
            title: 'Lit Sunday Night',
            image: 'buzzing-nightlife.jpg',
            Description: '17 Places'
        }
    ]

    return (
        <>
            <div className="container">
                <div className="collection mt-4">
                    <h1>Collections</h1>
                </div>
                <div className="collection-subtitle">
                    <h4>Explore curated lists of top restaurants,
                        cafes, pubs, and bars in Thane, based on trends</h4>
                </div>
                <div className="row mt-4">
                    {CollectionCards.map(card => (
                        <div className=" col-md-3 ">
                            <div className="collectioncard">
                                <img src={require('../Assets/' + card.image)} className="rounded"></img>

                                <div className="collectioncard-img-overlay text-light">

                                    <h5 className="card-title-bottom">{card.title}</h5>
                                    <p className="card-text-bottom">{card.Description} </p>

                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </>
    )
}
export default Collections;