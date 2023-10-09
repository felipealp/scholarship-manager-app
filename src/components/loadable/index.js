import { Suspense } from 'react';

// project imports
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';

// styles

const Loadable = (Component) => (props) => {
  const LoaderWrapper = styled('div')({
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1301,
    width: '100%'
  });

  const Loader = () => (
    <LoaderWrapper>
      <LinearProgress color="primary" />
    </LoaderWrapper>
  );

  return (
    <Suspense fallback={<Loader />}>
      <Component {...props} />
    </Suspense>
  );
};

export default Loadable;
