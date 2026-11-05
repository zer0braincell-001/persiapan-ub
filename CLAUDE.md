# persiapan-ub

Baca dulu (urut): `../../INDEX.md` → `../../workflow.md` → `../../projects/persiapan-ub/STATE.md` → `../../projects/persiapan-ub/NEXT.md`.

Project: dashboard "Persiapan UB" — hub web belajar FK, nampung banyak quiz recall per blok (sekarang Blok 1.1, 1.2, dan 1.3).
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
| PPT Aslab | Responsi Anatomi · Abdomen & digestif | `ub-1-3-responsi-anat` | 150 |
| PPT Dosen | (kosong) | — | — |
| Naskah asli | Responsi Biokimia 1.3 | `ub-1-3-resp-asli` | 30 |
| Naskah asli | AZYTRALIS 2022 | `ub-1-3-azytralis` | 29 |
| Naskah asli | LATSOL Pre-Test 2026 | `ub-1-3-latsol` | 25 |
| Naskah asli | Responsi Anatomi 1.3 | `ub-1-3-resp-anat` | 34 |
| Naskah asli | Soal Responsi Anatomi FIX | `ub-1-3-resp-anat-fix` | 29 |
| Pretest Fisiologi | Pretest Termoregulasi | `ub-1-3-pre-termo` | 19 |
| Pretest Fisiologi | Pretest Anconeus 2021 | `ub-1-3-pre-2021` | 20 |
| Pretest Fisiologi | Pretest Fisiologi 2023 | `ub-1-3-pre-2023` | 20 |
| Pretest Fisiologi | Pretest Termoregulasi 2018 | `ub-1-3-pre-2018` | 14 |
| Pretest | Pretes Digestivus Inferior (Aryo) | `ub-1-3-pre-digest` | 11 |

`B13` punya **empat** seksi: `aslab`, `dosen`, `asli`, `pretest`. Total tab 1.3 = **769 soal** di 13 bank. Judul seksi pretest kini "Pretest (naskah asli)" karena memuat pretes anatomi juga.
Di atas seksi PPT Aslab ada kartu **Panduan belajar** (tautan ke `anatomi-1-3.html`).

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
- **Responsi #19** fungsi kolesterol (garam empedu, vitamin D, hormon steroid). **SUDAH TIDAK
  BERLAKU** sejak revisi Teori Lipid 2 Nov 2026, yang menambahkan slide Kolesterol dan
  membahas keempat fungsinya. Catatan di bank soal sudah diperbarui.
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

### Naskah asli Blok 1.3 (`ub-1-3-resp-asli`, `ub-1-3-azytralis`, `ub-1-3-latsol`)
Tiga naskah soal kakak tingkat, disajikan **apa adanya** di seksi "Naskah asli kakak tingkat"
pada tab 1.3. Dibangun dengan konvensi yang sama seperti `B12_ASLI`: tiap soal membawa
`asliPenuh` dan `kunciDari`, yang ikut dicetak di akhir `rationale`. Quiz-nya terpisah dari
bank turunan, jadi progresnya sendiri — disengaja, dipakai sebagai try out.

| id | asal | soal | opsi utuh | kunci dari pembahasan | bergambar |
|---|---|---|---|---|---|
| `ub-1-3-resp-asli` | Responsi Biokimia 1.3 | 30 | 6 | 21 | 0 |
| `ub-1-3-azytralis` | AZYTRALIS 2022 | 29 | 12 | 29 | 2 |
| `ub-1-3-latsol` | LATSOL Pre-Test 2026 | 25 | 21 | 21 | 3 |

Total **84 soal**; hanya **39 yang opsinya utuh dari sumber**, 45 sisanya dilengkapi.

**AZYTRALIS memuat 29 soal, bukan 30:** bernomor 1–11 dan 13–30 — **nomor 12 tidak ada di
berkas sumber**. Celah pada `kodeAsli` itu benar; jangan dirapatkan.

**LATSOL membawa data frekuensi** yang tidak ada di sumber lain: beberapa butir ditandai
pernah muncul di pre-test astroxon 2020 dan anconeus 2021, dan dua butir mencatat aslab
menyebut tabelnya wajib dihafal. Ini dipakai sebagai peta bobot dan dikutip di `rationale`.

**Kunci yang BERTENTANGAN dengan PPT — ditandai, jangan didamaikan:**
- **Enzim strip hijau GCU.** Tiga sumber, tiga jawaban: Responsi menulis glukosa oksidase,
  AZYTRALIS nomor 6 menulis GDH FAH tetapi nomor 22 menulis glukosa oksidase (bertentangan
  di dalam dokumen yang sama), LATSOL menulis GDH FAH. **PPT aslab tidak menyebut enzim
  sama sekali**, hanya warna strip. Tidak ada rujukan yang dapat memutuskan.
- **AZYTRALIS #30 (jari tengah/manis).** Kuncinya "kulitnya lebih tipis" — berlawanan dengan
  catatan slide yang menyebut jari kelingking TIDAK disarankan justru karena kulitnya lebih
  tipis. Dengan kaidah PPT, kulit tipis adalah alasan menghindari, bukan memilih. Soal cacat.
- **AZYTRALIS #11 (bau akrolein).** Kuncinya sulfur dioksida, padahal slide menyebut bau itu
  berasal dari akrolein hasil dehidrasi gliserol. Sulfur dioksida tidak disebut di PPT mana pun.
- **AZYTRALIS #27 (kelarutan gliserol).** Penulis sumber menyatakan jawabannya diperoleh dari
  percobaan di YouTube, bukan dari PPT maupun praktikum. Tidak dapat diverifikasi.
- **AZYTRALIS #14 dan #26.** Penulis sendiri menyatakan ragu (#14) dan mengaku sempat menjawab
  keliru (#26).
- **AZYTRALIS #23 (residu kertas saring).** Slide hanya membahas bercak lemak, tidak membahas
  penghitungan residu.
- **LATSOL #6.** Sukrosa dan stachyosa sama-sama tersusun ikatan glikosidik, sehingga soal ini
  punya dua opsi yang dapat dibenarkan.
- **LATSOL #8.** Batang soal menanyakan "enzim", padahal jawabannya insulin yang merupakan
  hormon. Kata enzim diganti zat agar tidak menyesatkan.

### Pretest Fisiologi Blok 1.3 (`ub-1-3-pre-*`) — naskah asli termoregulasi
Empat naskah pretest termoregulasi dari angkatan berbeda, disajikan **apa adanya** di seksi
"Pretest Fisiologi (naskah asli)" pada tab 1.3 (`B13.pretest`). Konvensi sama seperti `B12_ASLI`:
tiap soal membawa `asliPenuh` dan `kunciDari`, yang ikut dicetak di akhir `rationale`.

| id | asal | soal | opsi utuh | penanda kunci di sumber |
|---|---|---|---|---|
| `ub-1-3-pre-termo` | Pretest Fisiologi 1.3 Sistem Termoregulasi | 19 | 19 | **highlight kuning**, lengkap |
| `ub-1-3-pre-2021` | Pretest Anconeus 2021 | 20 | 20 | highlight kuning pada 11 soal, sisanya dari Pembahasan |
| `ub-1-3-pre-2023` | Pretest Fisiologi 1.3 Tahun 2023 | 20 | 20 | **bold**, lengkap 20 soal |
| `ub-1-3-pre-2018` | Pretest Termoregulasi, Kedokteran 2018 | 14 | 11 | **tidak ada sama sekali** |

Total **73 soal**; 70 opsinya utuh dari sumber. Kunci: 59 dari pembahasan/penanda sumber, 14 dari analisis.

**Keempat berkas adalah naskah BERBEDA, bukan duplikat** — md5 berbeda dan isinya berlainan.
Jangan digabung.

**Dua soal dikecualikan karena bukan soal akademik:** nomor 20 pada naskah Termoregulasi
(teka-teki detektif tentang pembunuhan) dan nomor 15 pada naskah 2018 ("Sebutkan seluruh
asisten fisiologi angkatan 2016 dan 2017"). Celah penomoran `kodeAsli` itu benar.

**Cara penanda kunci diekstrak** (berbeda tiap berkas, jangan pakai satu metode untuk semua):
- `.docx` Anconeus → `python-docx`, cek `run.font.highlight_color`.
- PDF 2023 → `pymupdf`, cek `'Bold' in span['font']` atau bit flag 4.
- PDF Termoregulasi → `pymupdf` **`page.get_drawings()`** dengan fill kuning (R>0.85, G>0.85, B<0.4).
  Highlight-nya BUKAN anotasi dan BUKAN bold — `page.annots()` mengembalikan kosong.
- `.pptx` 2018 → tidak ada penanda apa pun, seluruh kunci lewat analisis.

**Jebakan parser yang sudah menelan waktu:** batang soal sering memuat daftar bernomor
(`1.` `2.` `3.` `4.`) dan cara kerja praktikum bernomor sampai `16)`. Regex nomor soal polos
akan membacanya sebagai soal baru. Yang bekerja: **syarat nomor berurutan** (`n == cur+1`),
bukan filter koordinat x.

**Konflik dan cacat sumber yang sudah ditandai `**Catatan:**` — jangan didamaikan:**
- **Termoregulasi #14 (baju renang basah)** — sumber menyorot **DUA opsi sekaligus**, evaporasi
  dan konduksi kepada objek. Batang soal menyebut kondisi memakai baju basah, sehingga kunci
  yang dipakai konduksi kepada objek, sesuai isi pembahasannya sendiri.
- **Anconeus #2 (faktor termogenesis)** — pembahasan sumber menyimpulkan nomor 1, 3, dan 4 benar,
  tetapi **tidak ada opsi yang memuat ketiganya**. Dipakai opsi yang seluruh unsurnya benar
  meski tidak lengkap. Soal cacat di sumber.
- **2023 #16 vs Termoregulasi #7 (fever fisiologis atau patologis)** — naskah 2023 memasukkan
  fever ke dalam sistem fisiologis yang berhubungan dengan suhu tubuh; naskah Termoregulasi
  justru memisahkan variasi fisiologis dari patologis dan menempatkan demam di sisi patologis.
  **Dua naskah bertentangan**, dibiarkan apa adanya.
- **2023 #6 (persentase perpindahan panas)** — pembahasan mencantumkan konveksi 12 % di samping
  radiasi 60 %, konduksi udara 15 %, konduksi benda 3 %, evaporasi 22 %. Empat angka terakhir
  sudah 100 %, jadi angka konveksi itu tidak muat. Konflik yang sama dengan PPT aslab.
- **2023 #20 (aksila vs oral)** — memakai versi Modul Skillslab (aksila lebih rendah), bukan
  versi Sherwood (setara oral). Konsisten dengan kunci bank `ub-1-3-responsi-fisio`.
- **2018 #2 (yang meningkatkan suhu tubuh)** — olahraga dan asupan makan sama-sama tercantum
  sebagai faktor termogenesis di slide, jadi dua opsi dapat dibenarkan. Sumber hanya memuat
  empat opsi, satu ditambahkan.
- **2018 #3 (suhu sentral)** — organ thorax, abdomen, dan SSP sama-sama tergolong suhu inti.
  Pemilihan organ thorax bersandar pada naskah Termoregulasi #19, bukan pada sumber 2018 sendiri.
- **2018 #4** — slide sumber **tidak memuat opsi sama sekali**; kelima opsi baku sebab-akibat ditambahkan.

**Berkas pretest tidak disimpan di repo**, sama seperti PPT aslab — user melampirkannya tiap sesi.

### Quiz `ub-1-3-responsi-anat` — Responsi Anatomi 1.3
`data/ub-1-3-responsi-anat.js`, **150 soal**, 18 modul, dari EMPAT PPT asistensi: Dinding Abdomen (Zydane),
Tractus Digestivus Inferior (Khai), Systema Digestiva Accessoria (Fatih), Tractus Digestivus Superior (Naufal),
dilengkapi PDF dosen. n 1–94 = tiga PPT pertama; n 95–121 = bekas bank `ub-1-3-anat-dosen` (oesophagus, gaster,
duodenum, cavum oris, glandulae, pharynx) yang **dilebur** ke sini setelah PPT Naufal muncul; n 122–150 = PPT Naufal.
Bank `ub-1-3-anat-dosen` sudah dihapus (belum pernah ter-deploy, jadi tidak ada progres user yang hilang).
- `modul` berformat `"Anatomi · <Subtopik>"`. Field `ppt` sengaja tidak dipakai (alasan sama dengan bank fisiologi).
- `rationale` = penjelasan + `"  —  **Diskriminator:** ..."`; field tambahan `grup`, `bahas`, `diskriminator`.
- Semua soal disusun sendiri, bukan naskah asli; kunci dari analisis.
- Sempat bernama `ub-1-3-aslab` (PR #10, dibangun di atas main tanpa PR #9); diganti nama saat digabung.

**Kesalahan PPT Naufal yang ditandai** (jangan diikuti): a. lingualis "cabang a. carotis interna" (externa);
angustia media "bronchus dexter" (sinister); batas parotis "inferior arcus zygomaticus" (zygoma = superior);
foregut "sampai duodenum pars superior" (batasnya papilla major). Variasi, bukan salah: a. gastrica dextra
dari a. hepatica communis (Naufal) vs propria (umum).

**Peta bobot responsi anatomi** (46 soal unik dari dua naskah kating, 6 Nov 2026): cavum oris/lingua/glandula/pharynx
12 (26%) · intestinum crassum 10 (22%) · VF/bilier/pancreas 8 (17%) · hepar+porta 4 · peritoneum 4 ·
dinding+inguinal 4 · oesophagus+gaster 3 · lapisan dinding 1 · jejunum-ileum 0 (tapi nomor 1 di pretes).
**Tractus superior + cavum oris = 33% responsi** — versi pertama panduan salah melabelinya "prioritas 2"
karena mengira materinya hanya dari dosen; ternyata ada PPT aslab Naufal. Sudah dikoreksi, label PRIORITAS 2 dihapus. Responsi berbentuk **isian**: struktur ditunjuk +
satu pertanyaan lanjutan (saraf/embrio/muara/klinis).

### Naskah asli anatomi (`ub-1-3-resp-anat`, `ub-1-3-resp-anat-fix`, `ub-1-3-pre-digest`)
Sumber: RESPONSI_ANATOMI_1.3.docx (sesi Merah 24 nomor; sesi Hitam hanya mengulang parotis & omentum, tidak dimasukkan;
no. 25 duplikat no. 2; 3A tak berjawaban dikecualikan), SOAL_RESPONSI_FIX.docx (22 nomor, no. 23 kosong),
TIMER_Pretes_Trac_Digestivus_Inferior_Aryo.pptx (4 nomor akademik; no. 5 "hasil UB 1.2" dikecualikan).
Semuanya soal ISIAN, jadi seluruh opsi dilengkapi (`asliPenuh:false` untuk semua). Sub-soal a/b dipecah,
`kodeAsli` = nomor + huruf sumber. Soal bergambar diberi awalan `[Soal bergambar]` + deskripsi struktur;
gambar tidak disalin ke repo. **Pembahasan Pretes 3B-C, 3D, 3E keliru** (jawab "midgut/hindgut" untuk arteri,
"splanchnicus mayus" untuk midgut, "splanchnicolumbalis" untuk parasimpatis) — dikoreksi dengan `kunciDari:"analisis"`.
Praktikum_Klinis_Allyssa.pptx.pdf hanya rangkuman klinis + latsol, dipakai untuk isi panduan (Murphy, Charcot, sirosis).
- Sempat bernama `ub-1-3-aslab` / `ub-1-3-dosen` (PR #10, dibangun di atas main tanpa PR #9).
  Diganti nama saat digabung dengan PR #9, sebelum ada progres user yang tersimpan.

### `anatomi-1-3.html` — panduan belajar anatomi mandiri
Halaman statis terpisah (bukan view di index.html), karena isinya HTML/SVG kaya yang tidak bisa lewat `richText()`.
- Target ujian: **responsi/OSPE praktikum** + senggol kasus. User punya waktu 1–3 hari (Nov 2026).
- Isi: urutan belajar + jadwal 3 hari/1 hari, 13 modul, skema SVG gambaran sendiri (vagina recti, dermatom,
  Hesselbach, bingkai colon, huruf H hepar), tabel pembanding, checklist responsi, bagian **Koreksi sumber**.
- **Tidak ada gambar atlas** — repo public, gambar PPT kebanyakan Netter/Sobotta. Jangan tambahkan.
  Latihan tebak-struktur bergambar dibuat sebagai artifact PRIVAT di akun user, bukan di repo.
- Label sumber: `ASLAB` (inti), `DOSEN` (pengayaan), `LIT` (tambahan literatur). Bagian 00 = peta bobot + urutan menurut bobot.
- Mode **Tutup jawaban**: elemen ber-kelas `.rv` dikaburkan (teks SVG disembunyikan); ketuk untuk membuka.
- localStorage: tema dibaca dari `persiapan-ub.v1` (sama dengan index), checklist + status tutup di
  `persiapan-ub.anatomi13.v1`. Checklist disimpan per **indeks** checkbox dalam tiap `data-ck` —
  kalau menyisipkan item di tengah, centang lama bergeser; tambahkan di akhir saja.
- PPT anatomi berbeda dari PPT fisio/biokim: teksnya ADA di shape + notes, cukup python-pptx.

Kesalahan sumber yang sudah ditandai di halaman (jangan "dibetulkan" balik):
aslab "Sulcus V. Cava Superior" (seharusnya inferior); dosen "omentum minus/foramen Winslow ke pars
descendens duodeni" (literatur: pars superior); dosen "linea arcuata atau linea semilunaris" (dua garis berbeda);
aslab titik Lanz "1/6" (literatur umumnya 1/3); aslab ureter di hypochondriaca sinistra; aslab aliran
v. epigastrica superior/inferior ke v. femoralis (yang ke femoralis adalah v. epigastrica superficialis).


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
