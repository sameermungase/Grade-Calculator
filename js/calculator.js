import { gradeValues } from '../config/grades.js';

export class Calculator {
    static calculateGPA() {
        try {
            const rows = document.querySelectorAll('.subject-row');
            let totalPoints = 0;
            let totalCredits = 0;

            rows.forEach(row => {
                const grade = row.querySelector('select').value;
                const credits = parseFloat(row.querySelector('input[type="number"]').value) || 0;
                const hasCredits = row.querySelector('input[type="checkbox"]').checked;

                if (hasCredits && credits > 0) {
                    const gradeValue = gradeValues[grade];
                    totalPoints += gradeValue * credits;
                    totalCredits += credits;
                }
            });

            const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : 0;

            // Log for debugging
            console.log({
                totalPoints,
                totalCredits,
                gpa
            });

            return { totalPoints, totalCredits, gpa };
        } catch (error) {
            console.error('Error calculating GPA:', error);
            return { totalPoints: 0, totalCredits: 0, gpa: 0 };
        }
    }

    static calculateCGPA() {
        try {
            const rows = document.querySelectorAll('.semester-row');
            let totalSGPA = 0;
            const semesterResults = [];

            rows.forEach(row => {
                const sgpa = parseFloat(row.querySelector('.sgpa-input').value) || 0;
                if (sgpa > 0) {
                    totalSGPA += sgpa;
                    semesterResults.push(sgpa.toFixed(3));
                }
            });

            const completedSemesters = semesterResults.length;
            const cgpa = completedSemesters > 0 ? (totalSGPA / completedSemesters).toFixed(3) : 0;

            return { semesterResults, cgpa };
        } catch (error) {
            console.error('Error calculating CGPA:', error);
            return { semesterResults: [], cgpa: 0 };
        }
    }
} 