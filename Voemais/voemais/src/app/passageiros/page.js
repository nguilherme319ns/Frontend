'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { IoIosAirplane } from "react-icons/io";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
    // Obtém a lista de passageiros do localStorage ou define como um array vazio
    const [passageiros, setPassageiros] = useState([]);

    useEffect(() => {
        setPassageiros(JSON.parse(localStorage.getItem('passageiros')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            const dados = passageiros.filter(item => item.id !== id);
            localStorage.setItem('passageiros', JSON.stringify(dados));
            setPassageiros(dados);
        }
    }

    return (
        <Pagina titulo="Passageiros">
            <div className="d-flex justify-content-start mb-3">
                <Link href="/passageiros/form" className="btn btn-dark me-2">
                    <IoIosAirplane /> Adicionar Passageiro
                </Link>
            </div>

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
                    {passageiros.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passageiros/form/${item.id}`}>
                                    <FaPen title='Editar' className="ms-2 me-2 text-primary" />
                                </Link>
                                <FaTrashAlt
                                    title='Excluir'
                                    className="text-danger"
                                    onClick={() => excluir(item.id)} 
                                />
                            </td>
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
    );
}