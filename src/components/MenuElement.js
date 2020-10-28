import './style/MenuElement.css';
import {Link, useParams} from 'react-router-dom';

const MenuElement = (props) =>
{
	return(
		<div className="menu-element">
			<Link to={props.page} className="link">
				<h2>{props.title}</h2>
			</Link>
        
		</div>
	)
}

export default MenuElement;