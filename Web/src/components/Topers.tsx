
import max from "../assets/Icons/upload.png";
import min from "../assets/Icons/download.png";
import { useAuth } from "../hooks/useCach";

interface TopInterface {
  max: number,
  min: number,

}

export const Tops = (props: TopInterface) => {

  const { formartC } = useAuth();


  if(formartC == "F°") {
    return(
      <div className="bg-gray-100 p-2 flex place-content-between">
        <div className="flex gap-[30px]">
          <img src={max} alt="Seta para cima Icone"/>
          <strong
          className="text-blue-500" >
            {(props.max * 1.8) + 32}{formartC}
          </strong>
        </div>
        <div className="flex gap-[30px] ">
          <img src={min} alt="Seta para baixo Icone" />
          <strong
          className="text-red-500">
            {(props.min * 1.8) + 32 }{formartC}
          </strong>
        </div>
      </div>
    )
  }else{
    return(
      <div className="bg-gray-100 p-2 flex place-content-between">
        <div className="flex gap-[30px]">
          <img src={max} alt="Seta para cima Icone"/>
          <strong
          className="text-blue-500" >
            {props.max}{formartC}
          </strong>
        </div>
        <div className="flex gap-[30px] ">
          <img src={min} alt="Seta para baixo Icone" />
          <strong
          className="text-red-500">
            {props.min}{formartC}
          </strong>
        </div>
      </div>
    )
  }
}