import "../styles/CardsTemplate.css";
import Logo from "../assets/logo-white.png";
import Lupa from "../assets/Icons/search.png";
import config from "../assets/Icons/configuracoes-cog.png"
import { TextField } from '@mui/material';

import { Autocomplete } from '@mui/material';
import { useAuth } from "../hooks/useCach";
import { useState } from 'react';
import { useNavigate } from "react-router";

export function Header() {

  const { fahreOnOff, FormartC, FormartMm } = useAuth();
  const [ request, setRequest] = useState("")
  const [ state, setState ] = useState("none")
  const navigate = useNavigate();

  function options() {
    if(state == "none") {
      setState("flex");
    } else if(state == "flex"){
      setState("none");
    }
  }

  let cidades = ['São Paulo', 'Osasco'];

  function pesquisa() {
    if( request == "São Paulo"){
      navigate('/SaoPaulo')
    } else if ( request == "Osasco"){
      navigate('/Osasco')
    } else {
      console.log('[ERROR] Algo errado [ERROR]')
    }

  }


  return(
    <>
      <header
        className="flex flex-col justify-center items-center p-5 bg-blue-700">



        <img src={Logo}
          alt="Climatempo-logo"
          className="h-7" />

        <button className="absolute ml-[90%]" onClick={options}>
          <img className="h-10 w-10" src={config} alt="" />
        </button>
        <div
          style={{display: state}}
          className="absolute bg-blue-800
          ml-[50%] mt-[300px] w-[200px] h-[100px]
          flex justify-center items-center flex-col gap-5
          rounded-xl">

          <div className=" flex justify-center z-50 items-center gap-5">
            <span className="font-bold text-white">
              C°
            </span>

            <div className="switch__container" >
              <input
                id="switch-flat"
                className="switch switch--flat"
                onClick={fahreOnOff}
                onChange={FormartC}
                type="checkbox"
              />
              <label htmlFor="switch-flat"></label>
            </div>

            <span className="font-bold text-white">
              F°
            </span>
          </div>

          <div className=" flex justify-center items-center gap-5">
            <span className="font-bold text-white">
              mm
            </span>
            <div className="switch__container_two" >
              <input
                id="switch-flat-two"
                className="switch-two switch--flat-two"
                onClick={FormartMm}
                onChange={fahreOnOff}
                type="checkbox"
              />
              <label htmlFor="switch-flat-two"></label>
            </div>
            <span className="font-bold text-white">
              inch
            </span>
          </div>

        </div>

      </header>
      <form className="bg-white" onSubmit={pesquisa}>

        <img
        
          src={Lupa}
          className='flex absolute p-4 ml-[90%]'
        />
      
        <Autocomplete
          options={cidades}
          renderInput={(params) =>
            <TextField
              value={request}
              onChange={event => setRequest(event.target.value)}
              { ...params}
              label="Cidade:"
            />
          }
        />

      </form>

    </>
  )
}