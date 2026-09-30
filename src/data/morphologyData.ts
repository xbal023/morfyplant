export interface FieldConfig {
  id: string;
  label: string;
  placeholder?: string;
  options?: string[];
}

export interface FieldGroup {
  groupName: string;
  latinName?: string;
  fields: FieldConfig[];
}

export const GROUPS: FieldGroup[] = [
  {
    groupName: "Identitas Koleksi & Habitus",
    fields: [
      { id: "nama", label: "Nama lokal / takson / lokasi", placeholder: "mis. Mangga (Mangifera indica), halaman kampus" },
      { id: "habitus", label: "Perawakan (habitus)", options: ["pohon", "perdu (semak)", "herba", "liana (pemanjat)", "epifit", "parasit"] },
      { id: "tinggi", label: "Tinggi / dimensi tumbuhan", placeholder: "mis. ± 3–5 m atau 40 cm" },
    ],
  },
  {
    groupName: "Sistem Perakaran",
    latinName: "Radix",
    fields: [
      { id: "akar", label: "Sistem perakaran", options: ["tunggang", "serabut"] },
      { id: "akarmod", label: "Bentuk modifikasi akar", options: ["umbi akar", "akar napas", "akar tunjang", "akar gantung", "akar banir", "akar pengisap", "akar pelekat"] },
    ],
  },
  {
    groupName: "Batang & Percabangan",
    latinName: "Caulis",
    fields: [
      { id: "bkons", label: "Sifat batang", options: ["berkayu", "herba (lunak)", "basah"] },
      { id: "bbentuk", label: "Penampang melintang", options: ["bulat", "bersegi tiga", "bersegi empat", "pipih", "bersudut"] },
      { id: "barah", label: "Arah tumbuh", options: ["tegak", "menjalar", "memanjat", "rebah", "condong"] },
      { id: "bcab", label: "Sistem percabangan", options: ["monopodial", "simpodial", "menggarpu", "tidak bercabang"] },
      { id: "bperm", label: "Permukaan batang", options: ["licin", "berbulu", "berduri", "beralur", "bersisik", "bergabus"] },
      { id: "bwarna", label: "Warna kulit batang", placeholder: "mis. cokelat kelabu beralur dangkal" },
      { id: "bgetah", label: "Eksudat / getah", options: ["ada, berwarna putih", "ada, bening atau berwarna", "tidak ada"] },
      { id: "bmod", label: "Modifikasi batang", options: ["rimpang", "umbi batang", "umbi lapis", "geragih (stolon)", "kladodia", "sulur batang", "duri batang"] },
    ],
  },
  {
    groupName: "Karakteristik Daun",
    latinName: "Folium",
    fields: [
      { id: "dtipe", label: "Tipe daun", options: ["tunggal", "majemuk menyirip", "majemuk menjari", "beranak daun tiga"] },
      { id: "dtata", label: "Tata letak (filotaksis)", options: ["berseling", "berhadapan", "berkarang", "roset"] },
      { id: "dduduk", label: "Dudukan tangkai", options: ["bertangkai", "duduk (tanpa tangkai)", "memeluk batang"] },
      { id: "dpenumpu", label: "Daun penumpu (stipula)", options: ["ada", "tidak ada"] },
      { id: "dbangun", label: "Bangun helaian (circumscriptio)", options: ["bulat", "lonjong", "bulat telur", "bulat telur sungsang", "lanset", "jarum", "pita (memanjang)", "jantung", "ginjal", "segitiga", "perisai", "sudip", "belah ketupat"] },
      { id: "dtepi", label: "Tepi helaian (margo)", options: ["rata", "bergerigi", "bergigi", "beringgit", "bergelombang", "berlekuk", "bertoreh", "bercangap", "berbagi"] },
      { id: "dujung", label: "Ujung daun (apex)", options: ["runcing", "meruncing", "tumpul", "membulat", "rompang", "berlekuk", "berduri"] },
      { id: "dpangkal", label: "Pangkal daun (basis)", options: ["runcing", "tumpul", "membulat", "berlekuk", "rata", "membaji", "perisai"] },
      { id: "dtulang", label: "Pertulangan (nervatio)", options: ["menyirip", "menjari", "sejajar", "melengkung"] },
      { id: "dperm", label: "Tekstur permukaan", options: ["licin", "berbulu", "berlilin", "kasar", "berdaging", "berkerut"] },
      { id: "dwarna", label: "Warna helaian", placeholder: "mis. hijau tua mengilat di adaksial" },
      { id: "dukur", label: "Dimensi helaian", placeholder: "mis. 12–18 × 4–6 cm" },
    ],
  },
  {
    groupName: "Bunga & Perbungaan",
    latinName: "Flos",
    fields: [
      { id: "fperb", label: "Tipe perbungaan", options: ["bunga tunggal", "tandan", "bulir", "malai", "payung", "bongkol", "tongkol", "periuk"] },
      { id: "fletak", label: "Posisi bunga", options: ["di ujung batang", "di ketiak daun", "di pangkal batang"] },
      { id: "fkel", label: "Keadaan kelamin", options: ["hermafrodit (banci)", "berkelamin tunggal, berumah satu", "berkelamin tunggal, berumah dua"] },
      { id: "fsim", label: "Simetri bunga", options: ["aktinomorf (beraturan)", "zigomorf (setangkup)"] },
      { id: "fjml", label: "Perhiasan bunga (kaliks/korola)", placeholder: "mis. sepal 5 lepas, petal 5 lepas" },
      { id: "fwarna", label: "Warna mahkota", placeholder: "mis. putih kekuningan, beraroma harum" },
    ],
  },
  {
    groupName: "Buah",
    latinName: "Fructus",
    fields: [
      { id: "utipe", label: "Tipe buah", options: ["buni", "batu", "polong", "kotak", "buah padi", "agregat", "majemuk"] },
      { id: "uwarna", label: "Karakter buah masak", placeholder: "mis. kuning jingga saat masak, berdaging" },
      { id: "ujmlbiji", label: "Jumlah biji per buah", options: ["1 biji", "2–5 biji", "banyak biji (>5)"] },
    ],
  },
  {
    groupName: "Biji",
    latinName: "Semen",
    fields: [
      { id: "bjml", label: "Jumlah kotiledon", options: ["1 kotiledon (Monokotil)", "2 kotiledon (Dikotil)"] },
      { id: "btesta", label: "Kulit biji (testa)", options: ["tipis / membranosa", "keras / indurata", "berdaging / sarkotesta", "bersayap / alata", "berambut / pilosa", "berbintil / granulosa"] },
      { id: "bwrntesta", label: "Warna kulit biji", placeholder: "mis. cokelat tua mengkilap, hitam berbintik putih" },
      { id: "bhilum", label: "Hilum (pusar biji)", options: ["jelas terlihat, bulat", "jelas terlihat, memanjang", "tidak jelas / samar"] },
      { id: "bendosp", label: "Endosperma", options: ["ada, masif (biji endospermik)", "ada, tipis saja", "tidak ada (diserap kotiledon)", "berupa perisperm"] },
      { id: "bukuran", label: "Dimensi biji", placeholder: "mis. 8–12 × 6–9 mm, bentuk ginjal" },
      { id: "bkecambah", label: "Tipe perkecambahan", options: ["epigeal (kotiledon terangkat)", "hipogeal (kotiledon di dalam tanah)"] },
      { id: "bketerangan", label: "Catatan biji lainnya", placeholder: "mis. memiliki arilus jingga, biji beracun" },
    ],
  },
];

export const LB: Record<string, string> = {
  habitus: "Perawakan (habitus)",
  tinggi: "Dimensi / tinggi",
  akar: "Sistem perakaran",
  akarmod: "Modifikasi akar",
  bkons: "Sifat batang",
  bbentuk: "Penampang melintang",
  barah: "Arah tumbuh",
  bcab: "Percabangan",
  bperm: "Permukaan batang",
  bwarna: "Warna kulit batang",
  bgetah: "Eksudat getah",
  bmod: "Modifikasi batang",
  dtipe: "Tipe daun",
  dtata: "Tata letak daun",
  dduduk: "Dudukan daun",
  dpenumpu: "Daun penumpu",
  dbangun: "Bangun helaian",
  dtepi: "Tepi helaian",
  dujung: "Ujung daun",
  dpangkal: "Pangkal daun",
  dtulang: "Pertulangan daun",
  dperm: "Permukaan daun",
  dwarna: "Warna daun",
  dukur: "Dimensi helaian",
  fperb: "Perbungaan",
  fletak: "Posisi bunga",
  fkel: "Kelamin bunga",
  fsim: "Simetri bunga",
  fjml: "Perhiasan bunga",
  fwarna: "Warna mahkota",
  utipe: "Tipe buah",
  uwarna: "Karakter buah",
  ujmlbiji: "Jumlah biji per buah",
  bjml: "Jumlah kotiledon",
  btesta: "Kulit biji (testa)",
  bwrntesta: "Warna kulit biji",
  bhilum: "Hilum (pusar biji)",
  bendosp: "Endosperma",
  bukuran: "Dimensi biji",
  bkecambah: "Tipe perkecambahan",
  bketerangan: "Catatan biji",
};

export const GR: [string, string[]][] = [
  ["Habitus & Perawakan", ["habitus", "tinggi"]],
  ["Akar (Radix)", ["akar", "akarmod"]],
  ["Batang (Caulis)", ["bkons", "bbentuk", "barah", "bcab", "bperm", "bwarna", "bgetah", "bmod"]],
  ["Daun (Folium)", ["dtipe", "dtata", "dduduk", "dpenumpu", "dbangun", "dtepi", "dujung", "dpangkal", "dtulang", "dperm", "dwarna", "dukur"]],
  ["Bunga (Flos)", ["fperb", "fletak", "fkel", "fsim", "fjml", "fwarna"]],
  ["Buah (Fructus)", ["utipe", "uwarna", "ujmlbiji"]],
  ["Biji (Semen)", ["bjml", "btesta", "bwrntesta", "bhilum", "bendosp", "bukuran", "bkecambah", "bketerangan"]],
];

// SVG Icon Helpers
const S = (x: string) => `<svg viewBox="0 0 40 40" aria-hidden="true">${x}</svg>`;
const P = (d: string, c: string) => `<path class="${c}" d="${d}"/>`;
const E = (x: number, y: number, a: number, b: number, r?: number, c?: string) =>
  `<ellipse class="${c || "i"}" cx="${x}" cy="${y}" rx="${a}" ry="${b}"${r ? ` transform="rotate(${r} ${x} ${y})"` : ""}/>`;
const C = (x: number, y: number, r: number, c?: string) => `<circle class="${c || "i"}" cx="${x}" cy="${y}" r="${r}"/>`;
const R = (s: string, n: number) => s.repeat(n);

const fl = (x: number, y: number, q: number, r: number) => {
  let o = "";
  for (let k = 0; k < 5; k++) {
    const a = k * 1.2566 - 1.5708;
    o += C(x + q * Math.cos(a), y + q * Math.sin(a), r, "f");
  }
  return o + C(x, y, r * 0.6, "k");
};

const fan = (as: number[], cy: number, ry: number, py: number, rx: number) =>
  as.map((a) => `<ellipse class="i" cx="20" cy="${cy}" rx="${rx}" ry="${ry}" transform="rotate(${a} 20 ${py})"/>`).join("");

const Ml = (x: number, y: number) =>
  C(x, y + 3, 3.5, "l") + P(`M${x + 3} ${y + 1}L${x + 8} ${y - 4}M${x + 4} ${y - 4}H${x + 8}V${y}`, "l");

const Fm = (x: number, y: number) =>
  C(x, y, 3.5, "l") + P(`M${x} ${y + 3.5}V${y + 10}M${x - 3} ${y + 7}H${x + 3}`, "l");

const lob = (d: number) => {
  let q = `M2 36V${8 + d}`;
  for (let k = 0; k < 3; k++) {
    const x = 2 + 12 * k;
    q += `L${x + 2} 8L${x + 10} 8L${x + 12} ${8 + d}`;
  }
  return S(P(`${q}V36z`, "i"));
};

const LF = "M20 3C34 14 34 28 20 38C6 28 6 14 20 3z";
const SH = [
  '<circle r="20"/>',
  '<ellipse rx="14" ry="24"/>',
  '<path d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z"/>',
  '<path transform="scale(1 -1)" d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z"/>',
  '<path d="M0-26C6-14 10 0 9 8C8 18 4 22 0 26C-4 22-8 18-9 8C-10 0-6-14 0-26z"/>',
  '<path d="M0-26L2.5 26H-2.5z"/>',
  '<path d="M-4-26h8v52h-8z"/>',
  '<path d="M0-26C-30-4-24 20-10 20C-4 20 0 14 0 10C0 14 4 20 10 20C24 20 30-4 0-26z"/>',
  '<path d="M-22 8C-22-14-6-18 0-12C6-18 22-14 22 8C22 20 10 22 0 16C-10 22-22 20-22 8z"/>',
  '<path d="M0-24L22 22H-22z"/>',
  '<circle r="20"/><path d="M0 0V26" stroke="var(--stem)" stroke-width="3"/>',
  '<path d="M0-26C14-26 14-6 5 6C2 14 2 20 0 26C-2 20-2 14-5 6C-14-6-14-26 0-26z"/>',
  '<path d="M0-26L20 0L0 26L-20 0z"/>',
];

const T = [
  "M8 38L20 6L32 38z",
  "M8 38C10 22 18 20 20 4C22 20 30 22 32 38z",
  "M5 38L20 14L35 38z",
  "M8 38V22A12 12 0 0 1 32 22V38z",
  "M8 38V12H32V38z",
  "M8 38V14Q14 8 20 16Q26 8 32 14V38z",
  "M8 38V22A12 12 0 0 1 32 22V38zM18 11L20 2L22 11z",
];

const bs = (d: string) => S(P("M20 20V40", "s") + '<g transform="translate(0 40) scale(1 -1)">' + P(d, "i") + "</g>");
const B = '<rect class="t" opacity=".55" x="13" y="3" width="14" height="34" rx="3"/>';
const DR = "M20 5C26 15 30 21 30 28A10 10 0 0 1 10 28C10 21 14 15 20 5z";

export const NO = S(P("M11 11L29 29M29 11L11 29", "l"));

export const IC: Record<string, string[]> = {
  habitus: [
    S(P("M20 38V20", "s") + C(20, 14, 12)),
    S(P("M20 38V24M20 38L11 26M20 38L29 26", "s") + C(10, 21, 6) + C(20, 17, 7) + C(30, 21, 6)),
    S(P("M20 38V22", "s") + E(12, 29, 7, 3, -30) + E(28, 25, 7, 3, 30) + E(20, 17, 3.5, 7)),
    S(P("M30 2V38", "m") + P("M8 38C8 30 30 30 30 22C30 14 12 14 12 6", "sl")),
    S(P("M2 32H38", "m") + E(12, 24, 3, 8, -30) + E(28, 24, 3, 8, 30) + E(20, 22, 3, 9) + P("M16 32C14 35 12 37 12 39", "rs")),
    S(P("M2 32H38", "m") + C(20, 18, 9, "f") + P("M20 27V32", "rs")),
  ],
  akar: [
    S(P("M20 4V38M20 14L10 22M20 14L30 22M20 24L12 30M20 24L28 30", "rs")),
    S(P("M20 4C12 14 8 26 6 38M20 4C16 16 14 28 14 38M20 4C24 16 26 28 26 38M20 4C28 14 32 26 34 38", "rs")),
  ],
  akarmod: [
    S(P("M12 6H28L22 38H18z", "d")),
    S(P("M2 32H38", "m") + P("M8 32V18M15 32V12M22 32V18M29 32V10M35 32V20", "rs")),
    S(P("M20 4V16", "s") + P("M20 14C10 16 6 28 6 38M20 14C30 16 34 28 34 38M20 20V38", "rs")),
    S(P("M4 6H36", "s") + P("M10 6V32M18 6V38M26 6V30M32 6V26", "rs")),
    S(P("M16 4H24V26L36 38H4L16 26z", "d")),
    S(P("M2 28H38", "m") + P("M6 12C14 8 26 8 34 12", "sl") + P("M14 10V28M22 9V28M30 11V28", "rs")),
    S(P("M30 2V38", "m") + P("M10 38C10 26 16 16 12 4", "sl") + P("M12 32H28M12 22H28M13 12H28", "rs")),
  ],
  bkons: [
    S(C(20, 20, 15, "t") + C(20, 20, 10, "w") + C(20, 20, 5, "w")),
    S(P("M20 38V8", "sl") + E(28, 14, 7, 3, -25)),
    S('<rect class="i" x="12" y="4" width="16" height="34" rx="6"/>'),
  ],
  bbentuk: [
    S(C(20, 20, 15, "t")),
    S(P("M20 5L36 34H4z", "t")),
    S('<rect class="t" x="6" y="6" width="28" height="28"/>'),
    S(E(20, 20, 17, 7, 0, "t")),
    S(P("M20 4L34 12V28L20 36L6 28V12z", "t")),
  ],
  barah: [
    S(P("M20 38V4", "s") + P("M6 38H34", "l")),
    S(P("M4 30C14 28 26 28 36 30", "s") + P("M10 30V36M20 29V36M30 30V36", "rs")),
    S(P("M30 2V38", "m") + P("M10 38C10 30 30 30 30 24C30 18 10 18 10 12", "sl")),
    S(P("M4 34H16C30 34 32 24 32 4", "s")),
    S(P("M8 38L30 4", "s") + P("M4 38H36", "l")),
  ],
  bcab: [
    S(P("M20 38V4M20 12L11 18M20 20L29 26M20 28L11 34", "s")),
    S(P("M20 38V24L11 14L13 4M20 24L29 16L30 4", "s")),
    S(P("M20 38V26M20 26L10 14M20 26L30 14M10 14L5 6M10 14L15 6M30 14L25 6M30 14L35 6", "s")),
    S(P("M20 38V14", "s") + E(12, 10, 3.5, 8, -30) + E(28, 10, 3.5, 8, 30) + E(20, 8, 3.5, 8)),
  ],
  bperm: [
    S(B),
    S(B + P("M13 8L8 6M13 16L8 15M13 24L8 25M13 32L8 34M27 8L32 6M27 16L32 15M27 24L32 25M27 32L32 34", "l")),
    S(B + P("M13 8L5 10L13 14zM27 20L35 22L27 26zM13 28L5 30L13 34z", "k")),
    S(B + P("M17 3V37M20 3V37M23 3V37", "w")),
    S(B + P("M14 9Q20 15 26 9M14 19Q20 25 26 19M14 29Q20 35 26 29", "w")),
    S(B + C(17, 10, 1.5, "k") + C(23, 18, 1.5, "k") + C(17, 26, 1.5, "k") + C(23, 33, 1.5, "k")),
  ],
  bgetah: [
    S(P(DR, "dw")),
    S(P(DR, "f")),
    S(C(20, 20, 14, "l") + P("M10 30L30 10", "l")),
  ],
  bmod: [
    S(P("M5 26H35", "s6") + P("M14 22V30M25 22V30", "w") + P("M10 26V12M32 26V10", "sl") + P("M20 30V38M34 30V37", "rs")),
    S(E(20, 22, 15, 10, -20, "t") + C(14, 22, 1.6, "k") + C(22, 18, 1.6, "k") + C(26, 26, 1.6, "k")),
    S(P("M20 4C20 10 12 14 10 24C8 34 14 38 20 38C26 38 32 34 30 24C28 14 20 10 20 4z", "t") + P("M20 8C16 16 14 30 20 38M20 8C24 16 26 30 20 38", "w")),
    S(E(8, 26, 3, 7, -10) + E(32, 26, 3, 7, 10) + E(14, 26, 3, 6, 25) + E(26, 26, 3, 6, -25) + P("M8 34C16 38 24 38 32 34", "s")),
    S(E(20, 21, 11, 16) + P("M14 12l-3-2M26 12l3-2M12 22l-4 0M28 22l4 0M20 8V4M15 30l-3 3M25 30l3 3", "l")),
    S(P("M20 38V30C10 30 10 20 20 20C30 20 30 10 20 10C14 10 14 16 18 16", "s")),
    S(P("M20 2V38", "s") + P("M20 10L32 6L20 14zM20 22L8 18L20 26zM20 32L32 30L20 36z", "k")),
  ],
  dtipe: [
    S(P("M20 38V26", "s") + P("M20 26C32 20 32 10 20 3C8 10 8 20 20 26z", "i")),
    S(P("M20 38V6", "s") + E(11, 30, 7, 3, -30) + E(29, 30, 7, 3, 30) + E(11, 20, 7, 3, -30) + E(29, 20, 7, 3, 30) + E(20, 8, 3.5, 6)),
    S(P("M20 38V32", "s") + fan([-60, -30, 0, 30, 60], 22, 10, 32, 3.6)),
    S(P("M20 38V32", "s") + fan([-45, 0, 45], 22, 10, 32, 3.8)),
  ],
  dtata: [
    S(P("M20 4V38", "s") + E(11, 30, 8, 3.4, -25) + E(29, 20, 8, 3.4, 25) + E(11, 10, 8, 3.4, -25)),
    S(P("M20 4V38", "s") + E(11, 30, 8, 3.4, -25) + E(29, 30, 8, 3.4, 25) + E(11, 14, 8, 3.4, -25) + E(29, 14, 8, 3.4, 25)),
    S(P("M20 4V38", "s") + E(10, 32, 8, 3.2, -15) + E(30, 32, 8, 3.2, 15) + E(20, 27, 3, 6) + E(10, 14, 8, 3.2, -15) + E(30, 14, 8, 3.2, 15) + E(20, 9, 3, 5)),
    S(fan([-70, -35, 0, 35, 70], 25, 11, 35, 3.6)),
  ],
  dduduk: [
    S(P("M8 4V38", "s") + P("M8 26H16", "s") + E(28, 26, 12, 5)),
    S(P("M8 4V38", "s") + E(21, 26, 13, 5)),
    S(P("M20 4V38", "s") + E(11, 26, 9, 5) + E(29, 26, 9, 5)),
  ],
  dpenumpu: [
    S(P("M12 4V38", "s") + P("M12 30L26 22", "s") + E(31, 20, 8, 4, -30) + P("M12 30L5 23L12 24z", "i") + P("M12 30L19 23L12 24z", "i")),
    S(P("M12 4V38", "s") + P("M12 30L26 22", "s") + E(31, 20, 8, 4, -30)),
  ],
  dbangun: SH.map((x) => S(`<g class="i" transform="translate(20 20) scale(.72)">${x}</g>`)),
  dtepi: [
    S(P("M2 22H38", "s")),
    S(P("M2 28" + R("l6-9v9", 6), "s")),
    S(P("M2 28" + R("l3-9l3 9", 6), "s")),
    S(P("M2 26" + R("a3 3 0 0 1 6 0", 6), "s")),
    S(P("M2 22" + R("q3-9 6 0t6 0", 3), "s")),
    lob(6),
    lob(12),
    lob(18),
    lob(24),
  ],
  dujung: T.map((d) => S(P(d, "i"))),
  dpangkal: [0, 2, 3, 5, 4, 1].map((k) => bs(T[k])).concat([S(C(20, 17, 14) + P("M20 17V40", "s") + C(20, 17, 2, "fw"))]),
  dtulang: [
    S(P(LF, "i") + P("M20 38V4M20 30L11 24M20 30L29 24M20 22L12 16M20 22L28 16M20 14L15 10M20 14L25 10", "w")),
    S(P(LF, "i") + P("M20 38V6M20 38L11 16M20 38L29 16M20 38L9 26M20 38L31 26", "w")),
    S(P(LF, "i") + P("M20 36V6M15 34V12M25 34V12M11 30V17M29 30V17", "w")),
    S(P(LF, "i") + P("M20 36V6M20 34C12 28 12 16 16 9M20 34C28 28 28 16 24 9", "w")),
  ],
  dperm: [
    S(P(LF, "i")),
    S(P(LF, "i") + P("M9 14L5 12M8 22L4 22M11 30L7 33M31 14L35 12M32 22L36 22M29 30L33 33", "l")),
    S(P(LF, "i") + P("M15 12C13 18 13 24 16 30", "w")),
    S(P(LF, "i") + C(17, 16, 1.2, "k") + C(23, 14, 1.2, "k") + C(20, 22, 1.2, "k") + C(15, 27, 1.2, "k") + C(25, 27, 1.2, "k")),
    S(E(20, 21, 12, 16) + P("M20 8V34", "w")),
    S(P(LF, "i") + P("M13 14Q20 18 27 14M11 22Q20 27 29 22M13 30Q20 34 27 30", "w")),
  ],
  fperb: [
    S(fl(20, 20, 8, 5.5)),
    S(P("M20 38V4", "s") + P("M20 32H9M20 24H31M20 16H9M20 8H31", "s") + C(9, 32, 3.2, "f") + C(31, 24, 3.2, "f") + C(9, 16, 3.2, "f") + C(31, 8, 3.2, "f") + C(20, 4, 3.2, "f")),
    S(P("M20 38V6", "s") + C(15, 32, 3.3, "f") + C(25, 26, 3.3, "f") + C(15, 20, 3.3, "f") + C(25, 14, 3.3, "f") + C(15, 9, 3.3, "f")),
    S(P("M20 38V8", "s") + P("M20 30L8 22M20 30L32 22M20 20L10 12M20 20L30 12", "s") + C(8, 22, 3, "f") + C(32, 22, 3, "f") + C(10, 12, 3, "f") + C(30, 12, 3, "f") + C(20, 6, 3, "f")),
    S(P("M20 38V30", "s") + P("M20 30L6 14M20 30L13 9M20 30V7M20 30L27 9M20 30L34 14", "s") + C(6, 14, 3.3, "f") + C(13, 9, 3.3, "f") + C(20, 7, 3.3, "f") + C(27, 9, 3.3, "f") + C(34, 14, 3.3, "f")),
    S(C(20, 20, 15, "f") + C(20, 20, 1.8, "fw") + C(14, 16, 1.8, "fw") + C(26, 16, 1.8, "fw") + C(14, 25, 1.8, "fw") + C(26, 25, 1.8, "fw") + C(20, 11, 1.8, "fw") + C(20, 29, 1.8, "fw")),
    S(P("M20 38V32", "s") + P("M10 34C10 20 16 12 20 6C24 12 30 20 30 34z", "i") + '<rect class="f" x="17" y="14" width="6" height="18" rx="2"/>'),
    S(P("M20 36C8 36 6 22 12 14C16 8 24 8 28 14C34 22 32 36 20 36z", "f") + C(20, 10, 2, "k") + P("M14 20C18 24 22 24 26 20", "w")),
  ],
  fletak: [
    S(P("M20 38V16", "s") + fl(20, 11, 4.5, 3.2)),
    S(P("M20 38V6", "s") + E(10, 20, 8, 3.4, -30) + C(22, 22, 3.4, "f")),
    S(P("M6 38H34", "l") + P("M20 30V10", "s") + E(13, 16, 6, 3, -30) + E(27, 16, 6, 3, 30) + fl(20, 33, 4, 2.8)),
  ],
  fkel: [
    S(fl(20, 20, 9, 6) + C(20, 20, 3.5, "i")),
    S(P("M20 38V22M20 22L9 14M20 22L31 14", "s") + Ml(5, 13) + Fm(30, 9)),
    S(P("M10 38V26M30 38V26", "s") + Ml(5, 20) + Fm(30, 15)),
  ],
  fsim: [
    S(fl(20, 20, 9, 6) + P("M20 2V38M2 20H38", "ds")),
    S(E(20, 11, 8, 7, 0, "f") + E(10, 24, 5, 6, -20, "f") + E(30, 24, 5, 6, 20, "f") + E(20, 32, 5, 4, 0, "f") + P("M20 2V38", "ds")),
  ],
  utipe: [
    S(C(20, 20, 14, "f") + C(15, 18, 1.8, "k") + C(23, 16, 1.8, "k") + C(21, 25, 1.8, "k") + C(14, 26, 1.8, "k")),
    S(C(20, 20, 15, "f") + E(20, 21, 6, 8, 0, "t")),
    S(E(20, 20, 17, 6, -30) + C(15, 23, 2, "k") + C(20, 20, 2, "k") + C(25, 17, 2, "k")),
    S(P("M10 16H30V36H10z", "t") + P("M13 16L8 6M20 16V4M27 16L32 6", "s") + C(16, 26, 1.6, "k") + C(24, 26, 1.6, "k")),
    S(E(20, 22, 5, 12, 0, "t") + P("M20 10V2", "s")),
    S(C(14, 14, 4.5, "f") + C(26, 14, 4.5, "f") + C(20, 22, 4.5, "f") + C(11, 24, 4.5, "f") + C(29, 24, 4.5, "f") + C(16, 31, 4.5, "f") + C(24, 31, 4.5, "f")),
    S(E(20, 22, 12, 16, 0, "t") + P("M10 16L30 28M10 24L30 12M8 22L32 22M15 8L25 36M25 8L15 36", "w")),
  ],
  ujmlbiji: [
    S(E(20, 20, 10, 13, 0, "t")),
    S(E(14, 20, 8, 11, 0, "t") + E(26, 20, 8, 11, 0, "t")),
    S(E(12, 20, 7, 10, 0, "t") + E(20, 20, 7, 10, 0, "t") + E(28, 20, 7, 10, 0, "t")),
  ],
  bjml: [
    // 1 kotiledon
    S(E(20, 22, 12, 16, 0, "i") + E(20, 14, 10, 7, 0, "f") + P("M20 38V30", "s")),
    // 2 kotiledon
    S(E(20, 22, 12, 16, 0, "i") + E(13, 14, 8, 6, -15, "f") + E(27, 14, 8, 6, 15, "f") + P("M20 38V30", "s")),
  ],
  btesta: [
    // tipis / membranosa
    S(E(20, 20, 14, 17, 0, "i") + E(20, 20, 13, 16, 0, "f")),
    // keras
    S(E(20, 20, 14, 17, 0, "t") + E(20, 20, 10, 13, 0, "i")),
    // berdaging / sarkotesta
    S(E(20, 20, 14, 17, 0, "f") + E(20, 20, 9, 12, 0, "i") + C(20, 20, 5, "k")),
    // bersayap
    S(E(20, 22, 8, 12, 0, "i") + P("M12 10L2 4M28 10L38 4", "f")),
    // berambut
    S(E(20, 22, 11, 15, 0, "i") + P("M9 12L4 6M14 8L11 2M20 7V1M26 8L29 2M31 12L36 6", "l")),
    // berbintil
    S(E(20, 22, 11, 15, 0, "i") + C(11, 14, 2, "k") + C(18, 10, 2, "k") + C(26, 12, 2, "k") + C(30, 19, 2, "k") + C(28, 28, 2, "k") + C(15, 30, 2, "k")),
  ],
  bhilum: [
    // jelas, bulat
    S(E(20, 22, 12, 16, 0, "i") + C(8, 22, 4, "f")),
    // jelas, memanjang
    S(E(20, 22, 12, 16, 0, "i") + E(7, 22, 2.5, 7, 0, "f")),
    // tidak jelas
    S(E(20, 22, 12, 16, 0, "i") + C(8, 22, 3, "l")),
  ],
  bendosp: [
    // ada, masif
    S(E(20, 22, 12, 16, 0, "f") + E(20, 22, 5, 8, 0, "i")),
    // ada, tipis
    S(E(20, 22, 12, 16, 0, "i") + E(20, 22, 10, 14, 0, "f")),
    // tidak ada
    S(E(20, 22, 12, 16, 0, "i") + E(12, 14, 6, 9, -15, "f") + E(28, 14, 6, 9, 15, "f")),
    // perisperm
    S(E(20, 22, 12, 16, 0, "i") + E(20, 22, 9, 12, 0, "f") + E(20, 22, 5, 7, 0, "k")),
  ],
  bkecambah: [
    // epigeal
    S(P("M4 28H36", "l") + P("M20 28V12", "s") + E(13, 18, 6, 4, -25, "f") + E(27, 18, 6, 4, 25, "f") + P("M20 12V6", "s") + E(15, 8, 5, 3, -20, "i") + E(25, 8, 5, 3, 20, "i")),
    // hipogeal
    S(P("M4 18H36", "l") + E(13, 24, 6, 4, -25, "f") + E(27, 24, 6, 4, 25, "f") + P("M20 18V8", "s") + E(15, 12, 5, 3, -20, "i") + E(25, 12, 5, 3, 20, "i")),
  ],
};

export type OutputMode = "dua" | "analitik" | "diagnostik" | "naratif";

export interface DescriptionResult {
  text: string;
  hintText: string | null;
  hasAnyInput: boolean;
}

export function generateDescription(
  values: Record<string, string>,
  mode: OutputMode
): DescriptionResult {
  const v = (id: string) => (values[id] || "").trim();

  const name = v("nama");
  const taxonHeader = name ? `Spesimen: ${name}` : "Spesimen Pengamatan Morfologi";

  const hasAny = GR.some((g) => g[1].some((id) => v(id)));

  let dScore = 0;
  let mScore = 0;
  const traitsList: string[] = [];

  if (v("akar") === "tunggang") {
    dScore += 2;
    traitsList.push("perakaran tunggang (radix primaria)");
  } else if (v("akar") === "serabut") {
    mScore += 2;
    traitsList.push("perakaran serabut (radix adventicia)");
  }

  if (/menyirip|menjari/.test(v("dtulang"))) {
    dScore += 2;
    traitsList.push(`pertulangan daun ${v("dtulang")} (${v("dtulang") === "menyirip" ? "penninervis" : "palminervis"})`);
  } else if (/sejajar|melengkung/.test(v("dtulang"))) {
    mScore += 2;
    traitsList.push(`pertulangan daun ${v("dtulang")} (${v("dtulang") === "sejajar" ? "rectinervis" : "curvinervis"})`);
  }

  const dugaanTakson =
    dScore > mScore
      ? "Magnoliopsida (Dikotil / Tumbuhan Berkeping Dua)"
      : mScore > dScore
      ? "Liliopsida (Monokotil / Tumbuhan Berkeping Tunggal)"
      : dScore > 0
      ? "Perlu konfirmasi lanjutan (kombinasi ciri perakaran dan pertulangan tidak lazim)"
      : "";

  /* ----------------------------------------------------
     1. FORMAT FLORA / PROSA TAKSONOMIS (Naratif)
     ---------------------------------------------------- */
  const naratifParts: string[] = [];

  // Habitus
  const habList: string[] = [];
  if (v("habitus")) habList.push(`berupa ${v("habitus")}`);
  if (v("tinggi")) habList.push(`tinggi mencapai ${v("tinggi")}`);
  if (habList.length) {
    naratifParts.push(`Habitus ${habList.join(", ")}.`);
  }

  // Akar
  const rootList: string[] = [];
  if (v("akar")) rootList.push(`sistem perakaran ${v("akar")}`);
  if (v("akarmod")) rootList.push(`bermodifikasi membentuk ${v("akarmod")}`);
  if (rootList.length) {
    naratifParts.push(`Akar memiliki ${rootList.join("; ")}.`);
  }

  // Batang
  const stemList: string[] = [];
  if (v("bkons")) stemList.push(`bersifat ${v("bkons")}`);
  if (v("bbentuk")) stemList.push(`penampang melintang ${v("bbentuk")}`);
  if (v("barah")) stemList.push(`tumbuh ${v("barah")}`);
  if (v("bcab")) stemList.push(`pola percabangan ${v("bcab")}`);
  if (v("bperm")) stemList.push(`permukaan ${v("bperm")}`);
  if (v("bwarna")) stemList.push(`warna ${v("bwarna")}`);
  if (v("bgetah") && v("bgetah") !== "tidak ada") stemList.push(`mengeluarkan getah ${v("bgetah").replace(/^ada,? ?/, "")}`);
  if (v("bmod")) stemList.push(`membentuk modifikasi ${v("bmod")}`);
  if (stemList.length) {
    naratifParts.push(`Batang ${stemList.join(", ")}.`);
  }

  // Daun
  const leafList: string[] = [];
  if (v("dtipe")) leafList.push(`daun ${v("dtipe")}`);
  if (v("dtata")) leafList.push(`duduk ${v("dtata")}`);
  if (v("dduduk")) leafList.push(v("dduduk"));
  if (v("dpenumpu") === "ada") leafList.push("dilengkapi daun penumpu");

  const leafLamina: string[] = [];
  if (v("dbangun")) leafLamina.push(`bangun ${v("dbangun")}`);
  if (v("dujung")) leafLamina.push(`ujung ${v("dujung")}`);
  if (v("dpangkal")) leafLamina.push(`pangkal ${v("dpangkal")}`);
  if (v("dtepi")) leafLamina.push(`tepi ${v("dtepi")}`);
  if (v("dtulang")) leafLamina.push(`pertulangan ${v("dtulang")}`);
  if (v("dperm")) leafLamina.push(`permukaan ${v("dperm")}`);
  if (v("dwarna")) leafLamina.push(`warna ${v("dwarna")}`);
  if (v("dukur")) leafLamina.push(`ukuran helaian ${v("dukur")}`);

  if (leafList.length || leafLamina.length) {
    const fullLeaf = [
      leafList.length ? leafList.join(", ") : "",
      leafLamina.length ? `helaian ${leafLamina.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("; ");
    naratifParts.push(`Daun: ${fullLeaf}.`);
  }

  // Bunga
  const flosList: string[] = [];
  if (v("fperb")) flosList.push(`tipe ${v("fperb")}`);
  if (v("fletak")) flosList.push(`posisi ${v("fletak")}`);
  if (v("fkel")) flosList.push(v("fkel"));
  if (v("fsim")) flosList.push(`simetri ${v("fsim")}`);
  if (v("fjml")) flosList.push(v("fjml"));
  if (v("fwarna")) flosList.push(`warna ${v("fwarna")}`);
  if (flosList.length) {
    naratifParts.push(`Perbungaan & bunga: ${flosList.join(", ")}.`);
  }

  // Buah
  const fruitList: string[] = [];
  if (v("utipe")) fruitList.push(`tipe buah ${v("utipe")}`);
  if (v("uwarna")) fruitList.push(v("uwarna"));
  if (v("ujmlbiji")) fruitList.push(`mengandung ${v("ujmlbiji")}`);
  if (fruitList.length) {
    naratifParts.push(`Buah: ${fruitList.join("; ")}.`);
  }

  // Biji
  const seedList: string[] = [];
  if (v("bjml")) seedList.push(v("bjml"));
  if (v("btesta")) seedList.push(`kulit biji ${v("btesta")}`);
  if (v("bwrntesta")) seedList.push(`warna testa ${v("bwrntesta")}`);
  if (v("bhilum")) seedList.push(`hilum ${v("bhilum")}`);
  if (v("bendosp")) seedList.push(`endosperma ${v("bendosp")}`);
  if (v("bukuran")) seedList.push(`ukuran ${v("bukuran")}`);
  if (v("bkecambah")) seedList.push(`perkecambahan ${v("bkecambah")}`);
  if (v("bketerangan")) seedList.push(v("bketerangan"));
  if (seedList.length) {
    naratifParts.push(`Biji: ${seedList.join("; ")}.`);
  }

  const Nt = `${taxonHeader}\n${"=".repeat(taxonHeader.length)}\n\n${naratifParts.join("\n\n")}`;

  /* ----------------------------------------------------
     2. FORMAT DIAGNOSTIK (Karakter Kunci Lapangan)
     ---------------------------------------------------- */
  const DgItems: string[] = [];
  if (dugaanTakson) {
    DgItems.push(`Takson Terduga : ${dugaanTakson}`);
    if (traitsList.length) {
      DgItems.push(`Karakter Bukti : ${traitsList.join("; ")}.`);
    }
  }

  const keyCharacters: string[] = [];
  if (v("habitus") || v("tinggi")) {
    keyCharacters.push(`Habitus ${v("habitus") || "tumbuhan"}${v("tinggi") ? ` (tinggi ± ${v("tinggi")})` : ""}`);
  }
  if (v("akar") || v("akarmod")) {
    keyCharacters.push(`Perakaran ${[v("akar") && `sistem ${v("akar")}`, v("akarmod") && `modifikasi ${v("akarmod")}`].filter(Boolean).join(", ")}`);
  }
  if (v("bkons") || v("bmod") || v("bperm") === "berduri" || (v("bgetah") && v("bgetah") !== "tidak ada")) {
    const bChar = [
      v("bkons") && `batang ${v("bkons")}`,
      v("bmod") && `modifikasi ${v("bmod")}`,
      v("bperm") === "berduri" && "batang berduri",
      v("bgetah") && v("bgetah") !== "tidak ada" && `getah ${v("bgetah").replace(/^ada,? ?/, "")}`,
    ].filter(Boolean);
    keyCharacters.push(bChar.join("; "));
  }
  if (v("dtipe") || v("dtata") || v("dbangun") || v("dtulang") || v("dtepi")) {
    const dChar = [
      v("dtipe") && `daun ${v("dtipe")}`,
      v("dtata") && `duduk ${v("dtata")}`,
      v("dbangun") && `bangun ${v("dbangun")}`,
      v("dtulang") && `pertulangan ${v("dtulang")}`,
      v("dtepi") && `tepi ${v("dtepi")}`,
    ].filter(Boolean);
    keyCharacters.push(`Karakter daun: ${dChar.join(", ")}`);
  }
  if (v("fperb") || v("fsim") || v("fkel")) {
    const fChar = [v("fperb") && `perbungaan ${v("fperb")}`, v("fsim") && `simetri ${v("fsim")}`, v("fkel")].filter(Boolean);
    keyCharacters.push(`Bunga: ${fChar.join(", ")}`);
  }
  if (v("utipe")) {
    keyCharacters.push(`Buah: tipe ${v("utipe")}${v("ujmlbiji") ? `, ${v("ujmlbiji")}` : ""}`);
  }
  if (v("bjml") || v("btesta") || v("bkecambah")) {
    const sChar = [
      v("bjml"),
      v("btesta") && `testa ${v("btesta")}`,
      v("bhilum") && `hilum ${v("bhilum")}`,
      v("bendosp") && `endosperma ${v("bendosp")}`,
      v("bkecambah") && `perkecambahan ${v("bkecambah")}`,
    ].filter(Boolean);
    keyCharacters.push(`Biji: ${sChar.join("; ")}`);
  }

  const missingGroups = GR.slice(1)
    .filter((g) => !g[1].some((i) => v(i)))
    .map((g) => g[0].replace(/ \(.*\)/, ""));

  const Dt = [
    `DIAGNOSIS KARAKTER PEMBEDA`,
    taxonHeader,
    "-".repeat(36),
    ...DgItems,
    "",
    "Karakter Kunci Lapangan:",
    ...keyCharacters.map((k, idx) => `  ${idx + 1}. ${k}`),
    missingGroups.length ? `\nCatatan Tambahan: Organ ${missingGroups.join(", ")} belum tercatat dalam observasi ini.` : "",
  ]
    .filter(Boolean)
    .join("\n");

  /* ----------------------------------------------------
     3. FORMAT ANALITIK (Organografi Sistematis)
     ---------------------------------------------------- */
  const AnSections: string[] = [];
  GR.forEach((group) => {
    const filled = group[1]
      .filter((id) => v(id))
      .map((id) => `  • ${LB[id]}: ${v(id)}`);
    if (filled.length) {
      AnSections.push(`[${group[0]}]\n${filled.join("\n")}`);
    }
  });

  const An = [
    `DESKRIPSI ORGANOGRAFI SISTEMATIS`,
    taxonHeader,
    "-".repeat(36),
    dugaanTakson ? `Kelompok Taksonomis: ${dugaanTakson}\n` : "",
    ...AnSections,
  ]
    .filter(Boolean)
    .join("\n\n");

  /* ----------------------------------------------------
     Output Switcher
     ---------------------------------------------------- */
  let outText = "Pilih karakter morfologi spesimen pada formulir di atas. Uraian botani akan tersusun di sini.";
  if (hasAny) {
    if (mode === "analitik") outText = An;
    else if (mode === "diagnostik") outText = Dt;
    else if (mode === "naratif") outText = Nt;
    else outText = `${Nt}\n\n${"=".repeat(40)}\n\n${Dt}`;
  }

  let hintText: string | null = null;
  if (dScore || mScore) {
    if (dScore > mScore) {
      hintText = `🌿 Indikasi Takson: Karakter spesimen mencerminkan kelas Magnoliopsida (Dikotil) berdasarkan ${traitsList.join(" serta ")}.`;
    } else if (mScore > dScore) {
      hintText = `🌱 Indikasi Takson: Karakter spesimen mencerminkan kelas Liliopsida (Monokotil) berdasarkan ${traitsList.join(" serta ")}.`;
    } else {
      hintText = `⚠️ Catatan Observasi: Karakter perakaran dan pertulangan daun menunjukkan polaritas berlawanan. Cek kembali buku batang dan simetri perhiasan bunga.`;
    }
  }

  return {
    text: outText,
    hintText,
    hasAnyInput: hasAny,
  };
}
