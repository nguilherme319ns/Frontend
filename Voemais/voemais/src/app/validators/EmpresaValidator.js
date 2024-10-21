import * as Yup from 'yup';
 
const EmpresaValidator = Yup.object().shape({
  nome: Yup.string()
    .min(3, 'o mínimo de caracteres é 5!')
    .max(10, 'O máximo de caracteres é 50!')
    .required('Campo obrigatório'),
  logo: Yup.string(),
  site: Yup.string(),
});

export default EmpresaValidator