import { gradeValues } from '../config/grades.js';

export class UI {
    static createSubjectRow(number) {
        const row = document.createElement('div');
        row.className = 'subject-row';
        row.setAttribute('data-aos', 'fade-up');
        row.setAttribute('data-aos-delay', (number * 100).toString());

        // Add subject number label
        const label = document.createElement('span');
        label.textContent = `Subject ${number}`;
        
        // Add subject name input
        const subjectNameInput = document.createElement('input');
        subjectNameInput.type = 'text';
        subjectNameInput.placeholder = 'Enter Subject Name';
        subjectNameInput.className = 'subject-name';
        
        const gradeSelect = this.createGradeSelect();
        const creditsInput = this.createCreditsInput();
        
        // Create label for checkbox
        const checkboxLabel = document.createElement('label');
        const hasCreditsCheckbox = this.createCreditsCheckbox();
        checkboxLabel.appendChild(hasCreditsCheckbox);
        checkboxLabel.appendChild(document.createTextNode('Has Credits'));
        
        const deleteBtn = this.createDeleteButton(row);

        row.append(
            label, 
            subjectNameInput,
            gradeSelect, 
            creditsInput, 
            checkboxLabel, 
            deleteBtn
        );

        return row;
    }

    static createGradeSelect() {
        const select = document.createElement('select');
        select.innerHTML = Object.keys(gradeValues)
            .map(grade => `<option value="${grade}">${grade}</option>`)
            .join('');
        return select;
    }

    static createCreditsInput() {
        const input = document.createElement('input');
        input.type = 'number';
        input.min = '0';
        input.max = '6';
        input.placeholder = 'Credits';
        return input;
    }

    static createCreditsCheckbox() {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = true;
        return checkbox;
    }

    static createDeleteButton(row) {
        const btn = document.createElement('button');
        btn.className = 'btn-danger';
        btn.innerHTML = `
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>
        `;
        btn.onclick = () => {
            if (window.Swal) {
                Swal.fire({
                    title: 'Remove subject?',
                    text: "This action cannot be undone",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#dc2626',
                    cancelButtonColor: '#6b7280',
                    confirmButtonText: 'Yes, remove it'
                }).then((result) => {
                    if (result.isConfirmed) {
                        row.remove();
                    }
                });
            } else {
                if (confirm('Are you sure you want to remove this subject?')) {
                    row.remove();
                }
            }
        };
        return btn;
    }

    static displayResult(totalPoints, totalCredits, gpa) {
        const result = document.getElementById('result');
        
        // Make sure the result div is visible
        result.style.display = 'block';
        
        // Update the content
        result.innerHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold mb-4">Results Summary</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">Total Points</p>
                        <p class="text-3xl font-bold">${totalPoints}</p>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">Total Credits</p>
                        <p class="text-3xl font-bold">${totalCredits}</p>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">GPA</p>
                        <p class="text-3xl font-bold">${gpa}</p>
                    </div>
                </div>
            </div>
        `;

        // Scroll to the result
        result.scrollIntoView({ behavior: 'smooth' });
    }

    static getGPAColor(gpa) {
        const gpaNum = parseFloat(gpa);
        if (gpaNum >= 9) return '#34d399';  // Green
        if (gpaNum >= 7) return '#60a5fa';  // Blue
        if (gpaNum >= 5) return '#fbbf24';  // Yellow
        return '#f87171';  // Red
    }

    static createSemesterRow(number) {
        const row = document.createElement('div');
        row.className = 'semester-row';
        row.setAttribute('data-aos', 'fade-up');
        row.setAttribute('data-aos-delay', (number * 100).toString());

        // Semester label
        const label = document.createElement('span');
        label.textContent = `Semester ${number}:`;
        label.className = 'text-gray-700 font-medium';

        // SGPA input
        const sgpaInput = document.createElement('input');
        sgpaInput.type = 'number';
        sgpaInput.min = '0';
        sgpaInput.max = '10';
        sgpaInput.step = '0.001';
        sgpaInput.placeholder = 'Enter SGPA';
        sgpaInput.className = 'sgpa-input';

        row.append(label, sgpaInput);
        return row;
    }

    static displayCGPAResult(semesterResults, cgpa) {
        const result = document.getElementById('cgpa-result');
        result.style.display = 'block';
        
        let semestersList = '<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">';
        semesterResults.forEach((sgpa, index) => {
            semestersList += `
                <div class="bg-white/20 p-3 rounded-lg text-center">
                    <p class="text-sm opacity-80">Semester ${index + 1}</p>
                    <p class="text-xl font-bold">${sgpa}</p>
                </div>
            `;
        });
        semestersList += '</div>';

        result.innerHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold mb-4">CGPA Calculation Results</h3>
                ${semestersList}
                <div class="bg-white/20 p-6 rounded-lg text-center mt-4">
                    <p class="text-lg opacity-80 mb-2">Overall CGPA</p>
                    <p class="text-4xl font-bold">${cgpa}</p>
                </div>
            </div>
        `;

        result.scrollIntoView({ behavior: 'smooth' });
    }
} 