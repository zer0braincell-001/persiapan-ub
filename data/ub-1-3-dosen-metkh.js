/* Bank soal Blok 1.3 — MATERI DOSEN: Metabolisme Karbohidrat (Jarot Subandono, FK UNS 2026), 39 slide.
   Disusun sendiri dari teks shape + notes + render slide (gambar Harper). Bukan naskah asli; kunci dari analisis PPT.
   Kesalahan slide (Krebs: fumarat terlewat, OAA "menjadi asetil-KoA", fungsi glukoneogenesis di slide Krebs;
   batas gula darah) ditandai **Catatan:** di rationale.
   Skema engine: { n, modul, q, opsi[], kunciIndex, kunci, rationale } + { grup, bahas, diskriminator }.
   Markup **tebal** saja (bukan HTML). Nomor n jangan diubah: progres localStorage dikunci per n. */
window.QUIZ_BANK = window.QUIZ_BANK || {};
window.QUIZ_BANK["ub-1-3-dosen-metkh"] = [
 {
  "n": 1,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Ilmu yang mempelajari bagaimana zat gizi memengaruhi ekspresi gen disebut…",
  "opsi": [
   "Nutrigenetik",
   "Nutrigenomik",
   "Epidemiologi gizi",
   "Proteomik",
   "Farmakogenomik"
  ],
  "kunciIndex": 1,
  "kunci": "Nutrigenomik",
  "rationale": "Slide: nutrigenomik = nutrisi → gen (efek makanan pada aktivitas dan regulasi gen). Nutrigenetik arahnya terbalik.  —  **Diskriminator:** arah panah: nutrisi → gen = nutri-**genomik**; gen → respons nutrisi = nutri-**genetik**.",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Slide: nutrigenomik = nutrisi → gen (efek makanan pada aktivitas dan regulasi gen). Nutrigenetik arahnya terbalik.",
  "diskriminator": "arah panah: nutrisi → gen = nutri-**genomik**; gen → respons nutrisi = nutri-**genetik**."
 },
 {
  "n": 2,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Studi bahwa variasi gen LCT menentukan apakah seseorang toleran terhadap laktosa merupakan contoh…",
  "opsi": [
   "Transkriptomik",
   "Epigenetik lingkungan",
   "Nutrigenomik",
   "Metabolomik",
   "Nutrigenetik"
  ],
  "kunciIndex": 4,
  "kunci": "Nutrigenetik",
  "rationale": "Slide contoh penelitian: gen LCT dan toleransi laktosa = nutrigenetik, karena yang dilihat variasi genetik individu yang menentukan respons terhadap makanan.  —  **Diskriminator:** yang berbeda antarorang adalah GEN-nya (genotipe LCT) → nutrigenetik.",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Slide contoh penelitian: gen LCT dan toleransi laktosa = nutrigenetik, karena yang dilihat variasi genetik individu yang menentukan respons terhadap makanan.",
  "diskriminator": "yang berbeda antarorang adalah GEN-nya (genotipe LCT) → nutrigenetik."
 },
 {
  "n": 3,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Studi asam lemak omega-3 yang mengaktifkan gen anti-inflamasi merupakan contoh…",
  "opsi": [
   "Farmakogenetik",
   "Nutrigenomik",
   "Nutrigenetik",
   "Analisis SNP",
   "Genotyping"
  ],
  "kunciIndex": 1,
  "kunci": "Nutrigenomik",
  "rationale": "Slide: omega-3 mengaktifkan gen anti-inflamasi = zat gizi mengubah ekspresi gen = nutrigenomik.  —  **Diskriminator:** zat gizinya yang bekerja pada gen → nutrigenomik.",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Slide: omega-3 mengaktifkan gen anti-inflamasi = zat gizi mengubah ekspresi gen = nutrigenomik.",
  "diskriminator": "zat gizinya yang bekerja pada gen → nutrigenomik."
 },
 {
  "n": 4,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Teknologi yang khas untuk nutrigenetik menurut slide adalah…",
  "opsi": [
   "Kalorimetri",
   "Metabolomik",
   "Genotyping dan analisis SNP",
   "Transkriptomik dan proteomik",
   "Imunohistokimia"
  ],
  "kunciIndex": 2,
  "kunci": "Genotyping dan analisis SNP",
  "rationale": "Tabel slide: nutrigenomik memakai transcriptomics, proteomics, metabolomics; nutrigenetik memakai analisis DNA, genotyping, SNP analysis.  —  **Diskriminator:** nutrigenetik membaca VARIASI DNA (SNP); nutrigenomik membaca PRODUK ekspresi (RNA, protein, metabolit).",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Tabel slide: nutrigenomik memakai transcriptomics, proteomics, metabolomics; nutrigenetik memakai analisis DNA, genotyping, SNP analysis.",
  "diskriminator": "nutrigenetik membaca VARIASI DNA (SNP); nutrigenomik membaca PRODUK ekspresi (RNA, protein, metabolit)."
 },
 {
  "n": 5,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Hasil aplikasi nutrigenetik yang paling tepat adalah…",
  "opsi": [
   "Rekomendasi gizi umum berbasis pemahaman ekspresi gen",
   "Standar fortifikasi pangan",
   "Daftar angka kecukupan gizi nasional",
   "Rekomendasi gizi spesifik per individu berdasarkan genotipe",
   "Pedoman diet untuk seluruh populasi"
  ],
  "kunciIndex": 3,
  "kunci": "Rekomendasi gizi spesifik per individu berdasarkan genotipe",
  "rationale": "Tabel slide: nutrigenomik → rekomendasi gizi UMUM; nutrigenetik → rekomendasi SPESIFIK per individu berdasar genotipe (personal, klinis).  —  **Diskriminator:** genotipe tiap orang beda → hasilnya personal; nutrigenomik bersifat mekanistik → hasil umum.",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Tabel slide: nutrigenomik → rekomendasi gizi UMUM; nutrigenetik → rekomendasi SPESIFIK per individu berdasar genotipe (personal, klinis).",
  "diskriminator": "genotipe tiap orang beda → hasilnya personal; nutrigenomik bersifat mekanistik → hasil umum."
 },
 {
  "n": 6,
  "modul": "Biokimia · Nutrigenomik & Nutrigenetik",
  "q": "Pendekatan nutrigenomik digambarkan slide sebagai…",
  "opsi": [
   "Klinis-terapeutik: penentuan dosis diet untuk pasien rawat inap",
   "Personal dan klinis: perbedaan kebutuhan nutrisi antarindividu berdasarkan genotipe",
   "Mekanistik dan molekuler: efek nutrisi pada transkripsi, translasi, dan regulasi gen",
   "Genetik populasi: frekuensi SNP pada kelompok etnis tertentu",
   "Epidemiologis: hubungan pola makan dengan prevalensi penyakit di populasi"
  ],
  "kunciIndex": 2,
  "kunci": "Mekanistik dan molekuler: efek nutrisi pada transkripsi, translasi, dan regulasi gen",
  "rationale": "Slide: nutrigenomik lebih mekanistik/molekuler; nutrigenetik lebih personal/klinis.  —  **Diskriminator:** genomik = mekanisme; genetik = individu.",
  "grup": "Nutrigenomik & Nutrigenetik",
  "bahas": "Slide: nutrigenomik lebih mekanistik/molekuler; nutrigenetik lebih personal/klinis.",
  "diskriminator": "genomik = mekanisme; genetik = individu."
 },
 {
  "n": 7,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Pada tahap II katabolisme nutrien penghasil energi, unit pembangun diuraikan menjadi produk umum, yaitu…",
  "opsi": [
   "Glukosa",
   "Oksaloasetat",
   "CO2 dan H2O",
   "Piruvat",
   "Asetil-KoA"
  ],
  "kunciIndex": 4,
  "kunci": "Asetil-KoA",
  "rationale": "Gambar tiga tahap katabolisme: tahap I makromolekul → unit pembangun; tahap II → produk degradasi umum asetil-KoA; tahap III siklus asam sitrat → produk akhir.  —  **Diskriminator:** 'produk UMUM' = titik temu karbohidrat, lemak, protein = asetil-KoA (piruvat hanya dari glukosa dan sebagian asam amino).",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Gambar tiga tahap katabolisme: tahap I makromolekul → unit pembangun; tahap II → produk degradasi umum asetil-KoA; tahap III siklus asam sitrat → produk akhir.",
  "diskriminator": "'produk UMUM' = titik temu karbohidrat, lemak, protein = asetil-KoA (piruvat hanya dari glukosa dan sebagian asam amino)."
 },
 {
  "n": 8,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Tiga produk akhir utama tahap III katabolisme pada gambar slide adalah…",
  "opsi": [
   "Urea, asam urat, dan kreatinin",
   "ATP, NADH, dan FADH2",
   "Asetil-KoA, piruvat, dan laktat",
   "CO2, H2O, dan NH3",
   "Glukosa, asam lemak, dan asam amino"
  ],
  "kunciIndex": 3,
  "kunci": "CO2, H2O, dan NH3",
  "rationale": "Gambar slide: tahap III berujung pada NH3, H2O, CO2 sebagai produk akhir katabolisme yang sederhana dan berukuran kecil.  —  **Diskriminator:** produk akhir = molekul kecil buangan; NH3 datang dari gugus amino protein.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Gambar slide: tahap III berujung pada NH3, H2O, CO2 sebagai produk akhir katabolisme yang sederhana dan berukuran kecil.",
  "diskriminator": "produk akhir = molekul kecil buangan; NH3 datang dari gugus amino protein."
 },
 {
  "n": 9,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Disakarida yang tersusun dari glukosa dan galaktosa adalah…",
  "opsi": [
   "Sukrosa (gula tebu/pasir)",
   "Laktosa (gula susu)",
   "Maltosa (gula malt)",
   "Trehalosa",
   "Selobiosa"
  ],
  "kunciIndex": 1,
  "kunci": "Laktosa (gula susu)",
  "rationale": "Laktosa = glukosa + galaktosa; sukrosa = glukosa + fruktosa; maltosa = glukosa + glukosa.  —  **Diskriminator:** **ga**laktosa ada di laktosa (susu, 'galacto' = susu).",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Laktosa = glukosa + galaktosa; sukrosa = glukosa + fruktosa; maltosa = glukosa + glukosa.",
  "diskriminator": "**ga**laktosa ada di laktosa (susu, 'galacto' = susu)."
 },
 {
  "n": 10,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Sukrosa dihidrolisis menjadi…",
  "opsi": [
   "Glukosa dan fruktosa",
   "Dua molekul glukosa",
   "Fruktosa dan galaktosa",
   "Glukosa dan galaktosa",
   "Glukosa dan ribosa"
  ],
  "kunciIndex": 0,
  "kunci": "Glukosa dan fruktosa",
  "rationale": "Sukrosa (gula tebu/pasir) = glukosa + fruktosa. Enzim brush border sukrase memecahnya.  —  **Diskriminator:** satu-satunya disakarida umum yang membawa fruktosa adalah sukrosa.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Sukrosa (gula tebu/pasir) = glukosa + fruktosa. Enzim brush border sukrase memecahnya.",
  "diskriminator": "satu-satunya disakarida umum yang membawa fruktosa adalah sukrosa."
 },
 {
  "n": 11,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Maltosa tersusun atas…",
  "opsi": [
   "Dua molekul glukosa",
   "Galaktosa dan fruktosa",
   "Dua molekul fruktosa",
   "Glukosa dan fruktosa",
   "Glukosa dan galaktosa"
  ],
  "kunciIndex": 0,
  "kunci": "Dua molekul glukosa",
  "rationale": "Maltosa (gula malt) = glukosa + glukosa, hasil kerja amilase pada amilum.  —  **Diskriminator:** maltosa adalah 'potongan' amilum → isinya glukosa semua.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Maltosa (gula malt) = glukosa + glukosa, hasil kerja amilase pada amilum.",
  "diskriminator": "maltosa adalah 'potongan' amilum → isinya glukosa semua."
 },
 {
  "n": 12,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Contoh polisakarida yang disebut slide adalah…",
  "opsi": [
   "Maltosa dan maltotriosa",
   "Amilum dan selulosa",
   "Galaktosa dan ribosa",
   "Laktosa dan sukrosa",
   "Glukosa dan fruktosa"
  ],
  "kunciIndex": 1,
  "kunci": "Amilum dan selulosa",
  "rationale": "Slide Polisakarida: amilum, selulosa. Laktosa/sukrosa/maltosa = disakarida; glukosa/fruktosa/galaktosa = monosakarida.  —  **Diskriminator:** poli = banyak unit; disakarida hanya dua.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide Polisakarida: amilum, selulosa. Laktosa/sukrosa/maltosa = disakarida; glukosa/fruktosa/galaktosa = monosakarida.",
  "diskriminator": "poli = banyak unit; disakarida hanya dua."
 },
 {
  "n": 13,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Monosakarida yang disebut slide sebagai sumber energi bagi sel otak dan sel otot adalah…",
  "opsi": [
   "Ribosa",
   "Laktosa",
   "Glukosa",
   "Fruktosa",
   "Galaktosa"
  ],
  "kunciIndex": 2,
  "kunci": "Glukosa",
  "rationale": "Slide Monosakarida: glukosa, fruktosa, galaktosa; glukosa sumber energi sel otak dan sel otot.  —  **Diskriminator:** laktosa disakarida, bukan monosakarida — buang dulu yang salah kelas.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide Monosakarida: glukosa, fruktosa, galaktosa; glukosa sumber energi sel otak dan sel otot.",
  "diskriminator": "laktosa disakarida, bukan monosakarida — buang dulu yang salah kelas."
 },
 {
  "n": 14,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Katabolisme berbeda dari anabolisme karena katabolisme…",
  "opsi": [
   "Tidak melibatkan enzim",
   "Hanya terjadi di sitoplasma",
   "Hanya terjadi saat puasa",
   "Menyusun molekul kecil menjadi makromolekul dengan memakai ATP",
   "Memecah molekul besar menjadi kecil dan menghasilkan energi (ATP)"
  ],
  "kunciIndex": 4,
  "kunci": "Memecah molekul besar menjadi kecil dan menghasilkan energi (ATP)",
  "rationale": "Slide relasi lintas katabolik–anabolik: katabolisme menghasilkan energi kimia (ATP), anabolisme (biosintesis) memakainya untuk membangun makromolekul.  —  **Diskriminator:** kata-bolisme = turun/memecah (lepas energi); ana-bolisme = naik/membangun (pakai energi).",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide relasi lintas katabolik–anabolik: katabolisme menghasilkan energi kimia (ATP), anabolisme (biosintesis) memakainya untuk membangun makromolekul.",
  "diskriminator": "kata-bolisme = turun/memecah (lepas energi); ana-bolisme = naik/membangun (pakai energi)."
 },
 {
  "n": 15,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Glikolisis adalah perubahan…",
  "opsi": [
   "Glukosa menjadi piruvat",
   "Glikogen menjadi glukosa",
   "Glukosa menjadi glikogen",
   "Laktat menjadi glukosa",
   "Asetil-KoA menjadi sitrat"
  ],
  "kunciIndex": 0,
  "kunci": "Glukosa menjadi piruvat",
  "rationale": "Slide: glikolisis = glukosa → piruvat; glikogenesis = glukosa → glikogen; glikogenolisis = glikogen → glukosa.  —  **Diskriminator:** -lisis = memecah; glikolisis memecah glukosa itu sendiri.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide: glikolisis = glukosa → piruvat; glikogenesis = glukosa → glikogen; glikogenolisis = glikogen → glukosa.",
  "diskriminator": "-lisis = memecah; glikolisis memecah glukosa itu sendiri."
 },
 {
  "n": 16,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Proses yang diibaratkan slide sebagai 'menabung/nyelengi' adalah…",
  "opsi": [
   "Siklus Krebs",
   "Glukoneogenesis",
   "Glikogenesis",
   "Glikogenolisis",
   "Glikolisis"
  ],
  "kunciIndex": 2,
  "kunci": "Glikogenesis",
  "rationale": "Glikogenesis = glukosa → glikogen sebagai cadangan energi (menabung). Glikogenolisis = 'mecah celengan'.  —  **Diskriminator:** -genesis = membuat (menabung glikogen); glikogeno-lisis = membongkar tabungan.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Glikogenesis = glukosa → glikogen sebagai cadangan energi (menabung). Glikogenolisis = 'mecah celengan'.",
  "diskriminator": "-genesis = membuat (menabung glikogen); glikogeno-lisis = membongkar tabungan."
 },
 {
  "n": 17,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Cadangan energi hasil glikogenesis disimpan terutama di…",
  "opsi": [
   "Jaringan adiposa subkutan dan viseral",
   "Otak",
   "Ginjal dan paru",
   "Eritrosit",
   "Hati dan otot rangka"
  ],
  "kunciIndex": 4,
  "kunci": "Hati dan otot rangka",
  "rationale": "Glikogen disimpan terutama di hati dan otot (pertanyaan slide 'disimpan di mana?'). Adiposa menyimpan trigliserida, bukan glikogen.  —  **Diskriminator:** cadangan KH = glikogen (hati, otot); cadangan lemak = trigliserida (adiposa).",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Glikogen disimpan terutama di hati dan otot (pertanyaan slide 'disimpan di mana?'). Adiposa menyimpan trigliserida, bukan glikogen.",
  "diskriminator": "cadangan KH = glikogen (hati, otot); cadangan lemak = trigliserida (adiposa)."
 },
 {
  "n": 18,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Contoh keadaan yang disebut slide ketika glikogenolisis meningkat adalah…",
  "opsi": [
   "Saat kadar insulin tinggi",
   "Puasa",
   "Saat tidur setelah makan",
   "Sesaat setelah makan besar",
   "Saat minum larutan gula"
  ],
  "kunciIndex": 1,
  "kunci": "Puasa",
  "rationale": "Slide: glikogenolisis = 'mecah celengan', contoh saat puasa — glukosa darah dipertahankan dari cadangan glikogen.  —  **Diskriminator:** insulin tinggi = keadaan kenyang = menabung, bukan membongkar.",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide: glikogenolisis = 'mecah celengan', contoh saat puasa — glukosa darah dipertahankan dari cadangan glikogen.",
  "diskriminator": "insulin tinggi = keadaan kenyang = menabung, bukan membongkar."
 },
 {
  "n": 19,
  "modul": "Biokimia · Klasifikasi & Jalur Karbohidrat",
  "q": "Glukoneogenesis adalah…",
  "opsi": [
   "Penyimpanan kelebihan glukosa sebagai glikogen",
   "Pembentukan glukosa baru dari senyawa non-karbohidrat",
   "Pemecahan glikogen hati menjadi glukosa bebas",
   "Oksidasi asetil-KoA menjadi CO2 di mitokondria",
   "Pemecahan glukosa menjadi dua molekul piruvat"
  ],
  "kunciIndex": 1,
  "kunci": "Pembentukan glukosa baru dari senyawa non-karbohidrat",
  "rationale": "Slide: glukoneogenesis = perubahan kelompok protein dan lemak menjadi glukosa.  —  **Diskriminator:** gluko-**neo**-genesis = membuat glukosa BARU dari bahan non-KH; glikogenolisis bahannya glikogen (sudah KH).",
  "grup": "Klasifikasi & Jalur Karbohidrat",
  "bahas": "Slide: glukoneogenesis = perubahan kelompok protein dan lemak menjadi glukosa.",
  "diskriminator": "gluko-**neo**-genesis = membuat glukosa BARU dari bahan non-KH; glikogenolisis bahannya glikogen (sudah KH)."
 },
 {
  "n": 20,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Dalam siklus glukosa-alanin, alanin di otot disintesis dengan cara…",
  "opsi": [
   "Reduksi piruvat menjadi laktat oleh LDH",
   "Hidrolisis protein otot menjadi asam amino bebas",
   "Deaminasi oksidatif glutamat di mitokondria otot",
   "Transaminasi piruvat yang berasal dari glukosa",
   "Karboksilasi piruvat menjadi oksaloasetat"
  ],
  "kunciIndex": 3,
  "kunci": "Transaminasi piruvat yang berasal dari glukosa",
  "rationale": "Slide: alanin disintesis di otot melalui transaminasi piruvat (dari glukosa), dilepas ke darah, diambil hati, kerangka karbonnya dijadikan glukosa lagi.  —  **Diskriminator:** piruvat + gugus amino = alanin (keduanya 3C); itulah sebabnya alanin mudah balik jadi glukosa.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide: alanin disintesis di otot melalui transaminasi piruvat (dari glukosa), dilepas ke darah, diambil hati, kerangka karbonnya dijadikan glukosa lagi.",
  "diskriminator": "piruvat + gugus amino = alanin (keduanya 3C); itulah sebabnya alanin mudah balik jadi glukosa."
 },
 {
  "n": 21,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Organ yang mengubah kerangka karbon alanin kembali menjadi glukosa pada siklus glukosa-alanin adalah…",
  "opsi": [
   "Hati",
   "Usus halus",
   "Ginjal",
   "Otot rangka",
   "Otak"
  ],
  "kunciIndex": 0,
  "kunci": "Hati",
  "rationale": "Alanin dari otot → darah → hati; di hati karbonnya diubah jadi glukosa dan dilepas lagi untuk otot.  —  **Diskriminator:** otot MEMBUAT alanin, hati MEMBUAT glukosa — siklusnya antar-organ.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Alanin dari otot → darah → hati; di hati karbonnya diubah jadi glukosa dan dilepas lagi untuk otot.",
  "diskriminator": "otot MEMBUAT alanin, hati MEMBUAT glukosa — siklusnya antar-organ."
 },
 {
  "n": 22,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Alanin digolongkan sebagai asam amino…",
  "opsi": [
   "Aromatik",
   "Glukogenik",
   "Esensial",
   "Bersulfur",
   "Ketogenik murni"
  ],
  "kunciIndex": 1,
  "kunci": "Glukogenik",
  "rationale": "Slide: alanin termasuk asam amino glikogenik, prazat glukosa dari protein yang paling penting.  —  **Diskriminator:** glukogenik = kerangkanya bisa jadi glukosa; ketogenik = jadi badan keton/asetil-KoA.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide: alanin termasuk asam amino glikogenik, prazat glukosa dari protein yang paling penting.",
  "diskriminator": "glukogenik = kerangkanya bisa jadi glukosa; ketogenik = jadi badan keton/asetil-KoA."
 },
 {
  "n": 23,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Menurut slide, saturasi glukoneogenesis hati dari alanin baru tercapai pada konsentrasi alanin sekitar…",
  "opsi": [
   "0,9 mmol/L, setara kadar fisiologis",
   "9 mmol/L, sekitar 20–30 kali kadar fisiologis",
   "Tidak ada titik saturasi",
   "2 mmol/L, dua kali kadar fisiologis",
   "90 mmol/L, ratusan kali kadar fisiologis"
  ],
  "kunciIndex": 1,
  "kunci": "9 mmol/L, sekitar 20–30 kali kadar fisiologis",
  "rationale": "Slide (Harper): kemampuan hati sangat besar; saturasi baru setelah alanin ±9 mmol/L, yaitu 20–30 kali kadar fisiologisnya.  —  **Diskriminator:** pesannya: kapasitas hati jauh di atas kebutuhan normal.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide (Harper): kemampuan hati sangat besar; saturasi baru setelah alanin ±9 mmol/L, yaitu 20–30 kali kadar fisiologisnya.",
  "diskriminator": "pesannya: kapasitas hati jauh di atas kebutuhan normal."
 },
 {
  "n": 24,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Organ utama glukoneogenesis terutama saat puasa pendek adalah…",
  "opsi": [
   "Jaringan adiposa",
   "Otot rangka",
   "Ginjal",
   "Otak",
   "Hati"
  ],
  "kunciIndex": 4,
  "kunci": "Hati",
  "rationale": "Tabel slide: hati = organ utama glukoneogenesis terutama saat puasa pendek; ginjal mendukung terutama saat puasa lama/stres.  —  **Diskriminator:** pendek → hati; lama/stres → ginjal ikut naik.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Tabel slide: hati = organ utama glukoneogenesis terutama saat puasa pendek; ginjal mendukung terutama saat puasa lama/stres.",
  "diskriminator": "pendek → hati; lama/stres → ginjal ikut naik."
 },
 {
  "n": 25,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Prekursor utama glukoneogenesis di ginjal menurut tabel slide adalah…",
  "opsi": [
   "Asetil-KoA dan laktat",
   "Gliserol dan propionat",
   "Glutamin (asam amino) dan laktat",
   "Asam lemak rantai genap dan badan keton",
   "Asam lemak dan gliserol"
  ],
  "kunciIndex": 2,
  "kunci": "Glutamin (asam amino) dan laktat",
  "rationale": "Tabel: ginjal → asam amino (glutamin), laktat; hati → laktat, gliserol, asam amino, propionat.  —  **Diskriminator:** glutamin = penanda khas glukoneogenesis ginjal (sekaligus sumber NH3 untuk asam-basa, cocok dengan regulasi pH di tabel).",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Tabel: ginjal → asam amino (glutamin), laktat; hati → laktat, gliserol, asam amino, propionat.",
  "diskriminator": "glutamin = penanda khas glukoneogenesis ginjal (sekaligus sumber NH3 untuk asam-basa, cocok dengan regulasi pH di tabel)."
 },
 {
  "n": 26,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Regulasi hormonal glukoneogenesis hati menurut tabel slide adalah…",
  "opsi": [
   "Glukagon (+), kortisol (+), insulin (−)",
   "Insulin (+), kortisol (+), glukagon (−)",
   "Glukagon (−), kortisol (−), insulin (+)",
   "Insulin (+), glukagon (−), kortisol (−)",
   "Glukagon (+), insulin (+), kortisol (−)"
  ],
  "kunciIndex": 0,
  "kunci": "Glukagon (+), kortisol (+), insulin (−)",
  "rationale": "Tabel slide: hati — glukagon (+), kortisol (+), insulin (−). Ginjal — glukagon (+), insulin (−), pH asam-basa.  —  **Diskriminator:** glukoneogenesis = respons lapar/stres → hormon katabolik (+), insulin (hormon kenyang) (−).",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Tabel slide: hati — glukagon (+), kortisol (+), insulin (−). Ginjal — glukagon (+), insulin (−), pH asam-basa.",
  "diskriminator": "glukoneogenesis = respons lapar/stres → hormon katabolik (+), insulin (hormon kenyang) (−)."
 },
 {
  "n": 27,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Yang BUKAN prekursor glukoneogenesis menurut slide adalah…",
  "opsi": [
   "Asetil-KoA",
   "Laktat",
   "Asam amino glukogenik",
   "Propionat",
   "Gliserol"
  ],
  "kunciIndex": 0,
  "kunci": "Asetil-KoA",
  "rationale": "Slide: prekursor = asam amino glukogenik, laktat (otot, eritrosit), gliserol (trigliserida), propionat. Asetil-KoA tidak ada di daftar; piruvat → asetil-KoA tidak dapat dibalik sehingga asetil-KoA tidak menghasilkan glukosa netto.  —  **Diskriminator:** dari lemak, yang bisa jadi glukosa hanya GLISEROL (dan propionat dari asam lemak rantai ganjil), bukan rantai asam lemak genapnya.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide: prekursor = asam amino glukogenik, laktat (otot, eritrosit), gliserol (trigliserida), propionat. Asetil-KoA tidak ada di daftar; piruvat → asetil-KoA tidak dapat dibalik sehingga asetil-KoA tidak menghasilkan glukosa netto.",
  "diskriminator": "dari lemak, yang bisa jadi glukosa hanya GLISEROL (dan propionat dari asam lemak rantai ganjil), bukan rantai asam lemak genapnya."
 },
 {
  "n": 28,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Laktat sebagai prekursor glukoneogenesis berasal terutama dari…",
  "opsi": [
   "Pemecahan protein otot",
   "Fermentasi bakteri kolon",
   "Oksidasi asam lemak di hati",
   "Pemecahan trigliserida di jaringan adiposa",
   "Metabolisme anaerob di otot dan eritrosit"
  ],
  "kunciIndex": 4,
  "kunci": "Metabolisme anaerob di otot dan eritrosit",
  "rationale": "Slide: laktat = hasil metabolisme anaerobik, misal dari otot dan eritrosit. Gliserol dari trigliserida; asam amino dari protein.  —  **Diskriminator:** eritrosit tanpa mitokondria → selalu menghasilkan laktat.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide: laktat = hasil metabolisme anaerobik, misal dari otot dan eritrosit. Gliserol dari trigliserida; asam amino dari protein.",
  "diskriminator": "eritrosit tanpa mitokondria → selalu menghasilkan laktat."
 },
 {
  "n": 29,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Lokasi seluler glukoneogenesis di hepatosit menurut tabel slide adalah…",
  "opsi": [
   "Mitokondria dan sitoplasma",
   "Retikulum endoplasma kasar",
   "Hanya retikulum endoplasma kasar hepatosit",
   "Hanya mitokondria",
   "Hanya sitoplasma"
  ],
  "kunciIndex": 0,
  "kunci": "Mitokondria dan sitoplasma",
  "rationale": "Tabel slide: hati → mitokondria & sitoplasma hepatosit; ginjal → korteks ginjal, mitokondria & sitoplasma.  —  **Diskriminator:** glukoneogenesis jalur dua kompartemen (langkah piruvat → oksaloasetat di mitokondria).",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Tabel slide: hati → mitokondria & sitoplasma hepatosit; ginjal → korteks ginjal, mitokondria & sitoplasma.",
  "diskriminator": "glukoneogenesis jalur dua kompartemen (langkah piruvat → oksaloasetat di mitokondria)."
 },
 {
  "n": 30,
  "modul": "Biokimia · Glukoneogenesis & Siklus Glukosa-Alanin",
  "q": "Gliserol sebagai prekursor glukoneogenesis berasal dari…",
  "opsi": [
   "Pemecahan glikogen",
   "Glikolisis anaerob",
   "Pemecahan trigliserida",
   "Transaminasi piruvat",
   "Hidrolisis fosfolipid membran"
  ],
  "kunciIndex": 2,
  "kunci": "Pemecahan trigliserida",
  "rationale": "Slide: gliserol (dari pemecahan trigliserida/lemak).  —  **Diskriminator:** trigliserida = gliserol + 3 asam lemak; hanya gliserolnya yang glukogenik.",
  "grup": "Glukoneogenesis & Siklus Glukosa-Alanin",
  "bahas": "Slide: gliserol (dari pemecahan trigliserida/lemak).",
  "diskriminator": "trigliserida = gliserol + 3 asam lemak; hanya gliserolnya yang glukogenik."
 },
 {
  "n": 31,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Siklus Krebs berlangsung di…",
  "opsi": [
   "Retikulum endoplasma",
   "Mitokondria",
   "Nukleus",
   "Sitoplasma",
   "Lisosom"
  ],
  "kunciIndex": 1,
  "kunci": "Mitokondria",
  "rationale": "Slide Siklus Asam Sitrat: di mitokondria.  —  **Diskriminator:** glikolisis di sitoplasma, Krebs di mitokondria — pasangan yang sering dibalik di opsi.",
  "grup": "Siklus Krebs",
  "bahas": "Slide Siklus Asam Sitrat: di mitokondria.",
  "diskriminator": "glikolisis di sitoplasma, Krebs di mitokondria — pasangan yang sering dibalik di opsi."
 },
 {
  "n": 32,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Nama lain siklus Krebs adalah…",
  "opsi": [
   "Siklus urea",
   "Siklus glukosa-alanin",
   "Siklus Cori",
   "Jalur pentosa fosfat",
   "Siklus asam sitrat"
  ],
  "kunciIndex": 4,
  "kunci": "Siklus asam sitrat",
  "rationale": "Slide: nama lain siklus Krebs = siklus asam sitrat (The Citric Acid Cycle), juga disebut siklus asam trikarboksilat.  —  **Diskriminator:** senyawa pertama yang terbentuk = sitrat → namanya.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: nama lain siklus Krebs = siklus asam sitrat (The Citric Acid Cycle), juga disebut siklus asam trikarboksilat.",
  "diskriminator": "senyawa pertama yang terbentuk = sitrat → namanya."
 },
 {
  "n": 33,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Sebelum masuk siklus Krebs, karbohidrat, lemak, dan protein harus diubah dulu menjadi…",
  "opsi": [
   "Asetil-KoA",
   "Piruvat",
   "Suksinil-KoA",
   "Glukosa",
   "Oksaloasetat"
  ],
  "kunciIndex": 0,
  "kunci": "Asetil-KoA",
  "rationale": "Slide: ketiganya sebelum masuk siklus Krebs harus diubah menjadi asetil-KoA (produk umum).  —  **Diskriminator:** pintu masuk Krebs = asetil-KoA; glukosa hanya jalur KH.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: ketiganya sebelum masuk siklus Krebs harus diubah menjadi asetil-KoA (produk umum).",
  "diskriminator": "pintu masuk Krebs = asetil-KoA; glukosa hanya jalur KH."
 },
 {
  "n": 34,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Fluoroasetat menghambat siklus Krebs pada enzim…",
  "opsi": [
   "Akonitase",
   "Alfa-ketoglutarat dehidrogenase",
   "Malat dehidrogenase",
   "Suksinat dehidrogenase",
   "Sitrat sintase"
  ],
  "kunciIndex": 0,
  "kunci": "Akonitase",
  "rationale": "Slide 'yang mengganggu': fluoroasetat → akonitase; arsenit → kompleks α-ketoglutarat dehidrogenase; malonat → suksinat dehidrogenase.  —  **Diskriminator:** fluoroasetat diubah jadi fluorositrat → menyerang enzim yang memproses SITRAT (akonitase).",
  "grup": "Siklus Krebs",
  "bahas": "Slide 'yang mengganggu': fluoroasetat → akonitase; arsenit → kompleks α-ketoglutarat dehidrogenase; malonat → suksinat dehidrogenase.",
  "diskriminator": "fluoroasetat diubah jadi fluorositrat → menyerang enzim yang memproses SITRAT (akonitase)."
 },
 {
  "n": 35,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Malonat adalah inhibitor enzim…",
  "opsi": [
   "Sitrat sintase",
   "Akonitase",
   "Alfa-ketoglutarat dehidrogenase",
   "Suksinat dehidrogenase",
   "Isositrat dehidrogenase"
  ],
  "kunciIndex": 3,
  "kunci": "Suksinat dehidrogenase",
  "rationale": "Malonat menghambat suksinat dehidrogenase (slide). Malonat mirip suksinat (dikarboksilat) → inhibitor kompetitif.  —  **Diskriminator:** **mal**onat ≈ **suk**sinat (sama-sama asam dikarboksilat) → bersaing di suksinat DH.",
  "grup": "Siklus Krebs",
  "bahas": "Malonat menghambat suksinat dehidrogenase (slide). Malonat mirip suksinat (dikarboksilat) → inhibitor kompetitif.",
  "diskriminator": "**mal**onat ≈ **suk**sinat (sama-sama asam dikarboksilat) → bersaing di suksinat DH."
 },
 {
  "n": 36,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Arsenit menghambat siklus Krebs pada…",
  "opsi": [
   "Suksinat dehidrogenase",
   "Isositrat dehidrogenase",
   "Malat dehidrogenase",
   "Akonitase (bersama fluoroasetat)",
   "Alfa-ketoglutarat dehidrogenase"
  ],
  "kunciIndex": 4,
  "kunci": "Alfa-ketoglutarat dehidrogenase",
  "rationale": "Slide: arsenit inhibitor α-ketoglutarate dehydrogenase complex (enzim yang memakai lipoat).  —  **Diskriminator:** arsenit mengikat lipoat → menyerang kompleks dehidrogenase berlipoat (α-KG DH).",
  "grup": "Siklus Krebs",
  "bahas": "Slide: arsenit inhibitor α-ketoglutarate dehydrogenase complex (enzim yang memakai lipoat).",
  "diskriminator": "arsenit mengikat lipoat → menyerang kompleks dehidrogenase berlipoat (α-KG DH)."
 },
 {
  "n": 37,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Kofaktor kompleks alfa-ketoglutarat dehidrogenase pada bagan slide adalah…",
  "opsi": [
   "Tiamin difosfat, biotin, NADP+, dan FMN",
   "Biotin, ATP, Mg2+, dan bikarbonat",
   "Piridoksal fosfat, NAD+, dan KoA",
   "Tiamin difosfat, lipoat, NAD+, FAD, dan KoA",
   "Lipoat, FMN, NADP+, dan asam folat"
  ],
  "kunciIndex": 3,
  "kunci": "Tiamin difosfat, lipoat, NAD+, FAD, dan KoA",
  "rationale": "Bagan slide: kofaktor = thiamin diphosphate, lipoate, NAD+, FAD & CoA.  —  **Diskriminator:** dekarboksilasi oksidatif α-keto acid selalu butuh paket 5 kofaktor yang sama dengan piruvat DH.",
  "grup": "Siklus Krebs",
  "bahas": "Bagan slide: kofaktor = thiamin diphosphate, lipoate, NAD+, FAD & CoA.",
  "diskriminator": "dekarboksilasi oksidatif α-keto acid selalu butuh paket 5 kofaktor yang sama dengan piruvat DH."
 },
 {
  "n": 38,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Vitamin yang disebut slide sebagai koenzim dalam siklus asam sitrat adalah…",
  "opsi": [
   "Vitamin C",
   "Vitamin B1",
   "Vitamin K",
   "Vitamin B12",
   "Vitamin A"
  ],
  "kunciIndex": 1,
  "kunci": "Vitamin B1",
  "rationale": "Slide 'yang membantu': koenzim vitamin (B1) dan mineral (Fe2+, Mn2+, Mg2+).  —  **Diskriminator:** B1 = tiamin difosfat, kofaktor α-KG dehidrogenase.",
  "grup": "Siklus Krebs",
  "bahas": "Slide 'yang membantu': koenzim vitamin (B1) dan mineral (Fe2+, Mn2+, Mg2+).",
  "diskriminator": "B1 = tiamin difosfat, kofaktor α-KG dehidrogenase."
 },
 {
  "n": 39,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Ion mineral yang ditandai pada enzim akonitase di bagan siklus asam sitrat adalah…",
  "opsi": [
   "Zn2+",
   "Mg2+ dan Mn2+",
   "Fe2+",
   "Cu2+",
   "Ca2+"
  ],
  "kunciIndex": 2,
  "kunci": "Fe2+",
  "rationale": "Bagan slide: Fe2+ pada akonitase; Mn2+/Mg2+ pada isositrat dehidrogenase dan suksinat tiokinase.  —  **Diskriminator:** akonitase = enzim besi-sulfur → Fe.",
  "grup": "Siklus Krebs",
  "bahas": "Bagan slide: Fe2+ pada akonitase; Mn2+/Mg2+ pada isositrat dehidrogenase dan suksinat tiokinase.",
  "diskriminator": "akonitase = enzim besi-sulfur → Fe."
 },
 {
  "n": 40,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Pada langkah sitrat sintase dan akonitase menurut slide…",
  "opsi": [
   "Dihasilkan GTP dari sitrat",
   "Belum dihasilkan NADH, FADH2, maupun GTP",
   "Dihasilkan FADH2 oleh akonitase",
   "Dihasilkan satu NADH di tiap langkah",
   "Dihasilkan NADH dan CO2 pertama"
  ],
  "kunciIndex": 1,
  "kunci": "Belum dihasilkan NADH, FADH2, maupun GTP",
  "rationale": "Slide: asetil-KoA → sitrat (sitrat sintase) belum menghasilkan energi; sitrat → isositrat masih tanpa energi. Energi pertama (NADH) baru di isositrat dehidrogenase.  —  **Diskriminator:** energi baru keluar saat ada DEHIDROGENASE.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: asetil-KoA → sitrat (sitrat sintase) belum menghasilkan energi; sitrat → isositrat masih tanpa energi. Energi pertama (NADH) baru di isositrat dehidrogenase.",
  "diskriminator": "energi baru keluar saat ada DEHIDROGENASE."
 },
 {
  "n": 41,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Enzim yang pertama kali menghasilkan NADH dan CO2 dalam siklus Krebs adalah…",
  "opsi": [
   "Alfa-ketoglutarat dehidrogenase",
   "Isositrat dehidrogenase",
   "Suksinat dehidrogenase",
   "Akonitase",
   "Sitrat sintase"
  ],
  "kunciIndex": 1,
  "kunci": "Isositrat dehidrogenase",
  "rationale": "Slide: isositrat dikatalisis isositrat dehidrogenase menjadi α-ketoglutarat dan mulai menghasilkan NADH, dengan gas sisa CO2.  —  **Diskriminator:** CO2 pertama + NADH pertama = isositrat DH; CO2 kedua = α-KG DH.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: isositrat dikatalisis isositrat dehidrogenase menjadi α-ketoglutarat dan mulai menghasilkan NADH, dengan gas sisa CO2.",
  "diskriminator": "CO2 pertama + NADH pertama = isositrat DH; CO2 kedua = α-KG DH."
 },
 {
  "n": 42,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Jumlah CO2 yang dilepas per satu putaran siklus Krebs adalah…",
  "opsi": [
   "Empat",
   "Dua",
   "Satu",
   "Enam",
   "Tiga"
  ],
  "kunciIndex": 1,
  "kunci": "Dua",
  "rationale": "Slide menunjukkan CO2 dilepas pada isositrat dehidrogenase dan α-ketoglutarat dehidrogenase; dua karbon asetil masuk, dua CO2 keluar. **Catatan silang:** slide aslab menulis 4 CO2 untuk 'satu putaran'; itu angka satu glukosa (dua putaran).  —  **Diskriminator:** 2C masuk (asetil) = 2 CO2 keluar.",
  "grup": "Siklus Krebs",
  "bahas": "Slide menunjukkan CO2 dilepas pada isositrat dehidrogenase dan α-ketoglutarat dehidrogenase; dua karbon asetil masuk, dua CO2 keluar. **Catatan silang:** slide aslab menulis 4 CO2 untuk 'satu putaran'; itu angka satu glukosa (dua putaran).",
  "diskriminator": "2C masuk (asetil) = 2 CO2 keluar."
 },
 {
  "n": 43,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Energi kelas tinggi berupa GTP/ATP dalam siklus Krebs dihasilkan dari…",
  "opsi": [
   "Isositrat menjadi alfa-ketoglutarat",
   "Suksinil-KoA menjadi suksinat",
   "Fumarat menjadi malat",
   "Sitrat menjadi isositrat",
   "Malat menjadi oksaloasetat"
  ],
  "kunciIndex": 1,
  "kunci": "Suksinil-KoA menjadi suksinat",
  "rationale": "Slide: suksinil-KoA sebagian terkonversi menjadi energi kelas tinggi berupa GTP atau ATP (fosforilasi tingkat substrat oleh suksinat tiokinase).  —  **Diskriminator:** ikatan tioester KoA berenergi tinggi → dipakai langsung membuat GTP.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: suksinil-KoA sebagian terkonversi menjadi energi kelas tinggi berupa GTP atau ATP (fosforilasi tingkat substrat oleh suksinat tiokinase).",
  "diskriminator": "ikatan tioester KoA berenergi tinggi → dipakai langsung membuat GTP."
 },
 {
  "n": 44,
  "modul": "Biokimia · Siklus Krebs",
  "q": "FADH2 dalam siklus Krebs dihasilkan oleh enzim…",
  "opsi": [
   "Malat dehidrogenase",
   "Alfa-ketoglutarat dehidrogenase",
   "Isositrat dehidrogenase",
   "Suksinat dehidrogenase",
   "Sitrat sintase"
  ],
  "kunciIndex": 3,
  "kunci": "Suksinat dehidrogenase",
  "rationale": "Slide: suksinat dehidrogenase menghasilkan FADH2. **Catatan:** slide menulis suksinat diubah langsung menjadi malat; sebenarnya suksinat → fumarat (FADH2), lalu fumarase mengubah fumarat → malat. Bagan siklus di slide yang sama memang memuat fumarat dan fumarase.  —  **Diskriminator:** satu-satunya FADH2 di siklus = suksinat DH (juga satu-satunya enzim Krebs yang menempel di membran dalam).",
  "grup": "Siklus Krebs",
  "bahas": "Slide: suksinat dehidrogenase menghasilkan FADH2. **Catatan:** slide menulis suksinat diubah langsung menjadi malat; sebenarnya suksinat → fumarat (FADH2), lalu fumarase mengubah fumarat → malat. Bagan siklus di slide yang sama memang memuat fumarat dan fumarase.",
  "diskriminator": "satu-satunya FADH2 di siklus = suksinat DH (juga satu-satunya enzim Krebs yang menempel di membran dalam)."
 },
 {
  "n": 45,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Malat dehidrogenase mengubah malat menjadi oksaloasetat dengan menghasilkan…",
  "opsi": [
   "GTP",
   "CO2",
   "ATP langsung",
   "NADH",
   "FADH2"
  ],
  "kunciIndex": 3,
  "kunci": "NADH",
  "rationale": "Slide: malat → oksaloasetat oleh malat dehidrogenase menghasilkan NADH.  —  **Diskriminator:** tiga NADH: isositrat DH, α-KG DH, malat DH.",
  "grup": "Siklus Krebs",
  "bahas": "Slide: malat → oksaloasetat oleh malat dehidrogenase menghasilkan NADH.",
  "diskriminator": "tiga NADH: isositrat DH, α-KG DH, malat DH."
 },
 {
  "n": 46,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Dalam satu putaran siklus Krebs dihasilkan…",
  "opsi": [
   "4 NADH dan 2 CO2 tanpa FADH2",
   "3 NADH, 1 FADH2, dan 1 GTP/ATP",
   "2 NADH, 2 FADH2, 2 GTP",
   "1 NADH, 1 FADH2, 3 GTP",
   "3 NADH, 3 FADH2, 1 GTP"
  ],
  "kunciIndex": 1,
  "kunci": "3 NADH, 1 FADH2, dan 1 GTP/ATP",
  "rationale": "Hitung dari slide: NADH di isositrat DH, α-KG DH, malat DH (3); FADH2 di suksinat DH (1); GTP/ATP dari suksinil-KoA (1). **Catatan silang:** slide aslab Teori Karbohidrat menulis 2 ATP, 6 NADH, 2 FADH2, 4 CO2 sebagai hasil 'satu putaran'; angka itu sebenarnya untuk satu glukosa (dua putaran). Kunci di sini memakai per putaran.  —  **Diskriminator:** hitung dari enzimnya, jangan dihafal angka.",
  "grup": "Siklus Krebs",
  "bahas": "Hitung dari slide: NADH di isositrat DH, α-KG DH, malat DH (3); FADH2 di suksinat DH (1); GTP/ATP dari suksinil-KoA (1). **Catatan silang:** slide aslab Teori Karbohidrat menulis 2 ATP, 6 NADH, 2 FADH2, 4 CO2 sebagai hasil 'satu putaran'; angka itu sebenarnya untuk satu glukosa (dua putaran). Kunci di sini memakai per putaran.",
  "diskriminator": "hitung dari enzimnya, jangan dihafal angka."
 },
 {
  "n": 47,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Nasib oksaloasetat di akhir satu putaran siklus Krebs adalah…",
  "opsi": [
   "Diekspor ke sitoplasma sebagai produk akhir",
   "Direduksi menjadi laktat oleh LDH",
   "Diubah kembali menjadi asetil-KoA untuk putaran berikut",
   "Berkondensasi dengan asetil-KoA baru membentuk sitrat",
   "Dioksidasi menjadi dua CO2 di matriks"
  ],
  "kunciIndex": 3,
  "kunci": "Berkondensasi dengan asetil-KoA baru membentuk sitrat",
  "rationale": "Oksaloasetat + asetil-KoA → sitrat (sitrat sintase), sehingga siklus berputar lagi. **Catatan:** slide menulis oksaloasetat 'kembali terkonversi menjadi asetil KoA' — itu keliru; oksaloasetat adalah penerima asetil-KoA, bukan diubah menjadi asetil-KoA.  —  **Diskriminator:** siklus = oksaloasetat dipakai lalu dibentuk kembali; yang habis hanya gugus asetil.",
  "grup": "Siklus Krebs",
  "bahas": "Oksaloasetat + asetil-KoA → sitrat (sitrat sintase), sehingga siklus berputar lagi. **Catatan:** slide menulis oksaloasetat 'kembali terkonversi menjadi asetil KoA' — itu keliru; oksaloasetat adalah penerima asetil-KoA, bukan diubah menjadi asetil-KoA.",
  "diskriminator": "siklus = oksaloasetat dipakai lalu dibentuk kembali; yang habis hanya gugus asetil."
 },
 {
  "n": 48,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Kalimat 'memenuhi kebutuhan glukosa bila KH tak cukup dalam makanan; organ utama hati & ginjal' pada slide Krebs sebenarnya merupakan fungsi…",
  "opsi": [
   "Glikogenesis",
   "Fosforilasi oksidatif",
   "Glukoneogenesis",
   "Glikolisis",
   "Siklus Krebs"
  ],
  "kunciIndex": 2,
  "kunci": "Glukoneogenesis",
  "rationale": "**Catatan:** kalimat itu muncul di slide 'yang mengganggu' siklus Krebs, tetapi isinya cocok dengan glukoneogenesis (tabel slide glukoneogenesis: hati dan ginjal). Siklus Krebs berlangsung di semua sel bermitokondria, bukan hanya hati dan ginjal.  —  **Diskriminator:** memenuhi glukosa saat KH kurang + hati & ginjal = glukoneogenesis.",
  "grup": "Siklus Krebs",
  "bahas": "**Catatan:** kalimat itu muncul di slide 'yang mengganggu' siklus Krebs, tetapi isinya cocok dengan glukoneogenesis (tabel slide glukoneogenesis: hati dan ginjal). Siklus Krebs berlangsung di semua sel bermitokondria, bukan hanya hati dan ginjal.",
  "diskriminator": "memenuhi glukosa saat KH kurang + hati & ginjal = glukoneogenesis."
 },
 {
  "n": 49,
  "modul": "Biokimia · Siklus Krebs",
  "q": "Dari daftar slide, enzim siklus Krebs yang disebut berada khusus di dalam mitokondria adalah…",
  "opsi": [
   "Sitrat sintase dan akonitase",
   "Heksokinase dan piruvat kinase",
   "Alfa-ketoglutarat dehidrogenase dan suksinat dehidrogenase",
   "Laktat dehidrogenase dan malat dehidrogenase",
   "Isositrat dehidrogenase dan fumarase"
  ],
  "kunciIndex": 2,
  "kunci": "Alfa-ketoglutarat dehidrogenase dan suksinat dehidrogenase",
  "rationale": "Slide 'yang membantu': enzim a. di luar & di dalam mitokondria; b. di dalam mitokondria (2 enzim): α-ketoglutarat dehidrogenase dan suksinat dehidrogenase.  —  **Diskriminator:** heksokinase, piruvat kinase, LDH = enzim glikolisis sitoplasma, bukan Krebs.",
  "grup": "Siklus Krebs",
  "bahas": "Slide 'yang membantu': enzim a. di luar & di dalam mitokondria; b. di dalam mitokondria (2 enzim): α-ketoglutarat dehidrogenase dan suksinat dehidrogenase.",
  "diskriminator": "heksokinase, piruvat kinase, LDH = enzim glikolisis sitoplasma, bukan Krebs."
 },
 {
  "n": 50,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Nilai glukosa darah puasa (GDP) normal menurut slide adalah…",
  "opsi": [
   "126–200 mg/dL",
   "< 170 mg/dL",
   "40–60 mg/dL",
   "60–110 mg/dL",
   "< 200 mg/dL"
  ],
  "kunciIndex": 3,
  "kunci": "60–110 mg/dL",
  "rationale": "Slide Gula Darah: GDP normal 60–110; GD 2 jam PP < 170; HbA1c < 6,5 (idealnya < 5,7). **Catatan:** pedoman yang umum dipakai menetapkan GDP normal sekitar 70–99 mg/dL; untuk ujian dosen ini dipakai angka slide.  —  **Diskriminator:** puasa = angka paling rendah; 170 milik 2 jam PP.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide Gula Darah: GDP normal 60–110; GD 2 jam PP < 170; HbA1c < 6,5 (idealnya < 5,7). **Catatan:** pedoman yang umum dipakai menetapkan GDP normal sekitar 70–99 mg/dL; untuk ujian dosen ini dipakai angka slide.",
  "diskriminator": "puasa = angka paling rendah; 170 milik 2 jam PP."
 },
 {
  "n": 51,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Batas glukosa darah 2 jam post prandial menurut slide adalah…",
  "opsi": [
   "< 126 mg/dL",
   "< 6,5 mg/dL",
   "< 170 mg/dL",
   "< 250 mg/dL",
   "< 110 mg/dL (sama dengan GDP)"
  ],
  "kunciIndex": 2,
  "kunci": "< 170 mg/dL",
  "rationale": "Slide: GD 2 jam PP < 170. **Catatan:** banyak rujukan klinis memakai < 140 mg/dL sebagai normal; angka slide berbeda.  —  **Diskriminator:** PP (setelah makan) pasti lebih tinggi dari puasa.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: GD 2 jam PP < 170. **Catatan:** banyak rujukan klinis memakai < 140 mg/dL sebagai normal; angka slide berbeda.",
  "diskriminator": "PP (setelah makan) pasti lebih tinggi dari puasa."
 },
 {
  "n": 52,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Batas HbA1c menurut slide adalah…",
  "opsi": [
   "< 7,5 %, ideal < 6,5 %",
   "< 8 %, ideal < 7 %",
   "< 110 mg/dL, ideal < 100",
   "< 5,7 %, ideal < 4 %",
   "< 6,5 %, ideal < 5,7 %"
  ],
  "kunciIndex": 4,
  "kunci": "< 6,5 %, ideal < 5,7 %",
  "rationale": "Slide: HbA1c < 6,5 (idealnya < 5,7). HbA1c dinyatakan dalam persen hemoglobin terglikasi.  —  **Diskriminator:** HbA1c satuannya %, bukan mg/dL → angka kecil.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: HbA1c < 6,5 (idealnya < 5,7). HbA1c dinyatakan dalam persen hemoglobin terglikasi.",
  "diskriminator": "HbA1c satuannya %, bukan mg/dL → angka kecil."
 },
 {
  "n": 53,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Metode monitoring glukosa darah yang disebut slide dilakukan dengan cara…",
  "opsi": [
   "Cairan interstisial diambil dengan jarum mikro",
   "Skinpuncture, darah kapiler diteteskan pada stik glukometer",
   "Darah arteri diperiksa dengan analisis gas darah",
   "Pungsi vena, darah disentrifugasi lalu diperiksa",
   "Urin pagi diteteskan pada stik reduksi"
  ],
  "kunciIndex": 1,
  "kunci": "Skinpuncture, darah kapiler diteteskan pada stik glukometer",
  "rationale": "Slide: monitoring blood glucose, salah satunya metode Accucheck dengan skinpuncture; darah diteteskan pada stik dan didapatkan hasil glukosa darah.  —  **Diskriminator:** glukometer = darah kapiler ujung jari.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: monitoring blood glucose, salah satunya metode Accucheck dengan skinpuncture; darah diteteskan pada stik dan didapatkan hasil glukosa darah.",
  "diskriminator": "glukometer = darah kapiler ujung jari."
 },
 {
  "n": 54,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Peran reduksi urin saat ini menurut slide adalah…",
  "opsi": [
   "Hanya konfirmator; gula darah tetap lebih penting",
   "Baku emas diagnosis DM menggantikan gula darah",
   "Pengganti HbA1c untuk kontrol jangka panjang",
   "Pemeriksaan utama untuk mendeteksi hipoglikemia",
   "Satu-satunya cara monitoring DM di rumah"
  ],
  "kunciIndex": 0,
  "kunci": "Hanya konfirmator; gula darah tetap lebih penting",
  "rationale": "Slide Gula Urin: reduksi urin saat ini hanya sebagai konfirmator [yang lebih penting tetap gula darah].  —  **Diskriminator:** glukosuria baru muncul di atas ambang ginjal → tidak peka; gula darah langsung lebih akurat.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide Gula Urin: reduksi urin saat ini hanya sebagai konfirmator [yang lebih penting tetap gula darah].",
  "diskriminator": "glukosuria baru muncul di atas ambang ginjal → tidak peka; gula darah langsung lebih akurat."
 },
 {
  "n": 55,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Hasil reduksi urin positif 4 ditandai warna…",
  "opsi": [
   "Kuning",
   "Merah bata",
   "Biru jernih",
   "Hijau",
   "Ungu"
  ],
  "kunciIndex": 1,
  "kunci": "Merah bata",
  "rationale": "Slide: positif 4 = merah bata. Benedict biru (negatif) bergeser ke hijau, kuning, jingga, merah bata seiring kadar gula pereduksi naik.  —  **Diskriminator:** makin banyak endapan Cu2O merah → makin positif.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: positif 4 = merah bata. Benedict biru (negatif) bergeser ke hijau, kuning, jingga, merah bata seiring kadar gula pereduksi naik.",
  "diskriminator": "makin banyak endapan Cu2O merah → makin positif."
 },
 {
  "n": 56,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Prinsip uji Benedict pada reduksi urin adalah…",
  "opsi": [
   "Glukosa membentuk kompleks ungu dengan biuret",
   "Glukosa dioksidasi glukosa oksidase menjadi H2O2",
   "Gula pereduksi mereduksi Cu2+ menjadi endapan Cu2O berwarna",
   "Glukosa berfluoresensi di bawah UV",
   "Glukosa mengendap oleh asam sulfat"
  ],
  "kunciIndex": 2,
  "kunci": "Gula pereduksi mereduksi Cu2+ menjadi endapan Cu2O berwarna",
  "rationale": "Benedict berisi Cu2+ (biru); dipanaskan bersama gula pereduksi → Cu2O (endapan hijau sampai merah bata). Karena itu prosedur slide wajib memanaskan.  —  **Diskriminator:** perlu PEMANASAN = reaksi reduksi tembaga (Benedict), bukan enzimatik.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Benedict berisi Cu2+ (biru); dipanaskan bersama gula pereduksi → Cu2O (endapan hijau sampai merah bata). Karena itu prosedur slide wajib memanaskan.",
  "diskriminator": "perlu PEMANASAN = reaksi reduksi tembaga (Benedict), bukan enzimatik."
 },
 {
  "n": 57,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Perbandingan reagen dan sampel pada prosedur reduksi urin di slide adalah…",
  "opsi": [
   "5 ml Benedict + 8 tetes urin (atau 2,5 ml + 4 tetes)",
   "5 ml urin + 8 tetes Benedict (atau 2,5 ml + 4 tetes)",
   "2,5 ml Benedict + 8 tetes urin, tanpa pemanasan",
   "8 ml Benedict + 5 tetes urin (atau 4 ml + 2,5 tetes)",
   "1 ml Benedict + 1 ml urin, tanpa pemanasan"
  ],
  "kunciIndex": 0,
  "kunci": "5 ml Benedict + 8 tetes urin (atau 2,5 ml + 4 tetes)",
  "rationale": "Slide: reagen Benedict 5 ml [2,5 ml], tetesi urin penderita DM 8 tetes [4 tetes], panaskan, goyang, arahkan mulut tabung ke tempat aman.  —  **Diskriminator:** reagen yang banyak (ml), sampel yang sedikit (tetes); versi kecil = setengahnya.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: reagen Benedict 5 ml [2,5 ml], tetesi urin penderita DM 8 tetes [4 tetes], panaskan, goyang, arahkan mulut tabung ke tempat aman.",
  "diskriminator": "reagen yang banyak (ml), sampel yang sedikit (tetes); versi kecil = setengahnya."
 },
 {
  "n": 58,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Pasien DM wanita 32 tahun mengeluh lemas dan gemetar (ngewel). Langkah yang ditekankan slide adalah…",
  "opsi": [
   "Langsung beri insulin karena pasien DM",
   "Periksa HbA1c untuk menilai kondisi saat ini",
   "Beri diet rendah karbohidrat lalu evaluasi besok",
   "Pastikan hipo- atau hiperglikemia dengan glukosa darah akurat",
   "Periksa reduksi urin untuk memastikan hiperglikemia"
  ],
  "kunciIndex": 3,
  "kunci": "Pastikan hipo- atau hiperglikemia dengan glukosa darah akurat",
  "rationale": "Slide Contoh Kasus: hipoglikemi atau hiperglikemi? Pastikan dengan Monitoring Blood Glucose yang akurat.  —  **Diskriminator:** gejala lemas+gemetar bisa keduanya; memberi insulin pada hipoglikemia berbahaya → ukur dulu.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide Contoh Kasus: hipoglikemi atau hiperglikemi? Pastikan dengan Monitoring Blood Glucose yang akurat.",
  "diskriminator": "gejala lemas+gemetar bisa keduanya; memberi insulin pada hipoglikemia berbahaya → ukur dulu."
 },
 {
  "n": 59,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Peran insulin pada keadaan normal menurut slide DM adalah…",
  "opsi": [
   "Memecah glikogen hati menjadi glukosa saat puasa",
   "Merangsang glukoneogenesis di hati",
   "Menghambat penyerapan glukosa di usus",
   "Memasukkan glukosa darah ke dalam sel otot",
   "Membuang glukosa berlebih melalui urin"
  ],
  "kunciIndex": 3,
  "kunci": "Memasukkan glukosa darah ke dalam sel otot",
  "rationale": "Slide DM: pada keadaan normal insulin membantu memasukkan glukosa darah ke dalam otot (lewat GLUT-4, lihat juga kuliah fisiologi).  —  **Diskriminator:** insulin = hormon 'kenyang' → glukosa masuk sel dan disimpan.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide DM: pada keadaan normal insulin membantu memasukkan glukosa darah ke dalam otot (lewat GLUT-4, lihat juga kuliah fisiologi).",
  "diskriminator": "insulin = hormon 'kenyang' → glukosa masuk sel dan disimpan."
 },
 {
  "n": 60,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "DM tipe 2 dalam slide disebut juga…",
  "opsi": [
   "NIDDM (non-insulin dependent diabetes mellitus)",
   "Diabetes insipidus tipe sentral",
   "IDDM (insulin dependent diabetes mellitus) karena butuh insulin",
   "MODY",
   "DM gestasional"
  ],
  "kunciIndex": 0,
  "kunci": "NIDDM (non-insulin dependent diabetes mellitus)",
  "rationale": "Slide: DM tipe 1 (IDDM), DM tipe 2 (NIDDM).  —  **Diskriminator:** tipe 1 = sel beta rusak → tergantung insulin (IDDM); tipe 2 = resistensi → NIDDM.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: DM tipe 1 (IDDM), DM tipe 2 (NIDDM).",
  "diskriminator": "tipe 1 = sel beta rusak → tergantung insulin (IDDM); tipe 2 = resistensi → NIDDM."
 },
 {
  "n": 61,
  "modul": "Biokimia · Gula Darah & Pemeriksaan",
  "q": "Komplikasi pada bayi dari ibu dengan DM gestasional yang disebut slide adalah…",
  "opsi": [
   "Bayi berat lahir rendah (< 2500 g)",
   "Bibir sumbing",
   "Anemia hemolitik",
   "Hipotiroid kongenital",
   "Bayi besar (makrosomia)"
  ],
  "kunciIndex": 4,
  "kunci": "Bayi besar (makrosomia)",
  "rationale": "Slide: penderita DM gestasional biasanya memiliki bayi dengan ukuran/BB lebih besar; di Solo pernah sampai 7 kg.  —  **Diskriminator:** glukosa ibu menembus plasenta → janin membuat insulin berlebih (hormon anabolik) → bayi besar.",
  "grup": "Gula Darah & Pemeriksaan",
  "bahas": "Slide: penderita DM gestasional biasanya memiliki bayi dengan ukuran/BB lebih besar; di Solo pernah sampai 7 kg.",
  "diskriminator": "glukosa ibu menembus plasenta → janin membuat insulin berlebih (hormon anabolik) → bayi besar."
 }
];
