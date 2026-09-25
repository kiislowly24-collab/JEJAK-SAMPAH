/* =====================================================
   JEJAK PLASTIK
   JAVASCRIPT
===================================================== */


/* =====================================================
   LOADING
===================================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.classList.add("hide");
        }

    }, 1200);

});


/* =====================================================
   NAVBAR
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


/* =====================================================
   DATA SAMPAH
   GANTI FILE GAMBAR DI BAGIAN "image"
===================================================== */

const wasteData = [

    {
        id: 1,

        image: "botol.jpg",

        name: "Botol Plastik",

        type: "PET",

        short:
            "Botol minuman yang banyak kita temui sehari-hari.",

        origin:
            "Botol minuman umumnya menggunakan PET (Polyethylene Terephthalate). Bahan ini dibuat dari bahan baku petrokimia yang kemudian diproses menjadi resin plastik.",

        production:
            "Resin PET dipanaskan dan dibentuk menjadi preform. Preform tersebut kemudian dipanaskan kembali dan ditiup menggunakan tekanan udara hingga membentuk botol.",

        distribution:
            "Setelah diisi minuman dan diberi label, botol dikemas dalam jumlah tertentu. Produk kemudian dikirim ke gudang, distributor, minimarket, supermarket, warung, dan berbagai tempat penjualan.",

        consumer:
            "Kita membeli minuman, membuka tutup botol, kemudian mengonsumsi isinya. Dalam banyak kasus, botol hanya digunakan dalam waktu yang relatif singkat.",

        waste:
            "Setelah kosong, botol menjadi sampah jika tidak digunakan kembali. Botol PET dapat dikumpulkan dan masuk ke jalur daur ulang melalui sistem pengelolaan yang sesuai.",

        tip:
            "Jika memungkinkan, gunakan botol minum yang dapat digunakan berulang kali dan pilah botol bekas agar lebih mudah dikelola."
    },


    {
        id: 2,

        image: "cup.jpg",

        name: "Cup Plastik",

        type: "PP / PET",

        short:
            "Cup yang digunakan untuk minuman, makanan, dan berbagai produk.",

        origin:
            "Cup plastik dapat dibuat dari beberapa jenis plastik. Salah satu yang umum adalah PP, sementara produk tertentu dapat menggunakan PET atau material lain.",

        production:
            "Lembaran atau bahan plastik dipanaskan kemudian dibentuk melalui proses thermoforming atau proses pembentukan lainnya sesuai desain cup.",

        distribution:
            "Cup digunakan oleh produsen minuman, kedai, restoran, kantin, dan industri makanan. Produk kemudian berpindah melalui rantai distribusi hingga sampai ke konsumen.",

        consumer:
            "Setelah minuman habis, cup biasanya hanya memiliki sedikit nilai guna bagi konsumen sehingga sering langsung dibuang.",

        waste:
            "Cup yang tidak dipilah dapat bercampur dengan sampah lain. Jika dikumpulkan berdasarkan jenis materialnya, sebagian cup plastik dapat masuk ke jalur daur ulang.",

        tip:
            "Bawa tumbler atau wadah minum sendiri jika memungkinkan dan gunakan wadah berulang kali bila memang dirancang untuk itu."
    },


    {
        id: 3,

        image: "snack.jpg",

        name: "Kemasan Snack",

        type: "MULTILAYER",

        short:
            "Kemasan tipis yang menjaga makanan tetap terlindungi.",

        origin:
            "Banyak kemasan snack menggunakan struktur film berlapis. Lapisan tersebut dapat terdiri dari kombinasi beberapa material untuk memberikan perlindungan terhadap udara, kelembapan, cahaya, dan aroma.",

        production:
            "Film plastik dibuat melalui proses ekstrusi atau proses lain. Beberapa lapisan dapat digabungkan menggunakan proses laminasi untuk mendapatkan sifat yang dibutuhkan.",

        distribution:
            "Kemasan yang sudah dicetak diisi produk di fasilitas produksi. Snack kemudian dimasukkan ke karton atau kemasan transportasi dan dikirim menuju gudang serta toko.",

        consumer:
            "Konsumen membeli snack, membuka kemasan, dan mengonsumsi makanan di dalamnya. Setelah produk habis, kemasan biasanya tidak lagi digunakan.",

        waste:
            "Kemasan multilayer dapat lebih sulit didaur ulang dibandingkan kemasan berbahan tunggal karena terdiri dari beberapa lapisan material.",

        tip:
            "Kurangi penggunaan kemasan sekali pakai jika tersedia pilihan lain dan jangan membuang kemasan sembarangan."
    },


    {
        id: 4,

        image: "kantong.jpg",

        name: "Kantong Plastik",

        type: "LDPE / HDPE",

        short:
            "Kantong fleksibel yang digunakan untuk membawa barang.",

        origin:
            "Kantong plastik umumnya dibuat dari polyethylene, misalnya LDPE atau HDPE. Bahan tersebut berasal dari proses petrokimia.",

        production:
            "Bahan polyethylene dilelehkan dan diproses menjadi film plastik. Film kemudian dipotong, dilipat, dan disegel menjadi bentuk kantong.",

        distribution:
            "Kantong diberikan atau dijual oleh berbagai toko, pasar, restoran, dan layanan pengiriman.",

        consumer:
            "Kantong digunakan untuk membawa barang dari toko ke rumah atau tempat lain.",

        waste:
            "Karena ringan, kantong plastik yang tidak dikelola dapat mudah berpindah terbawa angin atau aliran air.",

        tip:
            "Bawa tas belanja yang dapat digunakan berkali-kali."
    },


    {
        id: 5,

        image: "minuman.jpg",

        name: "Kemasan Minuman",

        type: "MULTI MATERIAL",

        short:
            "Kemasan minuman yang melindungi isi dari lingkungan luar.",

        origin:
            "Tidak semua kemasan minuman hanya terdiri dari plastik. Beberapa menggunakan kombinasi kertas, plastik, dan lapisan penghalang tertentu.",

        production:
            "Material pembentuk kemasan dibuat dalam bentuk lembaran atau roll kemudian dicetak, dilaminasi, dipotong, dan dibentuk sesuai desain produk.",

        distribution:
            "Kemasan diisi di fasilitas produksi kemudian dikemas untuk dikirim melalui distributor menuju toko dan pusat penjualan.",

        consumer:
            "Produk dibeli, diminum, dan kemudian kemasannya tidak lagi diperlukan.",

        waste:
            "Karena terdiri dari beberapa material, sebagian kemasan minuman membutuhkan sistem pengelolaan khusus agar materialnya dapat dipisahkan.",

        tip:
            "Pilah kemasan sesuai fasilitas pengelolaan sampah yang tersedia di daerahmu."
    },


    {
        id: 6,

        image: "lainya.jpg",

        name: "Kemasan Lainnya",

        type: "BERAGAM",

        short:
            "Berbagai kemasan plastik yang kita temui setiap hari.",

        origin:
            "Plastik digunakan untuk berbagai kebutuhan karena ringan, mudah dibentuk, dan memiliki sifat yang berbeda-beda sesuai jenis polimernya.",

        production:
            "Proses pembuatannya berbeda-beda. Ada yang menggunakan injection molding, extrusion, blow molding, thermoforming, dan teknik lainnya.",

        distribution:
            "Setelah diproduksi, barang masuk ke jaringan distribusi sebelum akhirnya sampai di toko atau langsung ke konsumen.",

        consumer:
            "Produk digunakan sesuai fungsi. Ketika sudah rusak atau tidak diperlukan, produk memasuki tahap akhir penggunaannya.",

        waste:
            "Pengelolaan setiap plastik berbeda. Karena itu, mengenali material dan memilah sampah merupakan bagian penting dari pengelolaan.",

        tip:
            "Kenali simbol atau kode material pada produk dan ikuti sistem pemilahan sampah yang berlaku di lingkunganmu."
    }

];


/* =====================================================
   RENDER KARTU
===================================================== */

const wasteGrid = document.getElementById("wasteGrid");

wasteData.forEach((item, index) => {

    const card = document.createElement("article");

    card.className = "waste-card reveal";

    card.innerHTML = `

        <div class="card-number">
            0${index + 1} / ${item.type}
        </div>

        <div class="card-object">

            <img
                src="${item.image}"
                alt="${item.name}"
                loading="lazy"
                onerror="this.src=''; this.alt='Gambar belum tersedia';"
            >

        </div>

        <h3>
            ${item.name}
        </h3>

        <p>
            ${item.short}
        </p>

        <div class="card-arrow">
            Lihat perjalanan →
        </div>

    `;

    card.addEventListener("click", () => {
        openWasteModal(item);
    });

    wasteGrid.appendChild(card);

});


/* =====================================================
   MODAL
===================================================== */

const modal =
    document.getElementById("detailModal");

const modalBody =
    document.getElementById("modalBody");

const modalClose =
    document.getElementById("modalClose");

const modalOverlay =
    document.getElementById("modalOverlay");


function openWasteModal(item) {

    modalBody.innerHTML = `

        <div class="modal-hero">

            <img
                src="${item.image}"
                alt="${item.name}"
                class="modal-image"
                onerror="this.style.display='none';"
            >

            <div>

                <div class="section-label">
                    ${item.type}
                </div>

                <h2>
                    ${item.name}
                </h2>

                <p>
                    ${item.short}
                </p>

            </div>

        </div>


        <div class="modal-info-grid">


            <div class="info-box">

                <small>01 / ASAL</small>

                <h4>
                    Dari mana asalnya?
                </h4>

                <p>
                    ${item.origin}
                </p>

            </div>


            <div class="info-box">

                <small>02 / PRODUKSI</small>

                <h4>
                    Bagaimana dibuat?
                </h4>

                <p>
                    ${item.production}
                </p>

            </div>


            <div class="info-box">

                <small>03 / DISTRIBUSI</small>

                <h4>
                    Bagaimana sampai ke toko?
                </h4>

                <p>
                    ${item.distribution}
                </p>

            </div>


            <div class="info-box">

                <small>04 / KONSUMEN</small>

                <h4>
                    Bagaimana sampai ke kita?
                </h4>

                <p>
                    ${item.consumer}
                </p>

            </div>


            <div class="info-box">

                <small>05 / MENJADI SAMPAH</small>

                <h4>
                    Apa yang terjadi setelahnya?
                </h4>

                <p>
                    ${item.waste}
                </p>

            </div>


            <div class="info-box">

                <small>06 / YANG BISA KITA LAKUKAN</small>

                <h4>
                    Langkah sederhana
                </h4>

                <p>
                    ${item.tip}
                </p>

            </div>

        </div>

    `;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
}


function closeModal() {

    modal.classList.remove("active");

    document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
        closeModal();
    }

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const observer = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: .12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach(element => {

        observer.observe(element);

    });


/* =====================================================
   STATISTICS COUNTER
===================================================== */

const statNumbers =
    document.querySelectorAll(".stat-number");

let counterStarted = false;

const statsObserver =
    new IntersectionObserver(

        entries => {

            if (
                entries.some(entry => entry.isIntersecting)
                &&
                !counterStarted
            ) {

                counterStarted = true;

                statNumbers.forEach(counter => {

                    const target =
                        Number(counter.dataset.target);

                    let current = 0;

                    const increment =
                        Math.max(
                            1,
                            Math.ceil(target / 50)
                        );

                    const timer =
                        setInterval(() => {

                            current += increment;

                            if (current >= target) {

                                current = target;

                                clearInterval(timer);

                            }

                            counter.textContent =
                                current;

                        }, 30);

                });

            }

        },

        {
            threshold: .3
        }

    );


const statsSection =
    document.querySelector(".stats");

if (statsSection) {
    statsObserver.observe(statsSection);
}


/* =====================================================
   QUIZ
===================================================== */

const quizQuestions = [

    {
        question:
            "Bahan baku plastik konvensional umumnya berasal dari mana?",

        answers: [
            "Minyak bumi atau gas alam",
            "Air laut",
            "Kayu",
            "Pasir"
        ],

        correct: 0
    },

    {
        question:
            "Kode plastik yang umum digunakan pada botol minuman PET adalah...",

        answers: [
            "1",
            "4",
            "5",
            "7"
        ],

        correct: 0
    },

    {
        question:
            "Mengapa sebagian kemasan snack sulit didaur ulang?",

        answers: [
            "Karena terlalu ringan",
            "Karena dapat terdiri dari beberapa lapisan material",
            "Karena selalu berwarna-warni",
            "Karena ukurannya kecil"
        ],

        correct: 1
    },

    {
        question:
            "Apa salah satu langkah yang dapat membantu pengelolaan sampah?",

        answers: [
            "Membuangnya ke sungai",
            "Membakarnya sembarangan",
            "Memilah sesuai jenisnya",
            "Mencampurnya semuanya"
        ],

        correct: 2
    },

    {
        question:
            "Apa yang terjadi setelah sebuah produk tidak lagi digunakan?",

        answers: [
            "Otomatis hilang",
            "Menjadi sampah jika tidak digunakan kembali",
            "Selalu langsung didaur ulang",
            "Selalu menjadi kompos"
        ],

        correct: 1
    }

];


let currentQuestion = 0;
let score = 0;
let quizLocked = false;


const questionNumber =
    document.getElementById("questionNumber");

const quizScore =
    document.getElementById("quizScore");

const questionText =
    document.getElementById("questionText");

const answersContainer =
    document.getElementById("answers");

const quizResult =
    document.getElementById("quizResult");

const resultTitle =
    document.getElementById("resultTitle");

const resultText =
    document.getElementById("resultText");

const restartQuiz =
    document.getElementById("restartQuiz");


function loadQuestion() {

    quizLocked = false;

    const question =
        quizQuestions[currentQuestion];

    questionNumber.textContent =
        `Pertanyaan ${currentQuestion + 1} / ${quizQuestions.length}`;

    quizScore.textContent =
        `Skor: ${score}`;

    questionText.textContent =
        question.question;

    answersContainer.innerHTML = "";


    question.answers.forEach((answer,index) => {

        const button =
            document.createElement("button");

        button.className = "answer";

        button.textContent = answer;

        button.addEventListener(
            "click",
            () => selectAnswer(index,button)
        );

        answersContainer.appendChild(button);

    });

}


function selectAnswer(index,button) {

    if (quizLocked) return;

    quizLocked = true;

    const question =
        quizQuestions[currentQuestion];

    const allAnswers =
        document.querySelectorAll(".answer");


    if (index === question.correct) {

        score++;

        button.classList.add("correct");

    } else {

        button.classList.add("wrong");

        allAnswers[
            question.correct
        ].classList.add("correct");

    }


    quizScore.textContent =
        `Skor: ${score}`;


    setTimeout(() => {

        currentQuestion++;

        if (
            currentQuestion >=
            quizQuestions.length
        ) {

            showQuizResult();

        } else {

            loadQuestion();

        }

    },900);

}


function showQuizResult() {

    answersContainer.style.display = "none";

    questionText.style.display = "none";

    questionNumber.style.display = "none";

    quizResult.style.display = "block";


    resultTitle.textContent =
        `Skormu ${score} / ${quizQuestions.length}`;


    if (score === quizQuestions.length) {

        resultText.textContent =
            "Hebat! Kamu sudah memahami perjalanan plastik dengan sangat baik.";

    } else if (score >= 3) {

        resultText.textContent =
            "Bagus! Kamu sudah memahami sebagian besar materi.";

    } else {

        resultText.textContent =
            "Tidak apa-apa. Jelajahi kembali materi dan coba lagi.";

    }

}


restartQuiz.addEventListener("click",() => {

    currentQuestion = 0;

    score = 0;

    answersContainer.style.display = "grid";

    questionText.style.display = "block";

    questionNumber.style.display = "inline";

    quizResult.style.display = "none";

    loadQuestion();

});


loadQuestion();


/* =====================================================
   PARALLAX
===================================================== */

const planet =
    document.querySelector(".planet");

window.addEventListener("mousemove",event => {

    if (!planet) return;

    const x =
        (event.clientX / window.innerWidth - .5) * 10;

    const y =
        (event.clientY / window.innerHeight - .5) * 10;

    planet.style.transform =
        `translate(${x}px,${y}px)`;

});


/* =====================================================
   CARD STAGGER
===================================================== */

setTimeout(() => {

    document
        .querySelectorAll(".waste-card")
        .forEach((card,index) => {

            card.style.transitionDelay =
                `${index * 80}ms`;

        });

},100);