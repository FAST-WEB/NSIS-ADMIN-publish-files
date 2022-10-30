$(function(){
	chart_div_2019_1();
});

var chart_div_2019_1 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_1_01', type: 'bar',		label: '내장기기 연도별 수입액',	data: [18883, 11103, 12410, 8853, 5825] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_1_02', type: 'bar',		label: '방사선발생장치 연도별 수입액',         data: [409496, 416435, 773029, 662505, 349166] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수입액',    	data: [10537, 15039, 16522, 16197, 17513] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 	data: [438916, 442577, 801961, 687555, 372504] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기의 연도별 수입액 추이', divId:'barChart_div_2019_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};			

var chart_div_2019_2 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_2_01', type: 'bar',	label: '개봉 연도별 수입액', data: [23958, 25101, 26491, 27641, 28709]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_2_02', type: 'bar', label: '밀봉 연도별 수입액', data: [9000, 13135, 12790, 12245, 12103]},	        	 
    	{ unit:'',            pieDivId:'',                       type: 'line',label: '합계', data: [32958, 38236, 39282, 39886, 40812]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소의 연도별 수입액 추이', divId:'barChart_div_2019_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2019_3 = function() {
	/* 방사능 */
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_01', type: 'bar', label: '개봉 : H-3 연도별 수입 방사능량',    data: [918128, 354095, 517734,	1547328, 1348479] },
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_02', type: 'bar', label: '밀봉 : Am-241 연도별 수입 방사능량', data: [2302, 568, 765, 279, 748] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_03', type: 'bar', label: '밀봉 : Cf-252 연도별 수입 방사능량', data: [9, 40, 16, 7, 8] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_04', type: 'bar', label: '밀봉 : Co-60 연도별 수입 방사능량',  data: [7659685, 24069006, 16654420, 11124893, 20372193] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_05', type: 'bar', label: '밀봉 : Cs-137 연도별 수입 방사능량', data: [71352, 119652, 2102, 105489, 350], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_06', type: 'bar', label: '밀봉 : Fe-55 연도별 수입 방사능량',  data: [37, 1, 22, 1, 7], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_07', type: 'bar', label: '밀봉 : Ir-192 연도별 수입 방사능량', data: [13128662, 12040544, 9599937, 6463677, 8260416], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_08', type: 'bar', label: '밀봉 : Kr-85 연도별 수입 방사능량',  data: [524, 769, 747, 866, 669], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입 방사능량',  data: [40, 51, 81, 50, 11], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_3_1_10', type: 'bar', label: '밀봉 : Pm-147 연도별 수입 방사능량', data: [229, 550, 577, 632, 616], },
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2019_3_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_01',	type: 'bar', label: '개봉 : H-3 연도별 수입액',    data: [679, 533, 857, 1398, 1028]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_02',	type: 'bar', label: '밀봉 : Am-241 연도별 수입액', data: [1048, 241, 630, 479, 70]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_03',	type: 'bar', label: '밀봉 : Cf-252 연도별 수입액', data: [1079, 1079, 905, 368, 2113]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_04',	type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data: [972, 2213, 1538, 1136, 2280]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_05',	type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data: [638, 1077, 216, 675, 209]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_06',	type: 'bar', label: '밀봉 : Fe-55 연도별 수입액',  data: [61, 1, 41, 1, 16]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_07',	type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data: [1933, 1750, 1455, 912, 1203]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_08',	type: 'bar', label: '밀봉 : Kr-85 연도별 수입액',  data: [422, 1221, 601, 481, 469]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_09',	type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data: [244, 392, 206, 148, 80]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_3_2_10',	type: 'bar', label: '밀봉 : Pm-147 연도별 수입액', data: [137, 180, 362, 198, 368]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2019_3_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};

var chart_div_2019_4 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];	
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_01', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',  data:[6, 7, 6, 7, 1]},
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_02', type: 'bar', label:'개봉 : Ga-67 연도별 수입 방사능량',  data:[15, 13, 13, 9, 1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_03', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  data:[258, 296, 372, 361, 332]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_04', type: 'bar', label:'개봉 : I-131 연도별 수입 방사능량',  data:[100580, 85493, 89837, 108706, 144969]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_05', type: 'bar', label:'개봉 : In-111 연도별 수입 방사능량', data:[7, 10, 9, 9, 3]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_06', type: 'bar', label:'개봉 : Mo-99 연도별 수입 방사능량',  data:[280623, 244757, 236344, 244806, 262644]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_07', type: 'bar', label:'개봉 : Sr-89 연도별 수입 방사능량',  data:[5, 7, 2, 3, 1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_08', type: 'bar', label:'개봉 : Tl-201 연도별 수입 방사능량', data:[1750, 1754, 1843, 1904, 1861]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_09', type: 'bar', label:'개봉 : Y-90 연도별 수입 방사능량',   data:[178, 2877, 5300, 4324, 991]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_10', type: 'bar', label:'밀봉 : Co-57 연도별 수입 방사능량',  data:[14, 18, 17, 20, 21]},
       { unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_11', type: 'bar', label:'밀봉 : Co-60 연도별 수입 방사능량',  data:[2073, 634890, 854380, 582790, 1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_12', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량', data:[72520, 280275, 1, 149940, 586410]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_13', type: 'bar', label:'밀봉 : Ge-68 연도별 수입 방사능량',  data:[12, 12, 11, 11, 11]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_14', type: 'bar', label:'밀봉 : I-125 연도별 수입 방사능량',  data:[44, 77, 912, 207, 269]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_4_1_15', type: 'bar', label:'밀봉 : Ir-192 연도별 수입 방사능량', data:[24913, 27827, 27795, 27120, 28269]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2019_4_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_01', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',  data: [129, 33, 30, 32, 1]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_02', type: 'bar', label: '개봉 : Ga-67 연도별 수입액',  data: [6, 7, 6, 4, 1]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_03', type: 'bar', label: '개봉 : I-125 연도별 수입액',  data: [10524, 10437, 10901, 10736, 11290]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_04', type: 'bar', label: '개봉 : I-131 연도별 수입액',  data: [10340, 1364, 1384, 1663, 2128]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_05', type: 'bar', label: '개봉 : In-111 연도별 수입액', data: [26, 29, 34, 29, 11]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_06', type: 'bar', label: '개봉 : Mo-99 연도별 수입액',  data: [9097, 9123, 9363, 8796, 10284]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_07', type: 'bar', label: '개봉 : Sr-89 연도별 수입액',  data: [69, 79, 36, 36, 1]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_08', type: 'bar', label: '개봉 : Tl-201 연도별 수입액', data: [555, 636, 665, 657, 687]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_09', type: 'bar', label: '개봉 : Y-90 연도별 수입액',   data: [231, 2812, 1186, 1269, 4751]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_10', type: 'bar', label: '밀봉 : Co-57 연도별 수입액',  data: [68, 81, 77, 86, 88]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_11', type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data: [3037, 3194, 4166, 3159, 1]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_12', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data: [214, 730, 1, 384, 1735]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_13', type: 'bar', label: '밀봉 : Ge-68 연도별 수입액',  data: [532, 543, 503, 479, 531]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_14', type: 'bar', label: '밀봉 : I-125 연도별 수입액',  data: [151, 267, 617, 725, 985]},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_4_2_15', type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data: [279, 312, 307, 345, 384]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2019_4_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2019_5 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];	
	var chartDatas =[					
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_01', type: 'bar', label:'개봉 : C-14 연도별 수입 방사능량',			data: 	[1856,1794,1041,1243,685]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_02', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',     	data: 	[2,2,1,1,1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_03', type: 'bar', label:'개봉 : H-3 연도별 수입 방사능량',  			data: 	[22948,22204,37006,4,3]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_04', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  		data: 	[78,53,17,14,16]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_05', type: 'bar', label:'개봉 : P-32 연도별 수입 방사능량',  		data: 	[22,23,19,15,12]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_06', type: 'bar', label:'개봉 : P-33 연도별 수입 방사능량',  		data: 	[1,1,1,1,1]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_07', type: 'bar', label:'개봉 : S-35 연도별 수입 방사능량',  		data: 	[11,9,9,8,7]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_08', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량',  		data: 	[1,1,1,75,4]},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2019_5_1_09', type: 'bar', label:'밀봉 : Ni-63 연도별 수입 방사능량',  		data: 	[34,30,35,46,59]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2019_5_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_01', type: 'bar', label: '개봉 : C-14 연도별 수입액', 	data: 	[1445,1321,892,960,749]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_02', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',	data: 	[3,3,3,2,2]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_03', type: 'bar', label: '개봉 : H-3 연도별 수입액',  	data: 	[124,98,93,67,47]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_04', type: 'bar', label: '개봉 : I-125 연도별 수입액',	data: 	[100,192,49,44,49]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_05', type: 'bar', label: '개봉 : P-32 연도별 수입액',  	data: 	[94,96,112,108,94]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_06', type: 'bar', label: '개봉 : P-33 연도별 수입액',  	data: 	[13,2,1,1,1]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_07', type: 'bar', label: '개봉 : S-35 연도별 수입액',  	data: 	[19,14,15,14,13]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_08', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액',	data: 	[1,9,28,41,43]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_5_2_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입액', 	data: 	[349,335,372,474,525]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2019_5_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2019_6 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['스위스','캐나다','네덜란드','폴란드','남아프리카공화국','미국','러시아','일본','우즈베키스탄','독일','오스트레일리아','영국','헝가리','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2019_6_1_01', type: 'bar', label:'개봉 국가별 수입 방사능량',	data: 	[1141171119,199882054,157427938,101177190,43752130,38780244,33487758,20532478,19040200,11096486,4601700,1540314,293888,745519]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2019_6_1_02', type: 'bar', label:'개봉 국가별 수입액',  	data: 	[748884,4742722,7482825,1164913,886654,1451720,1197765,1823626,276768,2364303,119406,380650,1603710,4465054]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (개봉 방사성동위원소)', divId:'barChart_div_2019_6_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['캐나다','러시아','미국','독일','네덜란드','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2019_6_2_01', type: 'bar', label:'밀봉 국가별 수입 방사능량',	data: 	[20696652000,8195315623,388038990,244378709,25919980,1774006]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2019_6_2_02', type: 'bar', label:'밀봉 국가별 수입액',  	data: 	[3269231,1355605,4784772,1854252,356428,482822]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (밀봉 방사성동위원소)', divId:'barChart_div_2019_6_2_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2019_7 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','독일','중국','싱가포르','일본','캐나다','체코','핀란드','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2019_7_1_01', type: 'bar', label:'내장기기의 국가별 수입 대수',	data: 	[87,75,38,16,11,6,4,2,6]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2019_7_1_02', type: 'bar', label:'내장기기의 국가별 수입액',  	data: 	[1665452,2232940,643397,260964,253611,353871,3137,13920,398308]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 내장기기의 국가별 수입현황', divId:'barChart_div_2019_7_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2019_8 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','일본','중국','독일','말레이시아','영국','네덜란드','벨기에','이탈리아','싱가포르','한국','체코','스위스','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2019_8_1_01', type: 'bar', label:'방사선발생장치의 국가별 수입대수',	data: 	[403,353,165,134,117,57,22,14,10,9,8,7,6,19]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2019_8_1_02', type: 'bar', label:'방사선발생장치의 국가별 수입액',  	data: 	[257045832,20477603,5177738,19127984,4791657,20811443,3039908,8416964,3039294,2750660,272685,0,145912,4068112]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치의 국가별 수입현황', divId:'barChart_div_2019_8_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2019_9 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_9_1_01', type: 'bar',	label: '개봉 연도별 수출액', data: [7272,5355,6134,6481,8568]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_9_1_02', type: 'bar',   label: '밀봉 연도별 수출액', data: [1386,1767,1524,1436,1434]},	        	 
    	{ unit:'',            pieDivId:'',                       	type: 'line',	label: '합계', data: [8658,7122,7659,7917,10002]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수출액 (단위:백만원)', title:'방사성동위원소 연도별 수출현황', divId:'barChart_div_2019_9_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2019_10 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2015년', '2016년', '2017년', '2018년', '2019년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_10_1_01', type: 'bar',		label: '내장기기 연도별 수출액',	data: [2911,906,2030,360,189] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_10_1_02', type: 'bar',		label: '방사선발생장치 연도별 수출액',         data: [36254,57001,70108,53313,74277] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2019_10_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수출액',    	data: [830,645,1312,1865,2225] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 	data: [39995,58552,73451,55538,76691] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수출액 (단위:백만원)', title:'방사선기기 연도별 수출현황', divId:'barChart_div_2019_10_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			



