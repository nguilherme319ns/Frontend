'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";
import { mask } from "remask"; // Importando máscara
import AeroportoValidator from "@/validators/AeroportoValidator"; // Importando o validador

export default function Page({ params }) {
    const route = useRouter();
    const aeroportos = JSON.parse(localStorage.getItem('aeroportos')) || [];
    const dados = aeroportos.find(item => item.id == params.id);
    const aeroporto = dados || { nome: '', codigo: '', localizacao: '' };

    function salvar(dados) {
        if (aeroporto.id) {
            Object.assign(aeroporto, dados);
        } else {
            dados.id = v4();
            aeroportos.push(dados);
        }
        localStorage.setItem('aeroportos', JSON.stringify(aeroportos));
        return route.push('/aeroportos');
    }

    return (
        <Pagina titulo="Aeroporto">
            <Formik
                initialValues={aeroporto}
                validationSchema={AeroportoValidator} // Adicionando validação
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    setFieldValue, // Para aplicar máscaras
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
                        <Form.Group className="mb-3" controlId="codigo">
                            <Form.Label>Código</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="codigo"
                                value={values.codigo}
                                onChange={(value) => {
                                    setFieldValue('codigo', mask(value.target.value, ['AAA', 'AAAA'])) // máscara para IATA/ICAO
                                }}
                                isInvalid={!!errors.codigo && touched.codigo}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.codigo}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="localizacao">
                            <Form.Label>Localização</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="localizacao"
                                value={values.localizacao}
                                onChange={handleChange('localizacao')}
                                isInvalid={!!errors.localizacao && touched.localizacao}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.localizacao}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link href="/aeroportos" className="btn btn-danger ms-2">
                                <IoIosArrowRoundBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
