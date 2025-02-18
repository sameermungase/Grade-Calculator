import { UI } from './ui.js';
import { Calculator } from './calculator.js';
// ... rest of the CGPA main.js code 

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('add-semesters').addEventListener('click', () => {
        const container = document.getElementById('semesters-container');
        const count = parseInt(document.getElementById('semester-count').value) || 1;
        container.innerHTML = '';
        
        for(let i = 1; i <= count; i++) {
            container.appendChild(UI.createSemesterRow(i));
        }
    });

    document.getElementById('calculate-cgpa').addEventListener('click', () => {
        const results = Calculator.calculateCGPA();
        UI.displayCGPAResult(results.semesterResults, results.cgpa);
    });
}); 