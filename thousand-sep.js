//Thousand Seperate
function formatNumberInput(e) {
    // Remove any non-digit characters
    let inputValue = e.target.value.replace(/[^0-9]/g, '');

    // Add thousand separators to the integer part
    if (inputValue) {
        inputValue = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // Update the input field value
    e.target.value = inputValue;
}

document.querySelectorAll('.numberInput').forEach(input => {
    input.addEventListener('input', formatNumberInput);
});