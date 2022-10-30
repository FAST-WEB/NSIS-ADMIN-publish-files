var chartjsFontSize = 13;

var addCommas = function (nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
};


var customTooltips = function (tooltip) {
	// Tooltip Element
	var tooltipEl = document.getElementById('chartjs-tooltip');

	if (!tooltipEl) {
		tooltipEl = document.createElement('div');
		tooltipEl.id = 'chartjs-tooltip';
		tooltipEl.innerHTML = '<table></table>';
		this._chart.canvas.parentNode.appendChild(tooltipEl);
	}

	// Hide if no tooltip
	if (tooltip.opacity === 0) {
		tooltipEl.style.opacity = 0;
		return;
	}

	// Set caret Position
	tooltipEl.classList.remove('above', 'below', 'no-transform');
	if (tooltip.yAlign) {
		tooltipEl.classList.add(tooltip.yAlign);
	} else {
		tooltipEl.classList.add('no-transform');
	}

	function getBody(bodyItem) {
		return bodyItem.lines;
	}

	// Set Text
	if (tooltip.body) {
		var titleLines = tooltip.title || [];
		var bodyLines = tooltip.body.map(getBody);

		var innerHtml = '<thead>';

		titleLines.forEach(function (title) {
			innerHtml += '<tr><th>' + title + '</th></tr>';
		});
		innerHtml += '</thead><tbody>';

		bodyLines.forEach(function (body, i) {
			//console.log(body);
			var colors = tooltip.labelColors[i];
			var style = 'background:' + colors.backgroundColor;
			style += '; border-color:' + colors.borderColor;
			style += '; border-width: 2px';
			var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
			innerHtml += '<tr><td style="font-size: ' + chartjsFontSize + 'px">' + span + '' + body + '</td></tr>';
		});
		innerHtml += '</tbody>';

		var tableRoot = tooltipEl.querySelector('table');
		tableRoot.innerHTML = innerHtml;
	}

	var rect = this._chart.canvas.getBoundingClientRect();
	var positionY = rect.top;
	var positionX = rect.left;

	// Display, position, and set styles for font
	tooltipEl.style.opacity = 1;
	/* tooltipEl.style.left = positionX + tooltip.caretX - 160 + 'px';
	tooltipEl.style.top = positionY + tooltip.caretY + 700 + 'px'; */
	/* console.log(window.innerWidth+','+window.innerHeight);
	console.log(window.pageXOffset+','+window.pageYOffset);
	console.log(positionX+','+positionY);
	console.log(tooltip.caretX+','+tooltip.caretY); */
	/* console.log(rect);
	console.log(tooltip);
	console.log(window.scrollY);
	console.log(mouseX+','+mouseY); */

	tooltipEl.style.left = positionX + window.pageXOffset + tooltip.caretX - 200 + 'px';
	tooltipEl.style.top = positionY + window.scrollY + tooltip.caretY - 250 + 'px';
	tooltipEl.style.fontFamily = tooltip._bodyFontFamily;
	tooltipEl.style.fontSize = tooltip.bodyFontSize + 'px';
	tooltipEl.style.fontStyle = tooltip._bodyFontStyle;
	tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
};

var makeBarChartJs = function (dataObj, title, divId) {
	var ctx = document.getElementById(divId).getContext('2d');
	var gateChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: dataObj.labels,
			datasets: dataObj.datasets
		},
		options: {
			legend: { labels: { fontSize: chartjsFontSize }, display: true, position: 'right' },
			title: { display: true, text: title, fontSize: chartjsFontSize },
			tooltips: {
				titleFontSize: chartjsFontSize,
				bodyFontSize: chartjsFontSize,
				enabled: true,
				mode: 'index',
				position: 'nearest',
				callbacks: {
					label: function (tooltipItem, chart) {
						//console.log(chart);
						//console.log(tooltipItem);
						//var datasetLabel = chart.labels[tooltipItem.datasetIndex]+'';
						//return tooltipItem.label+ ': '+addCommas(tooltipItem.value);
						//return chart.labels[tooltipItem.datasetIndex]+ ': '+addCommas(tooltipItem.value);									
						return chart.datasets[tooltipItem.datasetIndex].label + ': ' + addCommas(tooltipItem.value);
						//return addCommas(tooltipItem.value);
					}
				},
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: { fontSize: chartjsFontSize, display: true, labelString: dataObj.xLabel },
					ticks: { fontSize: chartjsFontSize, beginAtZero: true, callback: function (value, index, values) { return value; } },
					stacked: false,
				}],
				yAxes: [{
					display: true,
					scaleLabel: { fontSize: chartjsFontSize, display: true, labelString: dataObj.yLabel },
					ticks: { fontSize: chartjsFontSize, beginAtZero: true, callback: function (value, index, values) { return addCommas(value); } },
					stacked: false,
					position: 'top'
				}]
			}
		},
	});
	ctx.width = window.innerWidth;
	ctx.height = window.innerHeight;
	// gf_IframeHeightResize();
	return gateChart;
};

var makeMultiAxesBarChartJs = function (dataObj, title, divId, legendDisplay, legendPosition) {
	var ctx = document.getElementById(divId).getContext('2d');
	var legendDp = (legendDisplay == false) ? false : true;
	var legendPs = isEmpty(legendPosition) ? 'right' : legendPosition;
	var gateChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: dataObj.labels,
			datasets: dataObj.datasets
		},
		options: {
			legend: { labels: { fontSize: chartjsFontSize }, display: legendDp, position: legendPs },
			title: { display: true, text: title, fontSize: chartjsFontSize },
			tooltips: {
				titleFontSize: chartjsFontSize,
				bodyFontSize: chartjsFontSize,
				enabled: true,
				mode: 'index',
				position: 'nearest',
				callbacks: {
					label: function (tooltipItem, chart) {
						//console.log(chart);
						//var datasetLabel = chart.labels[tooltipItem.datasetIndex]+'';
						//return tooltipItem.label+ ': '+addCommas(tooltipItem.value);
						//return chart.labels[tooltipItem.datasetIndex]+ ': '+addCommas(tooltipItem.value);									
						return chart.datasets[tooltipItem.datasetIndex].label + ': ' + addCommas(tooltipItem.value);
						//return addCommas(tooltipItem.value);
					}
				},
			},
			scales: {
				xAxes: [{
					display: true,
					scaleLabel: { fontSize: chartjsFontSize, display: true, labelString: dataObj.xLabel },
					ticks: { fontSize: chartjsFontSize, beginAtZero: true, callback: function (value, index, values) { return value; } },
					stacked: false,
				}],
				yAxes: [{
					display: true,
					scaleLabel: { fontSize: chartjsFontSize, display: true, labelString: dataObj.yLabelLeft },
					ticks: { fontSize: chartjsFontSize, beginAtZero: true, callback: function (value, index, values) { return addCommas(value); } },
					stacked: false,
					position: 'left',
					id: 'y-axis-left',
				},
				{
					display: true,
					scaleLabel: { fontSize: chartjsFontSize, display: true, labelString: dataObj.yLabelRight },
					ticks: { fontSize: chartjsFontSize, beginAtZero: true, callback: function (value, index, values) { return addCommas(value); } },
					stacked: false,
					position: 'right',
					id: 'y-axis-right',
				},
				]
			}
		},
	});
	ctx.width = window.innerWidth;
	ctx.height = window.innerHeight;
	// gf_IframeHeightResize();
	return gateChart;
};



var makePieChartJs = function (dataObj, title, divId, legendDisplay) {
	var ctx = document.getElementById(divId).getContext('2d');
	var legendDp = (legendDisplay == false) ? false : true;
	var gateChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels: dataObj.labels,
			datasets: dataObj.datasets
		},
		options: {
			title: { display: true, text: title, fontSize: chartjsFontSize },
			legend: { labels: { fontSize: chartjsFontSize }, display: legendDp, position: 'right' },
			layout: {
				padding: {
					left: 100,
					right: 100,
					top: 0,
					bottom: 0
				}
			},
			tooltips: {
				mode: 'index',
				titleFontSize: chartjsFontSize,
				enabled: false,
				bodyFontSize: chartjsFontSize,
				position: 'nearest',
				custom: customTooltips,
				callbacks: {
					label: function (tooltipItem, chart) {
						//console.log(tooltipItem);
						//console.log(chart)								
						//var datasetLabel = chart.labels[tooltipItem.datasetIndex]+'';
						//return tooltipItem.label+ ': '+addCommas(tooltipItem.value);
						//return chart.labels[tooltipItem.datasetIndex]+ ': '+addCommas(tooltipItem.value);
						var total = chart.datasets[0]._meta[Object.keys(chart.datasets[0]._meta)].total;
						//console.log(chart.datasets[0]._meta[Object.keys(chart.datasets[0]._meta)].total);			
						var percent = String(Math.round(chart.datasets[0].data[tooltipItem.index] / total * 100));
						return chart.labels[tooltipItem.index] + ': ' + addCommas(chart.datasets[0].data[tooltipItem.index] + ' (' + percent + '%)');
						//return addCommas(tooltipItem.value);
					}
				},
			},
			animation: {
				onComplete: function () {
					var ctx = this.chart.ctx;
					ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
					ctx.textAlign = 'center';
					ctx.textBaseline = 'bottom';
					this.data.datasets.forEach(function (dataset) {
						for (var i = 0; i < dataset.data.length; i++) {
							var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
								total = dataset._meta[Object.keys(dataset._meta)[0]].total,
								mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius) / 2,
								start_angle = model.startAngle,
								end_angle = model.endAngle,
								mid_angle = start_angle + (end_angle - start_angle) / 2;
							var x = mid_radius * Math.cos(mid_angle);
							var y = mid_radius * Math.sin(mid_angle);
							ctx.fillStyle = '#fff';
							if (i == 8) { // Darker text color for lighter background
								ctx.fillStyle = '#444';
							}
							var percent = String(Math.round(dataset.data[i] / total * 100))
							//Don't Display If Legend is hide or value is 0			          
							if (dataset.data[i] != 0 && percent > 8) {
								ctx.fillText(addCommas(dataset.data[i]), model.x + x, model.y + y);
								ctx.fillText('(' + percent + '%)', model.x + x, model.y + y + 15);
							}
						}
					});
				}
			}
			// end animation
		},
	});
	ctx.width = window.innerWidth;
	ctx.height = window.innerHeight;
	// gf_IframeHeightResize();
	return gateChart;
};

var viewBarchart = function (obj) {
	var colorArr = [
		'#90C342', '#73B0CF', '#FFB901', '#FF4445', '#3F98F6', '#3C4AA3', '#9728B2', '#DF1A62', '#DEEB79', '#F7630D',
		'#309688', '#2E7D9B', '#01B9C5', '#038489', '#107C0F', '#80561b', '#130a5c', '#958039', '#EE1556', '#64C8C6',
		'#0068B3', '#ED2724', '#33715B', '#FFE293', '#DF376F', '#F2C687', '#311001', '#F49AC1', '#63619A', '#5F6062',
		'#B1A0CD', '#AD9600', '#C0AF00', '#00A657', '#B4D6F1', '#A84D0F', '#AB0534', '#77AE9A', '#C1D72E', '#50B948',
		'#CBC3B7', '#68652F', '#F0B7D4', '#739DD3', '#DCD087', '#A14176', '#B16162', '#CE4553', '#B50937', '#00ADE2'
	];
	var labelArr = obj.chartLabels;
	var datasArr = obj.chartDatas;
	var xLabelNm = obj.xLabel;
	var yLAbelNm = obj.yLabel;
	var ctitleNm = obj.title;
	var cDivIdNm = obj.divId;
	var chartArr = [];
	datasArr.forEach(function (item, index, array) {
		if (item.type == 'line') {
			chartArr.push({ label: item.label, type: 'line', borderWidth: 1, fill: false, borderColor: '#e40000', data: item.data, backgroundColor: '#e40000' });
		} else {
			chartArr.push({ label: item.label, type: 'bar', data: item.data, backgroundColor: colorArr[index] });
		}
	});
	chartDataObj = { labels: labelArr, datasets: chartArr, xLabel: xLabelNm, yLabel: yLAbelNm };
	makeBarChartJs(chartDataObj, ctitleNm, cDivIdNm);
}

var viewMultiBarchart = function (obj) {
	var colorArr = [
		'#90C342', '#73B0CF', '#FFB901', '#FF4445', '#3F98F6', '#3C4AA3', '#9728B2', '#DF1A62', '#DEEB79', '#F7630D',
		'#309688', '#2E7D9B', '#01B9C5', '#038489', '#107C0F', '#80561b', '#130a5c', '#958039', '#EE1556', '#64C8C6',
		'#0068B3', '#ED2724', '#33715B', '#FFE293', '#DF376F', '#F2C687', '#311001', '#F49AC1', '#63619A', '#5F6062',
		'#B1A0CD', '#AD9600', '#C0AF00', '#00A657', '#B4D6F1', '#A84D0F', '#AB0534', '#77AE9A', '#C1D72E', '#50B948',
		'#CBC3B7', '#68652F', '#F0B7D4', '#739DD3', '#DCD087', '#A14176', '#B16162', '#CE4553', '#B50937', '#00ADE2'
	];
	var labelArr = obj.chartLabels;
	var datasArr = obj.chartDatas;
	var xLabelNm = obj.xLabel;
	var yLAbelLeftNm = obj.yLabel_left;
	var yLAbelRightNm = obj.yLabel_right;
	var ctitleNm = obj.title;
	var cDivIdNm = obj.divId;
	var legendDisplay = obj.legendDisplay;
	var legendPosition = obj.legendPosition;
	var chartArr = [];
	datasArr.forEach(function (item, index, array) {
		if (item.type == 'line') {
			chartArr.push({ yAxisID: item.yAxisId, label: item.label, type: 'line', borderWidth: 1, fill: false, borderColor: '#e40000', data: item.data, backgroundColor: '#e40000' });
		} else {
			chartArr.push({ yAxisID: item.yAxisId, label: item.label, type: 'bar', data: item.data, backgroundColor: colorArr[index] });
		}
	});
	chartDataObj = { labels: labelArr, datasets: chartArr, xLabel: xLabelNm, yLabelLeft: yLAbelLeftNm, yLabelRight: yLAbelRightNm };
	makeMultiAxesBarChartJs(chartDataObj, ctitleNm, cDivIdNm, legendDisplay, legendPosition);
}

var viewPiechart = function (obj) {
	var colorArr = [
		'#90C342', '#73B0CF', '#FFB901', '#FF4445', '#3F98F6', '#3C4AA3', '#9728B2', '#DF1A62', '#DEEB79', '#F7630D',
		'#309688', '#2E7D9B', '#01B9C5', '#038489', '#107C0F', '#80561b', '#130a5c', '#958039', '#EE1556', '#64C8C6',
		'#0068B3', '#ED2724', '#33715B', '#FFE293', '#DF376F', '#F2C687', '#311001', '#F49AC1', '#63619A', '#5F6062',
		'#B1A0CD', '#AD9600', '#C0AF00', '#00A657', '#B4D6F1', '#A84D0F', '#AB0534', '#77AE9A', '#C1D72E', '#50B948',
		'#CBC3B7', '#68652F', '#F0B7D4', '#739DD3', '#DCD087', '#A14176', '#B16162', '#CE4553', '#B50937', '#00ADE2'
	];
	var labelArr = obj.chartLabels;
	var colorSet = [];
	labelArr.forEach(function (item, index, array) {
		colorSet.push(colorArr[index]);
	});
	var datasArr = obj.chartDatas;
	var chartArr = [];
	datasArr.forEach(function (item, index, array) {
		chartArr = [];
		chartArr.push({ data: item.data, backgroundColor: colorSet });
		chartDataObj = { labels: labelArr, datasets: chartArr };
		if (item.pieDivId != '') makePieChartJs(chartDataObj, item.label + ' ' + item.unit, item.pieDivId, item.legendDisplay);
	})
}

var chartView = function (idx) {
	window['chart_' + idx]();
	// gf_IframeHeightResize(true);
}

$(function () {
	var year = '2019';
	$('.year_tab > li').click(function () {
		$('.year_tab > li').removeClass('active');
		$('.year_tab > li > a').removeClass('linkW');
		$(this).addClass('active');
		$(this).find('a').addClass('linkW');
		year = $(this).find('a').data('year');
		$('.divStat').fadeOut();
		$('#divStat' + year).fadeIn();
		$('#divStat' + year).find('.typelist .rep_title[data-num="1"] > a').trigger("click");
	})

	$('.typelist .rep_title').click(function () {
		var parent = $('#divStat' + year);
		parent.find('.typelist .rep_title').removeClass('active');
		var num = $(this).data('num');
		$(this).addClass('active');
		eval('chart_div_' + year + '_' + num + '()');
		parent.find('.statData').fadeOut();
		$('#div_' + year + '_' + num).fadeIn();
	});

});

var isEmpty = function (value) {

	if (value == "" || value == null || value == undefined || (value != null && typeof value == "object" && !Object.keys(value).length)) {
		return true
	} else {
		return false
	}

};