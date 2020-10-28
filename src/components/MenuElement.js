import './style/MenuElement.css';
import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const MenuElement = (props) =>
{

	let activeTab = useLocation().pathname;

	const isActiveTab = () => 
	{
		let thisPage = "/" + props.page;

		if (thisPage === activeTab)
		{
			return {
				borderTopLeftRadius: "10px",
				borderTopRightRadius: "10px",
				backgroundColor: "#163341"
			}
		}
	}

	return(
		<Link to={props.page} className="menu-element" style={isActiveTab()}>
			<h2>{props.title}</h2>
		</Link>
	)
}

export default MenuElement;