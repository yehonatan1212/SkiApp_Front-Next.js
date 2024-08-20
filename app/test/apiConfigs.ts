export const apiConfigs = {
  login: {
    endpoint: '/user/login',
    method: 'POST',
    body: {
      username: 'test',
      password: '1111',
    },
    authToken: null,
  },
  register: {
    endpoint: '/user/register',
    method: 'POST',
    body: {
      username: 'newuser',
      password: '1234',
      height: 180,
      weight: 75,
      ski_level: 'beginner',
    },
    authToken: null,
  },
  addSki: {
    endpoint: '/Ski_gear/new_ski',
    method: 'POST',
    body: {
      name: 'Test Ski',
      length: 170,
      radius: 15,
      weight: 3.2,
      camber_rocker: 3,
      tip: 25,
      waist: 20,
      tail: 25,
      stiffness: 4,
    },
    authToken: null, // Set token from login
  },
  // Add more API configs as needed
};

  