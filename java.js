var initialPrice = document.querySelector("#initial-price");

var stocksQty = document.querySelector("#quantity-of-stocks")

var currentPrice = document.querySelector("#current-price")

var checkBtn = document.querySelector("#check-btn")

var output = document.querySelector(".output")


function findProfitOrLoss() {

    var cp = Number(currentPrice.value);
    var sq = Number(stocksQty.value);
    var ip = Number(initialPrice.value);
    var buyPrice = ip * sq;
    var sellPrice = cp * sq;

    var profitLoss = sellPrice - buyPrice;

    if(profitLoss === 0){
        output.innerText = "No Pain No Gain!!"
    } else if (profitLoss > 0){
        var profit = profitLoss;
        var profitPer = ( profit / buyPrice) * 100;
        output.innerText = "Your Profit is " + profit + " and Profit Percentage is " + profitPer +"%";
    } else if (profitLoss < 0) {
        var loss = buyPrice - sellPrice;
        var lossPer = ( loss / buyPrice ) * 100;
        output.innerText = "Your Loss is " + loss + " and loss percentage is " + lossPer + "%";
    }
}



checkBtn.addEventListener("click" , findProfitOrLoss )