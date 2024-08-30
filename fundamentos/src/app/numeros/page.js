'use client'
import { Button, Container } from "react-bootstrap";
import Pagina from "../components/Pagina";
import { useState } from "react";

export default function Page() {

    const [numero, setNumero]= useState(0)

    function soma(){
        setNumero (prevNumero => prevNumero + 1)
    }
    function subtracao(){
        setNumero (prevNumero => prevNumero - 1)
    }
    function zerar(){
        setNumero(0);
    }
   

    return (
        <>
        <Pagina titulo="Numeros:">
            
            <h1>{numero}</h1>
            <Button className="me-2" onClick={subtracao}>Subtrair</Button>
            <Button className="me-2" onClick={soma}>Somar</Button>
            <Button onClick={zerar}>Zerar</Button>
            </Pagina>
        </>
        
    )
}