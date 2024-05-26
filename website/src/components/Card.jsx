/* eslint-disable react/prop-types */
export default function Card({ el }) {
  return (
    <div className="bg-white shadow-md p-2 rounded-md w-full md:w-1/2">
      <p>{el.chartName}</p>
      <img src={el.imageURL} alt="" className="w-full"/>
      <p className="mt-5 mb-2 text-center">{el.description}</p>
    </div>
  )
}