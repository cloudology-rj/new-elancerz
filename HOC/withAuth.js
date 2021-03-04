import Router from 'next/router';
import { useEffect } from 'react';

const withAuthComponent = (Component) => {
  return (props) => {
    useEffect(() => {
      if (props.isLogin) {
        console.log('YOURE LOG IN');
        // typeof window !== 'undefined' && Router.push('/dashboard');
      } else {
        console.log('YOURE NOT LOG IN');
        typeof window !== 'undefined' && Router.push('/');
      }
    }, [props.isLogin]);

    return <Component {...props} />;
  };
};

export default withAuthComponent;
