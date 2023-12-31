import { Link } from 'react-router-dom';

// material-ui
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { Grid, Stack, Typography, useMediaQuery, Link as LinkMui } from '@mui/material';

// project imports
import AuthCardWrapper from 'components/auth';
import AuthLogin from './AuthLogin';
import Logo from 'components/logo';

const Login = () => {
  const theme = useTheme();
  const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

  const AuthWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    minHeight: '100vh'
  }));

  return (
    <AuthWrapper>
      <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
        <Grid item xs={12}>
          <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
            <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
              <AuthCardWrapper>
                <Grid container spacing={2} alignItems="center" justifyContent="center">
                  <Grid item sx={{ mb: 3 }}>
                    <Link to="#">
                      <Logo />
                    </Link>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container direction={matchDownSM ? 'column-reverse' : 'row'} alignItems="center" justifyContent="center">
                      <Grid item>
                        <Stack alignItems="center" justifyContent="center" spacing={1}>
                          <Typography variant="caption" fontSize="16px" textAlign={matchDownSM ? 'center' : 'inherit'}>
                            Sistema de Gerenciamento de Bolsa Acadêmica
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs={12}>
                    <AuthLogin />
                  </Grid>
                </Grid>
              </AuthCardWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ m: 3, mt: 1 }}>
          <Stack direction="row" justifyContent="center">
            <Typography variant="subtitle2" component={LinkMui} href="https://ufersa.edu.br/" target="_blank" underline="hover">
              &copy; ufersa.com
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
