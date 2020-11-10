import './style/MenuElement.css';
import {Link, useParams} from 'react-router-dom';
import {useLocation} from 'react-router-dom';


const getParentPage = (address) =>
{
	let addressSplit = address.split("/")
	return addressSplit[1];
}



const MenuElement = (props) =>
{
	let activeTab = useLocation().pathname;
	let thisPage = "/" + props.page;

	if (props.type === "global")
	{
		thisPage = getParentPage(thisPage);
		activeTab = getParentPage(activeTab);
	}


	const isActiveTab = () => 
	{
		if (thisPage === activeTab)
		{
			return {
				borderTopLeftRadius: "10px",
				borderTopRightRadius: "10px",
				backgroundColor: "#163341",

				paddingLeft: "10px",
				paddingRight: "10px",

			}
		}
	}

	return(
		<div>
			<Link to={"/" + props.page}>
				{
					thisPage === activeTab
					&&
					<div className="menu-element-outer">
						<div className="active-tab-extra active-tab-extra-left">
							<span className="menu-element-text">&nbsp;</span>
						</div>
					</div>
				}

				<div className="menu-element-inner" style={isActiveTab()}>
					<span className="menu-element-text">{props.title}</span>
				</div>

				{
					thisPage === activeTab
					&&
					<div className="menu-element-outer">
						<div className="active-tab-extra active-tab-extra-right">
							<span className="menu-element-text">&nbsp;</span>
						</div>
					</div>
				}
			</Link>
		</div>
	)
}

export default MenuElement;