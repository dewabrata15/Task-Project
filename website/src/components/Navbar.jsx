import { useNavigate } from "react-router-dom"

export default function Navbar() {
  const navigation = useNavigate()

  function logout() {
    localStorage.removeItem("access_token")
    navigation('/login')
  }

  return (
    <div className="flex justify-between items-center p-5 fixed w-full h-24 z-20 bg-white">
      <p style={{
        fontFamily: 'Lilita One, sans-serif',
        fontWeight: 400,
        fontStyle: "normal"
      }} className="text-2xl text-[#97CC4A]">Chartnote</p>
      <button className="bg-[#97CC4A] text-white p-2 rounded-md" onClick={logout}>Logout</button>
    </div>
  )
}