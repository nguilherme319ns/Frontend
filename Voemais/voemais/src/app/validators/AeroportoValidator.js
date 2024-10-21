import * as Yup from 'yup';

const AeroportoValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'O mínimo de caracteres é 3!')
    .max(50, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  codigo: Yup.string()
    .min(3, 'O código deve ter pelo menos 3 caracteres!')
    .max(5, 'O código deve ter no máximo 5 caracteres!')
    .required('Campo obrigatório'),
  localizacao: Yup.string()
    .min(5, 'O mínimo de caracteres é 5!')
    .max(100, 'O máximo de caracteres é 100!')
    .required('Campo obrigatório'),
});

export default AeroportoValidator;
