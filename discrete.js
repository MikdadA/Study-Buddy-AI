function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
function showTruthTable() {
    document.getElementById('truth-tables').style.display = 'block';
    const tableContainer = document.getElementById('truth-table-container');
    tableContainer.innerHTML = generateTruthTableHTML();
}

function generateTruthTableHTML() {
    // Function to generate HTML for a truth table
    return `
        <table border="1">
            <tr>
                <th>p</th>
                <th>q</th>
                <th>¬p</th>
                <th>p ∧ q</th>
                <th>p ∨ q</th>
                <th>p → q</th>
                <th>p ↔ q</th>
            </tr>
            <tr>
                <td>T</td>
                <td>T</td>
                <td>F</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
                <td>T</td>
            </tr>
            <!-- Other rows omitted for brevity -->
        </table>
    `;
}