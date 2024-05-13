import { useEffect } from "react"

export default function Home() {
  useEffect(()=>{
    fetch("https://api.open-meteo.com/v1/forecast?latitude=44.8404&longitude=-0.5805&hourly=temperature_2m,rain")
      .then (response=>response.json())
      .then(data=>console.log(data))
      .catch((error)=>{console.error("il y a une erreur c'est pas d'chance",error)})
  },[])
  return (
    <div>
      <p></p>
    </div>
  )
}
