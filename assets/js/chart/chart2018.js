var chart_div_2018_1 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_1_01', type: 'bar',		label: '내장기기 연도별 수입액',	data: [13186,18883,11103,12410,8853] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_1_02', type: 'bar',		label: '방사선발생장치 연도별 수입액',         data: [375430,409496,416435,773029,662505] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수입액',    	data: [8660,10537,15039,16522,16197] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 	data: [397276,438916,442577,801961,687555] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기의 연도별 수입액 추이', divId:'barChart_div_2018_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			

var chart_div_2018_2 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_2_01', type: 'bar',	label: '개봉 연도별 수입액', data: [25452,23958,25101,26491,27641]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_2_02', type: 'bar', label: '밀봉 연도별 수입액', data: [8933,9000,13135,12790,12245]},	        	 
    	{ unit:'',            pieDivId:'',                       type: 'line',label: '합계', data: [34385,32958,38236,39282,39886]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소의 연도별 수입액 추이', divId:'barChart_div_2018_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2018_3 = function() {
	/* 방사능 */
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_01', type: 'bar', label: '개봉 : H-3 연도별 수입 방사능량',    data: [509551,918128,354095,517734,1547328] },
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_02', type: 'bar', label: '밀봉 : Am-241 연도별 수입 방사능량', data: [211,2302,568,765,279] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_03', type: 'bar', label: '밀봉 : Cf-252 연도별 수입 방사능량', data: [8,9,40,16,7] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_04', type: 'bar', label: '밀봉 : Co-60 연도별 수입 방사능량',  data: [12969271,7659685,24069006,16654420,11124893] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_05', type: 'bar', label: '밀봉 : Cs-137 연도별 수입 방사능량', data: [122928,71352,119652,2102,105489], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_06', type: 'bar', label: '밀봉 : Fe-55 연도별 수입 방사능량',  data: [3,37,0,22,0], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_07', type: 'bar', label: '밀봉 : Ir-192 연도별 수입 방사능량', data: [8239076,13128662,12040544,9599937,6463677], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_08', type: 'bar', label: '밀봉 : Kr-85 연도별 수입 방사능량',  data: [730,524,769,747,866], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입 방사능량',  data: [48,40,51,81,50], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_3_1_10', type: 'bar', label: '밀봉 : Pm-147 연도별 수입 방사능량', data: [101,229,550,577,632], },
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2018_3_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_01',	type: 'bar', label: '개봉 : H-3 연도별 수입액',    data: [402,679,533,857,1398]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_02',	type: 'bar', label: '밀봉 : Am-241 연도별 수입액', data: [168,1048,241,630,479]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_03',	type: 'bar', label: '밀봉 : Cf-252 연도별 수입액', data: [961,1079,1079,905,368]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_04',	type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data: [1337,972,2213,1538,1136]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_05',	type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data: [1338,638,1077,216,675]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_06',	type: 'bar', label: '밀봉 : Fe-55 연도별 수입액',  data: [6,61,0,41,0]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_07',	type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data: [1144,1933,1750,1455,912]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_08',	type: 'bar', label: '밀봉 : Kr-85 연도별 수입액',  data: [309,422,1221,601,481]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_09',	type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data: [328,244,392,206,148]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_3_2_10',	type: 'bar', label: '밀봉 : Pm-147 연도별 수입액', data: [59,137,180,362,198]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2018_3_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};

var chart_div_2018_4 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];	
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_01', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',  data:[5,6,7,6,7]},
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_02', type: 'bar', label:'개봉 : Ga-67 연도별 수입 방사능량',  data:[11,15,13,13,9]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_03', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  data:[237,258,296,372,361]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_04', type: 'bar', label:'개봉 : I-131 연도별 수입 방사능량',  data:[92613,100580,85493,89837,108706]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_05', type: 'bar', label:'개봉 : In-111 연도별 수입 방사능량', data:[9,7,10,9,9]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_06', type: 'bar', label:'개봉 : Mo-99 연도별 수입 방사능량',  data:[248097,280623,244757,236344,244806]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_07', type: 'bar', label:'개봉 : Sr-89 연도별 수입 방사능량',  data:[4,5,7,2,3]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_08', type: 'bar', label:'개봉 : Tl-201 연도별 수입 방사능량', data:[1974,1750,1754,1843,1904]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_09', type: 'bar', label:'개봉 : Y-90 연도별 수입 방사능량',   data:[249,178,2877,5300,4324]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_10', type: 'bar', label:'밀봉 : Co-57 연도별 수입 방사능량',  data:[18,14,18,17,20]},
       { unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_11', type: 'bar', label:'밀봉 : Co-60 연도별 수입 방사능량',  data:[404264,2073,634890,854380,582790]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_12', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량', data:[82103,72520,280275,0,149940]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_13', type: 'bar', label:'밀봉 : Ge-68 연도별 수입 방사능량',  data:[10,12,12,11,11]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_14', type: 'bar', label:'밀봉 : I-125 연도별 수입 방사능량',  data:[55,44,77,912,207]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_4_1_15', type: 'bar', label:'밀봉 : Ir-192 연도별 수입 방사능량', data:[26011,24913,27827,27795,27120]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2018_4_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_01', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',  data: [50,129,33,30,32]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_02', type: 'bar', label: '개봉 : Ga-67 연도별 수입액',  data: [5,6,7,6,4]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_03', type: 'bar', label: '개봉 : I-125 연도별 수입액',  data: [11168,10524,10437,10901,10736]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_04', type: 'bar', label: '개봉 : I-131 연도별 수입액',  data: [2046,10340,1364,1384,1663]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_05', type: 'bar', label: '개봉 : In-111 연도별 수입액', data: [38,26,29,34,29]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_06', type: 'bar', label: '개봉 : Mo-99 연도별 수입액',  data: [7298,9097,9123,9363,8796]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_07', type: 'bar', label: '개봉 : Sr-89 연도별 수입액',  data: [52,69,79,36,36]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_08', type: 'bar', label: '개봉 : Tl-201 연도별 수입액', data: [622,555,636,665,657]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_09', type: 'bar', label: '개봉 : Y-90 연도별 수입액',   data: [422,231,2812,1186,1269]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_10', type: 'bar', label: '밀봉 : Co-57 연도별 수입액',  data: [68,68,81,77,86]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_11', type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data: [1418,3037,3194,4166,3159]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_12', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data: [246,214,730,0,384]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_13', type: 'bar', label: '밀봉 : Ge-68 연도별 수입액',  data: [460,532,543,503,479]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_14', type: 'bar', label: '밀봉 : I-125 연도별 수입액',  data: [179,151,267,617,725]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_4_2_15', type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data: [264,279,312,307,345]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2018_4_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2018_5 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];	
	var chartDatas =[					
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_01', type: 'bar', label:'개봉 : C-14 연도별 수입 방사능량',			data: 	[1701,1856,1794,1041,1243]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_02', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',     	data: 	[1,2,2,1,1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_03', type: 'bar', label:'개봉 : H-3 연도별 수입 방사능량',  			data: 	[14808,22948,22204,37006,4]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_04', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  		data: 	[68,78,53,17,14]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_05', type: 'bar', label:'개봉 : P-32 연도별 수입 방사능량',  		data: 	[28,22,23,19,15]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_06', type: 'bar', label:'개봉 : P-33 연도별 수입 방사능량',  		data: 	[1,1,1,1,1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_07', type: 'bar', label:'개봉 : S-35 연도별 수입 방사능량',  		data: 	[12,11,9,9,8]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_08', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량',  		data: 	[1,1,1,1,75]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2018_5_1_09', type: 'bar', label:'밀봉 : Ni-63 연도별 수입 방사능량',  		data: 	[25,34,30,35,46]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2018_5_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_01', type: 'bar', label: '개봉 : C-14 연도별 수입액', 	data: 	[1113,1445,1321,892,960]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_02', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',	data: 	[1,3,3,3,2]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_03', type: 'bar', label: '개봉 : H-3 연도별 수입액',  	data: 	[108,124,98,93,67]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_04', type: 'bar', label: '개봉 : I-125 연도별 수입액',	data: 	[100,100,192,49,44]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_05', type: 'bar', label: '개봉 : P-32 연도별 수입액',  	data: 	[108,94,96,112,108]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_06', type: 'bar', label: '개봉 : P-33 연도별 수입액',  	data: 	[1,13,2,1,1]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_07', type: 'bar', label: '개봉 : S-35 연도별 수입액',  	data: 	[23,19,14,15,14]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_08', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액',	data: 	[1,1,9,28,41]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_5_2_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입액', 	data: 	[201,349,335,372,474]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2018_5_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2018_6 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['스위스','캐나다','네덜란드','폴란드','미국','일본','남아프리카공화국','러시아','영국','독일','오스트레일리아','이집트','헝가리','싱가포르','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2018_6_1_01', type: 'bar', label:'개봉 국가별 수입 방사능량',	data: 	[1121773789,410780890,174102405,95898450,49321202,19133246,15324660,13322220,10995665,10869910,7597580,1332000,341429,222000,37342]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2018_6_1_02', type: 'bar', label:'개봉 국가별 수입액',  	data: 	[890469,1532518,7276195,1118475,1369741,1643735,379415,1060714,1109584,2213627,226190,24207,1461159,262355,7072660]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (개봉 방사성동위원소)', divId:'barChart_div_2018_6_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['캐나다','러시아','미국','독일','네덜란드','프랑스','기타'];
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2018_6_2_01', type: 'bar', label:'밀봉 국가별 수입 방사능량',	data: 	[11897677256,6237536954,453518343,155518717,25171285,908700,1021709]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2018_6_2_02', type: 'bar', label:'밀봉 국가별 수입액',  	data: 	[4510491,975857,3763946,1620367,341931,411664,621537]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (밀봉 방사성동위원소)', divId:'barChart_div_2018_6_2_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2018_7 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','독일','중국','일본','싱가포르','체코','네덜란드','캐나다','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2018_7_1_01', type: 'bar', label:'내장기기의 국가별 수입 대수',	data: 	[54,35,29,28,7,4,3,2,5]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2018_7_1_02', type: 'bar', label:'내장기기의 국가별 수입액',  	data: 	[1938985,1158387,568264,2067998,87624,2801,377423,96979,2554780]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 내장기기의 국가별 수입현황', divId:'barChart_div_2018_7_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2018_8 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','일본','중국','독일','영국','말레이시아','네덜란드','싱가포르','한국','스위스','벨기에','프랑스','이탈리아','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2018_8_1_01', type: 'bar', label:'방사선발생장치의 국가별 수입대수',	data: 	[313,231,116,116,43,28,26,11,9,8,4,4,4,32]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2018_8_1_02', type: 'bar', label:'방사선발생장치의 국가별 수입액',  	data: 	[512001227,78065255,4949521,20760014,17475759,2675260,5645260,3022302,732698,2344413,1159791,717553,197704,12758783]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치의 국가별 수입현황', divId:'barChart_div_2018_8_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2018_9 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_9_1_01', type: 'bar',	label: '개봉 연도별 수출액', 	data: [5983,7272,5355,6134,6481]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_9_1_02', type: 'bar',   label: '밀봉 연도별 수출액',	data: [1622,1386,1767,1524,1436]},	        	 
    	{ unit:'',            pieDivId:'',                       	type: 'line',	label: '합계', 	data: [7605,8658,7122,7658,7917]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소 연도별 수출현황', divId:'barChart_div_2018_9_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2018_10 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2014년', '2015년', '2016년', '2017년', '2018년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_10_1_01', type: 'bar',		label: '내장기기 연도별 수출액',	data: [1296,2911,906,2030,360] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_10_1_02', type: 'bar',		label: '방사선발생장치 연도별 수출액',         data: [29931,36254,57001,70108,53313] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2018_10_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수출액',    	data: [850,830,645,1312,1865] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                   	data: [32077,39995,58552,73450,55538] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기 연도별 수출현황', divId:'barChart_div_2018_10_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			



