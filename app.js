
const card = document.querySelector(".card");
const cardstyle =["card-1","card-2","card-3","card-4","card-5"];
const excusecontent = document.querySelector("#ct");
console.log(card);
function randomstyle(){
    let indx = Math.floor(Math.random()*5);
    return indx;
};
window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("card");
            var opt = {
                margin: 1,
                filename: 'ExcuseMe.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
console.log(randomstyle());
function createcardstyle(){
    let indx = randomstyle();
    card.classList.add(cardstyle[indx]);
}
createcardstyle();

function fetchexcuse(){
    let indx = randomstyle()+1;
    fetch('https://run.mocky.io/v3/42bb8ed8-a5c3-4049-8550-b37aab456d45')
  .then(response => response.json())
  .then(data => excusecontent.textContent = data[indx][0]);
  
}
fetchexcuse();
const shareData = {
    title: 'ExcuseMe',
    text: 'Never get short of Excuses.',
    url: 'https://developer.mozilla.org'
  }

  const btn = document.querySelector('#share');
  const resultPara = document.querySelector('#result');

  // Share must be triggered by "user activation"
  btn.addEventListener('click', async () => {
    try {
      await navigator.share(shareData)
      resultPara.textContent = 'Shared successfully'
    } catch(err) {
      resultPara.textContent = 'Error: ' + err
    }
  });