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

      {/* ================= BIJI ================= */}
      <section id="biji" className={`pane ${activeSub !== "biji" ? "off" : ""}`} hidden={activeSub !== "biji"}>
        <h2>
          Biji <span className="latin-tag">Semen • Organum Propagationis</span>
        </h2>
        <p className="lead">
          Biji adalah ovulum yang telah masak setelah proses pembuahan (<i>fertilisasi</i>). Merupakan satuan diseminasi tumbuhan berbiji (<i>Spermatophyta</i>) yang mengandung embrio — calon individu baru — dilindungi oleh kulit biji (<i>testa</i>) dan umumnya disertai cadangan makanan (<i>endosperma</i> atau <i>kotiledon</i>).
        </p>

        <div className="grid">

          {/* Tabula V.1 - Anatomi Biji Dikotil */}
          <figure className="box">
            <div className="plate-header">
              <span>Tabula V.1</span>
              <span>Anatomi Semen Dicotyledonae</span>
            </div>
            <svg viewBox="0 0 380 290" role="img" aria-label="Anatomi biji dikotil">
              {/* Testa (kulit luar) */}
              <ellipse cx="180" cy="150" rx="105" ry="80" fill="var(--soft)" stroke="var(--root)" strokeWidth="5"/>
              {/* Tegmen (kulit dalam - tracing putus) */}
              <ellipse cx="180" cy="150" rx="96" ry="72" fill="none" stroke="var(--leaf)" strokeWidth="1.5" strokeDasharray="4 2"/>
              {/* Kotiledon kiri */}
              <ellipse cx="158" cy="155" rx="58" ry="55" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.5" opacity="0.6"/>
              {/* Kotiledon kanan */}
              <ellipse cx="202" cy="155" rx="58" ry="55" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.5" opacity="0.6"/>
              {/* Axis embrio */}
              <rect x="168" y="125" width="24" height="58" rx="10" fill="var(--flower,#e91e8c)" opacity="0.6"/>
              {/* Plumula */}
              <ellipse cx="180" cy="122" rx="14" ry="8" fill="var(--leaf)" opacity="0.85"/>
              {/* Radikula */}
              <ellipse cx="180" cy="188" rx="10" ry="6" fill="var(--root)" opacity="0.8"/>
              {/* Hilum */}
              <ellipse cx="77" cy="150" rx="8" ry="14" fill="var(--mute)" stroke="var(--fg)" strokeWidth="1.2"/>
              {/* Mikropil */}
              <circle cx="77" cy="132" r="3" fill="var(--fg)" opacity="0.5"/>
              {/* Chalaza */}
              <circle cx="77" cy="168" r="3" fill="var(--fg)" opacity="0.5"/>

              {/* Kiri — Mikropil */}
              <line x1="74" y1="129" x2="40" y2="95" stroke="var(--mute)" strokeWidth="1"/>
              <text x="5" y="88" fontSize="8" fill="var(--fg)" fontWeight="600">Mikropil</text>
              <text x="5" y="99" fontSize="7" fill="var(--mute)">(lubang serbuk sari)</text>

              {/* Kiri — Hilum */}
              <line x1="69" y1="142" x2="40" y2="125" stroke="var(--mute)" strokeWidth="1"/>
              <text x="5" y="120" fontSize="8" fill="var(--fg)" fontWeight="600">Hilum</text>
              <text x="5" y="131" fontSize="7" fill="var(--mute)">(pusar biji)</text>

              {/* Kiri — Chalaza */}
              <line x1="74" y1="170" x2="40" y2="185" stroke="var(--mute)" strokeWidth="1"/>
              <text x="5" y="181" fontSize="8" fill="var(--fg)" fontWeight="600">Chalaza</text>
              <text x="5" y="192" fontSize="7" fill="var(--mute)">(dasar ovulum)</text>

              {/* Kanan atas — Testa */}
              <line x1="264" y1="90" x2="300" y2="70" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="67" fontSize="8" fill="var(--fg)" fontWeight="600">Testa</text>
              <text x="302" y="78" fontSize="7" fill="var(--mute)">(kulit luar)</text>

              {/* Kanan — Tegmen */}
              <line x1="259" y1="107" x2="300" y2="95" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="92" fontSize="8" fill="var(--fg)" fontWeight="600">Tegmen</text>
              <text x="302" y="103" fontSize="7" fill="var(--mute)">(kulit dalam)</text>

              {/* Kanan — Kotiledon */}
              <line x1="250" y1="172" x2="300" y2="168" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="165" fontSize="8" fill="var(--fg)" fontWeight="600">Kotiledon</text>

              {/* Kanan — Axis embrio */}
              <line x1="192" y1="148" x2="300" y2="140" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="137" fontSize="8" fill="var(--fg)" fontWeight="600">Axis embrio</text>

              {/* Kanan — Plumula */}
              <line x1="192" y1="122" x2="300" y2="110" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="107" fontSize="8" fill="var(--fg)" fontWeight="600">Plumula</text>
              <text x="302" y="118" fontSize="7" fill="var(--mute)">(calon pucuk)</text>

              {/* Kanan — Radikula */}
              <line x1="188" y1="192" x2="300" y2="200" stroke="var(--mute)" strokeWidth="1"/>
              <text x="302" y="197" fontSize="8" fill="var(--fg)" fontWeight="600">Radikula</text>
              <text x="302" y="208" fontSize="7" fill="var(--mute)">(calon akar)</text>

              <text x="160" y="282" fontSize="8" fontStyle="italic" fill="var(--mute)" textAnchor="middle">Phaseolus vulgaris (kacang merah)</text>
            </svg>
            <figcaption>
              Penampang biji dikotil. Embrio terdiri atas plumula, radikula, dan dua kotiledon yang berfungsi sebagai cadangan makanan.
            </figcaption>
          </figure>

          {/* Tabula V.2 - Anatomi Biji Monokotil */}
          <figure className="box">
            <div className="plate-header">
              <span>Tabula V.2</span>
              <span>Anatomi Semen Monocotyledonae</span>
            </div>
            <svg viewBox="0 0 300 270" role="img" aria-label="Anatomi biji monokotil">
              <rect x="85" y="20" width="130" height="210" rx="20" fill="var(--soft)" stroke="var(--root)" strokeWidth="2.5"/>
              <rect x="92" y="28" width="110" height="145" rx="14" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.5" opacity="0.7"/>
              <rect x="92" y="28" width="110" height="18" rx="10" fill="var(--flower,#e91e8c)" opacity="0.4"/>
              <text x="147" y="41" textAnchor="middle" fontSize="8" fill="var(--fg)">Lapisan aleuron</text>
              <text x="147" y="100" textAnchor="middle" fontSize="10" fontWeight="700" fill="var(--fg)">Endosperma</text>
              <ellipse cx="150" cy="195" rx="35" ry="25" fill="var(--leaf)" opacity="0.6" stroke="var(--leaf)" strokeWidth="1.5"/>
              <ellipse cx="150" cy="175" rx="28" ry="14" fill="var(--leaf)" opacity="0.5"/>
              <rect x="143" y="173" width="14" height="22" rx="5" fill="var(--leaf)" opacity="0.85"/>
              <ellipse cx="150" cy="210" rx="10" ry="7" fill="var(--root)" opacity="0.8"/>
              <line x1="100" y1="90" x2="42" y2="90" stroke="var(--mute)" strokeWidth="1"/>
              <text x="2" y="87" fontSize="7.5" fill="var(--fg)">Endosperma</text>
              <line x1="87" y1="22" x2="42" y2="12" stroke="var(--mute)" strokeWidth="1"/>
              <text x="2" y="10" fontSize="7.5" fill="var(--fg)">Pericarp+Testa</text>
              <line x1="178" y1="175" x2="230" y2="155" stroke="var(--mute)" strokeWidth="1"/>
              <text x="231" y="152" fontSize="7.5" fill="var(--fg)">Skutelum</text>
              <line x1="157" y1="184" x2="230" y2="182" stroke="var(--mute)" strokeWidth="1"/>
              <text x="231" y="179" fontSize="7.5" fill="var(--fg)">Koleoptil</text>
              <line x1="178" y1="198" x2="230" y2="208" stroke="var(--mute)" strokeWidth="1"/>
              <text x="231" y="205" fontSize="7.5" fill="var(--fg)">Embrio</text>
              <line x1="158" y1="213" x2="230" y2="225" stroke="var(--mute)" strokeWidth="1"/>
              <text x="231" y="222" fontSize="7.5" fill="var(--fg)">Koleorhiza</text>
              <text x="110" y="265" fontSize="8" fontStyle="italic" fill="var(--mute)" textAnchor="middle">Zea mays (jagung)</text>
            </svg>
            <figcaption>
              Penampang biji monokotil (Gramineae). Endosperma mendominasi volume biji; embrio berada di tepi dengan skutelum sebagai kotiledon tunggal.
            </figcaption>
          </figure>

          {/* Tabula V.3 - Kulit Biji */}
          <figure className="box">
            <div className="plate-header">
              <span>Tabula V.3</span>
              <span>Integumentum Seminis</span>
            </div>
            <svg viewBox="0 0 300 320" role="img" aria-label="Lapisan kulit biji">
              {/* Outer border */}
              <rect x="20" y="10" width="260" height="295" rx="8" fill="var(--bg,#fff)" stroke="var(--line)" strokeWidth="1.2"/>

              {/* === TESTA zone (row 1) === */}
              <rect x="20" y="10" width="260" height="78" rx="8" fill="var(--root)" opacity="0.18"/>
              {/* Exotesta sub-row */}
              <rect x="20" y="10" width="260" height="26" rx="8" fill="var(--root)" opacity="0.35"/>
              <text x="150" y="27" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--fg)">Exotesta</text>
              <text x="150" y="38" textAnchor="middle" fontSize="7.5" fill="var(--mute)">sel epidermis luar (kulit luar)</text>
              {/* Mesotesta sub-row */}
              <text x="150" y="54" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--fg)">Mesotesta</text>
              <text x="150" y="65" textAnchor="middle" fontSize="7.5" fill="var(--mute)">sel parenkim dan sklerenkim</text>
              {/* TESTA label */}
              <text x="150" y="82" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--root)" opacity="0.85">▲ TESTA (Kulit Luar / Spermodermis)</text>

              {/* === TEGMEN zone (row 2) === */}
              <rect x="20" y="88" width="260" height="42" fill="var(--leaf)" opacity="0.16"/>
              <text x="150" y="106" textAnchor="middle" fontSize="9.5" fontWeight="800" fill="var(--leaf)">TEGMEN (Kulit Dalam)</text>
              <text x="150" y="119" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Dari integumen dalam ovulum; sering tipis/menyatu dengan testa</text>

              {/* === 3 boxes row === */}
              {/* Hilum */}
              <rect x="20" y="130" width="82" height="72" fill="var(--flower,#e91e8c)" opacity="0.12" stroke="var(--flower,#e91e8c)" strokeWidth="0.8"/>
              <text x="61" y="148" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--fg)">Hilum</text>
              <text x="61" y="161" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Pusar biji</text>
              <text x="61" y="172" textAnchor="middle" fontSize="7.5" fill="var(--mute)">(bekas funikulus</text>
              <text x="61" y="183" textAnchor="middle" fontSize="7.5" fill="var(--mute)">/ tangkai ovulum)</text>

              {/* Mikropil */}
              <rect x="109" y="130" width="82" height="72" fill="var(--accent,#9c27b0)" opacity="0.09" stroke="var(--accent,#9c27b0)" strokeWidth="0.8"/>
              <text x="150" y="148" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--fg)">Mikropil</text>
              <text x="150" y="161" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Lubang kecil pada</text>
              <text x="150" y="172" textAnchor="middle" fontSize="7.5" fill="var(--mute)">integumen; jalur</text>
              <text x="150" y="183" textAnchor="middle" fontSize="7.5" fill="var(--mute)">serbuk sari masuk</text>

              {/* Raphe */}
              <rect x="198" y="130" width="82" height="72" fill="var(--soft)" stroke="var(--line)" strokeWidth="0.8"/>
              <text x="239" y="148" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--fg)">Raphe</text>
              <text x="239" y="161" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Alur pada testa;</text>
              <text x="239" y="172" textAnchor="middle" fontSize="7.5" fill="var(--mute)">sisa funikulus</text>
              <text x="239" y="183" textAnchor="middle" fontSize="7.5" fill="var(--mute)">yang berfusi</text>

              {/* === Chalaza zone (row 4) === */}
              <rect x="20" y="202" width="260" height="90" rx="8" fill="var(--soft)" stroke="var(--line)" strokeWidth="1"/>
              <text x="150" y="222" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--fg)">Chalaza</text>
              <text x="150" y="237" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Ujung basal ovulum — tempat funikulus bersambung ke nukselus.</text>
              <text x="150" y="250" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Penting dalam transfer nutrisi dari tumbuhan induk ke embrio.</text>
              <text x="150" y="263" textAnchor="middle" fontSize="7.5" fill="var(--mute)">Integumen berfusi kuat di titik ini membentuk chalazogami pada</text>
              <text x="150" y="276" textAnchor="middle" fontSize="7.5" fill="var(--mute)">beberapa taksa (mis. Casuarina, Betula).</text>
            </svg>
            <figcaption>
              Lapisan integumen biji: testa, tegmen, hilum (pusar biji), mikropil, raphe, dan chalaza.
            </figcaption>
          </figure>

          {/* Tabula V.4 - Embrio dan Plantula */}
          <figure className="box">
            <div className="plate-header">
              <span>Tabula V.4</span>
              <span>Embryo et Plantula</span>
            </div>
            <svg viewBox="0 0 300 270" role="img" aria-label="Struktur embrio dan plantula">
              <text x="75" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--fg)">Embrio</text>
              <ellipse cx="75" cy="50" rx="20" ry="13" fill="var(--leaf)" opacity="0.8"/>
              <text x="105" y="48" fontSize="8" fill="var(--fg)">Plumula</text>
              <rect x="68" y="63" width="14" height="22" rx="4" fill="var(--leaf)" opacity="0.55"/>
              <text x="105" y="76" fontSize="8" fill="var(--fg)">Epikotil</text>
              <line x1="88" y1="74" x2="104" y2="74" stroke="var(--mute)" strokeWidth="0.8"/>
              <ellipse cx="55" cy="95" rx="20" ry="12" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.2"/>
              <ellipse cx="95" cy="95" rx="20" ry="12" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.2"/>
              <text x="105" y="100" fontSize="8" fill="var(--fg)">Kotiledon</text>
              <line x1="101" y1="96" x2="104" y2="98" stroke="var(--mute)" strokeWidth="0.8"/>
              <rect x="68" y="107" width="14" height="28" rx="4" fill="var(--root)" opacity="0.5"/>
              <text x="105" y="124" fontSize="8" fill="var(--fg)">Hipokotil</text>
              <line x1="88" y1="121" x2="104" y2="122" stroke="var(--mute)" strokeWidth="0.8"/>
              <path d="M75 135 Q65 150 60 172 M75 135 Q85 150 90 172" stroke="var(--root)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              <text x="105" y="153" fontSize="8" fill="var(--fg)">Radikula</text>
              <line x1="88" y1="150" x2="104" y2="151" stroke="var(--mute)" strokeWidth="0.8"/>
              <text x="75" y="195" textAnchor="middle" fontSize="7.5" fontStyle="italic" fill="var(--mute)">Axis embrio (Dikotil)</text>
              <line x1="152" y1="8" x2="152" y2="262" stroke="var(--line)" strokeDasharray="4 3" strokeWidth="1"/>
              <text x="225" y="16" textAnchor="middle" fontSize="9" fontWeight="700" fill="var(--fg)">Plantula</text>
              <text x="225" y="26" textAnchor="middle" fontSize="7.5" fill="var(--mute)">(kecambah / semai)</text>
              <ellipse cx="215" cy="52" rx="14" ry="9" fill="var(--leaf)" transform="rotate(-20 215 52)"/>
              <ellipse cx="235" cy="49" rx="14" ry="9" fill="var(--leaf)" transform="rotate(15 235 49)"/>
              <line x1="225" y1="60" x2="225" y2="88" stroke="var(--leaf)" strokeWidth="3" strokeLinecap="round"/>
              <ellipse cx="210" cy="93" rx="16" ry="9" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.2" opacity="0.8"/>
              <ellipse cx="240" cy="93" rx="16" ry="9" fill="var(--soft)" stroke="var(--accent,#9c27b0)" strokeWidth="1.2" opacity="0.8"/>
              <text x="165" y="96" fontSize="7" fill="var(--mute)">Kotiledon</text>
              <text x="165" y="106" fontSize="7" fill="var(--mute)">(epigeal)</text>
              <line x1="225" y1="101" x2="225" y2="148" stroke="var(--root)" strokeWidth="3.5" strokeLinecap="round"/>
              <text x="168" y="132" fontSize="7.5" fill="var(--fg)">Hipokotil</text>
              <line x1="225" y1="148" x2="225" y2="195" stroke="var(--root)" strokeWidth="3" strokeLinecap="round"/>
              <path d="M225 158 l-18 18 M225 172 l-14 16 M225 172 l14 16 M225 158 l18 18" stroke="var(--root)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <text x="168" y="190" fontSize="7.5" fill="var(--fg)">Akar primer</text>
              <text x="225" y="245" textAnchor="middle" fontSize="7.5" fontStyle="italic" fill="var(--mute)">Tipe perkecambahan epigeal</text>
            </svg>
            <figcaption>
              Struktur embrio (kiri) vs plantula tipe epigeal (kanan). Kotiledon terangkat di atas tanah pada perkecambahan epigeal.
            </figcaption>
          </figure>

        </div>

        <h3>Komponen Utama Biji dan Fungsinya</h3>
        <table>
          <thead>
            <tr>
              <th>Struktur</th>
              <th>Nama Latin</th>
              <th>Asal</th>
              <th>Fungsi Utama</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Kulit biji luar</strong></td>
              <td><i>Testa</i></td>
              <td>Integumen luar ovulum</td>
              <td>Proteksi mekanik, kedap air, mencegah dehidrasi embrio</td>
            </tr>
            <tr>
              <td><strong>Kulit biji dalam</strong></td>
              <td><i>Tegmen</i></td>
              <td>Integumen dalam ovulum</td>
              <td>Penghalang tambahan; sering tipis atau menyatu dengan testa</td>
            </tr>
            <tr>
              <td><strong>Pusar biji</strong></td>
              <td><i>Hilum</i></td>
              <td>Bekas funikulus (tangkai ovulum)</td>
              <td>Penanda tempat lepasnya biji dari plasenta; jalur masuk air awal</td>
            </tr>
            <tr>
              <td><strong>Mikropil</strong></td>
              <td><i>Micropyle</i></td>
              <td>Lubang pada integumen</td>
              <td>Jalur masuk tabung serbuk sari saat fertilisasi; jalur imbibisi saat germinasi</td>
            </tr>
            <tr>
              <td><strong>Chalaza</strong></td>
              <td><i>Chalaza</i></td>
              <td>Dasar nuselus</td>
              <td>Titik perlekatan integumen; jalur transfer nutrisi ke embrio</td>
            </tr>
            <tr>
              <td><strong>Raphe</strong></td>
              <td><i>Raphe</i></td>
              <td>Funikulus yang berfusi ke testa</td>
              <td>Terlihat sebagai alur pada testa; penanda orientasi biji</td>
            </tr>
            <tr>
              <td><strong>Inti biji / Endosperma</strong></td>
              <td><i>Endospermum</i></td>
              <td>Hasil pembuahan ganda (inti polar + inti sperma)</td>
              <td>Cadangan makanan: pati, lemak, protein; dominan pada Monokotil</td>
            </tr>
            <tr>
              <td><strong>Kotiledon</strong></td>
              <td><i>Cotyledon</i></td>
              <td>Daun embrio</td>
              <td>Cadangan makanan pada Dikotil; penyerap endosperma pada Gramineae (skutelum)</td>
            </tr>
            <tr>
              <td><strong>Plumula</strong></td>
              <td><i>Plumula</i></td>
              <td>Ujung apikal axis embrio</td>
              <td>Calon pucuk daun pertama; terbungkus koleoptil pada Monokotil</td>
            </tr>
            <tr>
              <td><strong>Epikotil</strong></td>
              <td><i>Epicotyl</i></td>
              <td>Axis embrio di atas kotiledon</td>
              <td>Berkembang menjadi batang dan daun di atas tanah</td>
            </tr>
            <tr>
              <td><strong>Hipokotil</strong></td>
              <td><i>Hypocotyl</i></td>
              <td>Axis embrio di bawah kotiledon</td>
              <td>Penghubung kotiledon dan radikula; memanjang kuat pada tipe epigeal</td>
            </tr>
            <tr>
              <td><strong>Radikula</strong></td>
              <td><i>Radicula</i></td>
              <td>Ujung basal axis embrio</td>
              <td>Calon akar primer; organ pertama yang muncul saat germinasi</td>
            </tr>
            <tr>
              <td><strong>Plantula</strong></td>
              <td><i>Plantula</i></td>
              <td>Embrio yang sedang berkecambah</td>
              <td>Fase kecambah muda sampai tumbuhan mampu berfotosintesis mandiri</td>
            </tr>
          </tbody>
        </table>

        <h3>Tipe Perkecambahan Berdasarkan Posisi Kotiledon</h3>
        <table>
          <thead>
            <tr>
              <th>Tipe</th>
              <th>Ciri Khas</th>
              <th>Organ Pemanjang</th>
              <th>Contoh</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Epigeal</strong></td>
              <td>Kotiledon terangkat ke atas permukaan tanah</td>
              <td>Hipokotil memanjang kuat</td>
              <td><i>Phaseolus vulgaris</i> (kacang merah), <i>Ricinus communis</i> (jarak)</td>
            </tr>
            <tr>
              <td><strong>Hipogeal</strong></td>
              <td>Kotiledon tetap di dalam atau di permukaan tanah</td>
              <td>Epikotil memanjang kuat</td>
              <td><i>Pisum sativum</i> (kacang polong), <i>Zea mays</i> (jagung), <i>Mangifera indica</i> (mangga)</td>
            </tr>
          </tbody>
        </table>

        <h3>Perbandingan Biji Dikotil vs Monokotil</h3>
        <table>
          <thead>
            <tr>
              <th>Karakter</th>
              <th>Dicotyledonae</th>
              <th>Monocotyledonae</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jumlah kotiledon</td>
              <td>2 (<i>dicotyledon</i>)</td>
              <td>1 (<i>monocotyledon</i>); disebut skutelum pada Gramineae</td>
            </tr>
            <tr>
              <td>Endosperma saat biji masak</td>
              <td>Umumnya sedikit/tidak ada (diserap kotiledon)</td>
              <td>Sangat berkembang, mendominasi volume biji</td>
            </tr>
            <tr>
              <td>Lokasi cadangan makanan</td>
              <td>Di dalam kotiledon (pati, lemak, protein)</td>
              <td>Di dalam endosperma (terutama pati)</td>
            </tr>
            <tr>
              <td>Pelindung plumula</td>
              <td>Tidak ada selubung khusus</td>
              <td>Koleoptil</td>
            </tr>
            <tr>
              <td>Pelindung radikula</td>
              <td>Tidak ada selubung khusus</td>
              <td>Koleorhiza</td>
            </tr>
            <tr>
              <td>Tipe perkecambahan umum</td>
              <td>Epigeal atau hipogeal</td>
              <td>Umumnya hipogeal</td>
            </tr>
            <tr>
              <td>Contoh</td>
              <td><i>Phaseolus</i>, <i>Glycine max</i>, <i>Arachis hypogaea</i></td>
              <td><i>Zea mays</i>, <i>Oryza sativa</i>, <i>Cocos nucifera</i></td>
            </tr>
          </tbody>
        </table>

      </section>
    </div>
  );
};
