const CACHE_KEY_X = "MYT_SCORE_X";
const CACHE_KEY_O = "MYT_SCORE_O";


// cek dukung ga
if (typeof(Storage) !== "undefined") {

        function inputScoreX() {
            // udah ada key nya belum
            if (localStorage.getItem(CACHE_KEY_X) === "undefined" ) {
                localStorage.setItem(CACHE_KEY_X, 0);
            }
            let number = localStorage.getItem(CACHE_KEY_X);
            number++;
            localStorage.setItem(CACHE_KEY_X, number);
        }

        function inputScoreO() {
            // udah ada key nya belum
            if (localStorage.getItem(CACHE_KEY_O) === "undefined" ) {
                localStorage.setItem(CACHE_KEY_O, 0);
            }
            let number = localStorage.getItem(CACHE_KEY_O);
            number++;
            localStorage.setItem(CACHE_KEY_O, number);
        }

        function renderScore() {
          // sudah saya coba menggunakan undefined tetap tidak berjalan, jadi saya coba menggunakan null untuk kondisi
              let scoreX =  document.getElementById('scoreX');
              let scoreO =  document.getElementById('scoreO');
            if (localStorage.getItem(CACHE_KEY_X) !== null && localStorage.getItem(CACHE_KEY_O) !== null) {
                scoreX.innerText = localStorage.getItem(CACHE_KEY_X);
                scoreO.innerText = localStorage.getItem(CACHE_KEY_O);
            }else if (localStorage.getItem(CACHE_KEY_X) !== null && localStorage.getItem(CACHE_KEY_O) === null) {
                 scoreX.innerText = localStorage.getItem(CACHE_KEY_X);
                 scoreO.innerText = "0";
            }else if (localStorage.getItem(CACHE_KEY_X) === null && localStorage.getItem(CACHE_KEY_O) !== null) {
                scoreO.innerText = localStorage.getItem(CACHE_KEY_O);
                scoreX.innerText = "0";
            }else {
              scoreX.innerText = "0";
              scoreO.innerText = "0";
            }
        }

}else {
  alert("Browser tidak mendukung lokal storage !");
}
