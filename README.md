# Bookshelf API

![Node 21.7.3](https://img.shields.io/badge/Node-21.7.3-brightgreen.svg?style=flat-square)
![Hapi 21.3.9](https://img.shields.io/badge/Hapi-21.3.9-orange.svg?style=flat-square)

Repositori proyek untuk submisi tugas kelas [Belajar Membuat Aplikasi Back-End untuk Pemula](dicoding.com/academies/261) pada platform [Dicoding Academy](dicoding.com)

Pembaharuan terakhir: 24 April 2024<br>
Submisi versi awal: [15 April 2021](https://github.com/yogaperdana/Dicoding-Bookshelf-API/tree/sub2021)

## Kriteria Project

- Menggunakan Framework [Hapi Framework](hapi.dev).
- Menggunakan _port_ **9000**.
- Menggunakan [ESLint](eslint.org) dan salah satu _style guide_ (project ini menggunakan _style_ `airbnb-base`).
- Aplikasi dijalankan dengan perintah `npm run start` dan tidak dijalankan dengan menggunakan `nodemon`.

## Kriteria API

Dokumentasi kriteria API dapat dilihat di berkas [API.md](./API.md)

## Menjalankan Aplikasi

Install terlebih dahulu _packages_ yang digunakan pada aplikasi ini dengan menggunakan perintah:
```sh
npm install
```

Untuk menjalankan aplikasi, gunakan perintah berikut:
```sh
npm start
```
atau `npm run start` (sama saja)

Untuk menjalankan aplikasi dalam mode _development_, gunakan perintah berikut:
```sh
npm run dev
```

## Pengujian

Pengujian API dilakukan dengan menggunakan _tools_ [Postman](https://www.postman.com) atau [Newman](https://github.com/postmanlabs/newman).

Jika menggunakan Newman, pasang terlebih dahulu secara _global_ dengan perintah berikut:
```sh
npm install newman -g
```

Untuk menjalankan pengujian, gunakan perintah berikut:
```sh
newman run ./test/collection.json -e ./test/environment.json
```

## Versi Dependensi Paket

Beberapa _package_ berikut harus tetap dipertahankan versinya:
* `nanoid` &rarr; versi 3 (&leq;3.3.7)<br>
   Versi terbaru tidak mendukung format penulisan CommonJS (_import/export_)
* `eslint` &rarr; versi 8 (&leq;8.57.0)<br>
   Versi terbaru tidak menggunakan `.eslintrc` untuk berkas konfigurasinya.

## Hak Cipta dan Lisensi

Pembuatan aplikasi ini digunakan murni sebagai keperluan pembelajaran pada platform [Dicoding Indonesia](dicoding.com). Hak cipta materi/modul sepenuhnya dimiliki oleh platform.

Kode aplikasi pada repositori ini dibuat secara terbuka (_open source_) di bawah lisensi [ISC](isc.org/licenses), kecuali untuk _external packages_ memuat lisensi yang berbeda-beda.

Walaupun setiap peserta kelas akan mendapatkan tugas dengan kriteria yang sama, **mohon untuk tidak melakukan plagiasi penuh untuk tugas submisi Anda berdasarkan repositori ini.**
