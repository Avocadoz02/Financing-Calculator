var Price = 399000
var Discount = 12000
var DownCash = (Price*30/100) - Discount
console.log("เงินดาวน์ทั้งหมด = " + DownCash + " บาท")

/* ราคารถ - เงินดาวน์ = ยอดจัดไฟแนนซ์ */
var Finance = Price - DownCash - Discount
console.log("ยอดจัดไฟแนนซ์ = " + Finance + " บาท")

/* ยอดจัดไฟแนนซ์ x เปอร์เซ็นต์อัตราดอกเบี้ย = FinanceInterest */
var Interest = 3.49/100
var FinanceInterest = Finance * Interest
console.log("ยอดจัด*ดอกเบี้ย = " + FinanceInterest + " บาท/ปี")

const Year = [2,3,4]
let Payment = ""
let AllInterest = ""
let AllFinance = ""
for (let i = 0; i < Year.length; i++ ){
    AllInterest = FinanceInterest * Year[i] /* ในระยะเวลา i ปีจะต้องจ่ายดอกเบี้ยรวมทั้งสิ้น */
    AllFinance = Finance + AllInterest
    Payment = AllFinance/(Year[i]*12)
    console.log("ค่างวด " + Year[i]*12 + " เดือน " + Payment.toFixed(2) + " บาท")
}