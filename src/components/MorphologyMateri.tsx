"use client";

import React from "react";

interface MorphologyMateriProps {
  activeSub: string;
  onSubChange?: (sub: string) => void;
}

export const MorphologyMateri: React.FC<MorphologyMateriProps> = ({
  activeSub,
}) => {
  return (
    <div id="v-materi">
      {/* ================= AKAR ================= */}
      <section id="akar" className={`pane ${activeSub !== "akar" ? "off" : ""}`} hidden={activeSub !== "akar"}>
        <h2>
          Akar <span className="latin-tag">Radix • Organum Nutriens</span>
        </h2>
        <p className="lead">
          Organ vegetatif utama untuk absorpsi air dan unsur hara, penjangkar perawakan tumbuhan, serta kerap berfungsi sebagai penyimpan cadangan metabolit sekunder. Karakter pembeda esensial: tidak memiliki buku (<i>anodus</i>), tidak beruas (<i>aninternodus</i>), dan tidak mendukung primordia daun.
        </p>
        <div className="grid">
          <figure className="box">
            <div className="plate-header">
              <span>Tabula I.1</span>
              <span>Systema Radicis</span>
            </div>
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
                Collum radicis
              </text>
              <text x="225" y="14" textAnchor="middle">
                Collum radicis
              </text>
              <text x="80" y="252" fontWeight="700">
                Radix primaria
              </text>
              <text x="212" y="254" fontWeight="700">
                Radix adventicia
              </text>
              <text x="8" y="90">
                radix
              </text>
              <text x="8" y="102">
                lateralis
              </text>
              <text x="86" y="60">
                radix pokok
              </text>
            </svg>
            <figcaption>
              Perbandingan sistem perakaran: tunggang (kiri, Dikotil/Gymnospermae) vs serabut (kanan, Monokotil).
            </figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula I.2</span>
              <span>Apex Radicis</span>
            </div>
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
                Calyptra (tudung)
              </text>
              <line className="ln" x1="170" y1="196" x2="215" y2="196" />
              <text x="218" y="200">
                Zona meristematik
              </text>
              <line className="ln" x1="170" y1="162" x2="215" y2="162" />
              <text x="218" y="166">
                Zona elongasi
              </text>
              <line className="ln" x1="200" y1="100" x2="215" y2="100" />
              <text x="218" y="104">
                Zona diferensiasi
              </text>
              <text x="218" y="117">
                (pilus radicalis)
              </text>
              <line className="ln" x1="120" y1="40" x2="70" y2="40" />
              <text x="8" y="44">
                Ke arah batang
              </text>
            </svg>
            <figcaption>
              Zonasi diferensiasi apeks akar dari tudung akar (kaliptra) menuju jaringan dewasa.
            </figcaption>
          </figure>
        </div>

        <h3>Karakter Komparatif Sistem Perakaran</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Karakter Morfologis</th>
                <th>Sistem Tunggang (Radix Primaria)</th>
                <th>Sistem Serabut (Radix Adventicia)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Perkembangan akar primer</td>
                <td>Persisten, berkembang kuat lurus ke geotropisme positif</td>
                <td>Reduksi/mati dini; digantikan kelompok akar seukuran dari buku batang</td>
              </tr>
              <tr>
                <td>Percabangan lateral</td>
                <td>Membentuk cabang sekunder &amp; tersier secara akropetal</td>
                <td>Kumpulan akar serabut berukuran relatif seragam</td>
              </tr>
              <tr>
                <td>Korelasi takson</td>
                <td>Gymnospermae dan Magnoliopsida (Dikotil)</td>
                <td>Liliopsida (Monokotil)</td>
              </tr>
              <tr>
                <td>Spesimen representatif</td>
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
                <th>Tipe Metamorfosis</th>
                <th>Fungsi Spesifik &amp; Karakter</th>
                <th>Contoh Takson Terkait</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Umbi akar (tuber rhizogenum)</td>
                <td>Penyimpanan cadangan amilum pada parenkim korteks</td>
                <td><i>Daucus carota</i> (wortel), <i>Manihot esculenta</i> (singkong)</td>
              </tr>
              <tr>
                <td>Akar napas (pneumatophora)</td>
                <td>Aerasi lentisel pada substrat lumpur pantai yang anaerob</td>
                <td><i>Avicennia</i> sp. (api-api), <i>Sonneratia</i> sp. (pedada)</td>
              </tr>
              <tr>
                <td>Akar tunjang</td>
                <td>Menopang batang terhadap goncangan air pasang atau gravitasi</td>
                <td><i>Rhizophora apiculata</i> (bakau), <i>Pandanus</i> sp.</td>
              </tr>
              <tr>
                <td>Akar udara / gantung</td>
                <td>Menyerap uap air atmosferik, dilapisi jaringan velamen</td>
                <td>Orchidaceae (anggrek), <i>Ficus benjamina</i> (beringin)</td>
              </tr>
              <tr>
                <td>Akar banir (buttress root)</td>
                <td>Menopang kestabilan pohon kanopi hutan primer tropika</td>
                <td><i>Canarium</i> sp. (kenari), <i>Ceiba pentandra</i> (randu)</td>
              </tr>
              <tr>
                <td>Haustorium (akar pengisap)</td>
                <td>Penetrasi haustorial menuju xilem/floem jaringan inang</td>
                <td><i>Loranthus</i> sp. (benalu), <i>Cuscuta</i> sp. (tali putri)</td>
              </tr>
              <tr>
                <td>Akar pelekat</td>
                <td>Menempelkan sulur/batang pada substrat vertikal atau inang</td>
                <td><i>Piper betle</i> (sirih), <i>Vanilla planifolia</i></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Catatan Determinasi:</b> Seluruh perakaran yang diinisiasi bukan dari radikula embrio melainkan dari jaringan buku batang atau daun diklasifikasikan sebagai <b>akar adventif</b> (<i>radix adventicia</i>).
        </div>
      </section>

      {/* ================= BATANG ================= */}
      <section id="batang" className={`pane ${activeSub !== "batang" ? "off" : ""}`} hidden={activeSub !== "batang"}>
        <h2>
          Batang <span className="latin-tag">Caulis • Axis Vegetativus</span>
        </h2>
        <p className="lead">
          Sumbu vegetatif penopang tajuk daun dan perbungaan, poros translokasi hara dan fotosintat, serta wadah diferensiasi meristem kuncup. Karakter diagnostik: memperlihatkan <b>buku (nodus)</b> dan <b>ruas (internodus)</b> nyata.
        </p>
        <div className="grid">
          <figure className="box">
            <div className="plate-header">
              <span>Tabula II.1</span>
              <span>Morphologia Caulis</span>
            </div>
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
                Gemma terminalis
              </text>
              <line className="ln" x1="122" y1="138" x2="190" y2="110" />
              <text x="194" y="114">
                Nodus (buku)
              </text>
              <line className="ln" x1="112" y1="102" x2="190" y2="140" />
              <text x="194" y="144">
                Internodus (ruas)
              </text>
              <line className="ln" x1="100" y1="196" x2="60" y2="176" />
              <text x="6" y="172">
                Gemma axillaris
              </text>
              <line className="ln" x1="150" y1="176" x2="190" y2="196" />
              <text x="194" y="200">
                Petiolus &amp; lamina
              </text>
              <text x="100" y="268" textAnchor="middle">
                Basis caulis
              </text>
            </svg>
            <figcaption>Morfologi sumbu batang: nodus, internodus, dan posisi kuncup aksilar.</figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula II.2</span>
              <span>Fasciculus Vascularis</span>
            </div>
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
                Eustele (Dikotil)
              </text>
              <text x="225" y="165" textAnchor="middle" fontWeight="700">
                Ataktostele (Monokotil)
              </text>
              <text x="75" y="182" textAnchor="middle">
                kolateral terbuka
              </text>
              <text x="75" y="196" textAnchor="middle">
                konsentris melingkar
              </text>
              <text x="225" y="182" textAnchor="middle">
                kolateral tertutup
              </text>
              <text x="225" y="196" textAnchor="middle">
                tersebar pada dasar
              </text>
              <text x="150" y="226" textAnchor="middle">
                Dikotil: kambium vaskular aktif (pertumbuhan sekunder).
              </text>
              <text x="150" y="244" textAnchor="middle">
                Monokotil: tanpa kambium reguler.
              </text>
            </svg>
            <figcaption>Susunan berkas vaskular melintang: eustele (kiri) vs ataktostele (kanan).</figcaption>
          </figure>
        </div>

        <h3>Klasifikasi Karakter Morfologis Batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Aspek Karakter</th>
                <th>Kategori Tipe</th>
                <th>Karakteristik &amp; Takson Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>Konsistensi jaringan</td>
                <td>Berkayu (lignosus)</td>
                <td>Lignifikasi dinding sel sekunder tebal; <i>Tectona grandis</i> (jati), <i>Mangifera</i></td>
              </tr>
              <tr>
                <td>Herba (herbaceus)</td>
                <td>Jaringan lunak berair tanpa lignin masif; <i>Amaranthus</i> (bayam)</td>
              </tr>
              <tr>
                <td>Batang basah (calamus/carnosus)</td>
                <td>Batang semu berlapis pelepah atau sukulen; <i>Musa</i> sp., <i>Opuntia</i></td>
              </tr>
              <tr>
                <td rowSpan={4}>Arah orientasi tumbuh</td>
                <td>Tegak lurus (erectus)</td>
                <td>Sumbu tegak menjulang ortotropik; <i>Pinus merkusii</i>, <i>Cocos</i></td>
              </tr>
              <tr>
                <td>Menjalar (repens)</td>
                <td>Rebah horizontal di atas tanah dengan nodus berakar; <i>Ipomoea batatas</i></td>
              </tr>
              <tr>
                <td>Memanjat (scandens)</td>
                <td>Tumbuh vertikal dengan melilit atau alat sulur; <i>Vigna</i>, <i>Piper</i></td>
              </tr>
              <tr>
                <td>Mengangguk (nutans) / Rebah</td>
                <td>Pangkal horizontal mendatar, bagian apeks tegak; suku rumputan (Poaceae)</td>
              </tr>
              <tr>
                <td rowSpan={3}>Bentuk penampang</td>
                <td>Bulat (teres)</td>
                <td>Silindris simetris; bentuk umum pada sebagian besar pohon</td>
              </tr>
              <tr>
                <td>Segitiga (triangularis)</td>
                <td>Berbingkai tiga sudut nyata; famili Cyperaceae (<i>Cyperus rotundus</i>)</td>
              </tr>
              <tr>
                <td>Segiempat (quadrangularis)</td>
                <td>Berbingkai empat sudut bersiku; famili Lamiaceae (mint, kemangi)</td>
              </tr>
              <tr>
                <td>Struktur rongga internodus</td>
                <td>Berongga (fistulosus) / Pejal</td>
                <td><i>Bambusa</i> sp. (ruas berongga), <i>Zea mays</i> (ruas pejal berisi empulur)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi &amp; Metamorfosis Batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Metamorfosis</th>
                <th>Karakter Diagnostik Anatomi</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rimpang (rhizoma)</td>
                <td>Batang bawah tanah beruas jelas, berbuku, dan tertutup daun sisik</td>
                <td><i>Zingiber officinale</i> (jahe), <i>Curcuma longa</i> (kunyit)</td>
              </tr>
              <tr>
                <td>Umbi batang (tuber caulogenum)</td>
                <td>Pembengkakan ujung cabang stolon bawah tanah dengan mata tunas ketiak</td>
                <td><i>Solanum tuberosum</i> (kentang)</td>
              </tr>
              <tr>
                <td>Umbi lapis (bulbus)</td>
                <td>Cakram batang kerdil (discus) dibungkus metamorfosis sisik daun tebal</td>
                <td><i>Allium cepa</i> (bawang merah)</td>
              </tr>
              <tr>
                <td>Geragih (stolon)</td>
                <td>Cabang lateral ramping menjalar di atas tanah yang memunculkan anakan</td>
                <td><i>Fragaria</i> sp. (stroberi), <i>Centella asiatica</i></td>
              </tr>
              <tr>
                <td>Kladodia / Filokladia</td>
                <td>Batang pipih hijau menyerupai helaian daun dengan fungsi asimilasi</td>
                <td>Cactaceae (kaktus), <i>Muehlenbeckia</i></td>
              </tr>
              <tr>
                <td>Sulur cabang (cirrhus)</td>
                <td>Modifikasi cabang lateral menjadi pilinan penopang pemanjatan</td>
                <td><i>Vitis vinifera</i> (anggur), <i>Passiflora</i></td>
              </tr>
              <tr>
                <td>Spina caulogenum (duri batang)</td>
                <td>Duri sejati hasil reduksi cabang (mengandung jaringan vaskular xilem-floem)</td>
                <td><i>Bougainvillea spectabilis</i>, <i>Citrus</i> sp.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Kunci Lapangan:</b> Pembeda rimpang (<i>rhizoma</i>) dengan akar sejati terletak pada adanya nodus, internodus, dan kuncup dorman yang diselimuti sisik daun. Akar sejati tidak pernah memiliki struktur buku.
        </div>
      </section>

      {/* ================= DAUN ================= */}
      <section id="daun" className={`pane ${activeSub !== "daun" ? "off" : ""}`} hidden={activeSub !== "daun"}>
        <h2>
          Daun <span className="latin-tag">Folium • Organum Assimilans</span>
        </h2>
        <p className="lead">
          Organ fotosintetik dan transpirasi utama, umumnya pipih dorsoventral, berklorofil, dan bertumbuh terbatas pada nodus batang. Daun lengkap (<i>folium completum</i>) memiliki pelepah (<i>vagina</i>), tangkai (<i>petiolus</i>), dan helaian (<i>lamina</i>).
        </p>
        <div className="grid">
          <figure className="box">
            <div className="plate-header">
              <span>Tabula III.1</span>
              <span>Folium Completum</span>
            </div>
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
                Apex (ujung)
              </text>
              <line className="ln" x1="196" y1="100" x2="225" y2="80" />
              <text x="228" y="84">
                Margo (tepi)
              </text>
              <line className="ln" x1="180" y1="126" x2="225" y2="126" />
              <text x="228" y="130">
                Nervus lateralis
              </text>
              <line className="ln" x1="150" y1="150" x2="70" y2="150" />
              <text x="6" y="154">
                Costa media
              </text>
              <line className="ln" x1="120" y1="80" x2="70" y2="70" />
              <text x="6" y="74">
                Lamina (helaian)
              </text>
              <line className="ln" x1="150" y1="190" x2="225" y2="190" />
              <text x="228" y="194">
                Basis (pangkal)
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
            <figcaption>Morfologi daun lengkap (folium completum): pelepah, tangkai, dan helaian.</figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula III.2</span>
              <span>Nervatio Folii</span>
            </div>
            <svg viewBox="0 0 300 255" role="img" aria-label="Empat pola utama pertulangan daun">
              {/* Garis pemisah halus antar kuadran */}
              <line x1="150" y1="12" x2="150" y2="242" stroke="var(--line)" strokeDasharray="3 3" opacity="0.6" />
              <line x1="15" y1="125" x2="285" y2="125" stroke="var(--line)" strokeDasharray="3 3" opacity="0.6" />

              {/* 1. Penninervis (Menyirip) - Kiri Atas */}
              <g>
                <path d="M75 14 C48 36 48 68 75 78 C102 68 102 36 75 14 Z" fill="var(--leaf)" opacity="0.88" />
                <path d="M75 78 V86" stroke="var(--stem)" strokeWidth="2.2" strokeLinecap="round" />
                <g stroke="var(--soft)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                  <path d="M75 16 V78" />
                  <path d="M75 64 l-16 -12 M75 50 l-16 -12 M75 36 l-12 -10" />
                  <path d="M75 64 l16 -12 M75 50 l16 -12 M75 36 l12 -10" />
                </g>
                <text x="75" y="102" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Penninervis (Menyirip)
                </text>
                <text x="75" y="115" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  Mangifera, Psidium
                </text>
              </g>

              {/* 2. Palminervis (Menjari) - Kanan Atas */}
              <g>
                <path d="M225 14 C218 32 204 27 195 30 C204 44 190 50 182 56 C198 66 212 78 225 78 C238 78 252 66 268 56 C260 50 246 44 255 30 C246 27 232 32 225 14 Z" fill="var(--leaf)" opacity="0.88" />
                <path d="M225 78 V86" stroke="var(--stem)" strokeWidth="2.2" strokeLinecap="round" />
                <g stroke="var(--soft)" strokeWidth="1.5" fill="none" strokeLinecap="round">
                  <path d="M225 78 V18" />
                  <path d="M225 78 L198 34" />
                  <path d="M225 78 L252 34" />
                  <path d="M225 78 L186 58" />
                  <path d="M225 78 L264 58" />
                </g>
                <text x="225" y="102" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Palminervis (Menjari)
                </text>
                <text x="225" y="115" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  Carica, Manihot
                </text>
              </g>

              {/* 3. Rectinervis (Sejajar) - Kiri Bawah */}
              <g>
                <path d="M66 142 C62 165 62 188 68 206 H82 C88 188 88 165 84 142 C80 134 70 134 66 142 Z" fill="var(--leaf)" opacity="0.88" />
                <path d="M75 206 V214" stroke="var(--stem)" strokeWidth="2.2" strokeLinecap="round" />
                <g stroke="var(--soft)" strokeWidth="1.3" fill="none" strokeLinecap="round">
                  <path d="M75 137 V206" strokeWidth="1.6" />
                  <path d="M70 142 V205" />
                  <path d="M80 142 V205" />
                  <path d="M66 148 V203" />
                  <path d="M84 148 V203" />
                </g>
                <text x="75" y="230" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Rectinervis (Sejajar)
                </text>
                <text x="75" y="243" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  Oryza, Zea mays
                </text>
              </g>

              {/* 4. Curvinervis (Melengkung) - Kanan Bawah */}
              <g>
                <path d="M225 136 C205 153 195 180 216 205 C222 208 225 208 225 208 C225 208 228 208 234 205 C255 180 245 153 225 136 Z" fill="var(--leaf)" opacity="0.88" />
                <path d="M225 208 V216" stroke="var(--stem)" strokeWidth="2.2" strokeLinecap="round" />
                <g stroke="var(--soft)" strokeWidth="1.4" fill="none" strokeLinecap="round">
                  <path d="M225 208 V138" strokeWidth="1.6" />
                  <path d="M225 205 C205 188 205 156 225 138" />
                  <path d="M225 205 C245 188 245 156 225 138" />
                  <path d="M225 205 C213 192 213 168 225 148" />
                  <path d="M225 205 C237 192 237 168 225 148" />
                </g>
                <text x="225" y="230" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Curvinervis (Melengkung)
                </text>
                <text x="225" y="243" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  Piper betle, Dioscorea
                </text>
              </g>
            </svg>
            <figcaption>Empat pola utama pertulangan daun (nervatio). Melengkung: <i>Piper betle</i>.</figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula III.3</span>
              <span>Circumscriptio Laminae</span>
            </div>
            <svg viewBox="0 0 300 236" role="img" aria-label="Bentuk helaian daun">
              <g transform="translate(37.5 32)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
              </g>
              <text x="37.5" y="72" textAnchor="middle">
                Orbicularis
              </text>
              <g transform="translate(112.5 32)" fill="var(--leaf)" opacity="0.9">
                <ellipse rx="14" ry="24" />
              </g>
              <text x="112.5" y="72" textAnchor="middle">
                Ovalis
              </text>
              <g transform="translate(187.5 32)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z" />
              </g>
              <text x="187.5" y="72" textAnchor="middle">
                Ovatus
              </text>
              <g transform="translate(262.5 32)" fill="var(--leaf)" opacity="0.9">
                <path
                  transform="scale(1 -1)"
                  d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z"
                />
              </g>
              <text x="262.5" y="72" textAnchor="middle">
                Obovatus
              </text>

              <g transform="translate(37.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C6-14 10 0 9 8C8 18 4 22 0 26C-4 22-8 18-9 8C-10 0-6-14 0-26z" />
              </g>
              <text x="37.5" y="150" textAnchor="middle">
                Lanceolatus
              </text>
              <g transform="translate(112.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26L2.5 26H-2.5z" />
              </g>
              <text x="112.5" y="150" textAnchor="middle">
                Acerosus
              </text>
              <g transform="translate(187.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M-4-26h8v52h-8z" />
              </g>
              <text x="187.5" y="150" textAnchor="middle">
                Linearis
              </text>
              <g transform="translate(262.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C-30-4-24 20-10 20C-4 20 0 14 0 10C0 14 4 20 10 20C24 20 30-4 0-26z" />
              </g>
              <text x="262.5" y="150" textAnchor="middle">
                Cordatus
              </text>

              <g transform="translate(37.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M-22 8C-22-14-6-18 0-12C6-18 22-14 22 8C22 20 10 22 0 16C-10 22-22 20-22 8z" />
              </g>
              <text x="37.5" y="228" textAnchor="middle">
                Reniformis
              </text>
              <g transform="translate(112.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24L22 22H-22z" />
              </g>
              <text x="112.5" y="228" textAnchor="middle">
                Triangularis
              </text>
              <g transform="translate(187.5 188)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
                <path d="M0 0V26" stroke="var(--stem)" strokeWidth="3" />
                <circle r="3" fill="var(--soft)" />
              </g>
              <text x="187.5" y="228" textAnchor="middle">
                Peltatus
              </text>
              <g transform="translate(262.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C14-26 14-6 5 6C2 14 2 20 0 26C-2 20-2 14-5 6C-14-6-14-26 0-26z" />
              </g>
              <text x="262.5" y="228" textAnchor="middle">
                Spathulatus
              </text>
            </svg>
            <figcaption>Bangun geometris helaian daun (circumscriptio laminae).</figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula III.4</span>
              <span>Margo Folii</span>
            </div>
            <svg viewBox="0 0 300 200" role="img" aria-label="Pola tepi helaian daun">
              <g transform="translate(10 24)">
                <path d="M0 0H120" fill="none" stroke="var(--leaf)" strokeWidth="2.5" />
              </g>
              <text x="150" y="28">
                Integer (Rata)
              </text>
              <g transform="translate(10 62)">
                <path
                  d="M0 0l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8l10-8v8"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="66">
                Serratus (Bergerigi)
              </text>
              <g transform="translate(10 100)">
                <path
                  d="M0 0l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8l5-8l5 8"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="104">
                Dentatus (Bergigi)
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
                Crenatus (Beringgit)
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
                Repandus (Bergelombang)
              </text>
            </svg>
            <figcaption>Pola insisi toreh tepi helaian daun (margo folii).</figcaption>
          </figure>

          <figure className="box">
            <div className="plate-header">
              <span>Tabula III.5</span>
              <span>Simplex et Compositum</span>
            </div>
            <svg viewBox="0 0 330 172" role="img" aria-label="Daun tunggal dan majemuk">
              {/* 1. Folium Simplex (Tunggal) */}
              <g>
                <path d="M55 138 V75" stroke="var(--stem)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M55 105 C30 98 26 62 55 26 C84 62 80 98 55 105 Z" fill="var(--leaf)" opacity="0.88" />
                <path d="M55 105 V34" stroke="var(--soft)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                <text x="55" y="152" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Simplex
                </text>
                <text x="55" y="165" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  (Tunggal)
                </text>
              </g>

              {/* 2. Folium Compositum Pinnatum (Majemuk Menyirip) */}
              <g>
                <path d="M165 138 V36" stroke="var(--stem)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                {/* Anak daun terminal di pucuk */}
                <path d="M165 38 C158 30 159 18 165 12 C171 18 172 30 165 38 Z" fill="var(--leaf)" opacity="0.88" />
                {/* Pasangan anak daun atas */}
                <path d="M165 56 l-14 -3 M165 56 l14 -3" stroke="var(--stem)" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="141" cy="52" rx="14" ry="7" transform="rotate(-15 141 52)" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="189" cy="52" rx="14" ry="7" transform="rotate(15 189 52)" fill="var(--leaf)" opacity="0.88" />
                {/* Pasangan anak daun bawah */}
                <path d="M165 84 l-14 -3 M165 84 l14 -3" stroke="var(--stem)" strokeWidth="1.5" strokeLinecap="round" />
                <ellipse cx="141" cy="80" rx="14" ry="7" transform="rotate(-15 141 80)" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="189" cy="80" rx="14" ry="7" transform="rotate(15 189 80)" fill="var(--leaf)" opacity="0.88" />
                <text x="165" y="152" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Pinnatum
                </text>
                <text x="165" y="165" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  (Menyirip)
                </text>
              </g>

              {/* 3. Folium Compositum Palmatum (Majemuk Menjari) */}
              <g>
                <path d="M275 138 V70" stroke="var(--stem)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <path d="M275 70 V48 M275 70 L250 54 M275 70 L300 54 M275 70 L244 74 M275 70 L306 74" stroke="var(--stem)" strokeWidth="1.5" strokeLinecap="round" />
                {/* Anak daun menjari */}
                <ellipse cx="275" cy="34" rx="8" ry="15" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="240" cy="46" rx="14" ry="7.5" transform="rotate(-30 240 46)" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="310" cy="46" rx="14" ry="7.5" transform="rotate(30 310 46)" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="234" cy="72" rx="13" ry="7" transform="rotate(-60 234 72)" fill="var(--leaf)" opacity="0.88" />
                <ellipse cx="316" cy="72" rx="13" ry="7" transform="rotate(60 316 72)" fill="var(--leaf)" opacity="0.88" />
                <text x="275" y="152" textAnchor="middle" fontWeight="700" fontSize="11" fill="var(--ink)">
                  Palmatum
                </text>
                <text x="275" y="165" textAnchor="middle" fontSize="9.5" fill="var(--mute)">
                  (Menjari)
                </text>
              </g>
            </svg>
            <figcaption>Daun tunggal (folium simplex) vs majemuk menyirip &amp; menjari (folium compositum).</figcaption>
          </figure>
        </div>

        <h3>Karakter Organografis Daun Tambahan</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Parameter Morfologis</th>
                <th>Terminologi &amp; Takson Contoh</th>
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
                <th>Karakter Dudukan Buku</th>
                <th>Spesimen Terkait</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Berseling (folia sparsa)</td>
                <td>Satu helai daun per nodus, tersusun spiral bergiliran</td>
                <td><i>Mangifera indica</i>, <i>Rosa</i> sp.</td>
              </tr>
              <tr>
                <td>Berhadapan (folia opposita)</td>
                <td>Dua helai daun per nodus, berpasangan simetris 180°</td>
                <td><i>Syzygium aqueum</i> (jambu air), <i>Jasminum</i></td>
              </tr>
              <tr>
                <td>Berkarang (folia verticillata)</td>
                <td>Tiga helai daun atau lebih tersusun melingkar pada satu nodus</td>
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
                <th>Fungsi Adaptif &amp; Karakter</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duri daun (spina foliaris)</td>
                <td>Minimasi laju transpirasi serta proteksi dari herbivora</td>
                <td>Cactaceae, <i>Aloe</i> sp.</td>
              </tr>
              <tr>
                <td>Sulur daun (cirrhus foliaris)</td>
                <td>Organ pemanjat hasil reduksi ujung helaian atau rakis daun majemuk</td>
                <td><i>Pisum sativum</i> (kacang kapri), <i>Gloriosa superba</i></td>
              </tr>
              <tr>
                <td>Piala / kantong perangkap</td>
                <td>Modifikasi helaian penjerat dan pencerna artropoda pada tanah oligotrof</td>
                <td><i>Nepenthes</i> sp. (kantong semar)</td>
              </tr>
              <tr>
                <td>Daun pelindung (bractea)</td>
                <td>Menarik polinator dengan pigmen mencolok menyerupai korola bunga</td>
                <td><i>Bougainvillea</i>, <i>Euphorbia pulcherrima</i></td>
              </tr>
              <tr>
                <td>Daun penyimpan sukulen</td>
                <td>Retensi air dalam jaringan spons parenkim akuifer</td>
                <td><i>Aloe vera</i>, <i>Sansevieria</i> sp.</td>
              </tr>
              <tr>
                <td>Sisik kuncup (squama)</td>
                <td>Melindungi meristem kuncup dorman dan cadangan pati</td>
                <td><i>Allium</i> sp., rimpang Zingiberaceae</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Kunci Lapangan:</b> Pola venasi menyirip (<i>penninervis</i>) atau menjari (<i>palminervis</i>) berkorelasi stabil dengan kelas Magnoliopsida (Dikotil), sedangkan venasi sejajar (<i>rectinervis</i>) atau melengkung (<i>curvinervis</i>) mencirikan Liliopsida (Monokotil).
        </div>
      </section>

      {/* ================= BUNGA ================= */}
      <section id="bunga" className={`pane ${activeSub !== "bunga" ? "off" : ""}`} hidden={activeSub !== "bunga"}>
        <h2>
          Bunga &amp; Buah <span className="latin-tag">Flos &amp; Fructus • Organa Reproductiva</span>
        </h2>
        <p className="lead">
          Organ reproduktif generasi tumbuhan berbiji (<i>Spermatophyta</i>). Bunga lengkap (<i>flos completus</i>) tersusun atas empat lingkaran: kelopak (<i>calyx</i>), mahkota (<i>corolla</i>), benang sari (<i>stamen</i>), dan putik (<i>pistillum</i>).
        </p>

        <h3>Tipe Perbungaan Majemuk (Inflorescentia)</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Tipe Perbungaan</th>
                <th>Karakter Morfologis Sumbu Bunga</th>
                <th>Contoh Takson</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tandan (racemus)</td>
                <td>Kuntum bunga bertangkai nyata pada sumbu utama tak bercabang</td>
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
                <td>Seluruh tangkai bunga berukuran sama keluar dari satu nodus apeks</td>
                <td><i>Allium cepa</i>, Apiaceae (wortel, seledri)</td>
              </tr>
              <tr>
                <td>Bongkol (capitulum)</td>
                <td>Kuntum bunga pita dan tabung duduk rapat pada dasar cawan melebar</td>
                <td>Asteraceae (<i>Helianthus annuus</i>, kenikir)</td>
              </tr>
              <tr>
                <td>Tongkol (spadix)</td>
                <td>Bulir berdaging tebal, umumnya dilindungi oleh seludang (spatha)</td>
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
                <th>Karakter Perikarp &amp; Lokulus</th>
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
                <td>Perikarp berlekatan intim dan menyatu utuh dengan kulit biji</td>
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
