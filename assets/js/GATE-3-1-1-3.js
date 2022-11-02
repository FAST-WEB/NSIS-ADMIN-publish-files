$(function () {
    var table = document.getElementById('ChartTable1');
    var view_count = 0;

    $('#ChartTable1 td.view').each(function (i, n) {
        view_count += Number($(n).html());
    });

    var json = []; // First row needs to be headers 
    var headers = [];
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        if (i == 0) {
            continue;
        }
        headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
    }

    var data_arr = [];
    // Go through cells 
    for (var i = 1; i < table.rows.length; i++) {
        var tableRow = table.rows[i];
        var rowData = {};
        for (var j = 0; j < tableRow.cells.length; j++) {
            if (j == 0) {
                continue;
            }
            rowData[headers[j]] = Number($(tableRow.cells[j]).find('span.val').text());
            data_arr[j] = Number($(tableRow.cells[j]).find('span.val').text());
        }

        json.push(rowData);
    }

    headers = headers.filter(function (item) {
        return item !== null && item !== undefined && item !== '';
    });

    data_arr = data_arr.filter(function (item) {
        return item !== null && item !== undefined && item !== '';
    });

    console.log(headers);
    console.log(data_arr);

    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "tableInChart1");
    $('#chartView1').html(canvas);
    var ctx = document.getElementById("tableInChart1").getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: headers,
            datasets: [{
                data: data_arr,
                backgroundColor: '#73B0CF',
                borderWidth: 0
            }]
        },
        options: {
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0,
                    gridLines: {
                        display: true,
                        drawTicks: true,
                        drawOnChartArea: false
                    },
                    ticks: {
                        fontColor: '#333',
                        fontSize: 12,
                        padding: 0,
                    },
                    barThickness: 18,
                }],
                xAxes: [{
                    categoryPercentage: 1.0,
                    barPercentage: 1.0,
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
});
