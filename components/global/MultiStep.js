import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { ButtonPrimary } from '@/components/global/Button';
import styled from 'styled-components';

const FormContainer = styled(Form)`
  width: 100%;
`;

const ButtonStepper = styled(ButtonPrimary)`
  margin-top: 20px;
`;

/*
FormikStepper Component


 renderItems={FormikStep} -> Renders the Item by each step
 currentStep={step} -> tracks the current step
 onSetStep={setStep} -> switch betwen steps
 validationSchema={schemas[step]} -> val schema will be wrapped in an array of object to set schema by step
 initialValues={{     }} -> 
 onSubmit={async (values, helpers) => {  }}


 
The switching of the steps works by creating a function and housing 
it with condition to display a component


*/

const MultiStep = ({
  isFinish,
  isLoading,
  redirect,
  currentStep,
  onSetStep,
  renderItems,
  ...props
}) => {
  return (
    <Formik {...props}>
      {({ values, errors, touched, handleChange, handleBlur, status }) => (
        <FormContainer autoComplete="off">
          {
            // We pass the props that our form fields going to need
            renderItems(
              currentStep,
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              status,
              redirect,
              isFinish,
              isLoading
            )
          }
        </FormContainer>
      )}
    </Formik>
  );
};

export default MultiStep;

MultiStep.propTypes = {
  currentStep: PropTypes.number.isRequired,
  onSetStep: PropTypes.func.isRequired,
  renderItems: PropTypes.func.isRequired,
};
