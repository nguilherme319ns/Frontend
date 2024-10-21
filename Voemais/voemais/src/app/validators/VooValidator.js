import * as Yup from 'yup';

const VooValidator = Yup.object().shape({
  internacional: Yup.boolean()
    .required('Campo obrigatório'),
  identificador: Yup.string()
    .min(3, 'O identificador deve ter pelo menos 3 caracteres!')
    .max(10, 'O identificador deve ter no máximo 10 caracteres!')
    .required('Campo obrigatório'),
  checkin: Yup.date()
    .required('Campo obrigatório'),
  embarque: Yup.date()
    .required('Campo obrigatório'),
  origem: Yup.string()
    .required('Campo obrigatório'),
  destino: Yup.string()
    .required('Campo obrigatório'),
  empresa: Yup.string()
    .required('Campo obrigatório'),
  preco: Yup.number()
    .min(0, 'O preço deve ser maior ou igual a 0!')
    .required('Campo obrigatório'),
});

export default VooValidator;
