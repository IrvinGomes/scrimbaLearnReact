import Card from "./card";

export function Cards(){

	const cards = [
		{
			stats:{stars:5, qtd:10, ctr: 'USA'},
			description: "Test",
			price: 105.00
		},
        {
			stats:{stars:3, qtd:7, ctr: 'USA'},
			description: "Test 2",
			price: 150.00
		},
        {
			stats:{stars:1, qtd:20, ctr: 'USA'},
			description: "Test 3",
			price: 1000.00
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
