
/* ----- DEFINISI AUDIO & PRE-LOADING ----- */

// Path file audio
const PATH_BENAR = 'audio/benar.mp3'; 
const PATH_SALAH = 'audio/salah.mp3'; 
const PATH_KLIK = 'audio/klik.mp3'; 

// Membuat objek Audio global untuk Pre-loading
const AUDIO_KLIK = new Audio(PATH_KLIK);
const AUDIO_BENAR = new Audio(PATH_BENAR);
const AUDIO_SALAH = new Audio(PATH_SALAH);

// Fungsi untuk memutar objek audio yang sudah di-load
function playSound(audioObject) {
    try {
        audioObject.currentTime = 0; 
        audioObject.play().catch(error => {
            console.warn("Gagal memutar audio:", error);
        });
    } catch (e) {
        console.error("Kesalahan saat memutar objek Audio:", e);
    }
}

/* ----- DATA: pulau -> provinsi -> kota -> kuis ----- */
const DATA = {
    sumatra: {
        img: "img/sumatra_prov.png",
        provinsi: [
            { id: "aceh", name: "Aceh", top:"14%", left:"31%", img: "img/sumatra_prov.png",
                kota: [
                    { id:"banda-aceh", name:"Banda Aceh", quiz: { title:"Sejarah Banda Aceh", question:"Siapakah pendiri Kesultanan Aceh Darussalam?", choices:["Sultan Iskandar Muda","Sultan Ali Mughayat Syah","Sultan Mansyur Syah"], answer:1 }},
                    { id:"lhokseumawe", name:"Lhokseumawe", quiz: { title:"Sejarah Lhokseumawe", question:"Lhokseumawe berkembang pesat pada era 1970-an karena eksploitasi ... ?", choices:["Emas","Gas alam Arun","Batubara"], answer:1 }},
                    { id:"sabang", name:"Sabang", quiz: { title:"Sejarah Sabang", question:"Sabang pernah menjadi pelabuhan bebas pada masa Kolonial Belanda karena lokasinya strategis di Selat ...?", choices:["Malaka","Sunda","Lhokseumawe"], answer:0 }}
                ]
            },
            { id:"sumut", name:"Sumatera Utara", top:"23%", left:"39%", img:"img/sumatra_prov.png", kota:[{ id:"medan", name:"Medan", quiz:{ title:"Sejarah Kota Medan", question:"Kota Medan diresmikan sebagai Kotapraja (Gemeente) oleh pemerintah kolonial pada tahun ... ?", choices:["1907","1918","1886"], answer:1 }}]},
            { id:"riau", name:"Riau", top:"42%", left:"48%", img:"img/sumatra_prov.png", kota:[{ id:"pekanbaru", name:"Pekanbaru", quiz:{ title:"Sejarah Pekanbaru", question:"Nama Pekanbaru (pasar baru) mulai digunakan sejak dipindahkannya pusat kerajaan dari kota ... ?", choices:["Indragiri","Siak Sri Indrapura","Kuantan"], answer:1 }}]},
            { id:"sumbar", name:"Sumatera Barat", top:"42%", left:"42%", img:"img/sumatra_prov.png", kota:[{ id:"padang", name:"Padang", quiz:{ title:"Sejarah Padang", question:"Bangsa Eropa pertama yang membangun loji dagang di Padang pada abad ke-17 adalah ... ?", choices:["Belanda","Inggris","Portugis"], answer:0 }}]}
        ]
    },
    
    jawa: {
        img: "img/jawa_prov.png",
        provinsi: [
            { id:"jatim", name:"Jawa Timur", top:"47%", left:"64%", img:"img/jawa_prov.png", kota:[{ id:"surabaya", name:"Surabaya", quiz:{ title:"Sejarah Surabaya", question:"Pertempuran heroik yang menyebabkan Surabaya dijuluki Kota Pahlawan terjadi pada tanggal ... ?", choices:["10 November 1945","17 Agustus 1945","11 Desember 1945"], answer:0 }}]},
            { id:"jateng", name:"Jawa Tengah", top:"47%", left:"46%", img:"img/jawa_prov.png", kota:[{ id:"semarang", name:"Semarang", quiz:{ title:"Sejarah Semarang", question:"Tokoh pahlawan yang gugur dalam Pertempuran Lima Hari di Semarang adalah ... ?", choices:["Mayor Isman","Dr. Kariadi","Sutomo"], answer:1 }}]},
            { id:"jabar", name:"Jawa Barat", top:"47%", left:"33%", img:"img/jawa_prov.png", kota:[{ id:"bandung", name:"Bandung", quiz:{ title:"Sejarah Bandung", question:"Peristiwa bersejarah 'Bandung Lautan Api' terjadi pada tanggal ... ?", choices:["24 Maret 1946","17 Agustus 1945","23 September 1947"], answer:0 }}]},
            { id:"diy", name:"DI Yogyakarta", top:"56%", left:"52%", img:"img/jawa_prov.png", kota:[{ id:"yogyakarta", name:"Yogyakarta", quiz:{ title:"Sejarah Yogyakarta", question:"Yogyakarta pernah menjadi ibu kota Republik Indonesia selama periode ... ?", choices:["1945–1946","1946–1949","1950–1953"], answer:1 }}]}
        ]
    },
    
    kalimantan: {
        img: "img/kalimantan_prov.png",
        provinsi: [
            { id:"kalteng", name:"Kalteng", top:"68%", left:"40%", img:"img/kalimantan_prov.png", kota:[{ id:"palangka", name:"Palangka Raya", quiz:{ title:"Sejarah Palangka Raya", question:"Presiden pertama yang secara serius merencanakan Palangka Raya sebagai calon Ibu Kota Negara adalah ... ?", choices:["Soeharto","Soekarno","Joko Widodo"], answer:1 }}]},
            { id:"kaltim", name:"Kaltim", top:"44%", left:"60%", img:"img/kalimantan_prov.png", kota:[{ id:"samarinda", name:"Samarinda", quiz:{ title:"Sejarah Samarinda", question:"Samarinda dibentuk oleh pengungsi dari Kerajaan Banjar pada abad ke-17 di bawah perlindungan Sultan ... ?", choices:["Kutai Kartanegara","Aji Muhammad Sulaiman","Hasanuddin"], answer:0 }}]},
            { id:"kalbar", name:"Kalbar", top:"47%", left:"35%", img:"img/kalimantan_prov.png", kota:[{ id:"pontianak", name:"Pontianak", quiz:{ title:"Sejarah Pontianak", question:"Pontianak didirikan oleh Sultan ... pada tahun 1771 M.", choices:["Hasanuddin","Syarif Abdurrahman Alkadrie","Hamid II"], answer:1 }}]},
            { id:"kalsel", name:"Kalsel", top:"78%", left:"59%", img:"img/kalimantan_prov.png", kota:[{ id:"banjarmasin", name:"Banjarmasin", quiz:{ title:"Sejarah Banjarmasin", question:"Kerajaan besar yang pernah berdiri di wilayah Banjarmasin sebelum kemerdekaan adalah ... ?", choices:["Kerajaan Kutai","Kesultanan Banjar","Kerajaan Sriwijaya"], answer:1 }}]}
        ]
    },
    
    sulawesi: {
        img: "img/sulawesi_prov.png",
        provinsi: [
            { id:"sulut", name:"Sulawesi Utara", top:"18%", left:"65%", img:"img/sulawesi_prov.png", kota:[{ id:"manado", name:"Manado", quiz:{ title:"Sejarah Manado", question:"Negara Eropa yang pertama kali mendirikan benteng di Manado pada abad ke-17 adalah ... ?", choices:["Inggris","Spanyol","Portugis"], answer:1 }}]},
            { id:"sulteng", name:"Sulawesi Tengah", top:"40%", left:"50%", img:"img/sulawesi_prov.png", kota:[{ id:"palu", name:"Palu", quiz:{ title:"Sejarah Palu", question:"Nama 'Palu' diyakini berasal dari kata 'Panggulu' dalam bahasa Kaili yang berarti ... ?", choices:["Lembah","Batu","Sungai"], answer:1 }}]},
            { id:"sulsel", name:"Sulawesi Selatan", top:"70%", left:"42%", img:"img/sulawesi_prov.png", kota:[{ id:"makassar", name:"Makassar", quiz:{ title:"Sejarah Makassar", question:"Pada masa Orde Baru, Kota Makassar pernah diubah namanya menjadi ... ?", choices:["Gowa","Ujung Pandang","Bantaeng"], answer:1 }}]},
            { id:"sultra", name:"Sulawesi Tenggara", top:"68%", left:"52%", img:"img/sulawesi_prov.png", kota:[{ id:"kendari", name:"Kendari", quiz:{ title:"Sejarah Kendari", question:"Teluk tempat Kendari berada ditemukan dan dipetakan oleh seorang pelaut Belanda bernama ... pada 1828?", choices:["J.C. van den Heuvel","G.E.H. van den Heuvel","A.C. van der Heuvel"], answer:1 }}]}
        ]
    },
    
    papua: {
        img: "img/papua_prov.png",
        provinsi: [
            { id:"papua", name:"Papua", top:"36%", left:"92%", img:"img/papua_prov.png", kota:[{ id:"jayapura", name:"Jayapura", quiz:{ title:"Sejarah Jayapura", question:"Nama kolonial Belanda untuk Jayapura yang digunakan sejak tahun 1910 adalah ... ?", choices:["Hollandia","Niew Guinea","Sukarnopura"], answer:0 }}]},
            { id:"papbar", name:"Papua Barat", top:"20%", left:"72%", img:"img/papua_prov.png", kota:[{ id:"manokwari", name:"Manokwari", quiz:{ title:"Sejarah Manokwari", question:"Manokwari dikenal sebagai 'Kota Injil' karena kedatangan misionaris pada tanggal 5 Februari ... ?", choices:["1855","1900","1945"], answer:0 }}]},
            { id:"nabire", name:"Nabire", top:"36%", left:"80%", img:"img/papua_prov.png", kota:[{ id:"nabirekota", name:"Nabire Kota", quiz:{ title:"Sejarah Nabire", question:"Perkembangan awal Nabire sangat erat kaitannya dengan komoditas ... pada era Belanda.", choices:["Minyak Bumi","Perkebunan Kelapa","Kayu"], answer:1 }}]},
            { id:"biak", name:"Biak", top:"16%", left:"83%", img:"img/papua_prov.png", kota:[{ id:"biakkota", name:"Biak", quiz:{ title:"Sejarah Biak", question:"Biak menjadi lokasi pertempuran besar antara pasukan Sekutu dan Jepang di Perang Dunia II pada tahun ... ?", choices:["1944","1945","1943"], answer:0 }}]}
        ]
    }
};

/* --- Urutan Pulau untuk Leveling --- */
const PULAU_ORDER = ['sumatra', 'jawa', 'kalimantan', 'sulawesi', 'papua'];

/* ----- app state ----- */
const state = {
    currentPulau: null,
    currentProv: null,
    currentKota: null,
    musicOn: true,
    quizStatus: {} // { 'kotaId': 'solved'/'wrong', ... }
};

/* ----- helpers to show/hide screens ----- */
const qs = sel => document.querySelector(sel);
const qsa = sel => document.querySelectorAll(sel);

function showScreen(id){
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if(el) el.classList.add('active');
    
    // Panggil updateButtonStates setiap kali Peta Indonesia ditampilkan
    if (id === 'peta-indonesia') {
        updatePulauButtonStates();
    }
}

/* ----- initial DOM refs & EVENT LISTENERS DENGAN SUARA KLIK ----- */
const btnStart = qs('#btn-start');
const btnSound = qs('#btn-sound-toggle');
const bgMusic = qs('#bg-music');

btnStart.addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    showScreen('peta-indonesia');
    playMusic();
});

qs('#btn-back-to-start').addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    bgMusic.pause();
    showScreen('start-screen');
});

btnSound.addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    state.musicOn = !state.musicOn;
    if(state.musicOn) { playMusic(); btnSound.textContent='Suara: On' }
    else { bgMusic.pause(); btnSound.textContent='Suara: Off' }
});

function playMusic(){
    if(!bgMusic) return;
    if(state.musicOn){
        bgMusic.currentTime = 0;
        bgMusic.play().catch(()=>{ /* autoplay might be blocked */ });
    }
}

/* -------------------------- LOGIKA LEVELING (PENGUNCIAN PULAU) ------------------------------------ */

/**
 * Memeriksa apakah SEMUA kuis di sebuah pulau telah dijawab dengan status 'solved'.
 * @param {string} pulauId - ID pulau (contoh: 'sumatra').
 * @returns {boolean} True jika semua kuis SOLVED, False jika ada yang belum/salah.
 */
function isPulauSolved(pulauId) {
    const pulau = DATA[pulauId];
    if (!pulau) return false;

    // Hitung total kuis di pulau ini
    let totalQuizzes = 0;
    // Hitung kuis yang statusnya 'solved'
    let solvedQuizzes = 0;

    for (const prov of pulau.provinsi) {
        for (const kota of (prov.kota || [])) {
            totalQuizzes++;
            if (state.quizStatus[kota.id] === 'solved') {
                solvedQuizzes++;
            }
        }
    }
    
    // Jika tidak ada kuis (seharusnya tidak terjadi), anggap selesai.
    if (totalQuizzes === 0) return true;

    // Selesai jika jumlah yang solved sama dengan total kuis.
    return solvedQuizzes === totalQuizzes;
}

/**
 * Memperbarui status tombol-tombol pulau (mengunci/membuka) di layar Peta Indonesia.
 */
function updatePulauButtonStates() {
    let prevPulauSolved = true; // Pulau pertama ('sumatra') selalu terbuka

    qsa('.pulau-btn').forEach(btn => {
        const pulauId = btn.dataset.pulau;
        const currentPulauIndex = PULAU_ORDER.indexOf(pulauId);
        
        // Cek apakah pulau ini adalah pulau pertama (selalu terbuka) ATAU
        // apakah pulau sebelumnya sudah diselesaikan
        const isCurrentPulauAccessible = currentPulauIndex === 0 || prevPulauSolved;

        // Reset kelas dan status
        btn.classList.remove('locked', 'solved-pulau');
        btn.disabled = false;
        btn.title = '';

        if (!isCurrentPulauAccessible) {
            // Jika pulau tidak dapat diakses (pulau sebelumnya belum selesai)
            btn.classList.add('locked');
            btn.disabled = true;
            btn.title = 'Selesaikan semua misi di pulau sebelumnya untuk membuka pulau ini.';
            
        } else if (isPulauSolved(pulauId)) {
            // Jika pulau ini sudah diselesaikan 100%
            btn.classList.add('solved-pulau'); // Menandai pulau yang sudah selesai
            prevPulauSolved = true; // Pulau berikutnya akan terbuka
        } else {
             // Jika pulau saat ini terbuka tapi belum selesai
             prevPulauSolved = false; // Pulau berikutnya akan terkunci
        }
    });
}


/* ----- pulau buttons: Event listener di sini untuk menangani klik dan status kunci ----- */
qsa('.pulau-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const pulau = btn.dataset.pulau;
        // Hanya buka jika tombol TIDAK disabled/locked
        if (!btn.disabled) {
            playSound(AUDIO_KLIK); 
            openPulau(pulau);
        } else {
            // Suara klik error/salah jika pulau terkunci (opsional)
            playSound(AUDIO_SALAH); 
            alert('Pulau ini masih terkunci! Selesaikan semua misi di pulau sebelumnya terlebih dahulu.');
        }
    });
});


/* open Pulau: render image + provinsi dots */
const petaPulauImg = qs('#peta-pulau-img');
const provinsiDots = qs('#provinsi-dots');
const judulPulau = qs('#judul-pulau');

function openPulau(pulauId){
    const data = DATA[pulauId];
    if(!data) return alert('Data pulau tidak ditemukan');
    state.currentPulau = pulauId;
    judulPulau.textContent = pulauId.toUpperCase();
    petaPulauImg.src = data.img;
    
    // render provinsi
    provinsiDots.innerHTML = '';
    data.provinsi.forEach(p => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        
        const totalKota = (p.kota || []).length;
        // Hitung yang 'solved' saja
        const solvedKota = (p.kota || []).filter(k => state.quizStatus[k.id] === 'solved').length;
        
        // Dot provinsi ditandai 'province-solved' jika semua kota SOLVED
        if (totalKota > 0 && totalKota === solvedKota) {
            dot.classList.add('province-solved'); 
        }
        
        dot.style.top = p.top;
        dot.style.left = p.left;
        dot.title = p.name;
        dot.dataset.prov = p.id;
        
        // label
        const label = document.createElement('div');
        label.className = 'label';
        label.textContent = p.name;
        label.style.top = `calc(${p.top} - 14px)`;
        label.style.left = p.left;
        provinsiDots.appendChild(dot);
        provinsiDots.appendChild(label);

        dot.addEventListener('click', (e) => {
            playSound(AUDIO_KLIK); 
            e.stopPropagation();
            openProvinsi(p.id);
        });
    });

    showScreen('peta-pulau');
}

/* open Provinsi: render image + kota dots */
const petaProvImg = qs('#peta-prov-img');
const kotaDots = qs('#kota-dots');
const judulProv = qs('#judul-provinsi');

function openProvinsi(provId){
    const pulau = DATA[state.currentPulau];
    if(!pulau) return;
    const prov = pulau.provinsi.find(p => p.id === provId);
    if(!prov) return alert('Provinsi tidak ditemukan');
    state.currentProv = provId;
    judulProv.textContent = prov.name;
    petaProvImg.src = prov.img; 
    
    // render kota
    kotaDots.innerHTML = '';
    (prov.kota || []).forEach((k,i) => {
        const dot = document.createElement('button');
        dot.className = 'dot';
        
        const status = state.quizStatus[k.id];
        // Dot kota ditandai 'solved' atau 'wrong'
        if (status) {
            dot.classList.add(status); 
        }
        
        // Penempatan dot kota hanya contoh, mungkin perlu disesuaikan dengan koordinat aktual
        const top = `calc(${prov.top} + ${i * 4}%)`;
        const left = `calc(${prov.left} + ${i * 4}%)`;
        dot.style.top = top;
        dot.style.left = left;
        dot.title = k.name;
        dot.dataset.kota = k.id;
        
        const label = document.createElement('div');
        label.className = 'label';
        label.style.top = `calc(${prov.top} - 14px)`;
        label.style.left = left;
        label.textContent = k.name;

        kotaDots.appendChild(dot);
        kotaDots.appendChild(label);

        dot.addEventListener('click', (e) => {
            playSound(AUDIO_KLIK); 
            e.stopPropagation();
            openKota(prov.id, k.id);
        });
    });

    showScreen('peta-provinsi');
}

/* --- go back buttons --- */
qs('#btn-back-to-peta').addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    showScreen('peta-indonesia'); // ✅ Akan memanggil updatePulauButtonStates()
});
qs('#btn-back-to-pulau').addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    openPulau(state.currentPulau);
});

/* ----- KUIS modal logic ----- */
const kuisModal = qs('#kuis-modal');
const kuisTitle = qs('#kuis-title');
const kuisQuestion = qs('#kuis-question');
const kuisChoices = qs('#kuis-choices');
const kuisResult = qs('#kuis-result');
const btnSubmit = qs('#btn-submit');
const btnCloseKuis = qs('#close-kuis');

let currentQuiz = null;
let selectedIndex = null;

function openKota(provId, kotaId){
    const pulau = DATA[state.currentPulau];
    const prov = pulau.provinsi.find(p => p.id === provId);
    const kota = prov.kota.find(k => k.id === kotaId);
    if(!kota) return;
    state.currentKota = kotaId;
    currentQuiz = kota.quiz;
    selectedIndex = null;
    
    // Nonaktifkan submit jika sudah solved
    const isSolved = state.quizStatus[kotaId] === 'solved';
    btnSubmit.disabled = isSolved;
    
    renderQuiz(isSolved);
    kuisModal.classList.remove('hidden');
}

function renderQuiz(isSolved){
    if(!currentQuiz) return;
    kuisTitle.textContent = currentQuiz.title || "Kuis";
    kuisQuestion.textContent = currentQuiz.question || "";
    kuisChoices.innerHTML = "";
    kuisResult.classList.add('hidden'); kuisResult.textContent = "";

    (currentQuiz.choices || []).forEach((c,i) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.textContent = c;
        btn.dataset.idx = i;
        
        if (isSolved) {
             // Jika sudah solved, tampilkan jawaban benar dan nonaktifkan tombol
             btn.disabled = true;
             if (i === currentQuiz.answer) {
                 btn.classList.add('selected', 'correct-answer');
             }
        } else {
             btn.addEventListener('click', () => {
                 playSound(AUDIO_KLIK); 

                 qsa('.choice-btn').forEach(x => x.classList.remove('selected'));
                 btn.classList.add('selected');
                 selectedIndex = i;
             });
        }
       
        kuisChoices.appendChild(btn);
    });

    if (isSolved) {
        kuisResult.textContent = "Misi telah Selesai! 🎉 Jawaban kamu sudah benar.";
        kuisResult.style.background = "#e8f6ea";
        kuisResult.classList.remove('hidden');
    }
}

btnSubmit.addEventListener('click', () => {
    if(selectedIndex === null) {
        playSound(AUDIO_KLIK);
        alert('Pilih jawaban terlebih dahulu');
        return;
    }
    
    // Nonaktifkan tombol submit segera
    btnSubmit.disabled = true;
    
    const correct = currentQuiz.answer;
    const resultDelay = 2000; // 2 detik
    let statusToSave = '';
    
    if(selectedIndex === correct){
        // Jawab Benar
        playSound(AUDIO_BENAR); 
        statusToSave = 'solved';
        
        // Tunda tampilan hasil, simpan status, dan update dot selama 2 detik
        setTimeout(() => {
            kuisResult.textContent = "Benar! 🎉 Jawaban kamu tepat.";
            kuisResult.style.background = "#e8f6ea";
            kuisResult.classList.remove('hidden');
            
            // Simpan status
            state.quizStatus[state.currentKota] = statusToSave;
            
            // Update dot Kota (current screen: peta-provinsi)
            const activeDot = qs(`.overlay .dot[data-kota="${state.currentKota}"]`);
            if(activeDot){
                activeDot.classList.remove('solved', 'wrong'); 
                activeDot.classList.add(statusToSave);         
            }
            
            // Nonaktifkan semua pilihan setelah benar
            qsa('.choice-btn').forEach(x => {
                x.disabled = true;
                if (parseInt(x.dataset.idx) === correct) {
                    x.classList.add('correct-answer');
                }
            });

            // Panggil fungsi untuk memeriksa dan memperbarui dot Provinsi & Pulau
            updateProvinsiDotStatus(state.currentProv);
            // Tidak perlu panggil updatePulauButtonStates karena akan dipanggil saat kembali ke peta-indonesia

        }, resultDelay);
        
    } else { 
        // Jawaban Salah (ditampilkan segera)
        playSound(AUDIO_SALAH); 
        statusToSave = 'wrong';

        // Tampilkan hasil, simpan status, dan update dot segera
        kuisResult.textContent = `Jawaban Salah`;
        kuisResult.style.background = "#fff0f0";
        kuisResult.classList.remove('hidden');
        
        // Simpan status
        state.quizStatus[state.currentKota] = statusToSave;
        
        // Update dot Kota (current screen: peta-provinsi)
        const activeDot = qs(`.overlay .dot[data-kota="${state.currentKota}"]`);
        if(activeDot){
            activeDot.classList.remove('solved', 'wrong'); 
            activeDot.classList.add(statusToSave);         
        }

        // Aktifkan kembali tombol submit setelah salah
        btnSubmit.disabled = false;
        selectedIndex = null; // Reset pilihan
    }
});


/**
 * Memperbarui status dot Provinsi jika semua kota di dalamnya sudah SOLVED.
 */
function updateProvinsiDotStatus(provId) {
    const pulau = DATA[state.currentPulau];
    const prov = pulau.provinsi.find(p => p.id === provId);
    if (!prov) return;

    const totalKota = (prov.kota || []).length;
    const solvedKota = (prov.kota || []).filter(k => state.quizStatus[k.id] === 'solved').length;
    
    const provDot = qs(`#peta-pulau .dot[data-prov="${provId}"]`);

    if (totalKota > 0 && totalKota === solvedKota) {
        if (provDot) provDot.classList.add('province-solved');
    } else {
        if (provDot) provDot.classList.remove('province-solved');
    }
}


btnCloseKuis.addEventListener('click', () => {
    playSound(AUDIO_KLIK); 
    kuisModal.classList.add('hidden');
    // Kembali ke peta provinsi
    openProvinsi(state.currentProv); 
});

/* quick: close modal if click outside */
kuisModal.addEventListener('click', (e) => {
    if(e.target === kuisModal){
        playSound(AUDIO_KLIK); 
        kuisModal.classList.add('hidden');
        // Kembali ke peta provinsi
        openProvinsi(state.currentProv);
    }
});

/* ----- on load: show start & update status awal ----- */
showScreen('start-screen');