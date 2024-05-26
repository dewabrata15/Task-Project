import { useEffect, useState } from 'react'
import './App.css'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';

function App() {
  const [notif, setNotif] = useState(null)

  useEffect(() => {
    if(notif) {
      switch(notif.type) {
        case "error" : {
          toast.error(notif.message)
          break
        }
        case "success" : {
          toast.success(notif.message)
          break
        }
      }

      setNotif(null)
    }
  }, [notif])

  return (
    <>
      <ToastContainer />
      <Outlet context={[setNotif]} />
    </>
  )
}

export default App
