import Router from 'next/router';
import { useEffect } from 'react';

const withAuthComponent = (Component) => {
  return (props) => {
    useEffect(() => {
      if (props.isLogin) {
        typeof window !== 'undefined' && Router.push('/dashboard');
      }
    }, [props.isLogin]);

    return <Component {...props} />;
  };
};

const ProtectedComponent = (Component) => {
  return (props) => {
    useEffect(() => {
      if (!props.isLogin) {
        typeof window !== 'undefined' && Router.push('/');
      }
    }, [props.isLogin]);

    return <Component {...props} />;
  };
};

export { withAuthComponent, ProtectedComponent };
