import { Header } from "../components/header"
import { Cards } from '../components/cards';
import { useEffect, useState } from "react";

interface Item {
  data: string;
  id: string,
  date: string,
  text: string,
  tempMin: number,
  tempMax: number,
  rainProbabilit: number,
  rainPrecipitation: number,
  periodBegin: string,
  periodEnd: string,
  local_id: string

}

export function SaoPaulo() {

  const [ items, setItems ] = useState<Item[]>([]);
  const [ state, setState ] = useState("")
  
  let url = window.location.pathname;
  function request() {
    if(url = "/SaoPaulo") {
      setState("None")
    }
  }

  useEffect(() => {
    fetch('http://localhost:3333/find/SaoPaulo')
    .then(response => response.json())
    .then(response => {
      setItems(response)
    })
  }, []) 
  return (
    <div className="bg-gray-300 min-h-[100vh]">
      <main className="flex p-[30px] flex-wrap gap-5 min-h-[90vh]">
        {items.map (item => {
          return (
            <div key={item.id}>
              <Cards
                date={item.date}
                description={item.text}
                max={item.tempMax}
                min={item.tempMin}
                milimetro={item.rainPrecipitation}
                chuva={item.rainProbabilit}
              />
            </div>
          )
        })}
      
      </main>
    </div>
  )
}