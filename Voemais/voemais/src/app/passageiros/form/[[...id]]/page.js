'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";
import PassageirosValidator from "@/validators/PassageirosValidator"; // Importando o validador

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
                validationSchema={PassageirosValidator} // Adicionando validação
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="nome">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="nome"
                                value={values.nome}
                                onChange={handleChange('nome')}
                                isInvalid={!!errors.nome && touched.nome}
                            />
                            <Form.Control.Feedback type="invalid">
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
                                isInvalid={!!errors.documento && touched.documento}
                            />
                            <Form.Control.Feedback type="invalid">
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
                                isInvalid={!!errors.email && touched.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="telefone">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="telefone"
                                value={values.telefone}
                                onChange={handleChange('telefone')}
                                isInvalid={!!errors.telefone && touched.telefone}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.telefone}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="nascimento">
                            <Form.Label>Data de Nascimento</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="nascimento"
                                value={values.nascimento}
                                onChange={handleChange('nascimento')}
                                isInvalid={!!errors.nascimento && touched.nascimento}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.nascimento}
                            </Form.Control.Feedback>
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
                )}
            </Formik>
        </Pagina>
    );
}
