import AboutTexts from "./texts/About_texts.json";

const StudentWorkTable = (props) => {
	return (
		<table className='timeline-table'>
			{props.language === "english" ? (
				<tr>
					<th>Date</th>
					<th>Title &amp; description</th>
				</tr>
			) : (
				<tr>
					<th>Datum</th>
					<th>Titel &amp; beskrivning</th>
				</tr>
			)}

			{AboutTexts["StudentWork"].map((item) => (
				<tr>
					{props.language === "english" ? (
						<>
							<td>{item.period}</td>
							<td>
								<b>{item.title}</b>
								<p>{item.description}</p>
								<a href={item.link} target='_blank' rel='noopener noreferrer'>
									{item.link_title}
								</a>
							</td>
						</>
					) : (
						<>
							<td>{item.period_swe}</td>
							<td>
								<b>{item.title_swe}</b>
								<p>{item.description_swe}</p>
								<a href={item.link} target='_blank' rel='noopener noreferrer'>
									{item.link_title}
								</a>
							</td>
						</>
					)}
				</tr>
			))}
		</table>
	);
};

export default StudentWorkTable;
