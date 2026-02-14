import Chart from 'chart.js/auto'

/**
 * Skapar ett liggande stapeldiagram med Chart.js.
 *
 * @param {HTMLCanvasElement} canvasEl - Canvas-elementet där diagrammet ska ritas.
 * @param {Array<Object>} arr - En lista med objekt som innehåller kursdata.
 */
export function barChart(canvasEl, arr) {
    new Chart(canvasEl, {
        type: 'bar',
        data: {
            labels: arr.map(row => row.name),
            datasets: [
                {
                    label: '6 mest sökta kurserna på MIUN',
                    data: arr.map(row => row.applicantsTotal),
                    backgroundColor: 'rgba(54, 235, 78, 0.6)'
                }
            ]
        }, options: {
            indexAxis: 'y',
        }
    });
}
