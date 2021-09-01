const books = require('../books');

/**
 * Menampilkan seluruh entri buku
 */
const getAllBooksHandler = (request, h) => {
  const { name, reading, finished } = request.query;
  let bookList = [...books];

  /** Query parameter `name` */
  if (typeof name !== 'undefined') {
    bookList = bookList.filter((x) => x.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
  }

  /** Query parameter `reading` */
  if (typeof reading !== 'undefined') {
    bookList = bookList.filter((x) => x.reading === Boolean(Number(reading)));
  }

  /** Query parameter `finished` */
  if (typeof finished !== 'undefined') {
    bookList = bookList.filter((x) => x.finished === Boolean(Number(finished)));
  }

  /** Filter data yang ditampilkan hanya id, name dan publisher */
  if (bookList.length) {
    bookList = bookList.map((item) => ({
      id: item.id,
      name: item.name,
      publisher: item.publisher,
    }));
  }

  /** Respon sukses */
  const response = h.response({
    status: 'success',
    data: {
      books: [...bookList],
    },
  });
  response.code(200);
  return response;
};

module.exports = { getAllBooksHandler };
