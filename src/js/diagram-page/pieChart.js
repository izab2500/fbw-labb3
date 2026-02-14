import Chart from 'chart.js/auto'

/**
 * Skapar ett cirkeldiagram med Chart.js.
 *
 * @param {HTMLCanvasElement} canvasEl - Canvas-elementet där diagrammet ska ritas.
 * @param {Array<Object>} arr - En lista med objekt som innehåller data.
 */
export function pieChart(canvasEl, arr) {
    new Chart(canvasEl, {
        type: 'pie',
        data: {
            labels: arr.map(row => row.name),
            datasets: [
                {
                    data: arr.map(row => row.applicantsTotal),
                    backgroundColor: [
                        'rgba(0, 148, 247, 0.6)',
                        'rgba(255, 0, 55, 0.6)',
                        'rgba(255, 183, 0, 0.6)',
                        'rgba(0, 197, 197, 0.6)',
                        'rgba(85, 0, 255, 0.6)'
                    ]
                }
            ]
        }
    });
}
