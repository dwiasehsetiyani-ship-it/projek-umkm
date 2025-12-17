const gambarProduk = document.querySelectorAll('.item-gambar');

const tampilkanNama = (event) => {
  const gambar = event.target;
  const nama = gambar.dataset.nama;

  const card = gambar.closest('.card');
  const namaProduk = card.querySelector('.nama-produk-item');
  const deskripsi = card.querySelector('.card-text');

  // tampilkan nama produk
  namaProduk.textContent = nama;

  // tampilkan deskripsi
  deskripsi.style.display = 'block';
};

// hover effect
const tambahHover = (el) => el.classList.add('hover-active');
const hapusHover = (el) => el.classList.remove('hover-active');

for (const gambar of gambarProduk) {
  gambar.addEventListener('click', tampilkanNama);
  gambar.addEventListener('mouseenter', () => tambahHover(gambar));
  gambar.addEventListener('mouseleave', () => hapusHover(gambar));
}

export { tampilkanNama };
