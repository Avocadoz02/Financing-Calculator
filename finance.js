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
const Price = 399000, Discount = 12000, Interest = 0.0349;
const DownCash = Price * 0.4 - Discount;
const Finance = Price - DownCash - Discount;
const FinanceInterest = Finance * Interest;

console.log(`เงินดาวน์ทั้งหมด = ${DownCash} บาท`);
console.log(`ยอดจัดไฟแนนซ์ = ${Finance} บาท`);
console.log(`ยอดจัด * ดอกเบี้ย = ${FinanceInterest} บาท/ปี`);

[2, 3, 4].forEach(year => {
    const AllInterest = FinanceInterest * year;
    const AllFinance = Finance + AllInterest;
    const Payment = AllFinance / (year * 12);
    console.log(`ค่างวด ${year * 12} เดือน ${Payment.toFixed(2)} บาท`);
});