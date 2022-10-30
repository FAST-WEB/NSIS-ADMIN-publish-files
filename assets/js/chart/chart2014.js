var chart_div_2014_1 = function() {
	
	var chartDataObj = {};
	var chartLabels = ['개봉','밀봉'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2014_1_1_03', type: 'bar', label:'방사성동위원소 수출입요건확인 수출방사능량',	data: 	[58870605, 4347505752]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2014_1_1_04', type: 'bar', label:'방사성동위원소 수출입요건확인 수출액', data: 	[5302749, 2005692]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수출액 (단위：천원)', title:'방사성동위원소 수출입요건확인 방사능량 및 금액 (수출)', divId:'barChart_div_2014_1_1_02'};
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2014_1_1_01', type: 'bar', label:'방사성동위원소 수출입요건확인 수입방사능량',	data: 	[1632895047, 17450270213 ]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2014_1_1_02', type: 'bar', label:'방사성동위원소 수출입요건확인 수입액', data: 	[25515699, 9195659]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 수출입요건확인 방사능량 및 금액 (수입)', divId:'barChart_div_2014_1_1_01'};
	viewMultiBarchart(chartDataObj);					
	viewPiechart(chartDataObj);
	
	chartLabels = ['방사성동위원소 내장기기','방사선발생장치','방사선발생장치부품'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2014_1_2_03', type: 'bar',  label:'방사선기기 수출입요건확인 수출수량',	data: 	[2784, 2784, 155]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2014_1_2_04', type: 'bar', label:'방사선기기 수출입요건확인 수출액', data: 	[25617552, 25617552, 262578]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수출액 (단위：천원)', title:'방사선기기 수출입요건확인 수량 및 금액 (수출)', divId:'barChart_div_2014_1_2_02'};
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2014_1_2_01', type: 'bar',  label:'방사선기기 수출입요건확인 수입수량',	data: 	[1030, 2010, 1404 ]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2014_1_2_02', type: 'bar', label:'방사선기기 수출입요건확인 수입액', 	data: 	[21988425, 407205857, 8512068]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선기기 수출입요건확인 수량 및 금액 (수입)', divId:'barChart_div_2014_1_2_01'};
	viewMultiBarchart(chartDataObj);					
	viewPiechart(chartDataObj);
};
