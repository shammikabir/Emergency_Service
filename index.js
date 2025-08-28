let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

const cartButton = document.getElementsByClassName("call-btn");

for (let cartbtn of cartButton) {
  cartbtn.addEventListener("click", function () {
    // get service title
    const serviceTitle =
      cartbtn.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

    //    get call number
    const callNumber =
      cartbtn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;

    let totalCoin = parseInt(getElement("coinCount").innerText);

    // local time ;

    const now = new Date();
    const localTime = now.toLocaleTimeString();

    if (totalCoin >= 20) {
      const confirmCall = alert(
        `🚨 Emergency_Hotline_App says...\n\n📞 Calling: ${serviceTitle} (${callNumber})`
      );

      // Coin less
      totalCoin = totalCoin - 20;
      getElement("coinCount").innerText = totalCoin;
      console.log(totalCoin);

      //   add to call history
      const Callhistory = getElement("call-history-container");

      const newCart = document.createElement("div");
      newCart.innerHTML = `
     <div class="flex justify-between p-4 border-2 m-2 rounded-[8px] border-gray-200 bg-[#f9f9f9ad]">
           <div>
              <h3 class="font-bold">${serviceTitle}</h3>
              <h4 class="inter text-gray-500">${callNumber}</h4>
           </div>
          <h4 class="inter mt-6 text-sm">${localTime}</h4>
        </div> 
      
    `;

      Callhistory.append(newCart);
    } else {
      alert(" ❌ ❌ Not Enough Coin to make a Call  ");
    }
  });
}

// button clear
document.getElementById("btn-clear").addEventListener("click", function () {
  const callhistoryConatiner = getElement("call-history-container");
  callhistoryConatiner.innerHTML = "";
});

// heart count

const heartButtons = document.getElementsByClassName("heart-btn");
for (let heartbutton of heartButtons) {
  heartbutton.addEventListener("click", function () {
    const heartCount = getElement("heartCount");
    let currentHeart = parseInt(heartCount.innerText);
    currentHeart++;
    heartCount.innerText = currentHeart;
  });
}

// copy button functionality

const copybtns = document.getElementsByClassName("copy-btn");
const copycount = getElement("copyCount");
for (let copybtn of copybtns) {
  copybtn.addEventListener("click", function () {
    // get copytext
    const copyText =
      copybtn.parentNode.parentNode.childNodes[3].childNodes[5].innerText;
    // copy text
    navigator.clipboard
      .writeText(copyText)
      .then(() => {
        alert(`Text copied: ${copyText}`);
        copyCount++;
        copycount.innerText = copyCount;
      })
      .catch(() => {
        alert("Copy failed. Try manually!");
      });
  });
}
