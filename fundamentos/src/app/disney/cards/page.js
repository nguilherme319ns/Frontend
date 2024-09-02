'use client'

import Pagina from "@/app/components/Pagina";
import apiDisney from "@/services/apiDisney";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function Page() {

    const [personagem, setPersonagens] = useState([])

    useEffect(() => {
        apiDisney.get('character').then(resultado => {
            setPersonagens(resultado.data.data)
        })
    }, [])


    return (
        <Pagina titulo="Card Disney">
            <Row md={3}>
                {personagem.map(item => (
                    <Col className="my-2">
                        <Card>
                            <Card.Img height="265" variant="top" src={item.imageUrl} />
                            <Card.Body>

                                <Card.Title>{item.name}</Card.Title>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Pagina>
    )
}