import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
  Box,
  Button,
  Grid,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  // TextField,
  // Autocomplete,
  InputLabel,
  OutlinedInput,
  Stack,
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

// models
import { getCampus, getProjects, postRegister } from 'models/project';

const FormRegister = ({ ...others }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const currentDate = new Date();
  const [atualDate, setAtualDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));

  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const [futureDate, setFutureDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));

  const [campus, setCampus] = useState([]);
  const [projects, setProjects] = useState([]);

  const [success, setSuccess] = useState(false);

  let validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('O nome é obrigatório'),
    description: Yup.string().max(255).required('A descrição é obrigatória'),
    campus: Yup.string().max(255).required('O campus é obrigatório'),
    project: Yup.string().max(255).required('O projeto é obrigatório')
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
    fetchCampus();
    fetchProjects();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          description: '',
          campus: '',
          project: '',
          submit: null
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            await postRegister({ ...values, atualDate, futureDate });
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
            <div style={{ margin: '15px 0px 10px 5px' }}>Dados Intitucionais</div>
            <FormControl fullWidth error={Boolean(touched.name && errors.name)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-name-register">Nome do Projeto</InputLabel>
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

            <FormControl fullWidth error={Boolean(touched.description && errors.description)} sx={{ ...theme.typography.customInput }}>
              <InputLabel htmlFor="outlined-adornment-description-register">Descrição</InputLabel>
              <OutlinedInput
                id="outlined-adornment-email-register"
                type="text"
                value={values.description}
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                inputProps={{}}
              />
              {touched.description && errors.description && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.description}
                </FormHelperText>
              )}
            </FormControl>

            <Grid container spacing={matchDownSM ? 0 : 2}>
              <Grid item xs={12} sm={6}>
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
              </Grid>

              <Grid item xs={12} sm={6}>
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
              </Grid>
            </Grid>

            <FormControl fullWidth error={Boolean(touched.campus && errors.campus)} style={{ margin: '8px 0' }}>
              <InputLabel id="demo-simple-select-label">Campus</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="campus"
                value={values.campus}
                label="Projeto"
                onChange={handleChange}
              >
                {campus.map((campusItem) => (
                  <MenuItem key={campusItem.id} value={campusItem.id}>
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
                name="project"
                value={values.project}
                label="Projeto"
                onChange={handleChange}
              >
                {projects.map((projectsItem) => (
                  <MenuItem key={projectsItem.id} value={projectsItem.id}>
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
