import { Tops } from './Topers';
import { Botton } from './bootom';

interface ICard {
  date: string,
  description: string,
  max: number,
  min: number,
  milimetro: number,
  chuva: number,
}

export function Cards(props: ICard){

  return(
    <div className="w-[300px] h-[200px] bg-white" >

      <header className="p-2">
        <strong>{props.date}</strong>
        <p className="h-[60px]">{props.description}</p>
      </header>
      <Tops max={props.max} min={props.min} />
      <Botton milimetro={props.milimetro} chuva={props.chuva} />

    </div>
  )
}