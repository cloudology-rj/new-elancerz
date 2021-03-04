import { Info } from 'react-feather';
import apiCall from '../helpers/fetch';

export const fetchFreelancers = (query, page) => {
  return apiCall(`search/services?search=${query}`, 'GET').catch(
    (err) => new Error(err.message)
  );
};

// fetch /me api
export const fetchMe = async (token) => {
  const data = await apiCall('/user/me', 'POST', token, null, null);
  return data;
};

// fetch /profile
export const fetchProfile = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  return data;
};

// fetch freelancer profile
export const fetchProfileFreelancer = async (id, token) => {
  const data = await apiCall(`/profile/${id}`, 'GET', token, '');
  return data;
};

// fetch /services
export const fetchServices = async (token, id) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  const services = await data.services;
  const service = await services.find((x) => x.id == id);
  return service;
};

//  create service
export const createService = async ({ ...data }) => {
  const service = await apiCall(`/services`, 'POST', data.token, data.newData);
  return service;
};

//  update service
export const updateService = async ({ ...data }) => {
  const service = await apiCall(
    `/services/${data.srvID}`,
    'PUT',
    data.token,
    data.newData
  );
  return service;
};

export const deleteService = async ({ ...data }) => {
  // console.log(data);
  await apiCall(`/services/${data.id}`, 'DELETE', data.token);
  // return null
};

// pull /service
export const getService = async (token, id) => {
  const service = await apiCall(`/services/${id}`, 'GET', token, null, null);
  return service;
};

// pull /service of user
export const getUserServices = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  const service = await data.services;
  return service;
};

//dashbord
export const fetchFreelancerDashboard = async (token) => {
  const usrID = await fetchMe(token);

  const data = await apiCall(
    `/dashboard/freelancer/${usrID.id}`,
    'GET',
    token,
    null,
    null
  );
  return data;
};
export const fetchEmployerDashboard = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(
    `/dashboard/employer/${usrID.id}`,
    'GET',
    token,
    null,
    null
  );
  return data;
};



// messages


// GET rooms and messages
export const getMessages = async (token) => {
  const messages = await apiCall(`/message`, 'GET', token, null, null);
  return messages;
};


// CREATE messages
export const createMessage = async ({ ...data }) => {
  const messages = await apiCall(`/message`, 'POST', data.token, data.data, null);
  return messages;
};


// CREATE chat
export const createChat = async ({ ...data }) => {
  // console.log('msg:', data);
  const chat = await apiCall(`/message/chat`, 'POST', data.token, data.cleanMsg, null);
  return chat;
};



// Delete deleteConvo
export const deleteConvo = async (token, id) => {
  // console.log('msg:', data);
  const chat = await apiCall(`/message/${id}`, 'DELETE', token);
  return chat;
};


// QUOTE

// CREATE quote
export const createQuote = async ({ ...quote }) => {

  const data = {
    "created_by": quote.loginUser,
    "received_by": quote.selectedProfile,
    "message": quote.defaultMessage
  }



  const dataProject = {
    name: quote.selectedService.name,
    created_by: quote.loginUser,
    serviced_by: quote.selectedProfile,
    price: quote.selectedService.price,
    category_id: quote.selectedService.category_id,
    status: 'pending',
    description: `test`
  }


  const token = quote.token
  const allmsg = await getMessages(quote.token)
  const checkifExistedRoom = await allmsg.data.filter(x => x.received_by_user.id == quote.selectedProfile)


  if (checkifExistedRoom?.length > 0) {
    // room existed need to chat here
    const cleanMsg = {
      "message": quote.defaultMessage,
      "message_id": checkifExistedRoom.pop().id
    }
    await createChat({ token, cleanMsg })
    await createProject({ token, dataProject })

  } else {
    // create a room and msg
    await createMessage({ token, data })
    await createProject({ token, dataProject })
  }

};


// CREATE quote
export const createRoomOrChat = async ({ ...quote }) => {

  const data = {
    "created_by": quote.loginUser,
    "received_by": quote.selectedProfile,
    "message": quote.defaultMessage
  }
  const token = quote.token
  const allmsg = await getMessages(quote.token)
  const checkifExistedRoom = await allmsg.data.filter(x => x.received_by_user.id == quote.selectedProfile)


  if (checkifExistedRoom?.length > 0) {
    return true
  } else {
    // create a room and msg
    await createMessage({ token, data })
    return false
  }

};





// PROJECTS

// create project
export const createProject = async ({ ...data }) => {
  const project = await apiCall(`/project/employer`, 'POST', data.token, data.dataProject, null);
  return project;
};


// get project
export const getProject = async (token) => {
  const project = await apiCall(`/project/employer`, 'GET', token);
  return project;
};