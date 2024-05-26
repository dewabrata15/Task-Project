import axios from "axios"
import { Link, useNavigate, useOutletContext } from "react-router-dom"
import { getValueForm } from "../helpers/getValueForm"

export default function Register() {
  const navigate = useNavigate()
  const [setNotif] = useOutletContext()

  async function register(value) {
    try {
      await axios({
        method: "POST",
        url: "http://localhost:3000/register",
        data: value
      })

      navigate('/login')
      setNotif({
        type: "success",
        message: "Success create account"
      })
    } catch (error) {
      setNotif({
        type: "error",
        message: error.response.data.message
      })
    }
  }
  
  return (
    <section id="login" className="flex flex-col h-screen md:flex-row">
      <div className="absolute z-10 md:relative w-full h-full flex justify-center items-center">
        <form className="flex flex-col gap-5 items-center bg-white p-10 rounded-md" onSubmit={(e) => {
          e.preventDefault()
          const value = getValueForm(e.target)
          register(value)
        }}>
          <p style={{
            fontFamily: 'Lilita One, sans-serif',
            fontWeight: 400,
            fontStyle: "normal"
          }} className="text-2xl text-[#97CC4A]">Chartnote</p>
          <input type="email" name="email" placeholder="Email" className="p-2 border-2 rounded-md"/>
          <input type="password" name="password" placeholder="Password" className="p-2 border-2 rounded-md"/>
          <div className="flex gap-1 flex-col w-full items-center">
            <button className="w-full bg-gradient-to-tr from-[#0080A9] to-[#97CC4A] text-white p-2 rounded-md">Register</button>
            <p>or</p>
            <Link to={"/login"} className="w-full bg-gradient-to-tr from-[#0080A9] to-[#97CC4A] rounded-md text-center p-1">
              <p className="bg-white w-full h-full rounded-md p-1">Login</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="absolute z-0 md:relative w-full h-full bg-gradient-to-tr from-[#0080A9] to-[#97CC4A] flex justify-center items-center">
      </div>
    </section>
  )
}