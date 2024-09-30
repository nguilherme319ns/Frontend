'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { IoIosAirplane } from "react-icons/io";

export default function Page() {

    //Para poder usar o .map em empresas, precisamos passar os dados para uma array, pois o localStorage retorna uma string
    // const empresas = JSON.parse(localStorage.getItem('empresas'))

    //COloque dentro da variavel empresas isso(local...) OU isso(no caso é [])
    let passagem = JSON.parse(localStorage.getItem('passagem')) || []
    //OBS: Tem como a gente utilizar o if e else também

    return (
        <Pagina titulo="Passagens">

            <Link
                href="/passagem/create"
                className="btn btn-primary mb-3"
            >
                <IoIosAirplane />
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Voo</th>
                        <th>Passageiro</th>
                        <th>Assento</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {passagem.map(item => (

                        <tr>
                            <td>1</td>
                            <td>{item.voo}</td>
                            <td>{item.passageiro}</td>
                            <td>{item.assento}</td>
                            <td>{item.preco}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}