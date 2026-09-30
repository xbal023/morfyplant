"use client";

import React from "react";

interface MorphologyMateriProps {
  activeSub: string;
  onSubChange: (sub: string) => void;
}

export const MorphologyMateri: React.FC<MorphologyMateriProps> = ({
  activeSub,
  onSubChange,
}) => {
  return (
    <div id="v-materi">
      <nav className="sub-nav">
        <button
          type="button"
          className={activeSub === "akar" ? "on" : ""}
          onClick={() => onSubChange("akar")}
        >
          Akar (Radix)
        </button>
        <button
          type="button"
          className={activeSub === "batang" ? "on" : ""}
          onClick={() => onSubChange("batang")}
        >
          Batang (Caulis)
        </button>
        <button
          type="button"
          className={activeSub === "daun" ? "on" : ""}
          onClick={() => onSubChange("daun")}
        >
          Daun (Folium)
        </button>
        <button
          type="button"
          className={activeSub === "bunga" ? "on" : ""}
          onClick={() => onSubChange("bunga")}
        >
          Bunga &amp; Buah
        </button>
      </nav>

      {/* ================= AKAR ================= */}
      <section id="akar" className={`pane ${activeSub !== "akar" ? "off" : ""}`}>
        <h2>Akar (Radix)</h2>
        <p>
          Organ vegetatif utama untuk penyerapan air dan unsur hara, penjangkar perawakan tumbuhan, serta kerap berfungsi sebagai penyimpan cadangan metabolit. Karakter pembeda esensial: tidak memiliki buku (<i>anodus</i>), tidak beruas, dan tidak menumbuhkan daun.
        </p>
        <div className="grid">
          <figure className="box">
            <svg viewBox="0 0 300 260" role="img" aria-label="Akar tunggang dan akar serabut">
              <line x1="150" y1="20" x2="150" y2="250" stroke="var(--line)" strokeDasharray="4" />
              <path d="M12 36h126" stroke="var(--mute)" strokeDasharray="3" />
              <path d="M162 36h126" stroke="var(--mute)" strokeDasharray="3" />
              <g stroke="var(--root)" fill="none" strokeLinecap="round">
                <path d="M75 36V235" strokeWidth="7" />
                <path
                  d="M75 70l-40 22M75 70l40 22M75 105l-42 26M75 105l42 26M75 145l-30 22M75 145l30 22M75 185l-18 14M75 185l18 14"
                  strokeWidth="3"
                />
                <path
                  d="M225 36v6M225 40C200 80 190 130 182 200M225 40C215 90 210 150 208 225M225 40C230 90 232 160 236 230M225 40C245 90 262 140 274 195M225 40C190 70 170 100 165 130M225 40C260 70 282 100 288 130"
                  strokeWidth="2.2"
                />
              </g>
              <path d="M75 36V22M225 36V22" stroke="var(--leaf)" strokeWidth="4" />
              <text x="75" y="14" textAnchor="middle">
                Pangkal Batang
              </text>
              <text x="225" y="14" textAnchor="middle">
                Pangkal Batang
              </text>
              <text x="80" y="252" fontWeight="700">
                Tunggang (Primer)
              </text>
              <text x="212" y="254" fontWeight="700">
                Serabut (Adventif)
              </text>
              <text x="8" y="90">
                radix
              </text>
              <text x="8" y="102">
                lateralis
              </text>
              <text x="86" y="60">
                radix primaria
              </text>
            </svg>
            <figcaption>Perbandingan sistem perakaran: tunggang (kiri, Dikotil) vs serabut (kanan, Monokotil).</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 260" role="img" aria-label="Zonasi ujung akar">
              <path
                d="M120 20h50v150c0 22-9 40-25 60c-16-20-25-38-25-60z"
                fill="var(--soft)"
                stroke="var(--root)"
                strokeWidth="2"
              />
              <path
                d="M126 222c10 14 30 14 40 0c-6 14-14 26-20 34c-6-8-14-20-20-34z"
                fill="var(--root)"
                opacity="0.55"
              />
              <g stroke="var(--root)" strokeWidth="1.4">
                <path d="M120 60l-22-8M120 78l-26-4M120 96l-20 4M170 66l24-6M170 84l28-2M170 102l22 6M120 116l-16 8M170 122l18 8" />
              </g>
              <line className="ln" x1="196" y1="234" x2="215" y2="234" />
              <text x="218" y="238">
                Kaliptra (tudung akar)
              </text>
              <line className="ln" x1="170" y1="196" x2="215" y2="196" />
              <text x="218" y="200">
                Zona meristematik
              </text>
              <line className="ln" x1="170" y1="162" x2="215" y2="162" />
              <text x="218" y="166">
                Zona pemanjangan
              </text>
              <line className="ln" x1="200" y1="100" x2="215" y2="100" />
              <text x="218" y="104">
                Zona diferensiasi
              </text>
              <text x="218" y="117">
                (rambut akar)
              </text>
              <line className="ln" x1="120" y1="40" x2="70" y2="40" />
              <text x="8" y="44">
                Menuju leher akar
              </text>
            </svg>
            <figcaption>Zonasi anatomi ujung akar (apeks radiks).</figcaption>
          </figure>
        </div>

        <h3>Karakter Komparatif Sistem Perakaran</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Karakter</th>
                <th>Sistem Tunggang (Radix Primaria)</th>
                <th>Sistem Serabut (Radix Adventicia)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Akar pokok</td>
                <td>Persisten, berkembang kuat lurus ke geotropisme positif</td>
                <td>Reduksi/mati dini; digantikan kelompok akar seukuran dari buku batang</td>
              </tr>
              <tr>
                <td>Percabangan</td>
                <td>Membentuk cabang akar sekunder &amp; tersier secara akropetal</td>
                <td>Kumpulan akar serabut berukuran relatif seragam</td>
              </tr>
              <tr>
                <td>Afinitas takson</td>
                <td>Gymnospermae dan Magnoliopsida (Dikotil)</td>
                <td>Liliopsida (Monokotil)</td>
              </tr>
              <tr>
                <td>Contoh representatif</td>
                <td><i>Mangifera indica</i>, <i>Citrus</i> sp., <i>Arachis hypogaea</i></td>
                <td><i>Oryza sativa</i>, <i>Zea mays</i>, <i>Cocos nucifera</i></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi &amp; Metamorfosis Akar</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Modifikasi</th>
                <th>Fungsi Khusus</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Umbi akar (tuber rhizogenum)</td>
                <td>Penyimpanan cadangan pati/karbohidrat</td>
                <td><i>Daucus carota</i> (wortel), <i>Manihot esculenta</i> (singkong)</td>
              </tr>
              <tr>
                <td>Akar napas (pneumatophora)</td>
                <td>Pertukaran aerasi pada substrat anaerob lumpur pantai</td>
                <td><i>Avicennia</i> sp. (api-api), <i>Sonneratia</i> sp. (pedada)</td>
              </tr>
              <tr>
                <td>Akar tunjang</td>
                <td>Pengokoh tegakan terhadap terpaan ombak atau angin</td>
                <td><i>Rhizophora apiculata</i> (bakau), <i>Pandanus</i> sp.</td>
              </tr>
              <tr>
                <td>Akar gantung / udara</td>
                <td>Absorpsi uap air atmosferik, kerap dilapisi velamen</td>
                <td>Orchidaceae (anggrek), <i>Ficus benjamina</i> (beringin)</td>
              </tr>
              <tr>
                <td>Akar banir (papan)</td>
                <td>Penopang stabilitas pohon hutan kanopi tinggi</td>
                <td><i>Canarium</i> sp. (kenari), <i>Ceiba pentandra</i> (randu)</td>
              </tr>
              <tr>
                <td>Haustorium (akar pengisap)</td>
                <td>Penetrasi ke jaringan vaskular inang untuk menyerap nutrisi</td>
                <td><i>Loranthus</i> sp. (benalu), <i>Cuscuta</i> sp. (tali putri)</td>
              </tr>
              <tr>
                <td>Akar pelekat</td>
                <td>Menempelkan sulur/batang pada substrat vertikal</td>
                <td><i>Piper betle</i> (sirih), <i>Vanilla planifolia</i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Catatan Morfologis:</b> Akar adventif adalah segala akar yang diinisiasi bukan dari radikula embrio, melainkan dari jaringan batang, nodus, atau daun.
        </div>
      </section>

      {/* ================= BATANG ================= */}
      <section id="batang" className={`pane ${activeSub !== "batang" ? "off" : ""}`}>
        <h2>Batang (Caulis)</h2>
        <p>
          Sumbu vegetatif penopang tajuk daun dan perbungaan, poros transportasi hara dan hasil asimilasi, serta wadah diferensiasi meristem kuncup. Karakter khas: bersegmen nyata dengan <b>buku (nodus)</b> tempat menempelnya helaian daun dan <b>ruas (internodus)</b>.
        </p>
        <div className="grid">
          <figure className="box">
            <svg viewBox="0 0 300 270" role="img" aria-label="Morfologi luar batang">
              <g stroke="var(--stem)" strokeWidth="8" fill="none" strokeLinecap="round">
                <path d="M110 260V30" />
              </g>
              <g fill="var(--stem)">
                <rect x="100" y="205" width="20" height="7" rx="2" />
                <rect x="100" y="135" width="20" height="7" rx="2" />
                <rect x="100" y="65" width="20" height="7" rx="2" />
              </g>
              <path d="M112 205c30-6 55-26 70-58c-32 4-60 24-70 58z" fill="var(--leaf)" />
              <path d="M108 135c-30-6-55-26-70-58c32 4 60 24 70 58z" fill="var(--leaf)" />
              <path d="M112 65c30-6 55-26 70-58c-32 4-60 24-70 58z" fill="var(--leaf)" />
              <ellipse cx="110" cy="27" rx="7" ry="11" fill="var(--leaf)" />
              <path d="M104 200c-8-12-22-16-30-14c4 10 14 16 26 18z" fill="var(--leaf)" opacity="0.7" />
              <line className="ln" x1="112" y1="27" x2="190" y2="27" />
              <text x="194" y="31">
                Kuncup apeks (gemma terminalis)
              </text>
              <line className="ln" x1="122" y1="138" x2="190" y2="110" />
              <text x="194" y="114">
                Buku (nodus)
              </text>
              <line className="ln" x1="112" y1="102" x2="190" y2="140" />
              <text x="194" y="144">
                Ruas (internodus)
              </text>
              <line className="ln" x1="100" y1="196" x2="60" y2="176" />
              <text x="6" y="172">
                Kuncup aksilar
              </text>
              <line className="ln" x1="150" y1="176" x2="190" y2="196" />
              <text x="194" y="200">
                Petiolus &amp; lamina
              </text>
              <text x="100" y="268" textAnchor="middle">
                Basis batang
              </text>
            </svg>
            <figcaption>Struktur morfologi luar batang tumbuhan berkambium.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 270" role="img" aria-label="Penampang melintang berkas vaskular">
              <g strokeWidth="1.5">
                <circle cx="75" cy="85" r="60" fill="var(--soft)" stroke="var(--stem)" />
                <circle cx="75" cy="85" r="45" fill="none" stroke="var(--line)" strokeDasharray="3" />
                <circle cx="75" cy="85" r="12" fill="var(--card)" stroke="var(--line)" />
                <circle cx="225" cy="85" r="60" fill="var(--soft)" stroke="var(--stem)" />
              </g>
              <g fill="var(--leaf)">
                <circle cx="75" cy="40" r="6" />
                <circle cx="107" cy="53" r="6" />
                <circle cx="120" cy="85" r="6" />
                <circle cx="107" cy="117" r="6" />
                <circle cx="75" cy="130" r="6" />
                <circle cx="43" cy="117" r="6" />
                <circle cx="30" cy="85" r="6" />
                <circle cx="43" cy="53" r="6" />
                <circle cx="225" cy="55" r="6" />
                <circle cx="252" cy="70" r="6" />
                <circle cx="205" cy="75" r="6" />
                <circle cx="232" cy="92" r="6" />
                <circle cx="256" cy="105" r="6" />
                <circle cx="210" cy="110" r="6" />
                <circle cx="230" cy="122" r="6" />
                <circle cx="192" cy="90" r="6" />
              </g>
              <text x="75" y="165" textAnchor="middle" fontWeight="700">
                Dikotil (Eustele)
              </text>
              <text x="225" y="165" textAnchor="middle" fontWeight="700">
                Monokotil (Ataktostele)
              </text>
              <text x="75" y="182" textAnchor="middle">
                berkas kolateral terbuka
              </text>
              <text x="75" y="196" textAnchor="middle">
                tersusun konsentris teratur
              </text>
              <text x="225" y="182" textAnchor="middle">
                berkas kolateral tertutup
              </text>
              <text x="225" y="196" textAnchor="middle">
                tersebar pada parenkim
              </text>
              <text x="150" y="226" textAnchor="middle">
                Dikotil: memiliki kambium vaskular (menebal sekunder).
              </text>
              <text x="150" y="244" textAnchor="middle">
                Monokotil: tanpa kambium reguler.
              </text>
            </svg>
            <figcaption>Susunan berkas pengangkut (xilem-floem) penampang melintang batang muda.</figcaption>
          </figure>
        </div>

        <h3>Klasifikasi Morfologis Batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Aspek Karakter</th>
                <th>Kategori Tipe</th>
                <th>Deskripsi &amp; Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>Konsistensi jaringan</td>
                <td>Berkayu (lignosus)</td>
                <td>Mengalami lignifikasi kuat; <i>Tectona grandis</i> (jati), <i>Mangifera</i></td>
              </tr>
              <tr>
                <td>Herba (herbaceus)</td>
                <td>Jaringan lunak berair tanpa lignin tebal; <i>Amaranthus</i> (bayam)</td>
              </tr>
              <tr>
                <td>Batang basah (calamus/carnosus)</td>
                <td>Semu berlapis pelepah atau berdaging; <i>Musa</i> sp. (pisang)</td>
              </tr>
              <tr>
                <td rowSpan={4}>Arah orientasi tumbuh</td>
                <td>Tegak lurus (erectus)</td>
                <td>Sumbu tegak menjulang ke atas; <i>Pinus merkusii</i>, <i>Cocos</i></td>
              </tr>
              <tr>
                <td>Menjalar (repens)</td>
                <td>Rebah di tanah dengan nodus berakar; <i>Ipomoea batatas</i></td>
              </tr>
              <tr>
                <td>Memanjat (scandens)</td>
                <td>Melilit atau didukung alat pemanjat; <i>Vigna</i>, <i>Piper</i></td>
              </tr>
              <tr>
                <td>Mengangguk (nutans) / Rebah</td>
                <td>Dasar horizontal, pucuk melengkung tegak; Gramineae</td>
              </tr>
              <tr>
                <td rowSpan={3}>Bentuk penampang</td>
                <td>Bulat (teres)</td>
                <td>Bentuk silindris umum; <i>Citrus</i>, <i>Hevea</i></td>
              </tr>
              <tr>
                <td>Segitiga (triangularis)</td>
                <td>Bertepi tiga nyata; suku teki-tekian (<i>Cyperus rotundus</i>)</td>
              </tr>
              <tr>
                <td>Segiempat (quadrangularis)</td>
                <td>Penampang berbingkai empat sudut; Lamiaceae (mint, kemangi)</td>
              </tr>
              <tr>
                <td>Struktur rongga internodus</td>
                <td>Berongga (fistulosus) / Pejal</td>
                <td><i>Bambusa</i> sp. (ruas berongga), <i>Zea mays</i> (ruas pejal empulur)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Metamorfosis &amp; Modifikasi Batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Modifikasi</th>
                <th>Karakter Diagnostik</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rimpang (rhizoma)</td>
                <td>Batang bawah tanah beruas jelas, berbuku, tertutup sisik daun</td>
                <td><i>Zingiber officinale</i> (jahe), <i>Curcuma longa</i> (kunyit)</td>
              </tr>
              <tr>
                <td>Umbi batang (tuber caulogenum)</td>
                <td>Pembengkakan ujung stolon bawah tanah dengan mata tunas</td>
                <td><i>Solanum tuberosum</i> (kentang)</td>
              </tr>
              <tr>
                <td>Umbi lapis (bulbus)</td>
                <td>Cakram batang sangat pendek dibungkus metamorfosis daun tebal</td>
                <td><i>Allium cepa</i> (bawang merah)</td>
              </tr>
              <tr>
                <td>Geragih (stolon)</td>
                <td>Cabang lateral menjalar di permukaan tanah yang membentuk anakan</td>
                <td><i>Fragaria</i> sp. (stroberi), rumput teki</td>
              </tr>
              <tr>
                <td>Kladodia / Filokladia</td>
                <td>Batang pipih hijau menyerupai daun dengan fungsi fotosintetik</td>
                <td>Cactaceae (kaktus), <i>Muehlenbeckia</i></td>
              </tr>
              <tr>
                <td>Sulur cabang (cirrhus)</td>
                <td>Modifikasi cabang lateral menjadi pilinan pemanjat</td>
                <td><i>Vitis vinifera</i> (anggur), <i>Passiflora</i></td>
              </tr>
              <tr>
                <td>Spina caulogenum (duri batang)</td>
                <td>Duri sejati hasil reduksi cabang (mengandung berkas vaskular)</td>
                <td><i>Bougainvillea spectabilis</i>, <i>Citrus</i> sp.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Kunci Lapangan:</b> Pembeda esensial antara rimpang dan akar terletak pada ada tidaknya nodus, internodus, dan kuncup dorman yang diselimuti sisik daun. Akar sejati tidak pernah memiliki struktur nodus.
        </div>
      </section>

      {/* ================= DAUN ================= */}
      <section id="daun" className={`pane ${activeSub !== "daun" ? "off" : ""}`}>
        <h2>Daun (Folium)</h2>
        <p>
          Organ fotosintetik dan transpirasi utama, umumnya pipih dorsoventral, berwarna hijau berklorofil, dan bertumbuh terbatas pada nodus batang. Daun lengkap memiliki tiga bagian esensial: pelepah (<i>vagina</i>), tangkai (<i>petiolus</i>), dan helaian (<i>lamina</i>).
        </p>
        <div className="grid">
          <figure className="box">
            <svg viewBox="0 0 300 280" role="img" aria-label="Bagian morfologi daun lengkap">
              <path d="M150 265V190" stroke="var(--stem)" strokeWidth="6" strokeLinecap="round" />
              <path d="M150 190C90 170 70 110 150 20c80 90 60 150 0 170z" fill="var(--leaf)" opacity="0.85" />
              <path d="M150 190V26" stroke="var(--soft)" strokeWidth="3" />
              <g stroke="var(--soft)" strokeWidth="1.6" fill="none">
                <path d="M150 160l-42-34M150 130l-46-40M150 100l-34-32M150 70l-20-18M150 160l42-34M150 130l46-40M150 100l34-32M150 70l20-18" />
              </g>
              <path
                d="M150 265c-14 2-24-4-28-12c10-2 22 2 28 12zM150 265c14 2 24-4 28-12c-10-2-22 2-28 12z"
                fill="var(--stem)"
              />
              <line className="ln" x1="150" y1="22" x2="215" y2="22" />
              <text x="220" y="26">
                Apeks (ujung daun)
              </text>
              <line className="ln" x1="196" y1="100" x2="225" y2="80" />
              <text x="228" y="84">
                Margo (tepi daun)
              </text>
              <line className="ln" x1="180" y1="126" x2="225" y2="126" />
              <text x="228" y="130">
                Costa lateralis (tulang cabang)
              </text>
              <line className="ln" x1="150" y1="150" x2="70" y2="150" />
              <text x="6" y="154">
                Costa media (ibu tulang)
              </text>
              <line className="ln" x1="120" y1="80" x2="70" y2="70" />
              <text x="6" y="74">
                Lamina (helaian)
              </text>
              <line className="ln" x1="150" y1="190" x2="225" y2="190" />
              <text x="228" y="194">
                Basis (pangkal daun)
              </text>
              <line className="ln" x1="152" y1="225" x2="225" y2="225" />
              <text x="228" y="229">
                Petiolus (tangkai)
              </text>
              <line className="ln" x1="124" y1="256" x2="70" y2="256" />
              <text x="6" y="260">
                Vagina (pelepah)
              </text>
            </svg>
            <figcaption>Susunan daun lengkap (folium completum): pelepah, tangkai, dan helaian.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 280" role="img" aria-label="Empat pola venasi daun">
              <g fill="var(--leaf)" opacity="0.85">
                <path d="M75 15C40 45 40 95 75 125c35-30 35-80 0-110z" />
                <path d="M225 15c-20 20-40 40-45 75c10 25 30 40 45 50c15-10 35-25 45-50c-5-35-25-55-45-75z" />
                <path d="M60 160c-12 30-12 60 0 100h30c12-40 12-70 0-100z" />
                <path d="M225 155C185 175 185 235 225 262c40-27 40-87 0-107z" />
              </g>
              <g stroke="var(--soft)" strokeWidth="1.6" fill="none">
                <path d="M75 125V20M75 105l-22-20M75 85l-22-20M75 65l-16-14M75 105l22-20M75 85l22-20M75 65l16-14" />
                <path d="M225 140V50M225 140L185 92M225 140L200 45M225 140L250 45M225 140L265 92M225 140L170 118M225 140L280 118" />
                <path d="M75 160v100M67 160v100M83 160v100M60 170v80M90 170v80" />
                <path d="M225 262V158M225 250C205 235 200 200 210 165M225 250C245 235 250 200 240 165M225 240C195 220 190 195 200 172M225 240C255 220 260 195 250 172" />
              </g>
              <text x="75" y="142" textAnchor="middle" fontWeight="700">
                Menyirip (Penninervis)
              </text>
              <text x="75" y="156" textAnchor="middle" fontSize="11">
                Mangifera, Psidium
              </text>
              <text x="225" y="10" textAnchor="middle" fontWeight="700">
                Menjari (Palminervis)
              </text>
              <text x="225" y="34" textAnchor="middle" fontSize="11">
                Carica, Manihot
              </text>
              <text x="120" y="215" fontWeight="700">
                Sejajar (Rectinervis)
              </text>
              <text x="120" y="229" fontSize="11">
                Oryza, Zea mays
              </text>
              <text x="120" y="243" fontSize="11">
                (Liliopsida)
              </text>
              <text x="225" y="275" textAnchor="middle" fontWeight="700">
                Melengkung (Curvinervis)
              </text>
            </svg>
            <figcaption>Empat pola utama pertulangan daun (nervatio). Melengkung: <i>Piper betle</i>.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 236" role="img" aria-label="Bentuk helaian daun">
              <g transform="translate(37.5 32)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
              </g>
              <text x="37.5" y="72" textAnchor="middle">
                Bulat (Orbicularis)
              </text>
              <g transform="translate(112.5 32)" fill="var(--leaf)" opacity="0.9">
                <ellipse rx="14" ry="24" />
              </g>
              <text x="112.5" y="72" textAnchor="middle">
                Lonjong (Ovalis)
              </text>
              <g transform="translate(187.5 32)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z" />
              </g>
              <text x="187.5" y="72" textAnchor="middle">
                Bulat telur (Ovatus)
              </text>
              <g transform="translate(262.5 32)" fill="var(--leaf)" opacity="0.9">
                <path
                  transform="scale(1 -1)"
                  d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z"
                />
              </g>
              <text x="262.5" y="72" textAnchor="middle">
                Bt. sungsang (Obovatus)
              </text>

              <g transform="translate(37.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C6-14 10 0 9 8C8 18 4 22 0 26C-4 22-8 18-9 8C-10 0-6-14 0-26z" />
              </g>
              <text x="37.5" y="150" textAnchor="middle">
                Lanset (Lanceolatus)
              </text>
              <g transform="translate(112.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26L2.5 26H-2.5z" />
              </g>
              <text x="112.5" y="150" textAnchor="middle">
                Jarum (Acerosus)
              </text>
              <g transform="translate(187.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M-4-26h8v52h-8z" />
              </g>
              <text x="187.5" y="150" textAnchor="middle">
                Pita (Linearis)
              </text>
              <g transform="translate(262.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C-30-4-24 20-10 20C-4 20 0 14 0 10C0 14 4 20 10 20C24 20 30-4 0-26z" />
              </g>
              <text x="262.5" y="150" textAnchor="middle">
                Jantung (Cordatus)
              </text>

              <g transform="translate(37.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M-22 8C-22-14-6-18 0-12C6-18 22-14 22 8C22 20 10 22 0 16C-10 22-22 20-22 8z" />
              </g>
              <text x="37.5" y="228" textAnchor="middle">
                Ginjal (Reniformis)
              </text>
              <g transform="translate(112.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24L22 22H-22z" />
              </g>
              <text x="112.5" y="228" textAnchor="middle">
                Segitiga (Triangularis)
              </text>
              <g transform="translate(187.5 188)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
                <path d="M0 0V26" stroke="var(--stem)" strokeWidth="3" />
                <circle r="3" fill="var(--soft)" />
              </g>
              <text x="187.5" y="228" textAnchor="middle">
                Perisai (Peltatus)
              </text>
              <g transform="translate(262.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C14-26 14-6 5 6C2 14 2 20 0 26C-2 20-2 14-5 6C-14-6-14-26 0-26z" />
              </g>
              <text x="262.5" y="228" textAnchor="middle">
                Sudip (Spathulatus)
              </text>
            </svg>
            <figcaption>Bangun helaian daun (circumscriptio).</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 200" role="img" aria-label="Pola tepi helaian daun">
              <g transform="translate(10 24)">
                <path d="M0 0H120" fill="none" stroke="var(--leaf)" strokeWidth="2.5" />
              </g>
              <text x="150" y="28">
                Rata (Integer)
              </text>
              <g transform="translate(10 62)">
                <path
                  d="M0 0l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="66">
                Bergerigi (Serratus)
              </text>
              <g transform="translate(10 100)">
                <path
                  d="M0 0l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="104">
                Bergigi (Dentatus)
              </text>
              <g transform="translate(10 138)">
                <path
                  d="M0 0a5 5 0 0 1 10 0a5 5 0 0 1 10 0a5 5 0 0 1 10 0a5 5 0 0 1 10 0a5 5 0 0 1 10 0"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="142">
                Beringgit (Crenatus)
              </text>
              <g transform="translate(10 176)">
                <path
                  d="M0 0q5-10 10 0t10 0q5-10 10 0t10 0q5-10 10 0t10 0q5-10 10 0t10 0q5-10 10 0"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="180">
                Bergelombang (Repandus)
              </text>
            </svg>
            <figcaption>Karakter toreh tepi daun (margo folii).</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 150" role="img" aria-label="Daun tunggal dan majemuk">
              <g stroke="var(--stem)" strokeWidth="3" fill="none">
                <path d="M40 140V60M40 100" />
                <path d="M150 140V30" />
              </g>
              <path d="M40 100C15 92 10 60 40 25c30 35 25 67 0 75z" fill="var(--leaf)" opacity="0.85" />
              <g fill="var(--leaf)" opacity="0.85">
                <ellipse cx="128" cy="55" rx="16" ry="8" transform="rotate(-20 128 55)" />
                <ellipse cx="172" cy="55" rx="16" ry="8" transform="rotate(20 172 55)" />
                <ellipse cx="126" cy="85" rx="16" ry="8" transform="rotate(-20 126 85)" />
                <ellipse cx="174" cy="85" rx="16" ry="8" transform="rotate(20 174 85)" />
                <ellipse cx="150" cy="24" rx="14" ry="8" transform="rotate(90 150 24)" />
              </g>
              <g stroke="var(--stem)" strokeWidth="2.5">
                <path d="M250 138V70M250 70L215 55M250 70L285 55M250 70V25" />
              </g>
              <g fill="var(--leaf)" opacity="0.85">
                <ellipse cx="208" cy="52" rx="15" ry="9" transform="rotate(-20 208 52)" />
                <ellipse cx="292" cy="52" rx="15" ry="9" transform="rotate(20 292 52)" />
                <ellipse cx="250" cy="18" rx="9" ry="14" />
              </g>
              <text x="40" y="150" textAnchor="middle" fontWeight="700">
                Tunggal (Simplex)
              </text>
              <text x="150" y="150" textAnchor="middle" fontWeight="700">
                Majemuk Menyirip
              </text>
              <text x="250" y="150" textAnchor="middle" fontWeight="700">
                Majemuk Menjari
              </text>
            </svg>
            <figcaption>Tunggal (1 helaian pada tangkai) vs majemuk (rakis bercabang dengan banyak anak daun).</figcaption>
          </figure>
        </div>

        <h3>Karakter Organografis Daun Tambahan</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Tipe Terminologi &amp; Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bangun helaian (circumscriptio)</td>
                <td>
                  Orbicularis (bulat), ovalis (lonjong), ovatus (bulat telur), obovatus (bulat telur sungsang; sirsak), lanceolatus (lanset), acerosus (jarum; pinus), linearis (pita; padi), cordatus (jantung; sirih), reniformis (ginjal; pegagan), triangularis (segitiga), peltatus (perisai; teratai), spathulatus (sudip), rhomboideus (belah ketupat)
                </td>
              </tr>
              <tr>
                <td>Tepi helaian (margo)</td>
                <td>
                  Integer (rata), serratus (bergerigi), dentatus (bergigi), crenatus (beringgit), repandus (bergelombang). Tingkat toreh mendalam: lobatus (berlekuk), fissus (bercangap), partitus (berbagi)
                </td>
              </tr>
              <tr>
                <td>Ujung daun (apex)</td>
                <td>Acutus (runcing), acuminatus (meruncing), obtusus (tumpul), rotundatus (membulat), truncatus (rompang), mucronatus (berduri kecil)</td>
              </tr>
              <tr>
                <td>Pangkal daun (basis)</td>
                <td>Acutus (runcing), obtusus (tumpul), rotundatus (membulat), cordatus (berlekuk jantung), cuneatus (membaji), peltatus (perisai)</td>
              </tr>
              <tr>
                <td>Tekstur permukaan</td>
                <td>Glabrous (licin gundul), pubescens (berambut halus), villosus (berambut panjang), pruinosus (berlilin), scaber (kasar), carnosus (berdaging)</td>
              </tr>
              <tr>
                <td>Tipe daun majemuk</td>
                <td>Pinnatus (menyirip; asam jawa, turi), palmatus (menjari; karet, ubi kayu), trifoliatus (beranak daun tiga; kedelai)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tata Letak Daun pada Buku Batang (Filotaksis)</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Pola Filotaksis</th>
                <th>Karakter Dudukan</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Berseling (folia sparsa)</td>
                <td>Satu helai daun per buku, orientasi spiral berselang-seling</td>
                <td><i>Mangifera indica</i>, <i>Rosa</i> sp.</td>
              </tr>
              <tr>
                <td>Berhadapan (folia opposita)</td>
                <td>Dua helai daun per buku, berpasangan simetris 180°</td>
                <td><i>Syzygium aqueum</i> (jambu air), <i>Jasminum</i></td>
              </tr>
              <tr>
                <td>Berkarang (folia verticillata)</td>
                <td>Tiga helai daun atau lebih tersusun melingkar pada satu buku</td>
                <td><i>Allamanda cathartica</i>, <i>Nerium oleander</i></td>
              </tr>
              <tr>
                <td>Roset (roset akar/batang)</td>
                <td>Internodus sangat pendek, daun berjejal rapat membentuk lingkaran</td>
                <td><i>Ananas comosus</i> (nanas), <i>Taraxacum</i></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi &amp; Reduksi Daun</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Modifikasi</th>
                <th>Fungsi Adaptif</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duri daun (spina foliaris)</td>
                <td>Minimasi transpirasi serta proteksi dari herbivora</td>
                <td>Cactaceae, <i>Aloe</i> sp.</td>
              </tr>
              <tr>
                <td>Sulur daun (cirrhus foliaris)</td>
                <td>Organ pemanjat hasil reduksi ujung helaian atau rakis</td>
                <td><i>Pisum sativum</i> (kacang kapri), <i>Gloriosa superba</i></td>
              </tr>
              <tr>
                <td>Piala / kantong perangkap</td>
                <td>Penjerat dan pencerna artropoda pada habitat oligotrof</td>
                <td><i>Nepenthes</i> sp. (kantong semar)</td>
              </tr>
              <tr>
                <td>Daun pelindung (bractea)</td>
                <td>Menarik polinator dengan warna mencolok menyerupai korola</td>
                <td><i>Bougainvillea</i>, <i>Euphorbia pulcherrima</i></td>
              </tr>
              <tr>
                <td>Daun penyimpan sukulen</td>
                <td>Retensi air dalam jaringan spons parenkim akuifer</td>
                <td><i>Aloe vera</i>, <i>Sansevieria</i> sp.</td>
              </tr>
              <tr>
                <td>Sisik umbi (squama)</td>
                <td>Pelindung kuncup dan cadangan glukosa lapis</td>
                <td><i>Allium</i> sp., rimpang Zingiberaceae</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Kunci Lapangan:</b> Pola venasi menyirip atau menjari secara konsisten berkolerasi dengan embrio berkeping dua (Dikotil/Magnoliopsida), sedangkan pertulangan sejajar atau melengkung mencirikan monokotil (Liliopsida).
        </div>
      </section>

      {/* ================= BUNGA ================= */}
      <section id="bunga" className={`pane ${activeSub !== "bunga" ? "off" : ""}`}>
        <h2>Bunga &amp; Buah</h2>
        <p>
          Organ reproduktif generasi tumbuhan berbiji (<i>Anthophyta / Spermatophyta</i>). Bunga lengkap (<i>flos completus</i>) tersusun atas empat lingkaran: kelopak (<i>calyx</i>), mahkota (<i>corolla</i>), benang sari (<i>stamen</i>), dan putik (<i>pistillum</i>).
        </p>

        <h3>Tipe Perbungaan Majemuk (Inflorescentia)</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Perbungaan</th>
                <th>Karakter Morfologis</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tandan (racemus)</td>
                <td>Bunga bertangkai nyata pada sumbu utama tak bercabang</td>
                <td><i>Sesbania grandiflora</i> (turi), <i>Brassica</i></td>
              </tr>
              <tr>
                <td>Bulir (spica)</td>
                <td>Serupa tandan, namun kuntum bunga duduk (tanpa tangkai bunga)</td>
                <td><i>Piper betle</i> (sirih), <i>Acalypha hispida</i></td>
              </tr>
              <tr>
                <td>Malai (panicula)</td>
                <td>Ibu tangkai bercabang majemuk membentuk gugusan bunga lebat</td>
                <td><i>Oryza sativa</i> (padi), <i>Mangifera indica</i></td>
              </tr>
              <tr>
                <td>Payung (umbella)</td>
                <td>Semua tangkai bunga berukuran sama keluar dari satu titik nodus apeks</td>
                <td><i>Allium cepa</i>, Apiaceae (wortel, seledri)</td>
              </tr>
              <tr>
                <td>Bongkol (capitulum)</td>
                <td>Kuntum bunga pita dan tabung duduk rapat pada dasar bunga cawan</td>
                <td>Asteraceae (<i>Helianthus annuus</i>, kenikir)</td>
              </tr>
              <tr>
                <td>Tongkol (spadix)</td>
                <td>Bulir berdaging tebal, umumnya dilindungi oleh seludang bunga (spatha)</td>
                <td>Araceae (<i>Colocasia esculenta</i>, <i>Amorphophallus</i>)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Klasifikasi Tipe Buah (Fructus)</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Buah</th>
                <th>Karakter Perikarp &amp; Anatomi</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Buni (bacca)</td>
                <td>Perikarp berdaging lunak menyeluruh, tanpa lapisan endokarp batu</td>
                <td><i>Solanum lycopersicum</i> (tomat), <i>Carica papaya</i></td>
              </tr>
              <tr>
                <td>Batu (drupa)</td>
                <td>Endokarp mengeras membatu mengelilingi biji; mesokarp berdaging</td>
                <td><i>Mangifera indica</i>, <i>Cocos nucifera</i></td>
              </tr>
              <tr>
                <td>Polong (legumen)</td>
                <td>Buah kering pecah melalui dua kampuh sutura bujur</td>
                <td>Fabaceae (kacang hijau, petai cina, kedelai)</td>
              </tr>
              <tr>
                <td>Kotak (capsula)</td>
                <td>Buah sejati kering dengan banyak lokulus yang membelah saat masak</td>
                <td><i>Gossypium</i> (kapas), <i>Ceiba pentandra</i> (kapuk)</td>
              </tr>
              <tr>
                <td>Padi (caryopsis)</td>
                <td>Perikarp berlekatan intim dan menyatu utuh dengan testa biji</td>
                <td>Poaceae (<i>Oryza sativa</i>, <i>Zea mays</i>)</td>
              </tr>
              <tr>
                <td>Buah agregat</td>
                <td>Berkembang dari satu bunga yang memiliki banyak putik apokarp</td>
                <td><i>Fragaria</i> (arbei), <i>Annona muricata</i> (sirsak)</td>
              </tr>
              <tr>
                <td>Buah majemuk (sinsorium)</td>
                <td>Hasil fusi dari seluruh kuntum bunga dalam satu perbungaan padat</td>
                <td><i>Artocarpus heterophyllus</i> (nangka), <i>Ananas</i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
