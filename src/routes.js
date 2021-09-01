const { addBookHandler } = require('./handler/add');
const { getAllBooksHandler } = require('./handler/get-all');
const { getbookByIdHandler } = require('./handler/get-detail');
const { editBookByIdHandler } = require('./handler/edit');
const { deleteBookByIdHandler } = require('./handler/delete');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getbookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
