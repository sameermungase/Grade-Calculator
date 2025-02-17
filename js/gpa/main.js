import { UI } from './ui.js';
import { Calculator } from './calculator.js';

document.getElementById('add-subjects').addEventListener('click', () => {
    const container = document.getElementById('subjects-container');
    const count = parseInt(document.getElementById('subject-count').value) || 1;
    container.innerHTML = '';
    
    for(let i = 1; i <= count; i++) {
        container.appendChild(UI.createSubjectRow(i));
    }
});

document.getElementById('calculate-gpa').addEventListener('click', () => {
    const results = Calculator.calculateGPA();
    UI.displayResult(results.totalPoints, results.totalCredits, results.gpa);
}); 