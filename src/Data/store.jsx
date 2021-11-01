import React, { createContext, useContext, useState } from "react";

const ClimateContext = createContext()

export const ClimateProvider = ({children}) => {

    const [weather, setWeather] = useState(null) //estado principal, que recebe o objeto com os dados do clima
    const [current, setCurrent] = useState({}) // estado que seta a localização atual pelo botao de GPS
    const [temp, updateTemp] = useState(false) //estado que altera a unidade de medida da temperatura (Cº -> Fº)
    const [search,setSearch] = useState(false) // estado que define se vamos chamar a tela de procura.
    const [city,setCity] = useState('')// estado que guarda o nome da cidade que o usuario pesquisou na tela de pesquisa.
    const [activeDemos,setActiveDemos] = useState(false)
    return (
        <ClimateContext.Provider value={{current, setCurrent, temp, updateTemp, weather, setWeather,search,setSearch,setCity,city,setActiveDemos,activeDemos}}>
            {children}
        </ClimateContext.Provider>
    )
}

export const useClimate = () => useContext(ClimateContext)