import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, AttachMoney, Message, BarChart, Email,Forum,Person, Category } from "@material-ui/icons"

export default function Sidebar() {
  return (
        <div className="sidebar">
            <div className="sidebarWraper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                         Home
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                         Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <Person className="sidebarIcon"/>
                         Users
                        </li>
                        <li className="sidebarListItem">
                        <Category className="sidebarIcon"/>
                         Products
                        </li>
                        <li className="sidebarListItem">
                        <AttachMoney className="sidebarIcon"/>
                        Transcitions
                        </li>
                        <li className="sidebarListItem">
                        <BarChart className="sidebarIcon"/>
                        Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <Email className="sidebarIcon"/>
                         Mail
                        </li>
                        <li className="sidebarListItem">
                        <Forum className="sidebarIcon"/>
                         Feedback
                        </li>
                        <li className="sidebarListItem">
                        <Message className="sidebarIcon"/>
                        Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                        <LineStyle className="sidebarIcon"/>
                         Manage
                        </li>
                        <li className="sidebarListItem">
                        <Timeline className="sidebarIcon"/>
                         Analytics
                        </li>
                        <li className="sidebarListItem">
                        <TrendingUp className="sidebarIcon"/>
                        Reports
                        </li>
                    </ul>
                </div>
               
            </div>
        </div>
  )
}
