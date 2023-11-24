
import { Email, Link } from "@mui/icons-material";
import { Button} from "@mui/material";

export function CardContent(){
	return (
		<div className="cardContent">
            <div style={{margin:"auto", textAlign:"center"}}>
                <h1>Irvin Gomes</h1>
                <h5>Development Engineer</h5>
                irvin.r.gomes@gmail.com
            </div>
            <div className="buttons">
                <Button variant="contained" startIcon={<Link />}>
                    LinkedIn
                </Button>
                <Button variant="contained" startIcon={<Email />}>
                    Email
                </Button>
            </div>
            <div>
                About
            </div>
            <div>
                Experience
            </div>
        </div>
	)
}
export default CardContent;
