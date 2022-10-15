import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWraper">
      <div className="topLeft">
           <span className="logo">H A R I</span>
      </div>
      <div className="topRight">
        <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
        </div>
        <div className="topbarIconContainer">
            <Settings/>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Nani_at_an_interview_for_film_companion_%28cropped%29.png" alt="" className="topAvatar" />
      </div>
      </div>
    </div>
  );
}
