import Card from "./card";

export function Cards(){

	const cards = [
		{
			stats:{stars:5, qtd:10, ctr: 'online'},
			description: "Test",
			price: 105.00,
			openSpots: 4
		},
        {
			stats:{stars:3, qtd:7, ctr: 'USA'},
			description: "Test 2",
			price: 150,
			openSpots: 0
		},
        {
			stats:{stars:1, qtd:20, ctr: 'USA'},
			description: "Test 3",
			price: 1000.00,
			openSpots: 3
		}
	]

	const cardCollection = ()=>{

		return cards.map((card:unknown, index:number)=>{
			return (
				<Card card={card} key={index}/>
			)
		})
	}

	return (
		<div className="cardCollection">
			{cardCollection()}
		</div>
	)
}

export default Cards;
