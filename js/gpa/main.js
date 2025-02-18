import { UI } from './ui.js';
import { Calculator } from './calculator.js';

document.addEventListener('DOMContentLoaded', () => {
    // Check if elements exist before adding event listeners
    const addButton = document.getElementById('add-subjects');
    const calculateButton = document.getElementById('calculate-gpa');
    const container = document.getElementById('subjects-container');

    if (addButton && container) {
        addButton.addEventListener('click', () => {
            const count = parseInt(document.getElementById('subject-count').value) || 1;
            // Clear existing subjects
            container.innerHTML = '';
            
            // Add new subject rows
            for(let i = 1; i <= count; i++) {
                container.appendChild(UI.createSubjectRow(i));
            }
        });
    }

    if (calculateButton) {
        calculateButton.addEventListener('click', () => {
            if (document.querySelectorAll('.subject-row').length === 0) {
                alert('Please add at least one subject first');
                return;
            }
            const results = Calculator.calculateGPA();
            UI.displayResult(results.totalPoints, results.totalCredits, results.gpa);
        });
    }
}); 