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
    // Retrieve input values
    const priceText = document.getElementById('price').value;
    const perDown = document.getElementById('percentdowncash').value;
    const discountText = document.getElementById('discount').value;
    const interestInput = document.getElementById('interest').value;

    // Convert input values to numbers
    const price = parseInt(priceText.replace(/,/g, ''), 10);
    const discount = parseInt(discountText.replace(/,/g, ''), 10);

    // Calculate Variable
    const interest = interestInput/100;
    const downCash = price * (perDown/100);
    const downCashDiscount = downCash - discount;
    const finance = price - downCash;
    const financeInterest = finance * interest;
    
    // Calculate and display results for Fig
    const rowAmount = [10, 15, 20, 30];
    rowAmount.forEach((percent, index) => {
            const rowFig = document.getElementById(`row-${index+1}`);
    
            // Fig Finance Variable
            const downCashFig = price * (percent/100);
            const downCashDiscountFig = downCashFig - discount;
            const financeFig = price - downCashFig;
            const FinanceInterestFig = financeFig * interest;

            // Build td content in row
            let rowHtml =  `<td class="downcash">${downCashDiscountFig}</td> 
                            <td class="downcash-discount">${downCashFig}</td>
                            <td>${percent}%</td>
                            <td>${interestInput}%</td>`;
            
            // Calculate and append monthly payments for 2 to 5 years
            for (let yearFig = 2; yearFig <= 5; yearFig++){
                const paymentFig = (financeFig + (FinanceInterestFig * yearFig)) / (yearFig * 12);
                rowHtml += `<td class="monthly-payment">${Math.ceil(paymentFig)}</td>`;
            }
    
            rowFig.innerHTML = rowHtml;
    });
    
    // Custom Percent Downcash 
    const customRow = document.getElementById('row-5');
    let customRowHtml =    `<td class="downcash">${downCashDiscount}</td> 
                            <td class="downcash-discount">${downCash}</td>
                            <td>${perDown}%</td>
                            <td>${interestInput}%</td>`;
    
    // Calculate and append monthly payments for 2 to 5 years
    [2, 3, 4, 5].forEach(year => {
        const allInterest = financeInterest * year;
        const allFinance = finance + allInterest;
        const payment = allFinance / (year * 12);
        customRowHtml += `<td class="monthly-payment">${Math.ceil(payment)}</td>`;
    });

    customRow.innerHTML = customRowHtml;

    // Format numbers with commas
    document.querySelectorAll(".row td").forEach(element => {
        const priceSeparate = element.innerText.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        element.innerHTML = priceSeparate;
    });

    return false;
}