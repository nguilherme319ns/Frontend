import * as Yup from 'yup';

const PassagemValidator = Yup.object().shape({
  voo: Yup.string()
    .required('Campo obrigatório'),
  passageiro: Yup.string()
    .required('Campo obrigatório'),
  assento: Yup.string()
    .matches(/^[A-Z]\d{1,2}$/, 'Assento inválido! Deve ser algo como A1, B12.')
    .required('Campo obrigatório'),
  preco: Yup.number()
    .min(0, 'O preço deve ser maior ou igual a 0!')
    .required('Campo obrigatório'),
});

export default PassagemValidator;
