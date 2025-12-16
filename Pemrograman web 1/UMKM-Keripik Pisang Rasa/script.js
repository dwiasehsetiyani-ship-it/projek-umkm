// Memberi tahu bahwa script berhasil di-load
alert('Selamat datang di Website Profil UMKM Anda!');

// Menyapa pengguna dengan nama usaha masing-masing
const namaUMKM = 'Banana Kriuk';
alert('Halo! Ini adalah profil UMKM ' + namaUMKM);

// Menampilkan informasi variabel di console
console.log('Nama UMKM:', namaUMKM);

// =======================
// Variabel rasa
// =======================
let jumlahRasa = 3; 
console.log('Jumlah rasa awal:', jumlahRasa);

// Tambah 1 varian rasa baru
jumlahRasa += 1;
console.log('Setelah penambahan varian rasa baru:', jumlahRasa);

// Rincian varian rasa
let rasaCoklat = 1;
let rasaMatcha = 1;
let rasaTaro = 1;
let rasaOriginal=1;

console.log('Rasa Coklat:', rasaCoklat);
console.log('Rasa Matcha:', rasaMatcha);
console.log('Rasa Taro :', rasaTaro);
console.log('RasaOriginal:',rasaOriginal);

// =======================
// Variabel kemasan
// =======================
let kemasanKecil = 3;
let kemasanBesar = 2;

// Hitung total semua kemasan
let totalKemasan = kemasanKecil + kemasanBesar;

console.log('Jumlah kemasan kecil:', kemasanKecil);
console.log('Jumlah kemasan besar:', kemasanBesar);
console.log('Total semua kemasan:', totalKemasan);

// =======================
// Total keseluruhan produk
// =======================
let totalProduk = jumlahRasa * totalKemasan;
console.log('Total variasi produk Banana Kriuk:', totalProduk);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formKontak");
  const nama = document.getElementById("nama");
  const email = document.getElementById("email");
  const hp = document.getElementById("hp");
  const pesan = document.getElementById("pesan");
  const errorMsg = document.getElementById("errorMsg");
  const successMsg = document.getElementById("successMsg");
  const clearBtn = document.getElementById("clearBtn");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // mencegah reload halaman

    // Reset pesan sebelumnya
    errorMsg.textContent = "";
    successMsg.textContent = "";

    // Validasi field kosong
    if (nama.value === "" || email.value === "" || hp.value === "" || pesan.value === "") {
      errorMsg.textContent = "⚠️ Semua field harus diisi.";
      return;
    }

    // Validasi nomor HP hanya angka
    if (!/^[0-9]+$/.test(hp.value)) {
      errorMsg.textContent = "⚠️ Nomor HP hanya boleh berisi angka.";
      return;
    }

    // Jika semua valid
    successMsg.textContent = "✅ Pesan berhasil dikirim! Terima kasih telah menghubungi Banana Kriuk.";
    form.reset();
  });

  // Tombol Clear Data
  clearBtn.addEventListener("click", function () {
    form.reset();
    errorMsg.textContent = "";
    successMsg.textContent = "";
  });
});


const form = document.getElementById("webinarForm");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const hp = document.getElementById("hp");
const topik = document.getElementById("topik");
const setuju = document.getElementById("setuju");

function showError(input, message) {
    const errorText = input.parentElement.querySelector(".error");
    errorText.textContent = message;
    input.style.borderColor = "red";
}

function clearError(input) {
    const errorText = input.parentElement.querySelector(".error");
    errorText.textContent = "";
    input.style.borderColor = "#4a8df8";
}

// ---------------- VALIDASI NAMA ----------------
nama.addEventListener("input", () => {
    if (nama.value.trim().length < 3) {
        showError(nama, "Minimal 3 karakter");
    } else {
        clearError(nama);
    }
});

nama.addEventListener("blur", () => {
    if (nama.value.trim().length < 3) {
        showError(nama, "Nama belum valid");
    }
});

// ---------------- VALIDASI EMAIL ----------------
email.addEventListener("input", () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email.value)) {
        showError(email, "Format email tidak valid");
    } else if (email.value.includes("@yahoo.com")) {
        showError(email, "Email yahoo.com tidak diperbolehkan");
    } else {
        clearError(email);
    }
});

// ---------------- VALIDASI HP ----------------
hp.addEventListener("input", () => {
    hp.value = hp.value.replace(/[^0-9]/g, "");

    if (hp.value.length < 10) {
        showError(hp, "Nomor HP terlalu pendek");
    } else {
        clearError(hp);
    }
});

// ---------------- VALIDASI TOPIK ----------------
topik.addEventListener("change", () => {
    if (topik.value === "") {
        showError(topik, "Silakan pilih salah satu");
    } else {
        clearError(topik);
    }
});

// ---------------- VALIDASI CHECKBOX ----------------
setuju.addEventListener("change", () => {
    const err = setuju.parentElement.parentElement.querySelector(".error");

    if (!setuju.checked) err.textContent = "Anda harus menyetujui syarat & ketentuan";
    else err.textContent = "";
});

// ---------------- VALIDASI SAAT SUBMIT ----------------
form.addEventListener("submit", (e) => {
    let valid = true;

    if (nama.value.trim().length < 3) { showError(nama, "Minimal 3 karakter"); valid = false; }
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { showError(email, "Email tidak valid"); valid = false; }
    if (email.value.includes("@yahoo.com")) { showError(email, "Tidak boleh pakai yahoo.com"); valid = false; }
    if (hp.value.length < 10) { showError(hp, "Nomor HP tidak valid"); valid = false; }
    if (topik.value === "") { showError(topik, "Pilih topik terlebih dahulu"); valid = false; }

    const err = setuju.parentElement.parentElement.querySelector(".error");
    if (!setuju.checked) { err.textContent = "Wajib disetujui"; valid = false; }

    if (!valid) e.preventDefault();
});


