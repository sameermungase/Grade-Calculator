export class UI {
    static createSemesterRow(number) {
        const row = document.createElement('div');
        row.className = 'flex items-center gap-4 p-6 bg-white rounded-lg shadow-sm mb-4';
        
        // Semester label
        const label = document.createElement('span');
        label.textContent = `Semester ${number}:`;
        label.className = 'text-gray-700 font-medium min-w-[160px]';
        
        // SGPA input
        const sgpaInput = document.createElement('input');
        sgpaInput.type = 'number';
        sgpaInput.min = '0';
        sgpaInput.max = '10';
        sgpaInput.step = '0.01';
        sgpaInput.placeholder = 'Enter SGPA';
        sgpaInput.className = 'w-28 text-center h-11 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500';

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'ml-auto inline-flex items-center px-3 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500';
        deleteBtn.innerHTML = `
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        `;
        deleteBtn.onclick = () => row.remove();

        row.append(label, sgpaInput, deleteBtn);
        return row;
    }

    static displayCGPAResult(semesterResults, cgpa) {
        const result = document.getElementById('cgpa-result');
        result.style.display = 'block';
        
        result.innerHTML = `
            <div class="space-y-4">
                <h3 class="text-xl font-semibold mb-4">Results Summary</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">Total Semesters</p>
                        <p class="text-3xl font-bold">${semesterResults.length}</p>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">Average SGPA</p>
                        <p class="text-3xl font-bold">${(semesterResults.reduce((a, b) => a + parseFloat(b), 0) / semesterResults.length).toFixed(3)}</p>
                    </div>
                    <div class="bg-white/20 p-4 rounded-lg text-center">
                        <p class="text-sm opacity-80 mb-1">CGPA</p>
                        <p class="text-3xl font-bold">${cgpa}</p>
                    </div>
                </div>
            </div>
        `;

        result.scrollIntoView({ behavior: 'smooth' });
    }
} 