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

  const srv = await getService(quote.token, quote.selectedService)

  const data = {
    "created_by": quote.loginUser,
    "received_by": quote.selectedProfile,
    "message": quote.defaultMessage
  }

  const myMilestones = await srv.service_milestones.map(e => {
    let newObj = {}
    newObj["name"] = e.name
    newObj["price"] = e.price
    newObj["index"] = e.index
    return newObj
  })

  const dataProject = {
    name: srv.service.name,
    price: srv.service.price,
    desc: srv.service.description,
    categ: srv.service.category_id,
    serviced_by: srv.service.user_id,
    milestones: myMilestones
  }

  // console.info(dataProject)


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

  let idReturn

  if (checkifExistedRoom?.length > 0) {
    // return id
    console.log(true)
    idReturn = checkifExistedRoom[0]
  } else {
    // create a room and msg
    const newroom = await createMessage({ token, data })
    // return id
    console.log(false)
    idReturn = newroom
  }

  return idReturn

};



// MY own endpoint




// PROJECTS


// get single project
export const getsingleProject = async (token, id) => {
  const project = await apiCall(`/get-project/${id}`, 'GET', token);
  return project.project;
};


// create project
export const createProject = async ({ ...data }) => {
  const project = await apiCall(`/new-project`, 'POST', data.token, data.dataProject);
  return project;
};


// get project
export const getProject = async (token, f, e) => {
  const project = await apiCall(`/involves/${f}/projects/${e}`, 'GET', token);
  return project.projects;
};

// updateProjectMilestones
export const updateProjectMilestones = async (token, data) => {
  const project = await apiCall(`/update-milestones`, 'POST', token, data);
  return project;
};




//  start project
export const startProject = async (token, id) => {
  // console.info(token, id)
  const project = await apiCall(`/start-project/${id}`, 'GET', token);
  return project;
};

// ----------------------------------------------------------------





//  get a categories
export const getCategories = async (token) => {
  const categories = await apiCall(`/categories`, 'GET', token);
  console.log(categories)
  return categories;
};

//  get a category
export const getCategory = async (token, id) => {
  const category = await apiCall(`/categories/${id}`, 'GET', token);
  return category;
};


// ----------------------------------------------------------------

//  create a service
export const createService = async ({ ...data }) => {
  const service = await apiCall(`/new-service`, 'POST', data.token, data.data);
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
  // const service = await apiCall(`/services/${id}`, 'GET', token, null, null);
  const service = await apiCall(`/service-with-milestones/${id}`, 'GET', token);
  return service;
};

// pull /service of user
export const getUserServices = async (token) => {
  const usrID = await fetchMe(token);
  const data = await apiCall(`/profile/${usrID.id}`, 'GET', token, null, null);
  const service = await data.services;
  return service;
};




// SEND PROPOSAL

// CREATE quote
export const submitProposal = async ({ ...prop }) => {

  const token = prop?.token

  const cleanMsg = {
    "message": prop?.defaultMessage,
    "message_id": prop?.room
  }

  const milestonesProject = { milestones: prop?.milestones }

  // console.info(milestonesProject)
  await createChat({ token, cleanMsg })
  await updateProjectMilestones(token, milestonesProject)


};

