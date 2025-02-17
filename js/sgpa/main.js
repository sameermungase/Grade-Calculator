import { UI } from './ui.js';
import { Calculator } from './calculator.js';
// ... rest of the GPA main.js code 

document.getElementById('calculate-gpa').addEventListener('click', () => {
    if (document.querySelectorAll('.subject-row').length === 0) {
        alert('Please add at least one subject first');
        return;
    }

    const results = Calculator.calculateGPA();
    UI.displayResult(results.totalPoints, results.totalCredits, results.gpa);
}); 