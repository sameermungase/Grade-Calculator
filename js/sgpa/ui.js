export class UI {
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
                        <p class="text-sm opacity-80 mb-1">SGPA</p>
                        <p class="text-3xl font-bold">${gpa}</p>
                    </div>
                </div>
            </div>
        `;

        result.scrollIntoView({ behavior: 'smooth' });
    }
} 