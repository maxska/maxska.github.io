import './style/MenuElement.css';
import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';

const MenuElement = (props) =>
{

	let activeTab = useLocation().pathname;
	let thisPage = "/" + props.page;

	const isActiveTab = () => 
	{
		if (thisPage === activeTab)
		{
			return {
				borderTopLeftRadius: "10px",
				borderTopRightRadius: "10px",
				backgroundColor: "#163341",

				paddingLeft: "10px",
				paddingRight: "10px"
			}
		}
	}

	return(
		<div>
			<Link to={props.page}>
				{
					thisPage === activeTab
					&&
					<div className="menu-element-outer">
						<div className="active-tab-extra active-tab-extra-left">
							<h2>&nbsp;</h2>
						</div>
					</div>
				}

				<div className="menu-element-inner" style={isActiveTab()}>
					<h2>{props.title}</h2>
				</div>

				{
					thisPage === activeTab
					&&
					<div className="menu-element-outer">
						<div className="active-tab-extra active-tab-extra-right">
							<h2>&nbsp;</h2>
						</div>
					</div>
				}
			</Link>
		</div>
	)
}

export default MenuElement;