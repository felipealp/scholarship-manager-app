import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
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

// eslint-disable-next-line no-restricted-imports
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// third party
import dayjs from 'dayjs';
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'components/extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// models
import { getCampus, getProjects, postRegister } from 'models/user/register';

// assets
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const FormRegister = ({ userType, ...others }) => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);

  const [strength, setStrength] = useState(0);
  const [level, setLevel] = useState();

  const currentDate = new Date();
  const [atualDate, setAtualDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));

  currentDate.setFullYear(currentDate.getFullYear() + 4);
  const [futureDate, setFutureDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));

  const [campus, setCampus] = useState([]);
  const [projects, setProjects] = useState([]);

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

  const customCampusValidation = (value) => {
    return !(userType === 'Bolsista' && !value);
  };

  const customProjectValidation = (value) => {
    return !((userType === 'Bolsista' || userType === 'Coordenador') && !value);
  };

  useEffect(() => {
    changePassword('123456');
  }, []);

  let validationSchema = Yup.object().shape({
    campus: Yup.string().test('custom-validation', 'O campus é obrigatório', customCampusValidation),
    project: Yup.string().test('custom-validation', 'O projeto é obrigatório', customProjectValidation),
    matriculation: Yup.string().max(255).required('A matrícula é obrigatória'),
    username: Yup.string().max(255).required('O usuário é obrigatório'),
    name: Yup.string().max(255).required('O nome é obrigatório'),
    email: Yup.string().email('O email deve ser válido').max(255).required('O email é obrigatório'),
    password: Yup.string().max(255).required('A senha é obrigatória')
  });

  const fetchCampus = async () => {
    const campusColection = await getCampus();
    setCampus(campusColection);
  };

  const fetchProjects = async () => {
    const projectColection = await getProjects();
    setProjects(projectColection);
  };

  useEffect(() => {
    changePassword('123456');
    fetchCampus();
    fetchProjects();
  }, [userType]);

  return (
    <>
      <Formik
        initialValues={{
          campus: '',
          project: '',
          cargo: '',
          matriculation: '',
          username: '',
          name: '',
          email: '',
          password: '',
          submit: null
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            setErrors({ campus: 'err.message' });
            await postRegister({ ...values, atualDate, futureDate });
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
            <div style={{ margin: '15px 0px 10px 5px' }}>Dados Intitucionais</div>
            {userType === 'Bolsista' && (
              <>
                <FormControl fullWidth error={Boolean(touched.campus && errors.campus)} style={{ margin: '8px 0' }}>
                  <InputLabel id="demo-simple-select-label">Campus</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="campus" // Defina o name aqui
                    value={values.campus}
                    label="Campus"
                    onChange={handleChange}
                  >
                    {campus.map((campusItem) => (
                      <MenuItem key={campusItem.id} value={campusItem.nome}>
                        {campusItem.nome}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.campus && errors.campus && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.campus}
                    </FormHelperText>
                  )}
                </FormControl>

                <FormControl fullWidth error={Boolean(touched.project && errors.project)} style={{ margin: '8px 0' }}>
                  <InputLabel id="demo-simple-select-label">Projeto</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="project" // Defina o name aqui
                    value={values.project}
                    label="Projeto"
                    onChange={handleChange}
                  >
                    {projects.map((projectsItem) => (
                      <MenuItem key={projectsItem.id} value={projectsItem.nome}>
                        {projectsItem.nome}
                      </MenuItem>
                    ))}
                  </Select>
                  {touched.project && errors.project && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.project}
                    </FormHelperText>
                  )}
                </FormControl>
              </>
            )}

            {userType === 'Coordenador' && (
              <>
                <FormControl fullWidth error={Boolean(touched.project && errors.project)} style={{ margin: '8px 0' }}>
                  <InputLabel id="demo-simple-select-label">Projeto</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="project" // Defina o name aqui
                    value={values.project}
                    label="Projeto"
                    onChange={handleChange}
                  >
                    <MenuItem value="Bolsista">Bolsista</MenuItem>
                    <MenuItem value="Coordenador">Coordenador</MenuItem>
                    <MenuItem value="Reitoria">Reitoria</MenuItem>
                  </Select>
                  {touched.project && errors.project && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.project}
                    </FormHelperText>
                  )}
                </FormControl>
              </>
            )}

            {userType === 'Reitoria' && (
              <>
                <FormControl fullWidth error={Boolean(touched.dateEnd && errors.dateEnd)}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        label="Data de Início"
                        value={atualDate}
                        onChange={(newValue) => setAtualDate(newValue)}
                        sx={{ width: '100%', margin: '8px 0' }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>

                <FormControl fullWidth error={Boolean(touched.dateEnd && errors.dateEnd)}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker
                        label="Data de Fim"
                        value={futureDate}
                        onChange={(newValue) => setFutureDate(newValue)}
                        sx={{ width: '100%', margin: '8px 0' }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl>
              </>
            )}

            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={Boolean(touched.matriculation && errors.matriculation)}
                  sx={{ ...theme.typography.customInput }}
                >
                  <InputLabel htmlFor="outlined-adornment-matriculation-register">Matrícula</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-matriculation-register"
                    type="text"
                    value={values.matriculation}
                    name="matriculation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    inputProps={{}}
                  />
                  {touched.matriculation && errors.matriculation && (
                    <FormHelperText error id="standard-weight-helper-text--register">
                      {errors.matriculation}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={Boolean(touched.username && errors.username)} sx={{ ...theme.typography.customInput }}>
                  <InputLabel htmlFor="outlined-adornment-username-register">Nome de Usuário</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-username-register"
                    type="text"
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

            <div style={{ margin: '15px 0px 10px 5px' }}>Dados Pessoais</div>
            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-name-register">Nome</InputLabel>
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
