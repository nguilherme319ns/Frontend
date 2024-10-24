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
import { mask } from "remask"; // Importa a biblioteca remask para aplicar máscaras
import PassagemValidator from "@/validators/PassagemValidator";

// Validação Yup
const passagemSchema = Yup.object().shape({
    voo: Yup.string()
        .required('Voo é obrigatório'),
    passageiro: Yup.string()
        .required('Passageiro é obrigatório'),
    assento: Yup.string()
        .required('Assento é obrigatório'),
    preco: Yup.number()
        .required('Preço é obrigatório')
        .min(0, 'O preço não pode ser negativo')
});

export default function Page({ params }) {
    const route = useRouter();
    const passagens = JSON.parse(localStorage.getItem('passagem')) || [];
    const dados = passagens.find(item => item.id == params.id);
    const passagem = dados || { voo: '', passageiro: '', assento: '', preco: '' };

    function salvar(dados) {
        if (passagem.id) {
            Object.assign(passagem, dados);
        } else {
            dados.id = v4();
            passagens.push(dados);
        }
        localStorage.setItem('passagem', JSON.stringify(passagens));
        return route.push('/passagem');
    }

    return (
        <Pagina titulo="Passagem">
            <Formik
                initialValues={passagem}
                validationSchema={passagemSchema} // Adiciona o schema de validação
                onSubmit={values => salvar(values)}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    setFieldValue // Para aplicar as máscaras
                }) => (
                    <Form>
                        <Form.Group className="mb-3" controlId="voo">
                            <Form.Label>Voo</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="voo" 
                                value={values.voo}
                                onChange={handleChange('voo')}
                                isInvalid={touched.voo && !!errors.voo}
                            />
                            <Form.Control.Feedback type="invalid">{errors.voo}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="passageiro">
                            <Form.Label>Passageiro</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="passageiro"
                                value={values.passageiro}
                                onChange={handleChange('passageiro')}
                                isInvalid={touched.passageiro && !!errors.passageiro}
                            />
                            <Form.Control.Feedback type="invalid">{errors.passageiro}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="assento">
                            <Form.Label>Assento</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="assento"
                                value={values.assento}
                                onChange={handleChange('assento')}
                                isInvalid={touched.assento && !!errors.assento}
                            />
                            <Form.Control.Feedback type="invalid">{errors.assento}</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="preco">
                            <Form.Label>Preço</Form.Label>
                            <Form.Control 
                                type="text" 
                                name="preco"
                                value={values.preco}
                                onChange={(e) => {
                                    const maskedValue = mask(e.target.value, ['999.99']);
                                    setFieldValue('preco', maskedValue);
                                }}
                                isInvalid={touched.preco && !!errors.preco}
                            />
                            <Form.Control.Feedback type="invalid">{errors.preco}</Form.Control.Feedback>
                        </Form.Group>
                        <div className="text-center">
                            <Button onClick={handleSubmit} variant="success">
                                <FaCheck /> Salvar
                            </Button>
                            <Link
                                href="/passagem"
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
