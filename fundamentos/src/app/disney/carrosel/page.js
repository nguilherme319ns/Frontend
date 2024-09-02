'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Carousel, Container } from "react-bootstrap";

export default function Page() {

    const [personagem, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])


    return (
        <Pagina titulo="Carrossel Disney">
            <Container>
                <Carousel>
                    {personagem.map(item => (
                        <Carousel.Item>
                            <img width="1200" src={item.imageUrl} />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </Pagina>
    )
}       