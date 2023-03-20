import {
  createContext,
  ReactNode,
  useState
} from 'react';

type AuthContextType = {
  inch: String;
  setInch: any;
  fahre: string;
  setFahre: any;
  inchOnOff: any;
  fahreOnOff: any;
  FormartC: any;
  formartC: string;
  formatMm: string;
  FormartMm: any;

}

type AuthContextProviderProps = {
  children: ReactNode;
}

 export const UseContext = createContext({} as AuthContextType);

 export function VerifyContextProvider(props:AuthContextProviderProps) {

    const [ inch, setInch ] = useState("Off");
    const [ fahre, setFahre ] = useState("Off");

    const [ formartC, setFormartC ] = useState("C°");
    const [ formatMm, setformatMm ] = useState("mm");

    function inchOnOff(){
    
      if(inch === "Off") {
        setInch("On");
        
      }else if(inch === "On") {
        setInch("Off");
      }
    }
  
    function fahreOnOff(){
      
      if(fahre === "Off") {
        setFahre("On");
        
      }else if(fahre === "On") {
        setFahre("Off");
        
      }
    }

    function FormartC() {
      if(fahre === "Off"){
        setFormartC("F°")
      }else if(fahre === "On"){
        setFormartC("C°")
      }
    }

    function FormartMm() {
      if(fahre === "Off"){
        setformatMm("inch")
      }else if(fahre === "On"){
        setformatMm("mm")
      }
    }
  


  return (
    <UseContext.Provider
    value={{
      inch,
      setInch,
      fahre,
      setFahre,
      inchOnOff,
      fahreOnOff,
      FormartC,
      formartC,
      formatMm,
      FormartMm

      }}>
      {props.children}
    </UseContext.Provider>
      
  )

}