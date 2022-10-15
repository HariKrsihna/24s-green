import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"
export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://sugermint.com/wp-content/uploads/2020/04/Biography-of-Sundar-Pichai.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Sundar Pichai</span>
                    <span className="widgetSmUserTitle">Sr Project Manager</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://steemitimages.com/DQmccWhAiT335VBuKmbWqSNmbZAeyjDxxU3SA1VJAaj1BbB/jukar%20barg.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Mark JuckerBerg</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://knowledge.wharton.upenn.edu/wp-content/uploads/2014/02/Satya-Nadella.jpg" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Satya Nadella</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images8.alphacoders.com/112/1128981.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Elon Musk</span>
                    <span className="widgetSmUserTitle">Sr Technical Lead</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Hari Krishna Konada</span>
                    <span className="widgetSmUserTitle">Team Lead</span>
                </div>
                <button className="widgetSmButton">
                <Visibility className="widgetSmIcon"/>
                Display
                </button>
            </li>

        </ul>
    </div>
  )
}
