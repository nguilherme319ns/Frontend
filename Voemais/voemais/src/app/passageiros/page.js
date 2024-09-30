'use client'

import Pagina from "@/app/components/Pagina"
import Link from "next/link"
import { Table } from "react-bootstrap"
import { IoIosAirplane } from "react-icons/io";

export default function Page() {

    //Para poder usar o .map em empresas, precisamos passar os dados para uma array, pois o localStorage retorna uma string
    // const empresas = JSON.parse(localStorage.getItem('empresas'))

    //COloque dentro da variavel empresas isso(local...) OU isso(no caso é [])
    let passageiros = JSON.parse(localStorage.getItem('passageiros')) || []
    //OBS: Tem como a gente utilizar o if e else também

    return (
        <Pagina titulo="Passageiros">

            <Link
                href="/passageiros/create"
                className="btn btn-primary mb-3"
            >
                <IoIosAirplane />
            </Link>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Documento</th>
                        <th>Email</th>
                        <th>Telefone</th>
                        <th>Data de Nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {passageiros.map(item => (

                        <tr>
                            <td>1</td>
                            <td>{item.nome}</td>
                            <td>{item.documento}</td>
                            <td>{item.email}</td>
                            <td>{item.telefone}</td>
                            <td>{item.nascimento}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    )
}