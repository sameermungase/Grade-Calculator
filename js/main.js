import { UI } from './ui.js';
import { Calculator } from './calculator.js';

// Remove the initial subject row creation
// document.getElementById('subjects-container').appendChild(UI.createSubjectRow());

document.addEventListener('DOMContentLoaded', () => {
    // Add subjects button handler
    document.getElementById('add-subjects').addEventListener('click', () => {
        const container = document.getElementById('subjects-container');
        const count = parseInt(document.getElementById('subject-count').value) || 1;
        
        // Clear existing subjects
        container.innerHTML = '';
        
        // Add requested number of subject rows
        for(let i = 0; i < count; i++) {
            container.appendChild(UI.createSubjectRow(i + 1));
        }
    });

    // Calculate GPA button handler
    document.getElementById('calculate-gpa').addEventListener('click', () => {
        if (document.querySelectorAll('.subject-row').length === 0) {
            alert('Please add at least one subject first');
            return;
        }

        const results = Calculator.calculateGPA();
        UI.displayResult(results.totalPoints, results.totalCredits, results.gpa);
    });

    // Add these event listeners in the DOMContentLoaded event

    document.getElementById('add-semesters').addEventListener('click', () => {
        const container = document.getElementById('semesters-container');
        const count = parseInt(document.getElementById('semester-count').value) || 1;
        
        // Clear existing semesters
        container.innerHTML = '';
        
        // Add requested number of semester rows
        for(let i = 0; i < count; i++) {
            container.appendChild(UI.createSemesterRow(i + 1));
        }
    });

    document.getElementById('calculate-cgpa').addEventListener('click', () => {
        if (document.querySelectorAll('.semester-row').length === 0) {
            alert('Please add at least one semester first');
            return;
        }

        const results = Calculator.calculateCGPA();
        UI.displayCGPAResult(results.semesterResults, results.cgpa);
    });
}); 