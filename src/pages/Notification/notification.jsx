import React,{useEffect, useState} from 'react'
import './Notification.css'

export default function Notification({count}) {
    
    
    
    
  return (
    
      <div className="notification-icon">
      {count>0&&<span className="notification-count">{count}</span>}
      <i className="bi bi-bell-fill notification" ></i>
     
    </div>
   
  )
}
