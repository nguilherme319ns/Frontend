'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { IoIosAirplane } from "react-icons/io";

export default function Page() {

    //Para poder usar o .map em empresas, precisamos passar os dados para uma array, pois o localStorage retorna uma string
    // const empresas = JSON.parse(localStorage.getItem('empresas'))

    //COloque dentro da variavel empresas isso(local...) OU isso(no caso é [])
    let voos = JSON.parse(localStorage.getItem('voos')) || []
    //OBS: Tem como a gente utilizar o if e else também

    return (
        <Pagina titulo="Voos">

            <Link
                href="/voos/create"
                className="btn btn-primary mb-3"
            >
                <IoIosAirplane />
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Internacional</th>
                        <th>Identificador</th>
                        <th>Data Check-in</th>
                        <th>Data Embarque</th>
                        <th>Origem</th>
                        <th>Destino</th>
                        <th>Empresa</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {voos.map(item => (

                        <tr>
                            <td>1</td>
                            <td>{item.internacional}</td>
                            <td>{item.identificador}</td>
                            <td>{item.checkin}</td>
                            <td>{item.embarque}</td>
                            <td>{item.origem}</td>
                            <td>{item.destino}</td>
                            <td>{item.empresa}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}