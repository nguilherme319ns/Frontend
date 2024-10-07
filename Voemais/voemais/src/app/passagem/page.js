'use client'

import Pagina from "@/app/components/Pagina";
import Link from "next/link";
import { Table } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Page() {
    const [passagens, setPassagens] = useState([]);

    useEffect(() => {
        setPassagens(JSON.parse(localStorage.getItem('passagem')) || []);
    }, []);

    function excluir(id) {
        if (confirm('Deseja realmente excluir?')) {
            const dados = passagens.filter(item => item.id !== id);
            localStorage.setItem('passagem', JSON.stringify(dados));
            setPassagens(dados);
        }
    }

    return (
        <Pagina titulo="Passagens">
            <div className="d-flex justify-content-start mb-3">
                <Link href="/passagem/form" className="btn btn-dark me-2">
                    <FaPlus /> Criar Passagem
                </Link>
            </div>

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
                    {passagens.map((item, index) => (
                        <tr key={item.id}>
                            <td>
                                <Link href={`/passagem/form/${item.id}`}>
                                    <FaPen title='Editar' className="ms-2 me-2 text-primary" />
                                </Link>
                                <FaTrashAlt
                                    title='Excluir'
                                    className="text-danger"
                                    onClick={() => excluir(item.id)} 
                                />
                            </td>
                            <td>{item.voo}</td>
                            <td>{item.passageiro}</td>
                            <td>{item.assento}</td>
                            <td>{item.preco}</td>
                            
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Pagina>
    );
}