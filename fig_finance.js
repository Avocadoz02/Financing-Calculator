export default function PaymentFig(){
    let PriceTextFig = document.getElementById('price').value;
    let PerDownFig = document.getElementById('percentdowncash').value;
    let DiscountTextFig = document.getElementById('discount').value;
    let InterestInputFig = document.getElementById('interest').value;
    let PriceFig = parseInt(PriceTextFig.replace(/,/g, ''), 10);
    let DiscountFig = parseInt(DiscountTextFig.replace(/,/g, ''), 10);

    let InterestFig = InterestInputFig/100;
    let DownCashFullFig = PriceFig * (PerDownFig/100);
    let DownCashFig = DownCashFullFig - DiscountFig;
    let FinanceFig = PriceFig - DownCashFullFig;
    let FinanceInterestFig = FinanceFig * InterestFig;

    console.log(`เงินดาวน์ทั้งหมด = ${DownCashFullFig} บาท`);
    console.log(`เงินดาวน์หลังหักส่วนลด = ${DownCashFig} บาท`);
    console.log(`ดอกเบี้ย = ${InterestFig} %`);
    console.log(`ยอดจัดไฟแนนซ์ = ${FinanceFig} บาท`);
    console.log(`ยอดจัด * ดอกเบี้ย = ${FinanceInterestFig} บาท/ปี`);

    // document.getElementById('row-5').innerHTML = '';
    // document.getElementById('row-5').innerHTML += `<td>${DownCashFig}</td>`;
    // document.getElementById('row-5').innerHTML += `<td>${PerDownFig}%</td>`;
    // document.getElementById('row-5').innerHTML += `<td>${PerDownFig}%</td>`;
        
    [2, 3, 4, 5].forEach(year => {
        let AllInterest = FinanceInterestFig * year;
        let AllFinance = FinanceFig + AllInterest;
        let Payment = AllFinance / (year * 12);
        for (let i = 0; i <= 4; i++) {
            document.getElementById(`row-${i}`).innerHTML += `<td>${Math.ceil(Payment)}</td>`;
        }
    });

    return false;
}