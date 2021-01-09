
import AboutTexts from "./texts/About_texts.json";

const StudentWorkTable = (props) =>
{
  return(
    <table className="timeline-table">
      {
        props.language === "english"
        &&
        <tr>
          <th>
            Date
          </th>
          <th>
            Title &amp; description
          </th>
        </tr>
      }
      {
        props.language === "swedish"
        &&
        <tr>
          <th>
            Datum
          </th>
          <th>
            Titel &amp; beskrivning
          </th>
        </tr>
      }


      {
        AboutTexts["StudentWork"].map(item => {
          return(
            <tr>
              <td>
                {
                  props.language === "english"
                  &&
                  item.period
                }
                {
                  props.language === "swedish"
                  &&
                  item.period_swe
                }
              </td>
              <td>
                <b>

                  {
                    props.language === "english"
                    &&
                    item.title
                  }
                  {
                    props.language === "swedish"
                    &&
                    item.title_swe
                  }
                </b>
                <p>
                  {
                    props.language === "english"
                    &&
                    item.description
                  }
                  {
                    props.language === "swedish"
                    &&
                    item.description_swe
                  }
                </p>
                <a href={item.link}>
                  {item.link_title}
                </a>
              </td>
            </tr>
          )
        })
      }


    </table>
  )

}

export default StudentWorkTable;