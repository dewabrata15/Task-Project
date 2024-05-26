import { useOutletContext } from "react-router-dom";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Homepage() {
  const [charts, setCharts] = useState([])
  const [setNotif] = useOutletContext()

  async function getData() {
    try {
      const { data } = await axios({
        url: "http://localhost:3000/charts",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      })

      setCharts(data.data)
    } catch (error) {
      setNotif({
        type: "error",
        message: error.response.data.message
      })
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Navbar />
      <section className="pt-24">
        <div className="relative h-[calc(100vh-6rem)] w-full">
          <div className="absolute bg-black w-full h-full bg-opacity-80 flex justify-center items-center flex-col">
            <p className="text-white font-bold">Get your excellent analysis</p>
            <p className="text-white">Access all analyses here for free</p>
          </div>
          <img src="/background.jpg" alt="Background" className="h-full w-full object-cover"/>
        </div>
        <div className="flex flex-wrap p-5 justify-center gap-5">
          {charts.map(el => {
            return <Card el={el} key={el.id}/>
          })}
        </div>
      </section>
      <Footer />
    </>
  )
}