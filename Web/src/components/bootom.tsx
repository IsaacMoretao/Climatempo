import chuva from "../assets/Icons/raindrop-close-up.png";
import guardaChuva from "../assets/Icons/protection-symbol-of-opened-umbrella-silhouette-under-raindrops.png";
import { useAuth } from "../hooks/useCach";

interface TopInterface {
  milimetro: any,
  chuva: any,

}

export function Botton(props: TopInterface) {

  const { formatMm } = useAuth();

  if(formatMm === "mm"){
    return(
      <div className="bg-gray-100 p-2 flex place-content-between">
        <div className="flex gap-[30px]">
          <img src={chuva} alt="Gota de chuva Icone" />
          <strong>{props.milimetro}{formatMm}</strong>
        </div>
        <div className="flex  gap-[30px]">
          <img src={guardaChuva} alt="Guarda chuva Icone" />
          <strong>{props.chuva}%</strong>
        </div>
      </div>
    )
  } else {
    return(
      <div className="bg-gray-100 p-2 flex place-content-between">
        <div className="flex gap-[30px]">
          <img src={chuva} alt="Gota de chuva Icone" />
          <strong>{props.milimetro / 25.4}{formatMm}</strong>
        </div>
        <div className="flex  gap-[30px]">
          <img src={guardaChuva} alt="Guarda chuva Icone" />
          <strong>{props.chuva}%</strong>
        </div>
      </div>
    )
  }

}