'use client'

import Pagina from "@/app/components/Pagina";
import { useEffect, useState } from "react";
import apiDisney from "@/services/apiDisney";

export default function Page() {

    const [personagem, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    },[])

    return (
        <Pagina titulo="Disney">
          {personagem.map(item => (
                          <p>{item.name}</p>
                      ))}
        </Pagina>
    )
}