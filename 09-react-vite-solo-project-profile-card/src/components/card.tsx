import CardContent from "./cardContent";
import CardFooter from "./cardFooter";
import MyImage from "./image";

export function Card(){
    return(
        <div className="card">
            <MyImage/>
            <CardContent/>
            <CardFooter/>
        </div>
    )
}
export default Card;