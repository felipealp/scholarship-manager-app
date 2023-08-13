import { Link } from 'react-router-dom';

// material-ui
import { Divider, Grid, Stack, Typography, Link as LinkMui } from '@mui/material';

// project imports
import AuthWrapper from 'components/auth/AuthWrapper';
import AuthCardWrapper from 'components/auth/AuthCardWrapper';
import Logo from 'components/Logo';
import AuthRegister from './AuthRegister';

// =============================== REGISTER =============================== //

const Register = () => {

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
                    <AuthRegister />
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid item container direction="column" alignItems="center" xs={12}>
                      <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                        Já tem uma conta? Faça Login
                      </Typography>
                    </Grid>
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

export default Register;
