# Kriteria API

## Menyimpan Data Buku

API dapat menyimpan data buku melalui _route_:

* Method: **POST**
* URL: `/books`
* Body Request:
  ```json
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  ```

Contoh struktur objek:
```json
{
  "id": "Qbax5Oy7L8WKf74l",
  "name": "Buku A",
  "year": 2010,
  "author": "John Doe",
  "summary": "Lorem ipsum dolor sit amet",
  "publisher": "Dicoding Indonesia",
  "pageCount": 100,
  "readPage": 25,
  "finished": false,
  "reading": false,
  "insertedAt": "2021-03-04T09:11:44.598Z",
  "updatedAt": "2021-03-04T09:11:44.598Z"
}
```
* `id` : nilai harus unik.
* `finished` : merupakan properti boolean yang menjelaskan apakah buku telah selesai dibaca atau belum. Nilai didapatkan dari observasi `pageCount === readPage`.
* `insertedAt` : merupakan properti yang menampung tanggal dimasukkannya buku.
* `updatedAt` : merupakan properti yang menampung tanggal diperbarui buku. Ketika buku baru dimasukkan, nilai properti ini sama dengan `insertedAt`.

Respon yang harus dikembalikan server jika berhasil menyimpan data:

* Status Code: **201**
* Response Body:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil ditambahkan.",
    "data": {
      "bookId": "1L7ZtDUFeGs7VlEt"
    }
  }
  ```

_Error handling_:

* Jika _client_ tidak melampirkan properti `name` pada _request body_, server akan merespon dengan:
  * Status Code: **400**
  * Response Body:
    ```json
    {
      "status": "fail",
      "message": "Gagal menambahkan buku. Mohon isi nama buku."
    }
    ```
* Jika _client_ melampirkan nilai properti `readPage` yang lebih besar dari nilai properti `pageCount`, server akan merespon dengan:
  * Status Code: **400**
  * Response Body:
    ```json
    {
      "status": "fail",
      "message": "Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount."
    }
    ```
* Jika server gagal memasukkan buku karena alasan umum (_generic error_), server akan merespons dengan:
  * Status Code: **500**
  * Response Body:
    ```json
    {
      "status": "error",
      "message": "Buku gagal ditambahkan."
    }
    ```

## Menampilkan Seluruh Data Buku

API dapat menampilkan seluruh data buku yang disimpan melalui _route_:

* Method: **GET**
* URL: `/books`

Respon yang harus dikembalikan:

* Status Code: **200**
* Response Body:
  ```json
  {
    "status": "success",
    "data": {
      "books": [
        {
          "id": "Qbax5Oy7L8WKf74l",
          "name": "Buku A",
          "publisher": "Dicoding Indonesia"
        },
        {
          "id": "1L7ZtDUFeGs7VlEt",
          "name": "Buku B",
          "publisher": "Dicoding Indonesia"
        },
        {
          "id": "K8DZbfI-t3LrY7lD",
          "name": "Buku C",
          "publisher": "Dicoding Indonesia"
        }
      ]
    }
  }
  ```

Jika belum terdapat buku yang dimasukkan, server merespons dengan _array_ `books` kosong.

```json
{
  "status": "success",
  "data": {
    "books": []
  }
}
```

### Tambahan Fitur _Query Parameters_

* `?name` : Menampilkan seluruh buku yang mengandung nama berdasarkan nilai yang diberikan pada query ini. Contoh `/books?name="dicoding"`, maka akan menampilkan daftar buku yang mengandung nama "dicoding" secara _non-case sensitive_ (tidak peduli besar dan kecil huruf).
* `?reading` : Bernilai 0 atau 1. Bila 0, maka menampilkan buku yang sedang tidak dibaca (`reading: false`). Bila 1, maka menampilkan buku yang sedang dibaca (`reading: true`). Selain itu, menampilkan buku baik sedang dibaca atau tidak.
* `?finished` : Bernilai 0 atau 1. Bila 0, maka menampilkan buku yang sudah belum selesai dibaca (`finished: false`). Bila 1, maka menampilkan buku yang sudah selesai dibaca (`finished: true`). Selain itu, menampilkan buku baik yang sudah selesai atau belum dibaca.

## Menampilkan Detail Buku

API dapat menampilkan informasi detail buku yang disimpan melalui _route_:

* Method: **GET**
* URL: `/books/{bookId}`

Bila buku dengan id yang dilampirkan ditemukan, maka server harus mengembalikan respon dengan:

* Status Code: **200**
* Response Body:
  ```json
  {
    "status": "success",
    "data": {
      "book": {
        "id": "aWZBUW3JN_VBE-9I",
        "name": "Buku A Revisi",
        "year": 2011,
        "author": "Jane Doe",
        "summary": "Lorem Dolor sit Amet",
        "publisher": "Dicoding",
        "pageCount": 200,
        "readPage": 26,
        "finished": false,
        "reading": false,
        "insertedAt": "2021-03-05T06:14:28.930Z",
        "updatedAt": "2021-03-05T06:14:30.718Z"
      }
    }
  }
  ```

Bila buku dengan id yang dilampirkan oleh _client_ tidak ditemukan, maka server harus mengembalikan respon dengan:

* Status Code: **404**
* Response Body:
  ```json
  {
    "status": "fail",
    "message": "Buku tidak ditemukan."
  }
  ```

## Mengubah Data Buku

API dapat mengubah data buku berdasarkan id melalui _route_:

* Method: **PUT**
* URL: `/books/{bookId}`
* Body Request:
  ```json
  {
    "name": string,
    "year": number,
    "author": string,
    "summary": string,
    "publisher": string,
    "pageCount": number,
    "readPage": number,
    "reading": boolean
  }
  ```
Respon yang harus dikembalikan server jika data berhasil diperbarui:

* Status Code: **200**
* Response Body:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil diperbarui.",
  }
  ```

_Error handling_:

* Jika _client_ tidak melampirkan properti `name` pada _request body_, server akan merespon dengan:
  * Status Code: **400**
  * Response Body:
    ```json
    {
      "status": "fail",
      "message": "Gagal memperbarui buku. Mohon isi nama buku."
    }
    ```
* Jika _client_ melampirkan nilai properti `readPage` yang lebih besar dari nilai properti `pageCount`, server akan merespon dengan:
  * Status Code: **400**
  * Response Body:
    ```json
    {
      "status": "fail",
      "message": "Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount."
    }
    ```
* Jika Id yang dilampirkan oleh _client_ tidak ditemukan, server akan merespons dengan:
  * Status Code: **404**
  * Response Body:
    ```json
    {
      "status": "error",
      "message": "Gagal memperbarui buku. Id tidak ditemukan."
    }
    ```

## Menghapus Data Buku

API yang Anda buat harus dapat menghapus buku berdasarkan id melalui route berikut:

* Method: **DELETE**
* URL: `/books/{bookId}`

Bila id dimiliki oleh salah satu buku, maka buku tersebut harus dihapus dan server mengembalikan respons berikut:

* Status Code : 200
* Response Body:
  ```json
  {
    "status": "success",
    "message": "Buku berhasil dihapus"
  }
  ```

Bila id yang dilampirkan tidak dimiliki oleh buku manapun, maka server harus mengembalikan respons berikut:

* Status Code : 404
* Response Body:
  ```json
  {
    "status": "fail",
    "message": "Buku gagal dihapus. Id tidak ditemukan"
  }
  ```
