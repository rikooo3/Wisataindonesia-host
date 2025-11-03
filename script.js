// Database wisata (edit manual di sini)
const wisataData = [
    {
        id: 1,
        nama: "Pantai Kuta, Bali",
        daerah: "Bali",
        harga: 50000,
        rating: 4.5,
        ulasan: [
            { rating: 5, text: "Pantai indah sekali!" },
            { rating: 4, text: "Namina Nico: Menikmati sunset di Kuta Beach jangan sampai terlewat. Pantainya bersih dan suasananya nyaman. Pedagang pedagang minuman disana pun ramah ramah dan memberikan harga yang sangat wajar sekali. Sangat rekomen jika ingin menikmati suasana sunset disekitaran Legian dan Kuta" },
        ],
        deskripsi: "Pantai Kuta adalah pantai terkenal di Bali dengan pasir putih dan ombak besar. Cocok untuk bersantai dan olahraga air. Deskripsi lengkap: Pantai ini menawarkan pemandangan matahari terbenam yang spektakuler dan berbagai aktivitas seperti surfing, snorkeling, dan berjalan-jalan di sepanjang pantai. Kunjungi saat musim kemarau untuk pengalaman terbaik.",
        gambar: ["kutabali/bali1.jfif", "kutabali/bali2.jfif", "kutabali/bali3.jfif", "kutabali/bali4.jfif"],
        lokasi: "https://maps.google.com/?q=Pantai+Kuta+Bali"
    },
    {
        id: 2,
        nama: "Pantai Ancol, Jakarta",
        daerah: "DKI Jakarta",
        harga: 30000,
        rating: 3.8,
        ulasan: [
            { rating: 4, text: "Dekat dengan kota." }
        ],
        deskripsi: "Pantai berpasir ramai ini menjadi tempat anak-anak bermain di air yang tenang dengan penjaga pantai & sunset.. Deskripsi lengkap: Tempat ini memiliki pantai buatan, taman hiburan, dan area snorkeling. Cocok untuk keluarga dengan anak-anak.",
        gambar: ["ancol/ancol1.jpeg", "ancol/ancol2.jfif", "ancol/ancol3.jfif", "ancol/ancol4.jfif"],
        lokasi: "https://maps.google.com/?q=Pantai+Ancol+Jakarta"
    },
    {
        id: 3,
        nama: "Pantai Ulee Lheue, Aceh",
        daerah: "Aceh",
        harga: 20000,
        rating: 4.2,
        ulasan: [
            { rating: 4, text: "Tenang dan indah." }
        ],
        deskripsi: "Pantai Ulee Lheue menawarkan keindahan laut Aceh yang masih alami. Deskripsi lengkap: Dengan pasir putih dan air laut jernih, pantai ini ideal untuk diving dan melihat biota laut.",
        gambar: ["ulee/ule1.jfif", "ulee/ule2.jfif", "ulee/ule3.jfif", "ulee/ule4.jfif"],
        lokasi: "https://maps.google.com/?q=Pantai+Ulee+Lheue+Aceh"
    },
    {
        id: 5,
        nama: "Pink Beach, Nusa Tenggara Timur",
        daerah: "Nusa Tenggara Timur",
        harga: 100000,
        rating: 5.0,
        ulasan: [
            { rating: 4, text: "Arif" }
        ],
        deskripsi: "Pantai Ulee Lheue menawarkan keindahan laut Aceh yang masih alami. Deskripsi lengkap: Dengan pasir putih dan air laut jernih, pantai ini ideal untuk diving dan melihat biota laut.",
        gambar: ["pink1/pink1.jpg", "pink1/pink2.jfif", "pink1/pink3.jfif", "pink1/pink4.jfif"],
        lokasi: "https://maps.app.goo.gl/dXRESbcYYF4gVUR96"
    },
    {
        id: 6,
        nama: "Sea World Ancol, Jakarta",
        daerah: "DKI Jakarta",
        harga: 120000,
        rating: 5.0,
        ulasan: [
            { rating: 4, text: "Arif" }
        ],
        deskripsi: "Sea World Ancol adalah akuarium raksasa di Jakarta... yang menampilkan ribuan biota laut dan air tawar untuk tujuan hiburan, edukasi, dan konservasi. Pengunjung dapat menjelajahi dunia bawah laut melalui akuarium utama dengan lorong kaca seperti Terowongan Antasena, melihat berbagai spesies seperti hiu dan ubur-ubur, serta berinteraksi langsung dengan hewan di Interactive Aquarium atau Touch Pool. Atraksi ini juga menyajikan pertunjukan edukatif lumba-lumba dan singa laut. ",
        gambar: ["seacol/seancol2.jfif", "seacol/seancol1.jfif", "seacol/seancol3.jfif", "seacol/seancol4.jfif"],
        lokasi: "https://maps.app.goo.gl/B8N63MWpqoFJkFxu8"
    },
    {
        id: 7,
        nama: "Pantai Aloha Pik 2, Tangerang",
        daerah: "Tangerang",
        harga: 0,
        rating: 4.5,
        ulasan: [
            { rating: 4, text: "Arif" }
        ],
        deskripsi: "Pantai Aloha adalah destinasi wisata pantai buatan di kawasan PIK 2, Tangerang, yang menawarkan konsep tropis ala Hawaii dengan pasir putih dan pemandangan indah... Pantai ini populer di kalangan warga Jakarta dan sekitarnya karena menawarkan suasana santai, beragam kuliner, dan banyak spot foto yang instagramable. Pengunjung disarankan datang sore hari karena cuaca lebih sejuk, namun pantai ini tetap ramai, terutama saat akhir pekan.  ",
        gambar: ["pik2/pik1.jfif", "pik2/pik2.jfif", "pik2/pik3.jfif", "pik2/pik4.jfif"],
        lokasi: "https://maps.app.goo.gl/B8N63MWpqoFJkFxu8"
    },
    {
        id: 8,
        nama: "Pantai Kuta, Bali",
        daerah: "Bali",
        harga: 50000,
        rating: 4.5,
        ulasan: [
            { nama: "Anonim1", rating: 5, text: "Pantai indah sekali!" },
            { nama: "Pengunjung Bali", rating: 4, text: "Bagus untuk surfing." }
        ],
        // ... (lanjut seperti sebelumnya)
    },
    
    // Tambah wisata lainnya di sini
];

// Daerah untuk filter (edit manual)
const daerahOptions = ["Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Bali", "DKI Jakarta", "Nusa Tenggara Timur", "Tangerang"];

// Placeholder animasi search bar (edit manual)
const placeholders = ["Cari Wisata", "Pantai Indah, Bali", "Liburan Seru", "Wonderful Indonesia", "Mau Jalan Jalan?"];
let placeholderIndex = 0;

// Fungsi untuk animasi placeholder
function animatePlaceholder() {
    const input = document.getElementById('search-input');
    if (input) {
        input.placeholder = placeholders[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    }
}
setInterval(animatePlaceholder, 2000); // Ganti setiap 2 detik

// Fungsi untuk menampilkan wisata
function displayWisata(wisataList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    wisataList.forEach(wisata => {
        const item = document.createElement('div');
        item.className = 'wisata-item';
        item.innerHTML = `
            <img src="${wisata.gambar[0]}" alt="${wisata.nama}">
            <h3>${wisata.nama}</h3>
            <p>Daerah: ${wisata.daerah}</p>
            <p>Harga: Rp ${wisata.harga.toLocaleString()}</p>
            <p>Rating: ${wisata.rating} bintang</p>
            <a href="wisata.html?id=${wisata.id}">Lihat Detail</a>
        `;
        container.appendChild(item);
    });
}

// Fungsi untuk rekomendasi (acak 3)
function loadRekomendasi() {
    const rekomendasi = wisataData.sort(() => 0.5 - Math.random()).slice(0, 3);
    displayWisata(rekomendasi, 'rekomendasi-list');
}

// Fungsi untuk filter dan pencarian
function filterWisata() {
    const search = document.getElementById('search-input').value.toLowerCase();
    const daerah = document.getElementById('filter-daerah').value;
    const hargaFilter = document.getElementById('filter-harga').value;
    const rating = document.getElementById('filter-rating').value;

    const filtered = wisataData.filter(w => {
        let hargaMatch = true;
        if (hargaFilter === '0-200000') {
            hargaMatch = w.harga <= 200000;
        } else if (hargaFilter === '200000-500000') {
            hargaMatch = w.harga > 200000 && w.harga <= 500000;
        } else if (hargaFilter === '>500000') {
            hargaMatch = w.harga > 500000;
        }

        return (w.nama.toLowerCase().includes(search) || w.daerah.toLowerCase().includes(search)) &&
               (!daerah || w.daerah === daerah) &&
               hargaMatch &&
               (!rating || w.rating >= parseInt(rating));
    });
    displayWisata(filtered, 'wisata-list');
}

// Inisialisasi home
if (document.getElementById('search-filter')) {
    // Isi dropdown daerah
    const daerahSelect = document.getElementById('filter-daerah');
    daerahOptions.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        daerahSelect.appendChild(option);
    });

    // Hapus event listener untuk range harga (tidak lagi diperlukan)
    // document.getElementById('filter-harga').addEventListener('input', (e) => {
    //     document.getElementById('harga-value').textContent = `Harga: Rp ${parseInt(e.target.value).toLocaleString()}`;
    // });

    // Event listener
    document.getElementById('filter-btn').addEventListener('click', filterWisata);
    document.getElementById('search-input').addEventListener('input', filterWisata);

    loadRekomendasi();
    filterWisata(); // Tampilkan semua awal
}


// Halaman detail wisata
if (window.location.pathname.includes('wisata.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const wisata = wisataData.find(w => w.id === id);

    if (wisata) {
    // Tambahkan class khusus jika ID wisata adalah 1
    if (wisata.id === 5) {
        document.body.classList.add('special-wisata');
    }

    document.getElementById('wisata-nama').textContent = wisata.nama;
    // ... (lanjut kode seperti sebelumnya)
        document.getElementById('wisata-nama').textContent = wisata.nama;
        document.getElementById('gambar-wisata').innerHTML = wisata.gambar.map(img => `<img src="${img}" alt="${wisata.nama}">`).join('');
        document.getElementById('deskripsi-text').textContent = wisata.deskripsi.split('. ').slice(0, 2).join('. ') + '.'; // Singkat awal
        document.getElementById('harga').textContent = `Rp ${wisata.harga.toLocaleString()}`;
        document.getElementById('lokasi').href = wisata.lokasi;
        document.getElementById('rating').textContent = wisata.rating;

        // Toggle deskripsi
        let isFull = false;
        document.getElementById('toggle-deskripsi').addEventListener('click', () => {
            isFull = !isFull;
            document.getElementById('deskripsi-text').textContent = isFull ? wisata.deskripsi : wisata.deskripsi.split('. ').slice(0, 2).join('. ') + '.';
            document.getElementById('toggle-deskripsi').textContent = isFull ? 'Tampilkan Lebih Sedikit' : 'Tampilkan Lebih Banyak';
        });

        // Tampilkan ulasan
function displayUlasan() {
    const ulasanList = JSON.parse(localStorage.getItem(`ulasan-${id}`)) || wisata.ulasan;
    document.getElementById('ulasan-list').innerHTML = ulasanList.map(u => `<div class="ulasan-item"><strong>${u.nama} (${u.rating} bintang):</strong> ${u.text}</div>`).join('');
}

// Tambah ulasan
document.getElementById('tambah-ulasan').addEventListener('submit', (e) => {
    e.preventDefault();
    const nama = document.getElementById('nama-input').value.trim();
    const rating = parseInt(document.getElementById('rating-input').value);
    const text = document.getElementById('ulasan-input').value.trim();
    
    if (!nama || rating < 1 || !text) {
        alert('Harap isi nama, pilih rating, dan tulis ulasan!');
        return;
    }
    
    const ulasan = JSON.parse(localStorage.getItem(`ulasan-${id}`)) || wisata.ulasan;
    ulasan.push({ nama, rating, text });
    localStorage.setItem(`ulasan-${id}`, JSON.stringify(ulasan));
    displayUlasan();
    e.target.reset();
    // Reset bintang
    document.querySelectorAll('.star').forEach(star => star.classList.remove('active'));
    document.getElementById('rating-input').value = '0';
});

// Logika Klik Bintang
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
        const value = parseInt(star.getAttribute('data-value'));
        document.getElementById('rating-input').value = value;
        // Update tampilan bintang
        document.querySelectorAll('.star').forEach(s => {
            s.classList.toggle('active', parseInt(s.getAttribute('data-value')) <= value);
        });
    });
});
    }
}