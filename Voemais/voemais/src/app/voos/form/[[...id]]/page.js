'use client'

import Pagina from "@/app/components/Pagina";
import { Formik } from "formik";
import * as Yup from "yup"; // Importa o Yup para validação
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Form } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";
import { v4 } from "uuid";
import VooValidator from "@/validators/VooValidator";


const vooSchema = Yup.object().shape({
    internacional: Yup.string().required('Campo obrigatório'),
    identificador: Yup.string().required('Campo obrigatório'),
    checkin: Yup.date().required('Campo obrigatório'),
    embarque: Yup.date().required('Campo obrigatório'),
    origem: Yup.string().required('Campo obrigatório'),
    destino: Yup.string().required('Campo obrigatório'),
    empresa: Yup.string().required('Campo obrigatório'),
    preco: Yup.number()
        .required('Campo obrigatório')
        .min(0, 'O preço não pode ser negativo'),
});

export default function Page({ params }) {
    const route = useRouter();
    const voos = JSON.parse(localStorage.getItem('voos')) || [];
    const dados = voos.find(item => item.id == params.id);
    const voo = dados || { internacional: '', identificador: '', checkin: '', embarque: '', origem: '', destino: '', empresa: '', preco: '' };

    function salvar(dados) {
        if (voo.id) {
            Object.assign(voo, dados);
        } else {
            dados.id = v4();
            voos.push(dados);
        }
        localStorage.setItem('voos', JSON.stringify(voos));
        return route.push('/voos');
    }

    return (
        <Pagina titulo="Voo">
            <Formik
                initialValues={voo}
                validationSchema={vooSchema} // Adiciona o schema de validação
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
                        <Form.Group className="mb-3" controlId="internacional">
                            <Form.Label>Internacional</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="internacional" 
                                value={values.internacional}
                                onChange={handleChange('internacional')}
                                isInvalid={touched.internacional && !!errors.internacional}
                            />
                            <Form.Control.Feedback type="invalid">{errors.internacional}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="identificador">
                            <Form.Label>Identificador</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="identificador"
                                value={values.identificador}
                                onChange={handleChange('identificador')}
                                isInvalid={touched.identificador && !!errors.identificador}
                            />
                            <Form.Control.Feedback type="invalid">{errors.identificador}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="checkin">
                            <Form.Label>Data Check-in</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="checkin"
                                value={values.checkin}
                                onChange={handleChange('checkin')}
                                isInvalid={touched.checkin && !!errors.checkin}
                            />
                            <Form.Control.Feedback type="invalid">{errors.checkin}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="embarque">
                            <Form.Label>Data Embarque</Form.Label>
                            <Form.Control 
                                type="date" 
                                name="embarque"
                                value={values.embarque}
                                onChange={handleChange('embarque')}
                                isInvalid={touched.embarque && !!errors.embarque}
                            />
                            <Form.Control.Feedback type="invalid">{errors.embarque}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="origem">
                            <Form.Label>Origem</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="origem"
                                value={values.origem}
                                onChange={handleChange('origem')}
                                isInvalid={touched.origem && !!errors.origem}
                            />
                            <Form.Control.Feedback type="invalid">{errors.origem}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="destino">
                            <Form.Label>Destino</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="destino"
                                value={values.destino}
                                onChange={handleChange('destino')}
                                isInvalid={touched.destino && !!errors.destino}
                            />
                            <Form.Control.Feedback type="invalid">{errors.destino}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="empresa">
                            <Form.Label>Empresa</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="empresa"
                                value={values.empresa}
                                onChange={handleChange('empresa')}
                                isInvalid={touched.empresa && !!errors.empresa}
                            />
                            <Form.Control.Feedback type="invalid">{errors.empresa}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="preco"
                                value={values.preco}
                                onChange={handleChange('preco')}
                                isInvalid={touched.preco && !!errors.preco}
                            />
                            <Form.Control.Feedback type="invalid">{errors.preco}</Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/voos"
                                className="btn btn-danger ms-2"
                            >
                                <IoIosArrowRoundBack /> Voltar
                            </Link>
                        </div>
                    </Form>
                )}
            </Formik>
        </Pagina>
    );
}
