import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  MenuItem,
  Select,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  useMediaQuery
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// models
import { register } from 'models/auth';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FormRegister = ({ userType, ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setStrength(temp);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  const universityData = (errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values) => {
    return (
      <>
        <FormLabel>Perfil de {userType}</FormLabel>
        <FormControl fullWidth error={Boolean(touched.campus && errors.campus)}>
          <InputLabel id="demo-simple-select-label">Campus</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="campus" // Defina o name aqui
            value={values.campus}
            label="Campus"
            onChange={handleChange}
          >
            <MenuItem value="Bolsista">Bolsista</MenuItem>
            <MenuItem value="Coordenador">Coordenador</MenuItem>
            <MenuItem value="Reitoria">Reitoria</MenuItem>
          </Select>
        </FormControl>
      </>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          campus: '',
          cargo: '',
          matricula: '',
          username: '',
          name: '',
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={Yup.object().shape({
          campus: Yup.string().max(255).required('A matrícula é obrigatória'),
          matricula: Yup.string().max(255).required('A matrícula é obrigatória'),
          username: Yup.string().max(255).required('O usuário é obrigatório'),
          name: Yup.string().max(255).required('O nome é obrigatório'),
          email: Yup.string().email('O email deve ser válido').max(255).required('O email é obrigatório'),
          password: Yup.string().max(255).required('A senha é obrigatória')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await register(values);
            // [redirecionar página]
            console.log('cadastrou');
            setStatus({ success: true });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit} {...others} style={{ margin: '1rem 0' }}>
            {universityData(errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values)}

            <FormLabel>Dados Pessoais</FormLabel>
            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.matricula && errors.matricula)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-matricula-register">Matrícula</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-matricula-register"
                    type="matricula"
                    value={values.matricula}
                    name="matricula"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.matricula && errors.matricula && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.matricula}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-username-register">Nome de Usuário</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username-register"
                    type="username"
                    value={values.username}
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.username && errors.username && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.username}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
            </Grid>

            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-name-register">Nome</InputLabel>
              <OutlinedInput
                id="outlined-adornment-name-register"
                type="name"
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

            <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-email-register">Email</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="email"
                value={values.email}
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.email && errors.email && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.email}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth error={Boolean(touched.password && errors.password)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-password-register">Senha</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-register"
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                name="password"
                label="Senha"
                onBlur={handleBlur}
                onChange={(e) => {
                  handleChange(e);
                  changePassword(e.target.value);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText error id="standard-weight-helper-text-password-register">
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>

            {strength !== 0 && (
              <FormControl fullWidth>
                <Box sx={{ mb: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box style={{ backgroundColor: level?.color }} sx={{ width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </FormControl>
            )}

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Box>
              )}
            </Stack>

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="secondary">
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

// Defina o tipo da propriedade userType
FormRegister.propTypes = {
  userType: PropTypes.string.isRequired
};

export default FormRegister;
