# persiapan-ub

Baca dulu (urut): `../../INDEX.md` → `../../workflow.md` → `../../projects/persiapan-ub/STATE.md` → `../../projects/persiapan-ub/NEXT.md`.

Project: dashboard "Persiapan UB" — hub web belajar FK, nampung banyak quiz recall per blok (sekarang Blok 1.1 dan 1.2).
Single `index.html` (shell home + daftar quiz + engine quiz), data bank soal per-quiz di `data/<id>.js`.
GitHub Pages public: https://zer0braincell-001.github.io/persiapan-ub/

## Aturan
- Vanilla JS. Satu-satunya dependency runtime = **KaTeX via cdnjs (pinned 0.16.9)** — pengecualian sadar, jangan tambah yang lain.
- Data quiz dimuat lewat `<script src>` ke `window.QUIZ_BANK[id]`, **BUKAN `fetch()`** — supaya jalan di Pages DAN `file://`.
- Wajib ada `[hidden]{display:none!important}` + `body{margin:0}` + `<meta charset="utf-8">`. Jangan dihapus.
- Nambah quiz = tambah `data/<id>.js` + satu `<script src>` + satu entri di array `QUIZZES` di `index.html`. Tidak ada tempat lain yang perlu disentuh.
- Entri `QUIZZES` boleh diberi `sembunyi:true` kalau quiz itu punya tab sendiri — entrinya tetap WAJIB ada karena `startQuiz()` mencarinya di situ, tapi tidak muncul di Daftar Quiz.
- Skema item soal: `{ n, modul, q, opsi[], kunciIndex, kunci, rationale }`. Benar = `kunciIndex`.
  Opsi **wajib** diacak saat render; jawaban dilacak via **index asli**, bukan posisi tampil.
- Jangan sentuh `../fk-quizz/` — project terpisah.

## Markup di dalam data soal — JANGAN pakai HTML
`richText()` di `index.html` hanya mengenali dua hal: `$...$` (diteruskan ke KaTeX) dan `**tebal**`.
Semua sisanya dijadikan **text node**. Jadi `<b>`, `<i>`, `<br>`, `<span>` akan **tampil sebagai teks mentah** ke user.
- Tebal → `**teks**`. Miring → tidak didukung, tulis biasa.
- Hindari karakter `$` di soal/penjelasan kecuali memang rumus KaTeX — `$` tunggal memecah parser.
- **Bug yang masih ada:** `data/hemoglobinopati.js` memuat ~74 tag `<b>`/`<i>` yang tampil mentah. Belum dibersihkan.

## Nav
Tab topbar: **Home · 1.1 · 1.2 · 1.3 · Tema**. Label sengaja dipendekkan jadi angka blok saja.
Tombol shortcut "Daftar Quiz" di halaman Home sudah dihapus (kelas `.cta` kini tidak terpakai).

## Tab Blok 1.2 (`#/blok12`)
Blok 1.2 punya **tab sendiri** di topbar, bukan kartu di Daftar Quiz (Daftar Quiz = Blok 1.1).
View `#viewB12`, dirender `renderB12()`. Isinya: kartu Mulai cepat → daftar 17 kuliah → chip per pola.
Semua tautannya menuju engine yang sama lewat `#/quiz/ub-1-2?ppt=..&pola=..&modul=..&only=..`.

**Kenapa satu quiz id, bukan satu quiz per PPT:** `P.st.answers` dikunci per **nomor soal (`n`)**,
jadi satu `id` = satu catatan jawaban. Dengan filter, soal yang dijawab di view "PPT 6" otomatis
terhitung juga di "Semua PPT". Kalau tiap PPT dibuat quiz terpisah, user harus mengerjakan ulang.

Dimensi filter di `P.st` (semua ikut `filteredIdx()`): `modul` · `ppt` · `pola` · `only` (`*|todo|wrong|flag`).
## Ulangi bercakupan & Pulihkan
Tombol **Ulangi** (`#tReset`) TIDAK menghapus seluruh bank. Ia hanya menghapus soal yang
sedang tampil, yaitu hasil `filteredIdx()` — jadi "Ulangi" saat filter PPT 16 aktif hanya
menghapus PPT 16, progres PPT lain utuh. `scopeLabel()` menyusun nama cakupan untuk dialog.
Sebelum menghapus, `snapshot(label)` menyimpan salinan `answers`, `flags`, dan `submitted`
ke `st.undo` (array, maks `UNDO_MAX` = 3, yang terlama dibuang lebih dulu).
Tombol **Pulihkan** (`#tUndo`) mengembalikan snapshot terakhir lalu membuangnya dari riwayat;
tombolnya tersembunyi saat `st.undo` kosong, diperbarui lewat `updateUndoBtn()` di `renderAll()`.
Masuk/keluar Mode Ujian dan "Ulangi ujian" juga memanggil `snapshot()` sehingga ikut bisa dipulihkan.
Jangan kembalikan `tReset` ke penghapusan menyeluruh — user secara eksplisit memintanya per-PPT.

Select `#fPpt` dan `#fPola` **otomatis tersembunyi** kalau bank soalnya tidak punya field itu,
jadi quiz Blok 1.1 tampil persis seperti semula. Dropdown `#fModul` menyusut mengikuti `st.ppt`.

Kelas CSS: `.krow` (baris kuliah), `.qsc` (kartu mulai cepat), `.pchip` (chip pola).
**Jangan pakai `.chip` untuk chip pola** — `.chip` adalah tombol palet nomor dan punya `aspect-ratio:1/1`.

## Tab Blok 1.3 (`#/blok13`) — Sistem Digestif & Metabolisme
View `#viewB13`, dirender `renderB13()`. Konfigurasi di objek `B13`, yang berisi **dua seksi**
berisi daftar kartu: `B13.aslab` dan `B13.dosen`. Tiap kartu `{ id, nama, ket }` adalah quiz
tersendiri dengan progres localStorage sendiri. Helper `b13kartu()` membangun satu kartu;
kartu nonaktif (`<div aria-disabled>`) selama `bankOf(id)` kosong dan otomatis jadi
`<a href="#/quiz/<id>">` begitu datanya dimuat. Seksi tanpa kartu menampilkan baris
"Belum ada bank soal..." lewat `#b13aslabKosong` / `#b13dosenKosong`.

| seksi | kartu | quiz id | soal |
|---|---|---|---|
| PPT Aslab | Responsi Fisiologi · Termoregulasi | `ub-1-3-responsi-fisio` | 179 |
| PPT Aslab | Responsi Biokimia · Lipid & Karbohidrat | `ub-1-3-responsi-biokim` | 209 |
| PPT Dosen | (kosong) | — | — |

Menambah kartu = tambah satu entri ke `B13.aslab` atau `B13.dosen`, plus `data/<id>.js`,
`<script src>`, dan entri `QUIZZES` (`sembunyi:true`). Tidak ada tempat lain yang disentuh.

### Quiz `ub-1-3-responsi-fisio` — Responsi Fisiologi 1.3 (Termoregulasi)
`data/ub-1-3-responsi-fisio.js`, **179 soal**, 18 modul. Disusun dari tiga PPT aslab
(Termoregulasi, Praktikum Termoregulasi, Kelainan Termoregulasi) ditambah dokumen
Pembahasan Responsi Fisiologi 1.3.

**Field `ppt` SENGAJA tidak dipakai di bank ini.** `buildExtraFilters()` melabeli dropdown
`#fPpt` dengan `B12.kuliah[k]`, yaitu nama kuliah **Blok 1.2**. Memberi bank 1.3 field `ppt`
akan menghasilkan label seperti "PPT 1 · Histologi Integument" — salah blok. Field `pola`
aman karena `B12.pola[k] || k` punya fallback ke kodenya, jadi filter pola tetap aktif.

**Penanda soal responsi.** Soal yang berasal dari dokumen responsi ditandai di awal
`rationale` dengan `**[Responsi asli · SOAL n]**`, plus `asliResponsi:true` dan
`kodeResponsi` berisi **nomor asli dokumen**. Saat ini 19 dari 179 soal.

**Dokumen responsi memuat 19 soal, bukan 20:** bernomor 1–12 dan 14–20 — **nomor 13 tidak
ada di berkas sumber**. Celah pada `kodeResponsi` itu benar; jangan dirapatkan.

**Konflik sumber yang sudah ditandai `**Catatan:**` di bank dan sebaiknya dibiarkan:**
- **Suhu aksila.** Slide Termoregulasi memuat dua versi dalam satu slide: setara oral
  (Sherwood) dan lebih rendah ±0,5–1°C (Modul Skillslab). Soal responsi memakai versi
  Modul Skillslab, dan itu yang dipakai sebagai kunci.
- **Persentase perpindahan panas.** Gambar Guyton pada slide: radiasi 60%, evaporasi 22%,
  konduksi ke udara 15%, konduksi ke benda 3% (total 100%). Catatan slide yang sama
  menambahkan "konveksi 12%", yang tidak muat dalam total itu.
- **Penyebab kenaikan suhu pasca-ovulasi.** Catatan PPT Termoregulasi mengutip Sherwood
  bahwa penjelasan progesteron sudah tidak dipakai dan penyebabnya belum diketahui;
  catatan PPT Kelainan Termoregulasi justru menjelaskannya lewat progesteron termogenik.
  Dua PPT aslab bertentangan.
- **Lokasi paling representatif terhadap suhu inti.** Satu catatan slide menyebut temporal
  sebagai penentu terbaik menurut Sherwood, lalu menyimpulkan per rektal tetap yang paling
  representatif. Kunci memakai per rektal, sesuai soal responsi.
- **Soal katak (responsi #7).** Opsi sumber berbunyi pengaruh lingkungan "tidak dapat
  ditoleransi" oleh suhu inti, berlawanan dengan definisi poikiloterm di slide praktikum.
  Opsi sumber cacat dan tidak dipakai sebagai kunci.
- **Responsi #5 dan #8 cacat di sumber** (dua opsi berisi titik; satu soal punya enam opsi
  plus coretan). Sudah dilengkapi dan dirapikan, ditandai di `rationale`.
- **Responsi #14 (edukasi banyak minum)** tidak ada di ketiga PPT, hanya di dokumen responsi.

**PPT aslab tidak disimpan di repo** — sama seperti PPT Blok 1.2, user melampirkannya
tiap sesi. Berlaku untuk SELURUH PPT aslab Blok 1.3 (fisiologi maupun biokimia):
slide berupa **gambar polos tanpa teks sama sekali** (`slideTextChar` = 0), dan isi
tertulisnya hanya sebagian ada di **speaker notes** — pada PPT biokimia bahkan hanya
3 dari 42 slide yang ber-notes. **Wajib dua langkah:** ekstrak notes dengan python-pptx,
DAN render tiap slide jadi gambar (LibreOffice ke PDF lalu `pdftoppm`) lalu dibaca.
Membaca teks shape saja menghasilkan berkas kosong dan akan menyesatkan.
Berkas PPT biokimia besar (sampai 110 MB), konversi butuh timeout longgar.

### Quiz `ub-1-3-responsi-biokim` — Responsi Biokimia 1.3 (Lipid & Karbohidrat)
`data/ub-1-3-responsi-biokim.js`, **209 soal**, 30 modul. Disusun dari empat PPT aslab
(Teori Lipid, Praktikum Lipid, Praktikum Karbohidrat, Teori Karbohidrat) ditambah dokumen
Responsi Biokimia 1.3. Field `ppt` tidak dipakai, alasannya sama seperti bank fisiologi.

**Dokumen responsi memuat 30 soal dan semuanya tercakup** (`kodeResponsi` 1–30, tanpa celah).

**Yang TIDAK ada di PPT aslab mana pun — sudah ditandai `**Catatan:**`:**
- **Responsi #2** menanyakan nama enzim pada strip hijau GCU (glukosa oksidase). Slide hanya
  menyebut strip hijau untuk glukosa, biru kolesterol, kuning asam urat; nama enzim tidak ada.
- **Responsi #19** fungsi kolesterol sebagai prekursor garam empedu, vitamin D, dan hormon
  steroid. Tidak dibahas di Teori Lipid maupun PPT lain. Kunci dari biokimia standar.
- **Responsi #6** nama asam amino glukogenik (alanin, glutamin). Slide glukoneogenesis hanya
  menyebut "protein dan lemak" tanpa nama asam amino.
- **Responsi #16** istilah "dekarboksilasi oksidatif". Bagan Krebs menampilkan piruvat 3C →
  asetil-KoA 2C, tetapi tidak menyebut istilahnya.
- **Responsi #26** angka 120 hari masa hidup eritrosit. Tabel slide menyebut "2–3 bulan".
- **Responsi #13** di dokumen sumber terpotong: tertulis "Butirat diberi H2SO4: ??" tanpa opsi
  dan tanpa jawaban. Soal disusun ulang dari slide hidrolisis mentega (atas keputusan user).
- **Nilai HDL** pada slide GCU: wanita >40, pria >50 mg/dL. Banyak rujukan klinis justru
  menetapkan ambang lebih tinggi pada wanita. Dipakai versi slide, perbedaannya ditandai.
- **Responsi #17** memuat dua opsi yang sama-sama benar sebagian (menurunkan tegangan
  permukaan, dan penjelasan dua gugus). Slide menempatkan tegangan permukaan sebagai mekanisme utama.

**Catatan berkas:** user sempat mengunggah `Praktikum_Lipid_Bella.pptx` dua kali. Berkas
`..._(1).pptx` BUKAN duplikat identik — ia versi lebih kotor (salah ketik "d!an" pada notes
slide 5, dan catatan nyasar berisi huruf "a" di slide 20). Dipakai berkas yang asli.

## Bank naskah asli kakak tingkat (`ub-1-2-soal`, dst.)
Selain bank soal tersusun (`ub-1-2`), ada bank **naskah asli** UB tahun sebelumnya yang disajikan apa adanya.
Terdaftar di `B12_ASLI` di `index.html` dan dirender `renderAsli()` sebagai seksi di tab Blok 1.2.
Quiz-nya **terpisah** dari `ub-1-2`, jadi progresnya sendiri — disengaja, karena dipakai sebagai try out.

Tiga bank, total **315 soal**:
| id | asal | soal | catatan |
|---|---|---|---|
| `ub-1-2-soal` | SOAL UB 1.2 | 98 | dari 100; nomor 24 & 48 dikecualikan |
| `ub-1-2-costraver` | COSTRAVER 2023 | 87 | dari 88; nomor 26 dikecualikan, 89 kosong di sumber |
| `ub-1-2-remed` | Tentir + Rangkuman **digabung** | 130 | paper yang sama, 56 butir beririsan |

REMED sengaja digabung: Tentir punya blok Pembahasan tapi opsinya banyak yang kosong,
Rangkuman punya jawaban tercatat tapi sebagian besar butirnya BUKAN pilihan ganda.
Digabung keduanya saling menambal; dipisah, keduanya pincang dan user mengerjakan 56 soal dua kali.

### Aturan penyajian naskah asli
Kunci jawaban **tidak ditandai** di keempat berkas sumber, dan beberapa kunci yang tertulis **keliru**.
Karena itu tiap soal wajib membawa dua penanda, yang ikut dicetak di akhir `rationale`:
- `asliPenuh:false` → ada opsi yang dilengkapi karena di sumber tertulis `-`, `lupa`, atau duplikat.
- `kunciDari` → dari mana kunci berasal: `"pembahasan"` (blok Pembahasan di sumber),
  `"rangkuman"` (jawaban yang dicatat berkas Rangkuman), atau `"analisis"` (ditentukan sendiri).

Angka keseluruhan: dari 315 soal, hanya **155 yang opsinya utuh dari sumber**; 160 sisanya dilengkapi.
Kunci: 100 dari Pembahasan, 74 dari Rangkuman, 141 dari analisis. **Tidak satu pun berkas sumber
menandai kunci jawabannya**, jadi penanda ini wajib ada dan jangan dihapus.
Soal yang sumbernya cacat (opsi kembar, pertanyaan rancu, pembahasan salah) diberi `**Catatan:**` di `rationale`.
Soal yang bergantung gambar diberi awalan `[Soal bergambar]`; kalau kuncinya juga tak dapat ditentukan, soal itu
**dikecualikan** dan nomornya dicatat di header file data.

## ALUR KERJA MENGAJAR — baca ini sebelum menanggapi PPT baru

User adalah mahasiswa kedokteran FK UNS yang sedang menyiapkan UB Blok 1.2.
Pola kerjanya tetap dan sudah terbukti: **user kirim PPT → ajarkan per bagian → buat soal → masukkan ke repo.**

### Langkah 0 — Peta bobot (WAJIB, sebelum mengajar apa pun)
Peta bobot dibuat dari **empat bank soal UB kakak tingkat** yang dilampirkan user di awal sesi:
SOAL UB 1.2 (100 butir) · COSTRAVER 2023 (88) · Tentir Remed (116) · Rangkuman Soal (101).

**Berkas itu TIDAK disimpan di repo** — user melampirkannya sendiri tiap sesi baru, karena
PDF aslinya membawa gambar yang hilang kalau hanya teksnya yang disimpan.
**Kalau belum dilampirkan, MINTA dulu dan jangan mulai mengajar.** Tanpa bank soal, peta bobot
mustahil dibuat, dan tanpa peta bobot user tidak tahu mana yang layak dihafal mati.
Jangan diam-diam melewati langkah ini.

Catatan penting saat memetakan: **Tentir dan Rangkuman adalah dua catatan atas paper yang SAMA**,
56 butirnya beririsan — jangan dihitung dua kali.

Buka jawaban dengan tabel: nomor soal, topik, dan apakah slide menjawabnya langsung.
Kalau sebuah PPT bobotnya rendah, **katakan terus terang** — jangan dibesar-besarkan.

### Langkah 1 — Pecah jadi beberapa bagian
Umumkan pembagiannya di awal, lalu **kirim SATU bagian saja** dan berhenti.
User akan membalas "lanjut". Jangan kirim seluruh PPT sekaligus.
Hitung bagiannya jujur: kalau mengumumkan 6 bagian, kirim 6 — user pernah menagih
dua bagian yang hilang, dan dia benar.

### Langkah 2 — Cara menjelaskan
- **Turunkan, jangan suruh hafal.** Kalau sebuah fakta bisa dinalar dari prinsip, tunjukkan
  penurunannya. Hafalan tertukar di bawah tekanan ujian; penurunan tidak. Contoh yang berhasil:
  letak garis Z dan pita H diturunkan dari "Z melekatkan aktin, H zona tanpa tumpang tindih".
- **Tabel pembanding, bukan daftar definisi.** Distraktor UB hampir selalu diambil dari
  **ciri tetangga yang sungguhan**, jadi yang dilatih harus kemampuan MEMBEDAKAN.
  Susun tabel dan suruh user membacanya per KOLOM, bukan per baris.
- **Tandai diskriminatornya.** Hampir tiap soal UB dikunci oleh satu kata: lintang/bujur,
  anak/dewasa, sentral/perifer, satu serat/seluruh otot. Tunjukkan kata itu secara eksplisit.
- **Bongkar nama Latinnya.** Epi-/peri-/endo-, an-iso-trop, fascia/macula/gap — namanya sering
  sudah berisi jawabannya.
- **JANGAN memberi pertanyaan cek pemahaman yang harus diketik.** User sudah memintanya
  dihentikan: UB berbentuk pilihan ganda, mengetik jawaban membuang waktunya.
  Semua pengujian masuk ke bank soal. Penjelasan tetap jalan — dari situ dia belajar.

### Langkah 3 — Buat soalnya
Setelah seluruh bagian tersampaikan, susun **100+ soal** untuk PPT itu (user eksplisit:
"intinya mencakup semua dan menyeluruh"). Ikuti konvensi `ub-1-2` di bawah, lalu masukkan
ke repo, verifikasi di browser headless, commit, push, buat PR.

### Nada bicara
Bahasa Indonesia. User meminta **sparring partner, bukan asisten yang menyetujui**:
- Periksa premisnya sebelum mengerjakan. Kalau permintaannya bersandar pada asumsi yang salah,
  **katakan dulu** — dia beberapa kali mengubah rencana setelah premisnya dikoreksi.
- Sebutkan kalau ada lebih dari satu tafsir yang masuk akal, lalu minta kejelasan.
- Jangan validasi kosong, jangan emoji, langsung ke pokoknya.

### Kejujuran — ini yang paling dijaga user
- **Sumbernya sering salah.** Bank soal kating memuat kunci yang keliru dan soal cacat.
  Tandai, jangan diikuti diam-diam.
- **PPT dosen menang atas catatan mahasiswa** kalau keduanya bertentangan (kasus TMJ:
  PPT bilang ginglymoarthrodial, Rangkuman bilang condylaris — dipakai PPT).
- **Akui kesalahan sendiri secara terbuka.** Pernah terjadi: angka porsi soal disebut dari
  ingatan lalu meleset, materi PPT 12 bocor ke soal PPT 1-3, dan empat bagian dikirim
  padahal enam dijanjikan. User menemukan ketiganya. Lebih baik kamu yang menemukan duluan.
- **Jangan mengaku-ngaku materi yang belum diajarkan.** Kalau soal menyentuh PPT yang belum
  dipelajari, katakan PPT berapa dan sarankan menundanya.
- **Verifikasi angka dari data, bukan dari ingatan**, sebelum menuliskannya.

## Quiz `ub-1-2` — Bank Soal UB Blok 1.2
`data/ub-1-2.js`, 1213 soal, mencakup **PPT 1–16 lengkap**. Tiap PPT dibatasi maksimal 85 soal — sengaja dirampingkan agar bisa dikerjakan tuntas; soal UB asli tidak pernah dibuang saat perampingan.

**Koreksi penomoran (27 Okt 2026):** kuliah "Kinesiologi Ekstremitas Superior" ternyata adalah
kuliah **Ekstremitas Superior 2**, jadi 125 soalnya dipindah dari `ppt:17` ke `ppt:9`.
Entri nomor 17 di daftar kuliah di bawah karena itu kosong dan kemungkinan rangkap dengan nomor 9.
Hanya `ppt` dan `modul` yang diubah; `n` tidak disentuh sehingga progres localStorage tetap utuh.

Urutan kuliah Blok 1.2 (angka ini dipakai sebagai prefix `modul`):
1 Histologi Integument · 2 Terminologi & Pengantar Anatomi · 3 Fisiologi Integument ·
4 Anatomi Cranium & Truncus · 5 Ekstremitas Superior 1 · 6 Histologi Jaringan Otot ·
7 Histologi Tulang · 8 Cranium & Truncus 2 · 9 Ekstremitas Superior 2 · 10 Ekstremitas Inferior 1 ·
11 Histologi Kartilago & Sendi · 12 Biokimia Remodelling Tulang · 13 Ekstremitas Inferior 2 ·
14 Fisiologi Otot Polos & Jantung · 15 Biokimia Mineral Tulang & Cairan Sendi ·
16 Fisiologi Kontraksi Otot Rangka, NMJ & Refleks · 17 Kinesiologi Ekstremitas Superior

### Konvensi khusus quiz ini
- `modul` berformat `"PPT <n>: <Subtopik>"`. Engine menampilkan badge dari `modul.split(":")[0]`,
  jadi badge otomatis jadi `"PPT 6"`, sementara dropdown filter memakai string penuh.
  **Satu subtopik per ±5–30 soal** — jangan satu modul per soal, dropdown jadi tak terpakai.
- `rationale` punya dua bagian, dipisah `"  —  "`:
  1. penjelasan jawaban;
  2. `**Pola <Nama Pola>:** <diskriminator>` — kaidah pembeda yang bisa dipakai ulang di soal lain.
- Soal yang berasal dari bank soal UB asli ditandai di awal `rationale`:
  `**[UB asli · <kode soal>]** ` (mis. `**[UB asli · SOAL 6]**`). Saat ini **350 dari 1213** soal.
- Selain field skema engine, tiap soal punya field terstruktur yang dipakai tab Blok 1.2:
  `ppt` (angka kuliah) · `grup` (subtopik) · `pola` (kode 3 huruf) · `ubAsli` (bool) ·
  `kodeUB` · `bahas` · `diskriminator`. `rationale` adalah gabungan ketiganya dan sengaja
  dibuat mandiri supaya engine lama tetap bisa memainkan bank ini apa adanya.
- Kode pola yang sah: KAT LAW TTG PRO USI NAM KER ANG TUR. Label panjangnya ada di `B12.pola`.
- Penjelasan **tidak boleh menyebut huruf opsi** ("Opsi B salah karena...") — opsi diacak saat render,
  jadi referensi huruf akan jadi salah. Rujuk **isi** opsinya.

### Cara menambah PPT berikutnya
1. Tambahkan item ke array di `data/ub-1-2.js`, lanjutkan `n` dari nomor terakhir (jangan menomori ulang —
   progres user di localStorage dikunci per `n`).
2. Update `jumlahSoal` pada entri `ub-1-2` di `QUIZZES` dan rentang PPT di `topik`.
3. Nama kuliah sudah terdaftar lengkap 1–17 di `B12.kuliah`; baris kuliah yang belum ada soalnya
   otomatis tampil nonaktif dengan keterangan "belum dipelajari". Tidak perlu diubah.
4. Update baris jumlah soal + cakupan PPT di bagian atas file CLAUDE.md ini.
5. Verifikasi sebelum commit:
   - `node --check data/ub-1-2.js`
   - muat `index.html` di browser headless, buka `#/quiz/ub-1-2`, pastikan tidak ada
     "File data/... tidak termuat", dropdown modul bertambah, dan `**` terender jadi `<strong>`;
     buka juga `#/blok12` dan pastikan baris kuliah baru muncul dengan jumlah soal yang benar.
