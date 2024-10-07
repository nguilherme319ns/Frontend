'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
    const [voos, setVoos] = useState([]);

    useEffect(() => {
        setVoos(JSON.parse(localStorage.getItem('voos')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            const dados = voos.filter(item => item.id !== id);
            localStorage.setItem('voos', JSON.stringify(dados));
            setVoos(dados);
        }
    }

    return (
        <Pagina titulo="Voos">
            <div className="d-flex justify-content-start mb-3">
                <Link href="/voos/form" className="btn btn-dark me-2"><IoIosAirplane /> Criar Voo</Link>
            </div>

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
                    {voos.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/voos/form/${item.id}`}>
                                    <FaPen title='Editar' className="ms-2 me-2 text-primary" />
                                </Link>
                                <FaTrashAlt
                                    title='Excluir'
                                    className="text-danger"
                                    onClick={() => excluir(item.id)} />
                            </td>
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
    );
}