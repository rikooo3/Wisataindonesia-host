// Database wisata (edit manual di sini)
const wisataData = [
    {
        id: 1,
        nama: "Pantai Kuta, Bali",
        daerah: "Bali",
        harga: 50000,
        rating: 4.5,
        ulasan: [
            { nama: "Anonim", rating: 5, text: "Pantai indah sekali!" },
            { nama: "Nico", rating: 4, text: "Menikmati sunset di Kuta Beach jangan sampai terlewat. Sangat rekomen!" },
        ],
        deskripsi: "Pantai Kuta adalah pantai terkenal di Bali dengan pasir putih dan ombak besar. Cocok untuk bersantai dan olahraga air. Pantai ini menawarkan pemandangan matahari terbenam yang spektakuler dan berbagai aktivitas seperti surfing, snorkeling, dan berjalan-jalan di sepanjang pantai. Kunjungi saat musim kemarau untuk pengalaman terbaik.",
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
            { nama: "Pengunjung", rating: 4, text: "Dekat dengan kota." }
        ],
        deskripsi: "Pantai berpasir ramai ini menjadi tempat anak-anak bermain di air yang tenang dengan penjaga pantai & sunset. Tempat ini memiliki pantai buatan, taman hiburan, dan area snorkeling. Cocok untuk keluarga dengan anak-anak.",
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
            { nama: "Lokal", rating: 4, text: "Tenang dan indah." }
        ],
        deskripsi: "Pantai Ulee Lheue menawarkan keindahan laut Aceh yang masih alami. Dengan pasir putih dan air laut jernih, pantai ini ideal untuk diving dan melihat biota laut.",
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
            { nama: "Wisatawan", rating: 5, text: "Pantai merah muda yang menakjubkan!" }
        ],
        deskripsi: "Pink Beach, atau Pantai Merah Muda, adalah salah satu dari tujuh pantai berpasir merah muda di dunia. Warna merah muda alami ini berasal dari pecahan karang merah yang bercampur dengan pasir putih. Tempat ini ideal untuk snorkeling dan diving.",
        gambar: ["pink1/pink1.jpg", "pink1/pink2.jfif", "pink1/pink3.jfif", "pink1/pink4.jfif"],
        lokasi: "https://maps.app.goo.gl/dXRESbcYYF4gVUR96"
    },
    {
        id: 6,
        nama: "Sea World Ancol, Jakarta",
        daerah: "DKI Jakarta",
        harga: 120000,
        rating: 4.8,
        ulasan: [
            { nama: "Keluarga", rating: 5, text: "Edukasi yang menyenangkan untuk anak-anak." }
        ],
        deskripsi: "Sea World Ancol adalah akuarium raksasa di Jakarta yang menampilkan ribuan biota laut dan air tawar untuk tujuan hiburan, edukasi, dan konservasi. Pengunjung dapat menjelajahi dunia bawah laut melalui Terowongan Antasena dan melihat berbagai spesies laut.",
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
            { nama: "Arif", rating: 4, text: "Tempat nongkrong sore yang asyik, banyak kuliner." }
        ],
        deskripsi: "Pantai Aloha adalah destinasi wisata pantai buatan di kawasan PIK 2, Tangerang, yang menawarkan konsep tropis ala Hawaii dengan pasir putih dan pemandangan indah. Pantai ini populer di kalangan warga Jakarta dan sekitarnya karena menawarkan suasana santai dan beragam kuliner.",
        gambar: ["pik2/pik1.jfif", "pik2/pik2.jfif", "pik2/pik3.jfif", "pik2/pik4.jfif"],
        lokasi: "http://googleusercontent.com/maps.google.com/5"
    },
];

const daerahOptions = ["Aceh", "Sumatera Utara", "Sumatera Barat", "Riau", "Bali", "DKI Jakarta", "Nusa Tenggara Timur", "Tangerang"];
const placeholders = ["Cari Wisata", "Pantai Indah, Bali", "Liburan Seru", "Wonderful Indonesia", "Mau Jalan Jalan?"];
let placeholderIndex = 0;

function animatePlaceholder() {
    const input = document.getElementById('search-input');
    if (input) {
        input.placeholder = placeholders[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    }
}
setInterval(animatePlaceholder, 2500);

// Fungsi untuk membuat bintang HTML
function getStarRatingHTML(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<i class="fas fa-star" style="color:#ffc107;"></i>'; // Bintang penuh
        } else if (i === fullStars && halfStar) {
            // Ini akan membutuhkan Font Awesome 5/6 dan CSS masking untuk bintang setengah yang sempurna
            // Untuk kesederhanaan, kita gunakan bintang penuh dan mengandalkan angka rating.
            starsHtml += '<i class="fas fa-star-half-alt" style="color:#ffc107;"></i>'; 
        } else {
            starsHtml += '<i class="far fa-star" style="color:#ddd;"></i>'; // Bintang kosong
        }
    }
    return starsHtml;
}

// Fungsi untuk menampilkan wisata
function displayWisata(wisataList, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    wisataList.forEach(wisata => {
        const item = document.createElement('div');
        item.className = 'wisata-item';
        item.innerHTML = `
            <img src="${wisata.gambar[0]}" alt="${wisata.nama}">
            <div class="wisata-content">
                <h3>${wisata.nama}</h3>
                <p>Daerah: <strong>${wisata.daerah}</strong></p>
                <p>Harga: <strong>Rp ${wisata.harga.toLocaleString('id-ID')}</strong></p>
                <p>Rating: <strong>${wisata.rating}</strong> (${getStarRatingHTML(wisata.rating)})</p>
                <a href="wisata.html?id=${wisata.id}">Lihat Detail <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        container.appendChild(item);
    });
}

function loadRekomendasi() {
    const rekomendasi = wisataData.sort(() => 0.5 - Math.random()).slice(0, 4);
    displayWisata(rekomendasi, 'rekomendasi-list');
}

function filterWisata() {
    // ... (Logika Filter tetap sama)
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
               (!rating || w.rating >= parseFloat(rating));
    });
    displayWisata(filtered, 'wisata-list');
}

// Inisialisasi home (index.html)
if (document.getElementById('search-filter')) {
    const daerahSelect = document.getElementById('filter-daerah');
    daerahOptions.forEach(d => {
        const option = document.createElement('option');
        option.value = d;
        option.textContent = d;
        daerahSelect.appendChild(option);
    });

    document.getElementById('filter-btn').addEventListener('click', filterWisata);
    document.getElementById('search-input').addEventListener('input', filterWisata);
    document.getElementById('filter-daerah').addEventListener('change', filterWisata);
    document.getElementById('filter-harga').addEventListener('change', filterWisata);
    document.getElementById('filter-rating').addEventListener('change', filterWisata);

    loadRekomendasi();
    filterWisata();
}

// Halaman detail wisata (wisata.html)
if (window.location.pathname.includes('wisata.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id'));
    const wisata = wisataData.find(w => w.id === id);

    if (wisata) {
        if (wisata.id === 5) {
            document.body.classList.add('special-wisata');
        }

        document.getElementById('wisata-nama').textContent = wisata.nama;
        document.getElementById('gambar-wisata').innerHTML = wisata.gambar.map(img => `<img src="${img}" alt="${wisata.nama}">`).join('');
        document.getElementById('deskripsi-text').textContent = wisata.deskripsi.split('. ').slice(0, 2).join('. ') + '.';
        document.getElementById('harga').textContent = `Rp ${wisata.harga.toLocaleString('id-ID')}`;
        document.getElementById('lokasi').href = wisata.lokasi;
        document.getElementById('rating').textContent = wisata.rating;

        // Toggle deskripsi
        let isFull = false;
        document.getElementById('toggle-deskripsi').addEventListener('click', (e) => {
            isFull = !isFull;
            document.getElementById('deskripsi-text').textContent = isFull ? wisata.deskripsi : wisata.deskripsi.split('. ').slice(0, 2).join('. ') + '.';
            e.target.innerHTML = isFull ? '<i class="fas fa-angle-up"></i> Tampilkan Lebih Sedikit' : '<i class="fas fa-angle-down"></i> Tampilkan Lebih Banyak';
        });
        
        // Tampilkan ulasan
        function displayUlasan() {
            const ulasanList = JSON.parse(localStorage.getItem(`ulasan-${id}`)) || wisata.ulasan;
            const ulasanHTML = ulasanList.map(u => `<div class="ulasan-item"><strong>${u.nama} (${u.rating} <i class="fas fa-star" style="color:#ffc107;"></i>):</strong> ${u.text}</div>`).join('');
            document.getElementById('ulasan-list').innerHTML = ulasanHTML || '<p>Belum ada ulasan untuk wisata ini.</p>';
        }

        // Tambah ulasan
        document.getElementById('tambah-ulasan').addEventListener('submit', (e) => {
            e.preventDefault();
            const nama = document.getElementById('nama-input').value.trim() || "Anonim";
            const rating = parseInt(document.getElementById('rating-input').value);
            const text = document.getElementById('ulasan-input').value.trim();
            
            if (rating < 1 || !text) {
                alert('Harap pilih rating dan tulis ulasan!');
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
        
        // Logika Klik Bintang (FIXED)
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
        
        displayUlasan();

        /* --- LOGIKA BARU: ZOOM GAMBAR --- */
        const modal = document.getElementById("image-modal");
        const modalImg = document.getElementById("modal-image");
        const closeBtn = document.getElementsByClassName("close-btn")[0];

        // Tampilkan modal saat gambar diklik
        document.getElementById('gambar-wisata').addEventListener('click', function(e) {
            if (e.target.tagName === 'IMG') {
                modal.style.display = "block";
                modalImg.src = e.target.src;
            }
        });

        // Sembunyikan modal saat tombol 'x' diklik
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Sembunyikan modal saat area luar modal diklik
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}
