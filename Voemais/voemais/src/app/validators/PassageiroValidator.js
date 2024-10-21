import * as Yup from 'yup';

const PassageirosValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  cpf: Yup.string()
    .matches(/^\d{11}$/, 'O CPF deve conter 11 dígitos numéricos!')
    .required('Campo obrigatório'),
  email: Yup.string()
    .email('Email inválido!')
    .required('Campo obrigatório'),
  telefone: Yup.string()
    .matches(/^\d{10,11}$/, 'O telefone deve ter entre 10 e 11 dígitos!')
    .required('Campo obrigatório'),
});

export default PassageirosValidator;
