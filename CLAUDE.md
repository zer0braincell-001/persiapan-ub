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
Tab topbar: **Home · 1.1 · 1.2 · Tema**. Label sengaja dipendekkan jadi angka blok saja.
Tombol shortcut "Daftar Quiz" di halaman Home sudah dihapus (kelas `.cta` kini tidak terpakai).

## Tab Blok 1.2 (`#/blok12`)
Blok 1.2 punya **tab sendiri** di topbar, bukan kartu di Daftar Quiz (Daftar Quiz = Blok 1.1).
View `#viewB12`, dirender `renderB12()`. Isinya: kartu Mulai cepat → daftar 17 kuliah → chip per pola.
Semua tautannya menuju engine yang sama lewat `#/quiz/ub-1-2?ppt=..&pola=..&modul=..&only=..`.

**Kenapa satu quiz id, bukan satu quiz per PPT:** `P.st.answers` dikunci per **nomor soal (`n`)**,
jadi satu `id` = satu catatan jawaban. Dengan filter, soal yang dijawab di view "PPT 6" otomatis
terhitung juga di "Semua PPT". Kalau tiap PPT dibuat quiz terpisah, user harus mengerjakan ulang.

Dimensi filter di `P.st` (semua ikut `filteredIdx()`): `modul` · `ppt` · `pola` · `only` (`*|todo|wrong|flag`).
Select `#fPpt` dan `#fPola` **otomatis tersembunyi** kalau bank soalnya tidak punya field itu,
jadi quiz Blok 1.1 tampil persis seperti semula. Dropdown `#fModul` menyusut mengikuti `st.ppt`.

Kelas CSS: `.krow` (baris kuliah), `.qsc` (kartu mulai cepat), `.pchip` (chip pola).
**Jangan pakai `.chip` untuk chip pola** — `.chip` adalah tombol palet nomor dan punya `aspect-ratio:1/1`.

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
