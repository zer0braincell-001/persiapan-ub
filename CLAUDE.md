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
- Skema item soal: `{ n, modul, q, opsi[], kunciIndex, kunci, rationale }`. Benar = `kunciIndex`.
  Opsi **wajib** diacak saat render; jawaban dilacak via **index asli**, bukan posisi tampil.
- Jangan sentuh `../fk-quizz/` — project terpisah.

## Markup di dalam data soal — JANGAN pakai HTML
`richText()` di `index.html` hanya mengenali dua hal: `$...$` (diteruskan ke KaTeX) dan `**tebal**`.
Semua sisanya dijadikan **text node**. Jadi `<b>`, `<i>`, `<br>`, `<span>` akan **tampil sebagai teks mentah** ke user.
- Tebal → `**teks**`. Miring → tidak didukung, tulis biasa.
- Hindari karakter `$` di soal/penjelasan kecuali memang rumus KaTeX — `$` tunggal memecah parser.
- **Bug yang masih ada:** `data/hemoglobinopati.js` memuat ~74 tag `<b>`/`<i>` yang tampil mentah. Belum dibersihkan.

## Quiz `ub-1-2` — Bank Soal UB Blok 1.2
`data/ub-1-2.js`, 435 soal, mencakup **PPT 1–6**. Akan terus bertambah sampai PPT 17.

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
  `**[UB asli · <kode soal>]** ` (mis. `**[UB asli · SOAL 6]**`). Saat ini **119 dari 435** soal.
- Penjelasan **tidak boleh menyebut huruf opsi** ("Opsi B salah karena...") — opsi diacak saat render,
  jadi referensi huruf akan jadi salah. Rujuk **isi** opsinya.

### Cara menambah PPT berikutnya
1. Tambahkan item ke array di `data/ub-1-2.js`, lanjutkan `n` dari nomor terakhir (jangan menomori ulang —
   progres user di localStorage dikunci per `n`).
2. Update `jumlahSoal` pada entri `ub-1-2` di `QUIZZES` dan rentang PPT di `topik`.
3. Update baris jumlah soal + cakupan PPT di bagian atas file CLAUDE.md ini.
4. Verifikasi sebelum commit:
   - `node --check data/ub-1-2.js`
   - muat `index.html` di browser headless, buka `#/quiz/ub-1-2`, pastikan tidak ada
     "File data/... tidak termuat", dropdown modul bertambah, dan `**` terender jadi `<strong>`.
