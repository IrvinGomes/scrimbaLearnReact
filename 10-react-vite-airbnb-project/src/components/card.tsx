export function Card(props: any){
    console.log(props.card)
    return (
        <div className="card">
            <img src="vite.svg" alt="cardImage" className="cardImage"/>
            <div className="cardStats">
                <img src="vite.svg" alt="star" className="cardStar"/>
                <span>{props.card.stats.stars}</span>
                <span>{props.card.stats.qtd}</span>
                <span>{props.card.stats.ctr}</span>
            </div>
            <p>{props.card.description}</p>
            <p>{props.card.price}</p>
        </div>
    )
}
export default Card;