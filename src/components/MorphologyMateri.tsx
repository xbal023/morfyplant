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
          Akar
        </button>
        <button
          type="button"
          className={activeSub === "batang" ? "on" : ""}
          onClick={() => onSubChange("batang")}
        >
          Batang
        </button>
        <button
          type="button"
          className={activeSub === "daun" ? "on" : ""}
          onClick={() => onSubChange("daun")}
        >
          Daun
        </button>
        <button
          type="button"
          className={activeSub === "bunga" ? "on" : ""}
          onClick={() => onSubChange("bunga")}
        >
          Bunga &amp; buah
        </button>
      </nav>

      {/* ================= AKAR ================= */}
      <section id="akar" className={`pane ${activeSub !== "akar" ? "off" : ""}`}>
        <h2>Akar (radix)</h2>
        <p>
          Fungsi: menyerap air dan mineral, menambatkan tumbuhan, menyimpan cadangan makanan. Akar tidak beruas dan tidak punya daun.
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
                Batang
              </text>
              <text x="225" y="14" textAnchor="middle">
                Batang
              </text>
              <text x="80" y="252" fontWeight="700">
                Tunggang
              </text>
              <text x="212" y="254" fontWeight="700">
                Serabut
              </text>
              <text x="8" y="90">
                akar
              </text>
              <text x="8" y="102">
                cabang
              </text>
              <text x="86" y="60">
                akar pokok
              </text>
            </svg>
            <figcaption>Kiri: sistem akar tunggang (dikotil). Kanan: sistem akar serabut (monokotil).</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 260" role="img" aria-label="Struktur ujung akar">
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
                Tudung akar (kaliptra)
              </text>
              <line className="ln" x1="170" y1="196" x2="215" y2="196" />
              <text x="218" y="200">
                Zona meristem
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
                Menuju batang
              </text>
            </svg>
            <figcaption>Ujung akar dari bawah ke atas.</figcaption>
          </figure>
        </div>

        <h3>Ciri sistem akar</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Ciri</th>
                <th>Tunggang</th>
                <th>Serabut</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Akar utama</td>
                <td>Ada, besar, lurus ke bawah</td>
                <td>Tidak ada; akar sama besar</td>
              </tr>
              <tr>
                <td>Cabang</td>
                <td>Akar cabang keluar dari akar pokok</td>
                <td>Berupa serabut halus dari pangkal batang</td>
              </tr>
              <tr>
                <td>Kelompok</td>
                <td>Dikotil, gymnospermae</td>
                <td>Monokotil</td>
              </tr>
              <tr>
                <td>Contoh</td>
                <td>Mangga, kacang tanah, jeruk, cabai</td>
                <td>Padi, jagung, kelapa, rumput</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi akar</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Fungsi</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Umbi akar</td>
                <td>Menyimpan cadangan makanan</td>
                <td>Wortel, singkong, ubi jalar, bengkuang</td>
              </tr>
              <tr>
                <td>Akar napas (pneumatofor)</td>
                <td>Mengambil oksigen di lumpur</td>
                <td>Bakau/api-api, pedada</td>
              </tr>
              <tr>
                <td>Akar tunjang</td>
                <td>Menopang batang</td>
                <td>Bakau (Rhizophora), pandan, jagung</td>
              </tr>
              <tr>
                <td>Akar gantung</td>
                <td>Menyerap uap air dari udara</td>
                <td>Anggrek, beringin</td>
              </tr>
              <tr>
                <td>Akar banir</td>
                <td>Menopang pohon tinggi</td>
                <td>Kenari, kapuk</td>
              </tr>
              <tr>
                <td>Akar pengisap (haustorium)</td>
                <td>Menyerap makanan dari inang</td>
                <td>Benalu, kuscuta (tali putri)</td>
              </tr>
              <tr>
                <td>Akar pelekat/panjang</td>
                <td>Menempel pada penopang</td>
                <td>Sirih, lada, vanili</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          Ingat: akar yang tumbuh bukan dari akar pokok (misalnya dari batang) disebut <b>akar adventif</b>.
        </div>
      </section>

      {/* ================= BATANG ================= */}
      <section id="batang" className={`pane ${activeSub !== "batang" ? "off" : ""}`}>
        <h2>Batang (caulis)</h2>
        <p>
          Fungsi: menopang daun dan bunga, mengangkut air dan hasil fotosintesis, menyimpan cadangan makanan. Ciri khas: <b>beruas-ruas</b>, punya <b>buku</b> tempat daun dan kuncup tumbuh.
        </p>
        <div className="grid">
          <figure className="box">
            <svg viewBox="0 0 300 270" role="img" aria-label="Bagian luar batang">
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
                Kuncup ujung (apikal)
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
                Kuncup ketiak
              </text>
              <line className="ln" x1="150" y1="176" x2="190" y2="196" />
              <text x="194" y="200">
                Daun
              </text>
              <text x="100" y="268" textAnchor="middle">
                Pangkal batang
              </text>
            </svg>
            <figcaption>Bagian luar batang.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 270" role="img" aria-label="Penampang lintang batang dikotil dan monokotil">
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
                Dikotil
              </text>
              <text x="225" y="165" textAnchor="middle" fontWeight="700">
                Monokotil
              </text>
              <text x="75" y="182" textAnchor="middle">
                berkas pengangkut
              </text>
              <text x="75" y="196" textAnchor="middle">
                melingkar teratur
              </text>
              <text x="225" y="182" textAnchor="middle">
                berkas pengangkut
              </text>
              <text x="225" y="196" textAnchor="middle">
                tersebar
              </text>
              <text x="150" y="226" textAnchor="middle">
                Dikotil: ada kambium, tumbuh membesar.
              </text>
              <text x="150" y="244" textAnchor="middle">
                Monokotil: tanpa kambium, tidak membesar.
              </text>
            </svg>
            <figcaption>Penampang lintang batang muda. Titik hijau = berkas pengangkut (xilem + floem).</figcaption>
          </figure>
        </div>

        <h3>Jenis batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Jenis</th>
                <th>Ciri dan contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={3}>Konsistensi</td>
                <td>Berkayu (lignosus)</td>
                <td>Keras; mangga, jati</td>
              </tr>
              <tr>
                <td>Herba</td>
                <td>Lunak, berair; bayam, kangkung</td>
              </tr>
              <tr>
                <td>Batang basah</td>
                <td>Lunak, tinggi; pisang, papaya</td>
              </tr>
              <tr>
                <td rowSpan={4}>Arah tumbuh</td>
                <td>Tegak</td>
                <td>Lurus ke atas; kelapa, pinus</td>
              </tr>
              <tr>
                <td>Menjalar</td>
                <td>Rebah di tanah; semangka, ubi jalar</td>
              </tr>
              <tr>
                <td>Memanjat</td>
                <td>Melilit atau pakai sulur; kacang panjang, sirih</td>
              </tr>
              <tr>
                <td>Rebah</td>
                <td>Awalnya rebah, ujung tegak; padi</td>
              </tr>
              <tr>
                <td rowSpan={3}>Bentuk penampang</td>
                <td>Bulat (teres)</td>
                <td>Mangga, kelapa</td>
              </tr>
              <tr>
                <td>Bersegi tiga</td>
                <td>Teki (Cyperus)</td>
              </tr>
              <tr>
                <td>Bersegi empat</td>
                <td>Jambu air, jelatang, mint</td>
              </tr>
              <tr>
                <td>Ruas</td>
                <td>Berongga atau padat</td>
                <td>Bambu (berongga, buku jelas), jagung (padat)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi batang</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Ciri</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rimpang (rhizoma)</td>
                <td>Menjalar di bawah tanah, ada buku dan kuncup</td>
                <td>Jahe, kunyit, lengkuas</td>
              </tr>
              <tr>
                <td>Umbi batang</td>
                <td>Batang bawah tanah membengkak</td>
                <td>Kentang</td>
              </tr>
              <tr>
                <td>Umbi lapis</td>
                <td>Batang pendek diselimuti daun tebal berlapis</td>
                <td>Bawang merah, bawang putih</td>
              </tr>
              <tr>
                <td>Geragih (stolon)</td>
                <td>Cabang menjalar di permukaan tanah, tumbuh tunas baru</td>
                <td>Stroberi, rumput teki</td>
              </tr>
              <tr>
                <td>Kladodia (filokladia)</td>
                <td>Batang pipih hijau, berfotosintesis</td>
                <td>Kaktus, Opuntia</td>
              </tr>
              <tr>
                <td>Sulur batang</td>
                <td>Untuk memanjat</td>
                <td>Anggur, markisa</td>
              </tr>
              <tr>
                <td>Duri batang</td>
                <td>Perlindungan</td>
                <td>Bougenville, jeruk</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          Cara membedakan <b>rimpang</b> dari akar: rimpang punya buku, ruas, dan sisik daun. Akar tidak.
        </div>
      </section>

      {/* ================= DAUN ================= */}
      <section id="daun" className={`pane ${activeSub !== "daun" ? "off" : ""}`}>
        <h2>Daun (folium)</h2>
        <p>Fungsi: fotosintesis, transpirasi, respirasi. Umumnya pipih dan hijau, tumbuh dari buku batang.</p>
        <div className="grid">
          <figure className="box">
            <svg viewBox="0 0 300 280" role="img" aria-label="Bagian-bagian daun lengkap">
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
                Ujung daun (apeks)
              </text>
              <line className="ln" x1="196" y1="100" x2="225" y2="80" />
              <text x="228" y="84">
                Tepi daun
              </text>
              <line className="ln" x1="180" y1="126" x2="225" y2="126" />
              <text x="228" y="130">
                Tulang cabang
              </text>
              <line className="ln" x1="150" y1="150" x2="70" y2="150" />
              <text x="6" y="154">
                Ibu tulang daun
              </text>
              <line className="ln" x1="120" y1="80" x2="70" y2="70" />
              <text x="6" y="74">
                Helaian (lamina)
              </text>
              <line className="ln" x1="150" y1="190" x2="225" y2="190" />
              <text x="228" y="194">
                Pangkal daun
              </text>
              <line className="ln" x1="152" y1="225" x2="225" y2="225" />
              <text x="228" y="229">
                Tangkai (petiolus)
              </text>
              <line className="ln" x1="124" y1="256" x2="70" y2="256" />
              <text x="6" y="260">
                Pelepah
              </text>
            </svg>
            <figcaption>Daun lengkap: pelepah, tangkai, dan helaian.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 280" role="img" aria-label="Empat tipe tulang daun">
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
                Menyirip
              </text>
              <text x="75" y="156" textAnchor="middle" fontSize="11">
                mangga, jambu
              </text>
              <text x="225" y="10" textAnchor="middle" fontWeight="700">
                Menjari
              </text>
              <text x="225" y="34" textAnchor="middle" fontSize="11">
                pepaya, singkong
              </text>
              <text x="120" y="215" fontWeight="700">
                Sejajar
              </text>
              <text x="120" y="229" fontSize="11">
                padi, jagung
              </text>
              <text x="120" y="243" fontSize="11">
                (monokotil)
              </text>
              <text x="225" y="275" textAnchor="middle" fontWeight="700">
                Melengkung
              </text>
            </svg>
            <figcaption>Tipe tulang daun. Melengkung: sirih, gadung.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 236" role="img" aria-label="Dua belas bentuk helaian daun">
              <g transform="translate(37.5 32)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
              </g>
              <text x="37.5" y="72" textAnchor="middle">
                Bulat
              </text>
              <g transform="translate(112.5 32)" fill="var(--leaf)" opacity="0.9">
                <ellipse rx="14" ry="24" />
              </g>
              <text x="112.5" y="72" textAnchor="middle">
                Lonjong
              </text>
              <g transform="translate(187.5 32)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z" />
              </g>
              <text x="187.5" y="72" textAnchor="middle">
                Bulat telur
              </text>
              <g transform="translate(262.5 32)" fill="var(--leaf)" opacity="0.9">
                <path
                  transform="scale(1 -1)"
                  d="M0-24C10-24 20 0 20 10C20 20 10 24 0 24C-10 24-20 20-20 10C-20 0-10-24 0-24z"
                />
              </g>
              <text x="262.5" y="72" textAnchor="middle">
                Bt. sungsang
              </text>

              <g transform="translate(37.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C6-14 10 0 9 8C8 18 4 22 0 26C-4 22-8 18-9 8C-10 0-6-14 0-26z" />
              </g>
              <text x="37.5" y="150" textAnchor="middle">
                Lanset
              </text>
              <g transform="translate(112.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26L2.5 26H-2.5z" />
              </g>
              <text x="112.5" y="150" textAnchor="middle">
                Jarum
              </text>
              <g transform="translate(187.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M-4-26h8v52h-8z" />
              </g>
              <text x="187.5" y="150" textAnchor="middle">
                Pita
              </text>
              <g transform="translate(262.5 110)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C-30-4-24 20-10 20C-4 20 0 14 0 10C0 14 4 20 10 20C24 20 30-4 0-26z" />
              </g>
              <text x="262.5" y="150" textAnchor="middle">
                Jantung
              </text>

              <g transform="translate(37.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M-22 8C-22-14-6-18 0-12C6-18 22-14 22 8C22 20 10 22 0 16C-10 22-22 20-22 8z" />
              </g>
              <text x="37.5" y="228" textAnchor="middle">
                Ginjal
              </text>
              <g transform="translate(112.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-24L22 22H-22z" />
              </g>
              <text x="112.5" y="228" textAnchor="middle">
                Segitiga
              </text>
              <g transform="translate(187.5 188)" fill="var(--leaf)" opacity="0.9">
                <circle r="20" />
                <path d="M0 0V26" stroke="var(--stem)" strokeWidth="3" />
                <circle r="3" fill="var(--soft)" />
              </g>
              <text x="187.5" y="228" textAnchor="middle">
                Perisai
              </text>
              <g transform="translate(262.5 188)" fill="var(--leaf)" opacity="0.9">
                <path d="M0-26C14-26 14-6 5 6C2 14 2 20 0 26C-2 20-2 14-5 6C-14-6-14-26 0-26z" />
              </g>
              <text x="262.5" y="228" textAnchor="middle">
                Sudip
              </text>
            </svg>
            <figcaption>Bangun (bentuk) helaian daun. Belah ketupat: berbentuk wajik.</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 200" role="img" aria-label="Lima tipe tepi daun">
              <g transform="translate(10 24)">
                <path d="M0 0H120" fill="none" stroke="var(--leaf)" strokeWidth="2.5" />
              </g>
              <text x="150" y="28">
                Rata
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
                Bergerigi
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
                Bergigi
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
                Beringgit
              </text>
              <g transform="translate(10 176)">
                <path
                  d="M0 0q5-10 10 0t10 0q5-10 10 0t10 0q5-10 10 0t10 0q5-10 10 0t10 0"
                  fill="none"
                  stroke="var(--leaf)"
                  strokeWidth="2.5"
                />
              </g>
              <text x="150" y="180">
                Bergelombang
              </text>
            </svg>
            <figcaption>Tepi daun (garis = potongan tepi).</figcaption>
          </figure>

          <figure className="box">
            <svg viewBox="0 0 300 150" role="img" aria-label="Daun tunggal dan daun majemuk">
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
                Tunggal
              </text>
              <text x="150" y="150" textAnchor="middle" fontWeight="700">
                Menyirip
              </text>
              <text x="250" y="150" textAnchor="middle" fontWeight="700">
                Menjari
              </text>
            </svg>
            <figcaption>Tunggal: 1 helaian per tangkai. Majemuk: banyak anak daun.</figcaption>
          </figure>
        </div>

        <h3>Ciri-ciri daun lain</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Aspek</th>
                <th>Jenis dan contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Bangun daun (bentuk)</td>
                <td>
                  Bulat, lonjong, bulat telur, bulat telur sungsang (sirsak), lanset, jarum (pinus), pita/memanjang (padi), jantung (sirih), ginjal (pegagan), segitiga, perisai (teratai), sudip, belah ketupat
                </td>
              </tr>
              <tr>
                <td>Tepi daun</td>
                <td>
                  Rata, bergerigi (serratus), bergigi (dentatus), beringgit (crenatus), bergelombang (repandus). Tepi yang menjari/menyirip dalam: berlekuk, bertoreh, bercangap, berbagi (berturut-turut makin dalam)
                </td>
              </tr>
              <tr>
                <td>Ujung daun</td>
                <td>Runcing, meruncing, tumpul, membulat, rompang, berduri</td>
              </tr>
              <tr>
                <td>Pangkal daun</td>
                <td>Runcing, tumpul, membulat, berlekuk (jantung), rata, perisai (peltatus, mis. teratai)</td>
              </tr>
              <tr>
                <td>Permukaan</td>
                <td>Licin, berbulu, berlilin, kasar, berdaging</td>
              </tr>
              <tr>
                <td>Daun majemuk</td>
                <td>Menyirip (asam jawa, turi), menjari (karet, ketela karet), beranak daun tiga (kacang, kedelai)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tata letak daun pada batang (filotaksis)</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Ciri</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Berseling</td>
                <td>1 daun per buku, arah bergantian</td>
                <td>Mangga, mawar</td>
              </tr>
              <tr>
                <td>Berhadapan</td>
                <td>2 daun per buku, saling berhadapan</td>
                <td>Jambu air, melati</td>
              </tr>
              <tr>
                <td>Berkarang</td>
                <td>3 atau lebih daun per buku, melingkar</td>
                <td>Alamanda, jeruk nipis (Nerium)</td>
              </tr>
              <tr>
                <td>Roset</td>
                <td>Daun rapat di pangkal batang, seperti mawar</td>
                <td>Sawi tanah, nanas</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Modifikasi daun</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Fungsi</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Duri daun</td>
                <td>Melindungi dari herbivora, mengurangi penguapan</td>
                <td>Kaktus, nanas</td>
              </tr>
              <tr>
                <td>Sulur daun</td>
                <td>Memanjat</td>
                <td>Kacang polong, markisa</td>
              </tr>
              <tr>
                <td>Kantong penjerat</td>
                <td>Menangkap serangga</td>
                <td>Kantong semar (Nepenthes)</td>
              </tr>
              <tr>
                <td>Daun pelindung (brakte)</td>
                <td>Melindungi bunga</td>
                <td>Bougenville, poinsettia</td>
              </tr>
              <tr>
                <td>Daun penyimpan</td>
                <td>Menyimpan air/makanan</td>
                <td>Lidah buaya, bawang</td>
              </tr>
              <tr>
                <td>Daun bersisik</td>
                <td>Melindungi kuncup/umbi</td>
                <td>Bawang merah, rimpang jahe</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tip">
          <b>Tips ujian:</b> daun tulang menyirip/menjari = dikotil; sejajar/melengkung = monokotil.
        </div>
      </section>

      {/* ================= BUNGA ================= */}
      <section id="bunga" className={`pane ${activeSub !== "bunga" ? "off" : ""}`}>
        <h2>Bunga dan buah (ringkas)</h2>
        <p>
          Bagian bunga: <b>kelopak</b> (calyx), <b>mahkota</b> (corolla), <b>benang sari</b> (stamen), <b>putik</b> (pistillum). Bunga lengkap punya keempatnya.
        </p>

        <h3>Perbungaan</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Ciri</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tandan (racemus)</td>
                <td>Bunga bertangkai pada ibu tangkai yang tidak bercabang</td>
                <td>Turi, sawi</td>
              </tr>
              <tr>
                <td>Bulir (spica)</td>
                <td>Seperti tandan, tetapi bunga duduk (tanpa tangkai)</td>
                <td>Sirih, ekor kucing</td>
              </tr>
              <tr>
                <td>Malai (panicula)</td>
                <td>Ibu tangkai bercabang, cabang berbunga banyak</td>
                <td>Padi, mangga</td>
              </tr>
              <tr>
                <td>Payung (umbella)</td>
                <td>Tangkai bunga keluar dari satu titik</td>
                <td>Bawang, wortel</td>
              </tr>
              <tr>
                <td>Bongkol (capitulum)</td>
                <td>Bunga kecil duduk rapat pada dasar bunga yang melebar</td>
                <td>Bunga matahari, kenikir</td>
              </tr>
              <tr>
                <td>Tongkol (spadix)</td>
                <td>Bulir dengan ibu tangkai tebal, biasanya berseludang</td>
                <td>Talas, bunga bangkai</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Tipe buah</h3>
        <div className="tblwrap">
          <table>
            <thead>
              <tr>
                <th>Jenis</th>
                <th>Ciri</th>
                <th>Contoh</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Buni (bacca)</td>
                <td>Buah seluruhnya berdaging, banyak biji</td>
                <td>Tomat, jambu biji, pisang</td>
              </tr>
              <tr>
                <td>Batu (drupa)</td>
                <td>Ada lapisan keras (endokarp) membungkus biji</td>
                <td>Mangga, kelapa</td>
              </tr>
              <tr>
                <td>Polong (legumen)</td>
                <td>Membuka pada dua sisi jahitan</td>
                <td>Kacang-kacangan</td>
              </tr>
              <tr>
                <td>Kotak (capsula)</td>
                <td>Kering, banyak ruang, pecah saat masak</td>
                <td>Kapuk, kapas</td>
              </tr>
              <tr>
                <td>Buah padi (caryopsis)</td>
                <td>Kulit buah menyatu dengan kulit biji</td>
                <td>Padi, jagung</td>
              </tr>
              <tr>
                <td>Buah agregat</td>
                <td>Banyak buah dari satu bunga banyak putik</td>
                <td>Arbei, sirsak</td>
              </tr>
              <tr>
                <td>Buah majemuk</td>
                <td>Buah dari banyak bunga dalam satu perbungaan</td>
                <td>Nangka, nanas</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};
