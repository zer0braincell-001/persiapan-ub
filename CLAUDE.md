# persiapan-ub

Baca dulu (urut): `../../INDEX.md` → `../../workflow.md` → `../../projects/persiapan-ub/STATE.md` → `../../projects/persiapan-ub/NEXT.md`.

Project: dashboard "Persiapan UB 1.1" — hub web belajar FK, nampung banyak quiz recall per blok.
Single `index.html` (shell home + daftar quiz + engine quiz), data bank soal per-quiz di `data/<id>.js`.
GitHub Pages public: https://zer0braincell-001.github.io/persiapan-ub/

## Aturan
- Vanilla JS. Satu-satunya dependency runtime = **KaTeX via cdnjs (pinned 0.16.9)** — pengecualian sadar, jangan tambah yang lain.
- Data quiz dimuat lewat `<script src>` ke `window.QUIZ_BANK[id]`, **BUKAN `fetch()`** — supaya jalan di Pages DAN `file://`.
- Wajib ada `[hidden]{display:none!important}` + `body{margin:0}` + `<meta charset="utf-8">`. Jangan dihapus.
- Nambah quiz = tambah `data/<id>.js` + satu entri di array `QUIZZES` di `index.html`. Tidak ada tempat lain yang perlu disentuh.
- Skema item soal: `{ n, modul, q, opsi[], kunciIndex, kunci, rationale }`. Benar = `kunciIndex`.
  Opsi **wajib** diacak saat render; jawaban dilacak via **index asli**, bukan posisi tampil.
- Jangan sentuh `../fk-quizz/` — project terpisah.
