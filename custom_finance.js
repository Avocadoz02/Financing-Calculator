/* var Price = 399000
var Discount = 12000
var DownCash = (Price*40/100) - Discount
console.log("เงินดาวน์ทั้งหมด = " + DownCash + " บาท")

var Finance = Price - DownCash - Discount
console.log("ยอดจัดไฟแนนซ์ = " + Finance + " บาท")

var Interest = 3.49/100
var FinanceInterest = Finance * Interest
console.log("ยอดจัด*ดอกเบี้ย = " + FinanceInterest + " บาท/ปี")

const Year = [2,3,4]
let Payment = ""
let AllInterest = ""
let AllFinance = ""
for (let i = 0; i < Year.length; i++ ){
    AllInterest = FinanceInterest * Year[i]
    AllFinance = Finance + AllInterest
    Payment = AllFinance/(Year[i]*12)
    console.log("ค่างวด " + Year[i]*12 + " เดือน " + Payment.toFixed(2) + " บาท")
}
*/

function PaymentFunc(){
    let priceText = document.getElementById('price').value;
    let perDown = document.getElementById('percentdowncash').value;
    let discountText = document.getElementById('discount').value;
    let interestInput = document.getElementById('interest').value;
    let price = parseInt(priceText.replace(/,/g, ''), 10);
    let discount = parseInt(discountText.replace(/,/g, ''), 10);
    let interest = interestInput/100;
    let downCash = price * (perDown/100);
    let downCashDiscount = downCash - discount;
    let finance = price - downCash;
    let financeInterest = finance * interest;

    const rowAmount = [10, 15, 20, 30];
    for (let index = 0; index < rowAmount.length; index++){
        console.log("rowAmount[i]", rowAmount[index] )
        const rowFig = document.getElementById(`row-${index+1}`)
        let downCashFig = price * (rowAmount[index]/100)
        let downCashDiscountFig = downCashFig - discount
        rowFig.innerHTML = `<td class="downcash">${downCashDiscountFig} <span>${downCashFig}</span></td> 
                            <td>${rowAmount[index]}%</td>
                            <td>${interestInput}%</td>`
        // [2, 3, 4, 5].forEach(yearFig => {
        //     let paymentFig = (finance + (financeInterest * yearFig)) / (yearFig * 12);
        //     rowFig.innerHTML += `<td class="monthly-payment">${Math.ceil(paymentFig)}</td>`;
        // });
    }

    document.getElementById('row-5').innerHTML = '';
    document.getElementById('row-5').innerHTML += `<td class="downcash">${downCashDiscount} <span>${downCash}</span></td> 
                                                    <td>${perDown}%</td>
                                                    <td>${interestInput}%</td>`;
    [2, 3, 4, 5].forEach(year => {
        let allInterest = financeInterest * year;
        let allFinance = finance + allInterest;
        let payment = allFinance / (year * 12);
        document.getElementById('row-5').innerHTML += `<td class="monthly-payment">${Math.ceil(payment)}</td>`;
    });


    document.querySelectorAll(".row td").forEach(element => {
        const priceSeparate = element.innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        element.innerHTML = priceSeparate;
    });

    return false;
}