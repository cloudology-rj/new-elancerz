import { createContext, useState, useEffect } from 'react';

export const StatusContext = createContext();

export const StatusContextProvider = (props) => {
  const [toggleFreelancer, setToggleFreelancer] = useState(false);
  const [toggleEmployer, setToggleEmployer] = useState(false);

  return (
    <StatusContext.Provider
      value={{
        freelancer: [toggleFreelancer, setToggleFreelancer],
        employer: [toggleEmployer, setToggleEmployer],
      }}
    >
      {props.children}
    </StatusContext.Provider>
  );
};
