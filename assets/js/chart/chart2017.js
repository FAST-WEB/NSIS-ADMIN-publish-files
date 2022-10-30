
var chart_div_2017_1 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_1_01', type: 'bar',		label: '내장기기 연도별 수입액',	data: [21980,13186,18883,11103,12410] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_1_02', type: 'bar',		label: '방사선발생장치 연도별 수입액',         data: [396720,375430,409496,416435,773029] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수입액',    	data: [8209,8660,10537,15039,16522] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 	data: [426909,397276,438916,442577,801961] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기의 연도별 수입액 추이', divId:'barChart_div_2017_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			

var chart_div_2017_2 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_2_01', type: 'bar',	label: '개봉 연도별 수입액', data: [28199,25452,23958,25101,26491]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_2_02', type: 'bar', label: '밀봉 연도별 수입액', data: [8143,8933,9000,13135,12790]},	        	 
    	{ unit:'',            pieDivId:'',                       type: 'line',label: '합계', data: [36342,34385,32958,38236,39281]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소의 연도별 수입액 추이', divId:'barChart_div_2017_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2017_3 = function() {
	/* 방사능 */
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_01', type: 'bar', label: '개봉 : H-3 연도별 수입 방사능량',    data: [1269440,509551,918128,354095,517734] },
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_02', type: 'bar', label: '밀봉 : Am-241 연도별 수입 방사능량', data: [244,211,2302,568,765] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_03', type: 'bar', label: '밀봉 : Cf-252 연도별 수입 방사능량', data: [39,8,9,40,16] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_04', type: 'bar', label: '밀봉 : Co-60 연도별 수입 방사능량',  data: [11108106,12969271,7659685,24069006,16654420] },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_05', type: 'bar', label: '밀봉 : Cs-137 연도별 수입 방사능량', data: [19363,122928,71352,119652,2102], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_06', type: 'bar', label: '밀봉 : Fe-55 연도별 수입 방사능량',  data: [22,3,37,0,22], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_07', type: 'bar', label: '밀봉 : Ir-192 연도별 수입 방사능량', data: [5595396,8239076,13128662,12040544,9599937], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_08', type: 'bar', label: '밀봉 : Kr-85 연도별 수입 방사능량',  data: [568,730,524,769,747], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입 방사능량',  data: [84,48,40,51,81], },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_3_1_10', type: 'bar', label: '밀봉 : Pm-147 연도별 수입 방사능량', data: [204,101,229,550,577], },
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2017_3_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_01',	type: 'bar', label: '개봉 : H-3 연도별 수입액',    data: [783,402,679,533,857]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_02',	type: 'bar', label: '밀봉 : Am-241 연도별 수입액', data: [41,168,1048,241,630]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_03',	type: 'bar', label: '밀봉 : Cf-252 연도별 수입액', data: [1395,961,1079,1079,905]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_04',	type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data: [1437,1337,972,2213,1538]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_05',	type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data: [1010,1338,638,1077,216]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_06',	type: 'bar', label: '밀봉 : Fe-55 연도별 수입액',  data: [32,6,61,0,41]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_07',	type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data: [782,1144,1933,1750,1455]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_08',	type: 'bar', label: '밀봉 : Kr-85 연도별 수입액',  data: [238,309,422,1221,601]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_09',	type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data: [409,328,244,392,206]},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_3_2_10',	type: 'bar', label: '밀봉 : Pm-147 연도별 수입액', data: [78,59,137,180,362]},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2017_3_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};

var chart_div_2017_4 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];	
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_01', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',  data:[5,5,6,7,6]										},
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_02', type: 'bar', label:'개봉 : Ga-67 연도별 수입 방사능량',  data:[16,11,15,13,13]										},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_03', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  data:[285,237,258,296,372]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_04', type: 'bar', label:'개봉 : I-131 연도별 수입 방사능량',  data:[89192,92613,100580,85493,89837]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_05', type: 'bar', label:'개봉 : In-111 연도별 수입 방사능량', data:[8,9,7,10,9]										},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_06', type: 'bar', label:'개봉 : Mo-99 연도별 수입 방사능량',  data:[258704,248097,280623,244757,236344]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_07', type: 'bar', label:'개봉 : Sr-89 연도별 수입 방사능량',  data:[3,4,5,7,2]										},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_08', type: 'bar', label:'개봉 : Tl-201 연도별 수입 방사능량', data:[2286,1974,1750,1754,1843]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_09', type: 'bar', label:'개봉 : Y-90 연도별 수입 방사능량',   data:[291,249,178,2877,5300]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_10', type: 'bar', label:'밀봉 : Co-57 연도별 수입 방사능량',  data:[13,18,14,18,17]										},
       { unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_11', type: 'bar', label:'밀봉 : Co-60 연도별 수입 방사능량',  data:[423184,404264,2073,634890,854380]								},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_12', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량', data:[75990,82103,72520,280275,0]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_13', type: 'bar', label:'밀봉 : Ge-68 연도별 수입 방사능량',  data:[14,10,12,12,11]										},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_14', type: 'bar', label:'밀봉 : I-125 연도별 수입 방사능량',  data:[85,55,44,77,912]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_4_1_15', type: 'bar', label:'밀봉 : Ir-192 연도별 수입 방사능량', data:[23298,26011,24913,27827,27795]									},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2017_4_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_01', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',  data:[23,50,129,33,30]					},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_02', type: 'bar', label: '개봉 : Ga-67 연도별 수입액',  data:[9,5,6,7,6]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_03', type: 'bar', label: '개봉 : I-125 연도별 수입액',  data:[11862,11168,10524,10437,10901]								},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_04', type: 'bar', label: '개봉 : I-131 연도별 수입액',  data:[2612,2046,10340,1364,1384]							},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_05', type: 'bar', label: '개봉 : In-111 연도별 수입액', data:[27,38,26,29,34]				},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_06', type: 'bar', label: '개봉 : Mo-99 연도별 수입액',  data:[7503,7298,9097,9123,9363]							},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_07', type: 'bar', label: '개봉 : Sr-89 연도별 수입액',  data:[30,52,69,79,36]				},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_08', type: 'bar', label: '개봉 : Tl-201 연도별 수입액', data:[807,622,555,636,665]						},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_09', type: 'bar', label: '개봉 : Y-90 연도별 수입액',   data:[519,422,231,2812,1186]						},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_10', type: 'bar', label: '밀봉 : Co-57 연도별 수입액',  data:[51,68,68,81,77]				},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_11', type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data:[1134,1418,3037,3194,4166]							},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_12', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[97,246,214,730,0]					},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_13', type: 'bar', label: '밀봉 : Ge-68 연도별 수입액',  data:[580,460,532,543,503]						},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_14', type: 'bar', label: '밀봉 : I-125 연도별 수입액',  data:[302,179,151,267,617]						},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_4_2_15', type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data:[276,264,279,312,307]						},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2017_4_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2017_5 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];	
	var chartDatas =[					
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_01', type: 'bar', label:'개봉 : C-14 연도별 수입 방사능량',		data:[596,1701,1856,1794,1041]			},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_02', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',     	data:[3,1,2,2,1]          },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_03', type: 'bar', label:'개봉 : H-3 연도별 수입 방사능량',  		data:[11629,14808,22948,22204,37006]			              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_04', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',    	data:[64,68,78,53,17]		              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_05', type: 'bar', label:'개봉 : P-32 연도별 수입 방사능량',  		data:[36,28,22,23,19]	              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_06', type: 'bar', label:'개봉 : P-33 연도별 수입 방사능량',  		data:[1,1,1,1,1]          },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_07', type: 'bar', label:'개봉 : S-35 연도별 수입 방사능량',  		data:[17,12,11,9,9]              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_08', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량',  	data:[29378,1,1,1,1]              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2017_5_1_09', type: 'bar', label:'밀봉 : Ni-63 연도별 수입 방사능량',  	    data:[55,25,34,30,35]		              },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2017_5_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_01', type: 'bar', label: '개봉 : C-14 연도별 수입액', 	data:[487,1113,1445,1321,892]			              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_02', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',	data:[4,1,3,3,3]          },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_03', type: 'bar', label: '개봉 : H-3 연도별 수입액',  	data:[107,108,124,98,93]	              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_04', type: 'bar', label: '개봉 : I-125 연도별 수입액',	data:[65,100,100,192,49]	              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_05', type: 'bar', label: '개봉 : P-32 연도별 수입액',   data:[143,108,94,96,112]		              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_06', type: 'bar', label: '개봉 : P-33 연도별 수입액',   data:[3,1,13,2,1]	              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_07', type: 'bar', label: '개봉 : S-35 연도별 수입액',   data:[32,23,19,14,15]		              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_08', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[170,1,1,9,28]	              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_5_2_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data:[556,201,349,335,372]			              },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2017_5_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2017_6 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['캐나다','스위스','폴란드','네덜란드','러시아','남아프리카공화국','일본','미국','독일','영국','호주','프랑스','헝가리','싱가포르','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2017_6_1_01', type: 'bar', label:'개봉 국가별 수입 방사능량',	data: 	[447752244,101913713,78994075,62539139,59426810,57983810,27026121,19665349,10720923,8375014,4949000,3286858,333063,51000,24958]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2017_6_1_02', type: 'bar', label:'개봉 국가별 수입액',  		data: 	[1773914,277851,844022,4671929,2040029,1288262,1899225,1228472,2187364,993696,155798,1927122,1444927,97723,5661138]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (개봉 방사성동위원소)', divId:'barChart_div_2017_6_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['캐나다','러시아','미국','네덜란드','독일','체코','기타'];
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2017_6_2_01', type: 'bar', label:'밀봉 국가별 수입 방사능량',	data: 	[17504343248,9319236744,483999609,22978665,4028351,2518814,73105]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2017_6_2_02', type: 'bar', label:'밀봉 국가별 수입액',  		data: 	[5368673,1493182,3813959,291412,1144565,483827,195001]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (밀봉 방사성동위원소)', divId:'barChart_div_2017_6_2_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2017_7 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','독일','일본','영국','싱가포르','체코','타이완','네덜란드','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2017_7_1_01', type: 'bar', label:'내장기기의 국가별 수입 대수',	data: 	[131,93,33,23,9,4,3,2,8]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2017_7_1_02', type: 'bar', label:'내장기기의 국가별 수입액',  	data: 	[2619731,1418539,890355,1781213,145350,2784,516865,23082,5012280]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 내장기기의 국가별 수입현황', divId:'barChart_div_2017_7_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2017_8 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','일본','말레이시아','타이완','독일','영국','이탈리아','네덜란드','벨라루스','벨기에','스위스','싱가포르','캐나다','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2017_8_1_01', type: 'bar', label:'방사선발생장치의 국가별 수입대수',	data: 	[576,253,178,162,104,37,11,10,8,7,5,4,3,10]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2017_8_1_02', type: 'bar', label:'방사선발생장치의 국가별 수입액',  	data: 	[598534229,116088437,6759274,5242075,22177297,8312748,2345873,4378081,161371,881012,661675,1283660,4028052,2175639]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치의 국가별 수입현황', divId:'barChart_div_2017_8_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2017_9 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_9_1_01', type: 'bar',	label: '개봉 연도별 수출액', 	data: [5303,5983,7272,5355,6134]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_9_1_02', type: 'bar',   label: '밀봉 연도별 수출액',	data: [2005,1622,1386,1767,1524]},	        	 
    	{ unit:'',            pieDivId:'',                       	type: 'line',	label: '합계', 	            data: [7308,7605,8658,7122,7658]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소 연도별 수출현황', divId:'barChart_div_2017_9_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2017_10 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2013년', '2014년', '2015년', '2016년', '2017년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_10_1_01', type: 'bar',		label: '내장기기 연도별 수출액',				data: [1400,1296,2911,906,2030] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_10_1_02', type: 'bar',		label: '방사선발생장치 연도별 수출액',         data: [25618,29931,36254,57001,70108] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2017_10_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수출액',    	data: [263,850,830,645,1312] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                   				data: [27281,32077,39995,58552,73450] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기 연도별 수출현황', divId:'barChart_div_2017_10_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			



