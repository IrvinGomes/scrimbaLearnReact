export function Card(props: any){
    console.log(props.card)
    let badgeText
    if(props.card.openSpots ===0) badgeText="SOLD OUT"
    else if(props.card.stats.ctr === 'online') badgeText="ONLINE"
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src="vite.svg" alt="cardImage" className="cardImage"/>
            <div className="cardStats">
                <img src="vite.svg" alt="star" className="cardStar"/>
                <span>{props.card.stats.stars}</span>
                <span>{props.card.stats.qtd}</span>
                <span>{props.card.stats.ctr.toUpperCase()}</span>
            </div>
            <p>{props.card.description}</p>
            <p>{props.card.price}</p>
        </div>
    )
}
export default Card;