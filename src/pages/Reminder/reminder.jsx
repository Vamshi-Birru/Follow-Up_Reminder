import React,{useState,useEffect} from 'react'
import "./Reminder.css";
import NotificationIcon from '../Notification/notification';
export default function Reminder() {
    const [reminderTitle, setReminderTitle] = useState('');
    const [reminderDate, setReminderDate] = useState('');
    const [reminderList, setReminderList] = useState([]);
    const [notificationCount,setNotificationCount]=useState(0);
    const [update,setUpdate]=useState(false);

    const handleTitleChange = (e) => {
        setReminderTitle(e.target.value);
    };

    const handleDateChange = (e) => {
        setReminderDate(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReminder = {
            Title: reminderTitle,
            Date: reminderDate
        }
        setReminderList([...reminderList, newReminder]);
        setUpdate(true);
        
    };
   if(update){
    const now = new Date().getTime();
          const updatedReminders = reminderList.filter((reminder) => {
            const reminderTime = new Date(reminder.Date).getTime();
            return reminderTime >= now;
          });
          setReminderList(updatedReminders);
          setNotificationCount(updatedReminders.length);
          setUpdate(false);
   }
 
    const sortedReminders = [...reminderList].sort((a, b) => new Date(a.Date) - new Date(b.Date));
    return (
        
        <div className='content'>
            <header className='notification'>
        <NotificationIcon count={notificationCount} />
      </header>
            <h2 className='title'>Follow-up Reminder</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='Rtitle' >
                    <label htmlFor="title">Reminder Title:</label>
                    <input type="text" id="title" value={reminderTitle} onChange={handleTitleChange} />
                </div>
                <div className='Rdate' >
                    <label htmlFor="date">Reminder Date:</label>
                    <input type="date" id="date" value={reminderDate} onChange={handleDateChange} />
                </div>
                <button className='button' onClick={handleSubmit} type="submit">Set Reminder</button>
            </form>
            <div className="reminders">
                {sortedReminders.map((reminder) => (
                    <div key={reminder.Date}>
                        <h1>{reminder.Title}</h1>
                        <h2>{reminder.Date}</h2>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
