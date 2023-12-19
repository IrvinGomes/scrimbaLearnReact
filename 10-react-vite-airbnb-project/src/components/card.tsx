export function Card(card: any){
    console.log(card)
    let badgeText
    if(card.openSpots ===0) badgeText="SOLD OUT"
    else if(card.stats.ctr === 'online') badgeText="ONLINE"
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src="vite.svg" alt="cardImage" className="cardImage"/>
            <div className="cardStats">
                <img src="vite.svg" alt="star" className="cardStar"/>
                <span>{card.stats.rating}</span>
                <span>({card.stats.reviewCount})</span>
                <span>*{card.location.toUpperCase()}</span>
            </div>
            <p>{card.description}</p>
            <p>{card.price}</p>
        </div>
    )
}
export default Card;