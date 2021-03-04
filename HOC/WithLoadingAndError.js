import Loader from '@/components/global/Loader';

// HOC FOR RENDERING  LOADER OR MAIN COMPONENT

function WithLoadingAndError(Component) {
  //accepts the props that we pas
  return function WihLoadingComponent({
    isLoading,
    error,
    ErrorComponent,
    ...props
  }) {
    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      <ErrorComponent />;
    }

    return <Component {...props} />;
  };
}

export default WithLoadingAndError;
