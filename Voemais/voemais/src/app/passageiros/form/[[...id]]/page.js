'use client'

import Pagina from "@/app/components/Pagina";
import PassageiroValidator from "@/validators/PassageiroValidator";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { mask } from "remask";
import { v4 } from "uuid";

export default function Page({ params }) {
    const route = useRouter();

    const passageiros = JSON.parse(localStorage.getItem('passageiros')) || [];
    const dados = passageiros.find(item => item.id == params.id);
    const passageiro = dados || { nome: '', documento: '', email: '', telefone: '', nascimento: '' };

    function salvar(dados) {
        if (passageiro.id) {
            Object.assign(passageiro, dados);
        } else {
            dados.id = v4();
            passageiros.push(dados);
        }
        localStorage.setItem('passageiros', JSON.stringify(passageiros));
        return route.push('/passageiros');
    }

    return (
        <Pagina titulo="Passageiro">
            <Formik
                initialValues={passageiro}
                validationSchema={PassageiroValidator}
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    errors,

                }) => {
                    return (
                        <Form>
                            <Form.Group className="mb-3" controlId="nome">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nome"
                                    value={values.nome}
                                    onChange={handleChange('nome')}
                                    isInvalid={errors.nome}
                                /> <Form.Control.Feedback type="invalid">
                                    {errors.nome}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="documento">
                                <Form.Label>Documento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="documento"
                                    value={values.documento}
                                    onChange={handleChange('documento')}
                                    isInvalid={errors.documento}
                                /> <Form.Control.Feedback type="invalid">
                                    {errors.documento}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange('email')}
                                    isInvalid={errors.email}
                                /> <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="telefone">
                                <Form.Label>Telefone</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="telefone"
                                    value={values.telefone}
                                    onChange={(value) => {
                                        setFieldValue('telefone', mask(value.target.value,
                                            '(99) 99999-9999'))
                                    }}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="nascimento">
                                <Form.Label>Data Nascimento</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nascimento"
                                    value={values.nascimento}
                                    onChange={(value) => {
                                        setFieldValue('nascimento',mask(value.target.value,
                                            '99/99/9999'))
                                    }}
                                /> 
                            </Form.Group>
                            <div className="text-center">
                                <Button onClick={handleSubmit} variant="success">
                                    <FaCheck /> Salvar
                                </Button>
                                <Link href="/passageiros" className="btn btn-danger ms-2">
                                    <IoIosArrowRoundBack /> Voltar
                                </Link>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </Pagina>
    );
}