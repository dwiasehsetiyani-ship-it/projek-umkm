const gambarProduk = document.querySelectorAll('.item-gambar');
const namaContainer = document.getElementById('nama-produk');

// Fungsi untuk menampilkan nama produk ketika gambar diklik
const tampilkanNama = (event) => {
  const nama = event.target.dataset.nama;
  namaContainer.textContent = `Produk: ${nama}`;
};

// Efek hover (menambah dan menghapus class)
const tambahHover = (elem) => elem.classList.add('hover-active');
const hapusHover = (elem) => elem.classList.remove('hover-active');

// Menambahkan event listeners ke semua gambar
for (const gambar of [...gambarProduk]) {
  gambar.addEventListener('click', tampilkanNama);

  gambar.addEventListener('mouseenter', () => tambahHover(gambar));
  gambar.addEventListener('mouseleave', () => hapusHover(gambar));
}

export { tampilkanNama };
