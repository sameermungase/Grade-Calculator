import { gradeValues } from '../config/grades.js';

export class Calculator {
    static calculateGPA() {
        const rows = document.querySelectorAll('#subjects-container > div');
        let totalPoints = 0;
        let totalCredits = 0;

        rows.forEach(row => {
            const grade = row.querySelector('select').value;
            const credits = parseFloat(row.querySelector('input[type="number"]').value) || 0;
            
            if (credits > 0) {
                totalPoints += gradeValues[grade] * credits;
                totalCredits += credits;
            }
        });

        const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;
        return { totalPoints, totalCredits, gpa };
    }
} 