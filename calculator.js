export default (() => {
    const calculator = document.querySelector('.calculator');
    const operation = document.querySelector('.first-operand-item');
    const result = document.querySelector('.second-operand');

    const regex = /^(\d+(\.\d+)?([\+\-\*\/]\d+(\.\d+)?)+)$/;

    calculator?.addEventListener('click', (event) => {
        if (event.target.closest(".number-button,.operator-button")) {
            const clickedButton = event.target.closest(".number-button,.operator-button");
            
            if (!(clickedButton.textContent === '0' && operation.textContent === '0')) {
                operation.textContent += clickedButton.textContent;
            }
        }
        if (event.target.closest(".delete-button")) {
            operation.textContent = "";
            result.textContent = "0";
        }
        if (event.target.matches("#calculate-button")) {
            const operationText = operation.textContent;

            if (regex.test(operationText)) {
                try {
                    const calculatedResult = eval(operationText);
                    result.textContent = calculatedResult;
                    operation.textContent = "";
                } catch (error) {
                    result.textContent = 'Error';
                } operation.textContent = "";
            } else {
                result.textContent = 'Expresión incorrecta';
                operation.textContent = "";
            }
        }
    });
})();