import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'layout/extended/AnimateButton';
import Toast from 'components/toast';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getRegister, postRegister } from 'models/campus';

const FormRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [campus, setCampus] = useState({});

  const requestCampusRegister = async () => {
    if (id) {
      const campusData = await getRegister(id);
      setCampus(campusData);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestCampusRegister();
  });

  let validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('O nome é obrigatório'),
    address: Yup.string().max(255).required('O endereço é obrigatório')
  });

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: campus.id || '',
          name: campus.nome || '',
          address: campus.endereco || '',
          submit: null
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await postRegister({ ...values });
            setStatus({ success: true });
            setSubmitting(false);
            setSuccess(true);
            setTimeout(() => {
              navigate('/campus');
            }, 2000);
          } catch (err) {
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others} style={{ margin: '1rem 0' }}>
            <div style={{ margin: '15px 0px 10px 5px' }}>Dados Institucionais</div>
            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-name-register">Nome do Campus</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name-register"
                type="text"
                value={values.name}
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.name && errors.name && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.name}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.address && errors.address)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-address-register">Endereço</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="text"
                value={values.address}
                name="address"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.address && errors.address && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.address}
                </FormHelperText>
              )}
            </FormControl>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                  <Toast
                    type="error"
                    message={`Campus não foi ${campus.id ? 'atualizado' : 'cadastrado'}!`}
                    open={true}
                    handleClose={() => {}}
                  />
                </Box>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {success && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>
                    Cadastro {campus.id ? 'atualizado' : 'realizado'} com sucesso.
                  </FormHelperText>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>
                    Você será redirecionado para tela de Listagem!
                  </FormHelperText>
                  <Toast
                    type="success"
                    message={`Campus ${campus.id ? 'atualizado' : 'cadastrado'} com sucesso!`}
                    open={true}
                    handleClose={() => {}}
                  />
                </Box>
              )}
            </Stack>

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button
                  disableElevation
                  disabled={isSubmitting || success}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  {campus.id ? 'Atualizar' : 'Cadastrar'}
                </Button>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FormRegister;
