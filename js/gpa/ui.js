import { gradeValues } from '../config/grades.js';

export class UI {
    static createSubjectRow(number) {
        const row = document.createElement('div');
        row.className = 'grid grid-cols-[100px_1fr_100px_100px_60px] items-center gap-4 p-4 bg-white rounded-lg shadow-sm';
        
        const label = document.createElement('span');
        label.textContent = `Subject ${number}`;
        label.className = 'text-gray-700 font-medium';
        
        const subjectNameInput = document.createElement('input');
        subjectNameInput.type = 'text';
        subjectNameInput.placeholder = 'Subject Name';
        subjectNameInput.className = 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500';
        
        const gradeSelect = document.createElement('select');
        gradeSelect.innerHTML = Object.keys(gradeValues)
            .map(grade => `<option value="${grade}">${grade}</option>`)
            .join('');
        gradeSelect.className = 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500';
        
        const creditsInput = document.createElement('input');
        creditsInput.type = 'number';
        creditsInput.min = '1';
        creditsInput.max = '6';
        creditsInput.placeholder = 'Credits';
        creditsInput.className = 'w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500';
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'p-2 bg-red-600 text-white rounded-lg hover:bg-red-700';
        deleteBtn.innerHTML = '×';
        deleteBtn.onclick = () => row.remove();

        row.append(label, subjectNameInput, gradeSelect, creditsInput, deleteBtn);
        return row;
    }

    static displayResult(totalPoints, totalCredits, gpa) {
        const result = document.getElementById('result');
        result.style.display = 'block';
        
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
                        <p class="text-sm opacity-80 mb-1">SGPA</p>
                        <p class="text-3xl font-bold">${gpa}</p>
                    </div>
                </div>
            </div>
        `;
    }
} 