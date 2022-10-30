
var chart_div_2016_1 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_1_01', type: 'bar',		label: '내장기기 연도별 수입액',				data: [26974,21980,13186,18883,11103] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_1_02', type: 'bar',		label: '방사선발생장치 연도별 수입액',         data: [406965,396720,375430,409496,416435] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수입액',    	data: [8616,8209,8660,10537,15039] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 				data: [442555,426909,397276,438916,442577] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기의 연도별 수입액 추이', divId:'barChart_div_2016_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			

var chart_div_2016_2 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_2_01', type: 'bar',	label: '개봉 연도별 수입액', data: [28199,25452,23958,25101,25487]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_2_02', type: 'bar', label: '밀봉 연도별 수입액', data: [8143,8933,9000,13135,14850]},	        	 
    	{ unit:'',            pieDivId:'',                       type: 'line',label: '합계', 				data: [36342,34385,32958,38236,40337]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소의 연도별 수입액 추이', divId:'barChart_div_2016_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2016_3 = function() {
	/* 방사능 */
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_01', type: 'bar', label: '개봉 : H-3 연도별 수입 방사능량',     data:[992423,1269440,509551,918128,354095]													},
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_02', type: 'bar', label: '밀봉 : Am-241 연도별 수입 방사능량', data:[761,244,211,2302,568]									},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_03', type: 'bar', label: '밀봉 : Cf-252 연도별 수입 방사능량', data:[7,39,8,9,40]							},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_04', type: 'bar', label: '밀봉 : Co-60 연도별 수입 방사능량',  data:[7422572,11108106,12969271,7659685,24069006]															},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_05', type: 'bar', label: '밀봉 : Cs-137 연도별 수입 방사능량', data:[36471,19363,122928,71352,119652]												},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_06', type: 'bar', label: '밀봉 : Fe-55 연도별 수입 방사능량',  data:[0,22,3,37,0]								},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_07', type: 'bar', label: '밀봉 : Ir-192 연도별 수입 방사능량', data:[3929393,5595396,8239076,13128662,12040544]															},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_08', type: 'bar', label: '밀봉 : Kr-85 연도별 수입 방사능량',  data:[1167,568,730,524,769]									 },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입 방사능량',  data:[43,84,48,40,51]								},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_3_1_10', type: 'bar', label: '밀봉 : Pm-147 연도별 수입 방사능량',  data:[324,204,101,229,550]									},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2016_3_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_01',	type: 'bar', label: '개봉 : H-3 연도별 수입액',     data:[734,783,402,679,533]													},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_02',	type: 'bar', label: '밀봉 : Am-241 연도별 수입액', data:[263,41,168,1048,241]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_03',	type: 'bar', label: '밀봉 : Cf-252 연도별 수입액', data:[593,1395,961,1079,1079]														},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_04',	type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data:[816,1437,1337,972,2213]														},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_05',	type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[669,1010,1338,638,1077]														},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_06',	type: 'bar', label: '밀봉 : Fe-55 연도별 수입액',  data:[0,32,6,61,0]												},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_07',	type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data:[931,782,1144,1933,1750]														},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_08',	type: 'bar', label: '밀봉 : Kr-85 연도별 수입액',  data:[347,238,309,422,1221]														},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_09',	type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data:[431,409,328,244,392]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_3_2_10',	type: 'bar', label: '밀봉 : Pm-147 연도별 수입액',  data:[155,78,59,137,180]													},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2016_3_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};

var chart_div_2016_4 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];	
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_01', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',  data:[5,5,5,6,7]			},
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_02', type: 'bar', label:'개봉 : Ga-67 연도별 수입 방사능량',  data:[20,16,11,15,13]				},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_03', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  data:[181,285,237,258,296]				},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_04', type: 'bar', label:'개봉 : I-131 연도별 수입 방사능량',  data:[78332,89192,92613,100580,85493]							},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_05', type: 'bar', label:'개봉 : In-111 연도별 수입 방사능량', data:[11,8,9,7,10]			},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_06', type: 'bar', label:'개봉 : Mo-99 연도별 수입 방사능량',  data:[285423,258704,248097,280623,244757]								},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_07', type: 'bar', label:'개봉 : Sr-89 연도별 수입 방사능량',  data:[7,3,4,5,7]			},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_08', type: 'bar', label:'개봉 : Tl-201 연도별 수입 방사능량', data:[2720,2286,1974,1750,1754]					},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_09', type: 'bar', label:'개봉 : Y-90 연도별 수입 방사능량',   data:[200,291,249,178,2877]					},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_10', type: 'bar', label:'밀봉 : Co-57 연도별 수입 방사능량',  data:[18,13,18,14,18]				},
       { unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_11', type: 'bar', label:'밀봉 : Co-60 연도별 수입 방사능량',  ddata:[405870,423184,404264,2073,634890]						},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_12', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량', data:[180180,75990,82103,72520,280275]						},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_13', type: 'bar', label:'밀봉 : Ge-68 연도별 수입 방사능량',  data:[12,14,10,12,12]				},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_14', type: 'bar', label:'밀봉 : I-125 연도별 수입 방사능량',  data:[51,85,55,44,77]			},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_4_1_15', type: 'bar', label:'밀봉 : Ir-192 연도별 수입 방사능량', data:[27095,23298,26011,24913,27827]							},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2016_4_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_01', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',  data:[24,23,50,129,33]        },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_02', type: 'bar', label: '개봉 : Ga-67 연도별 수입액',  data:[12,9,5,6,7]               },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_03', type: 'bar', label: '개봉 : I-125 연도별 수입액',  data:[12767,11862,11168,10524,10437]							},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_04', type: 'bar', label: '개봉 : I-131 연도별 수입액',  data:[2640,2612,2046,10340,1364]					},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_05', type: 'bar', label: '개봉 : In-111 연도별 수입액', data:[33,27,38,26,29]      },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_06', type: 'bar', label: '개봉 : Mo-99 연도별 수입액',  data:[8312,7503,7298,9097,9123]					},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_07', type: 'bar', label: '개봉 : Sr-89 연도별 수입액',  data:[80,30,52,69,79]        },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_08', type: 'bar', label: '개봉 : Tl-201 연도별 수입액', data:[1125,807,622,555,636]		},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_09', type: 'bar', label: '개봉 : Y-90 연도별 수입액',   data:[360,519,422,231,2812]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_10', type: 'bar', label: '밀봉 : Co-57 연도별 수입액',  data:[76,51,68,68,81]       },
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_11', type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data:[1152,1134,1418,3037,3194]					},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_12', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[415,97,246,214,730]	          },
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_13', type: 'bar', label: '밀봉 : Ge-68 연도별 수입액',  data:[600,580,460,532,543]		},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_14', type: 'bar', label: '밀봉 : I-125 연도별 수입액',  data:[180,302,179,151,267]		},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_4_2_15', type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data:[327,276,264,279,312]		},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2016_4_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2016_5 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];	
	var chartDatas =[					
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_01', type: 'bar', label:'개봉 : C-14 연도별 수입 방사능량',		data:[1175,596,1701,1856,1794]     },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_02', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',     	data:[5,3,1,2,2]         },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_03', type: 'bar', label:'개봉 : H-3 연도별 수입 방사능량',  		data:[7783,11629,14808,22948,22204]		              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_04', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',    	data:[58,64,68,78,53]       },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_05', type: 'bar', label:'개봉 : P-32 연도별 수입 방사능량',  		data:[39,36,28,22,23]     },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_06', type: 'bar', label:'개봉 : P-33 연도별 수입 방사능량',  		data:[1,1,1,1,1]           },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_07', type: 'bar', label:'개봉 : S-35 연도별 수입 방사능량',  		data:[17,17,12,11,9]       },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_08', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량',  	data:[116144,29378,1,1,1]            },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2016_5_1_09', type: 'bar', label:'밀봉 : Ni-63 연도별 수입 방사능량',  	    data:[36,55,25,34,30]         },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2016_5_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_01', type: 'bar', label: '개봉 : C-14 연도별 수입액', 	data:[838,487,1113,1445,1321]		              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_02', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',	data:[5,4,1,3,3]                    },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_03', type: 'bar', label: '개봉 : H-3 연도별 수입액',  	data:[135,107,108,124,98]                        },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_04', type: 'bar', label: '개봉 : I-125 연도별 수입액',	data:[81,65,100,100,192]                    },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_05', type: 'bar', label: '개봉 : P-32 연도별 수입액',   data:[168,143,108,94,96]              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_06', type: 'bar', label: '개봉 : P-33 연도별 수입액',   data:[3,3,1,13,2]                 },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_07', type: 'bar', label: '개봉 : S-35 연도별 수입액',   data:[33,32,23,19,14]          },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_08', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[312,170,1,1,9]                 },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_5_2_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',  data:[369,556,201,349,335]	              },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2016_5_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2016_6 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['캐나다','남아프리카공화국','폴란드','스위스','러시아','네덜란드','일본','미국','독일','프랑스','영국','헝가리','체코','벨기에','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2016_6_1_01', type: 'bar', label:'개봉 국가별 수입 방사능량',	data: 	[322387342,88263130,72804380,56938070,52062330,50623208,33762526,16230152,12202248,6383864,5219537,257160,13972,4083,13487]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2016_6_1_02', type: 'bar', label:'개봉 국가별 수입액',  		data: 	[3252286,1825030,713475,225521,2205505,4099251,2159106,1540691,2205228,2023346,786541,1141588,2615183,1464848,1209275]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (개봉 방사성동위원소)', divId:'barChart_div_2016_6_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['캐나다','러시아','미국','네덜란드','영국','독일','기타'];
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2016_6_2_01', type: 'bar', label:'밀봉 국가별 수입 방사능량',	data: 	[25279517176,11545157188,881732825,25666715,17334500,5377016,9540656]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2016_6_2_02', type: 'bar', label:'밀봉 국가별 수입액',  		data: 	[6177353,2374576,4090825,335222,8288,950598,913548]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (밀봉 방사성동위원소)', divId:'barChart_div_2016_6_2_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2016_7 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','독일','일본','싱가포르','네덜란드','핀란드','캐나다','체코','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2016_7_1_01', type: 'bar', label:'내장기기의 국가별 수입 대수',	data: 	[204,130,31,13,6,6,5,4,6]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2016_7_1_02', type: 'bar', label:'내장기기의 국가별 수입액',  	data: 	[3668460,1905141,1085233,240624,262938,41668,954598,2731,2941448]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 내장기기의 국가별 수입현황', divId:'barChart_div_2016_7_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2016_8 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','일본','말레이시아','독일','대만','영국','싱가포르','네덜란드','캐나다','스페인','벨기에','이탈리아','스위스','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2016_8_1_01', type: 'bar', label:'방사선발생장치의 국가별 수입대수',	data: 	[382,289,200,91,90,34,15,11,8,6,7,4,3,4]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2016_8_1_02', type: 'bar', label:'방사선발생장치의 국가별 수입액',  	data: 	[217707321,142609289,9843247,14553112,6505478,10201046,4949448,3032891,219854,294601,1355168,1692795,2153186,1317250]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치의 국가별 수입현황', divId:'barChart_div_2016_8_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2016_9 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_9_1_01', type: 'bar',	label: '개봉 연도별 수출액', 	data: [6494,5303,5983,7272,5355]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_9_1_02', type: 'bar',   label: '밀봉 연도별 수출액',	data: [1900,2005,1622,1386,1767]},	        	 
    	{ unit:'',            pieDivId:'',                       	type: 'line',	label: '합계', 	            data: [8394,7308,7605,8658,7122]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소 연도별 수출현황', divId:'barChart_div_2016_9_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2016_10 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2012년', '2013년', '2014년', '2015년', '2016년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_10_1_01', type: 'bar',		label: '내장기기 연도별 수출액',				data: [798,1400,1296,2911,906] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_10_1_02', type: 'bar',		label: '방사선발생장치 연도별 수출액',         data: [18083,25618,29931,36254,57001] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2016_10_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수출액',    	data: [829,263,850,830,645] },
    	{ unit:'',            pieDivId:'',                          type: 'line',	    label: '합계',                   		    data: [19710,27281,32077,39995,58552] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기 연도별 수출현황', divId:'barChart_div_2016_10_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			



