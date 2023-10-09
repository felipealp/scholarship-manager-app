import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

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
import AnimateButton from 'layout/extended/AnimateButton';
import Toast from 'components/toast';
import SkeletonEarningCard from 'components/Skeleton';

// models
import { getAll as getAllCampus } from 'models/campus';
import { getAdvisors as getAllAdvisors } from 'models/advisor';
import { getRegister, postRegister } from 'models/project';

const FormRegister = ({ ...others }) => {
  const theme = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const [campus, setCampus] = useState([]);
  const [project, setProject] = useState({});
  const [advisors, setadvisors] = useState([]);

  // dates
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  const currentDate = new Date();
  const [atualDate, setAtualDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));
  currentDate.setFullYear(currentDate.getFullYear() + 1);
  const [futureDate, setFutureDate] = useState(dayjs(currentDate.toISOString().slice(0, 16)));

  const requestGetCampus = async () => {
    const data = await getAllCampus();
    setCampus(data);
  };

  const requestGetadvisors = async () => {
    const data = await getAllAdvisors();
    setadvisors(data);
  };

  const requestProjectRegister = async () => {
    if (id) {
      const data = await getRegister(id);
      setProject(data);

      const startDate = new Date(data.data_inicio);
      const endDate = new Date(data.data_fim);
      setAtualDate(dayjs(startDate.toISOString().slice(0, 16)));
      setFutureDate(dayjs(endDate.toISOString().slice(0, 16)));

      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    requestGetCampus();
    requestGetadvisors();
    requestProjectRegister();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let validationSchema = Yup.object().shape({
    name: Yup.string().max(255).required('O nome é obrigatório'),
    description: Yup.string().max(255).required('A descrição é obrigatória'),
    campus: Yup.string().max(255).required('O campus é obrigatório'),
    advisor: Yup.string().max(255).required('O coordenador é obrigatório')
  });

  if (isLoading) {
    return <SkeletonEarningCard />;
  }

  return (
    <>
      <Formik
        initialValues={{
          id: project.id || '',
          name: project.nome || '',
          description: project.descricao || '',
          campus: project.campus || '',
          advisor: project.orientador || '',
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
              navigate('/projetos');
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

            <FormControl fullWidth error={Boolean(touched.advisor && errors.advisor)} style={{ margin: '8px 0' }}>
              <InputLabel id="demo-simple-select-label">Orientador</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="advisor"
                value={values.advisor}
                label="Orientador"
                onChange={handleChange}
              >
                {advisors.map((advisorsItem) => (
                  <MenuItem key={advisorsItem.id} value={advisorsItem.id}>
                    {advisorsItem.user.name}
                  </MenuItem>
                ))}
              </Select>
              {touched.advisor && errors.advisor && (
                <FormHelperText error id="standard-weight-helper-text--register">
                  {errors.advisor}
                </FormHelperText>
              )}
            </FormControl>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {errors.submit && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                  <Toast
                    type="error"
                    message={`Projeto não foi ${project.id ? 'atualizado' : 'cadastrado'}!`}
                    open={true}
                    handleClose={() => {}}
                  />
                </Box>
              )}
            </Stack>

            <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
              {success && (
                <Box sx={{ mt: 3 }}>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>Cadastro realizado com sucesso.</FormHelperText>
                  <FormHelperText style={{ color: 'green', textAlign: 'center' }}>
                    Você será redirecionado para tela de Listagem!
                  </FormHelperText>
                  <Toast
                    type="success"
                    message={`Projeto ${project.id ? 'atualizado' : 'cadastrado'} com sucesso!`}
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
                  {project.id ? 'Atualizar' : 'Cadastrar'}
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
