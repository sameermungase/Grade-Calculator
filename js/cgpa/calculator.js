export class Calculator {
    static calculateCGPA() {
        try {
            const rows = document.querySelectorAll('.flex.items-center.gap-4');
            let totalSGPA = 0;
            const semesterResults = [];

            rows.forEach(row => {
                const sgpa = parseFloat(row.querySelector('input[type="number"]').value) || 0;
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