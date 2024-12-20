const { postPredictHandler, getPredictHandler } = require('./handler');

const routes = [
  {
    path: '/predict/histories',
    method: 'GET',
    handler: getPredictHandler,
  },

  {
    path: '/predict',
    method: 'POST',
    handler: postPredictHandler,

    options: {
      payload: {
        /*Mengizinkan data berupa gambar*/
        allow: 'multipart/form-data',
        multipart: true,
        maxBytes: 1000000,
      },
    },
  },
];

module.exports = routes;
