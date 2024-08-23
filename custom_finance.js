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
    let PriceText = document.getElementById('price').value;
    let PerDown = document.getElementById('percentdowncash').value;
    let DiscountText = document.getElementById('discount').value;
    let InterestInput = document.getElementById('interest').value;
    let Price = parseInt(PriceText.replace(/,/g, ''), 10);
    let Discount = parseInt(DiscountText.replace(/,/g, ''), 10);
    let Interest = InterestInput/100;
    let DownCash = Price * (PerDown/100) - Discount;
    let Finance = Price - DownCash - Discount;
    let FinanceInterest = Finance * Interest;

    document.getElementById('row-5').innerHTML = '';
    document.getElementById('row-5').innerHTML += `<td>${DownCash}</td>`;
    document.getElementById('row-5').innerHTML += `<td>${PerDown}%</td>`;
    document.getElementById('row-5').innerHTML += `<td>${InterestInput}%</td>`;
    
    [2, 3, 4, 5].forEach(year => {
        let AllInterest = FinanceInterest * year;
        let AllFinance = Finance + AllInterest;
        let Payment = AllFinance / (year * 12);
        document.getElementById('row-5').innerHTML += `<td>${Math.ceil(Payment)}</td>`;
    });

    return false;
}