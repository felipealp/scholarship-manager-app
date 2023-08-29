import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/extended/AnimateButton';

// models
import { postRegister } from 'models/campus/register';

const FormRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);

  let validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('O nome é obrigatório'),
    address: Yup.string().max(255).required('O endereço é obrigatório')
  });

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          address: '',
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
              navigate('/');
            }, 5000);
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
                </Box>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {success && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>Cadastro realizado com sucesso.</FormHelperText>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>
                    Você será redirecionado para tela de ...?!
                  </FormHelperText>
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
                  Cadastrar
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
