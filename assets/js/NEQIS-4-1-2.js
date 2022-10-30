var context = document.getElementById('mainChart').getContext('2d');

var NEQIS_2_Chart = new Chart(context, {
    type: 'line', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
            '2022/08/18',
            '2022/08/19',
            '2022/08/20',
            '2022/08/21',
            '2022/08/22',
            '2022/08/23',
            '2022/08/24',
            '2022/08/25',
            '2022/08/26',
            '2022/08/27',
            '2022/08/28',
            '2022/08/29',
            '2022/08/30',
        ],
        datasets: [
            { //데이터
                label: '페이지 접속', //차트 제목
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                    21, 19, 25, 20, 23, 26, 25 //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [
                    //색상
                    'rgba(28, 200, 138, 1)',
                ],
                borderColor: [
                    //경계선 색상
                    'rgba(28, 200, 138, 1)',
                ],
                borderWidth: 1, //경계선 굵기
                lineTension: 0,
            },
            { //데이터
                label: '방문자 접속', //차트 제목
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                    1, 35, 11, 4, 24, 6, 17 //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [
                    //색상
                    'rgba(78, 115, 223, 1)',
                ],
                borderColor: [
                    //경계선 색상
                    'rgba(78, 115, 223, 1)',
                ],
                borderWidth: 1, //경계선 굵기
                lineTension: 0,
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: '시간별 접속 통계'
            }
        },
        maintainAspectRatio: false,
    },
});

var table = document.getElementById('ChartTable1');
var view_count = 0;

$('#ChartTable1 td.view').each(function (i, n) {
    view_count += Number($(n).html());
});

var json = []; // First row needs to be headers 
var headers = [];
for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

// Go through cells 
for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    var current_view = 0;
    for (var j = 0; j < tableRow.cells.length; j++) {
        var current_percent = 0;
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
        if ($(tableRow.cells[j]).attr('class') == 'view') {
            current_view = Number($(tableRow.cells[j]).html());
        }
    }
    var percent = round(Number(current_view / view_count * 100));
    $(tableRow).find('.percent > .num').html(percent);

    if($(tableRow).hasClass('total')){
        $(tableRow).find('.view').html(view_count);
        $(tableRow).find('.percent').html('');
        continue;
    }
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "tableInChart1_" + i);
    $(tableRow).find('.tablechart .tablechart-wrap').html(canvas);
    var ctx = document.getElementById("tableInChart1_" + i).getContext('2d');
    var myChart2 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [''],
            datasets: [{
                axis: 'y',
                label: 'My Dataset',
                data: [percent],
                fill: false,
                backgroundColor: [
                    'rgba(28, 200, 138, 0.7)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                        callback: function (value) {
                            return value + "%"
                        },
                        display: false,
                    },
                    gridLines: {
                        tickMarkLength: 4,
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    }
                }],
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
        }
    });

    json.push(rowData);
}

var table = document.getElementById('ChartTable2');
var view_count = 0;

$('#ChartTable2 td.view').each(function (i, n) {
    view_count += Number($(n).html());
});

var json = []; // First row needs to be headers 
var headers = [];
for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
}

// Go through cells 
for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};
    var current_view = 0;
    for (var j = 0; j < tableRow.cells.length; j++) {
        var current_percent = 0;
        rowData[headers[j]] = tableRow.cells[j].innerHTML;
        if ($(tableRow.cells[j]).attr('class') == 'view') {
            current_view = Number($(tableRow.cells[j]).html());
        }
    }
    var percent = round(Number(current_view / view_count * 100));
    $(tableRow).find('.percent > .num').html(percent);

    if($(tableRow).hasClass('total')){
        $(tableRow).find('.view').html(view_count);
        $(tableRow).find('.percent').html('');
        continue;
    }
    var canvas = document.createElement("canvas");
    canvas.setAttribute("id", "tableInChart2_" + i);
    $(tableRow).find('.tablechart .tablechart-wrap').html(canvas);
    var ctx = document.getElementById("tableInChart2_" + i).getContext('2d');
    var myChart3 = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: [''],
            datasets: [{
                axis: 'y',
                label: 'My Dataset',
                data: [percent],
                fill: false,
                backgroundColor: [
                    'rgba(78, 115, 223, 0.7)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 100,
                        callback: function (value) {
                            return value + "%"
                        },
                        display: false,
                    },
                    gridLines: {
                        tickMarkLength: 4,
                        color: 'transparent',
                        zeroLineColor: 'transparent'
                    }
                }],
            },
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            tooltips: {
                enabled: false
            },
        }
    });

    json.push(rowData);
}

function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}