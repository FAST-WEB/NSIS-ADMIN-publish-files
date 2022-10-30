
var chart_div_2015_1 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_1_01', type: 'bar',		label: '내장기기 연도별 수입액',				data: [17385,26974,21980,13186,18883] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_1_02', type: 'bar',		label: '방사선발생장치 연도별 수입액',         data: [455014,406965,396720,375430,409496] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수입액',    	data: [8378,8616,8209,8660,10537] },
    	{ unit:'',            pieDivId:'',                       type: 'line',	label: '합계',                 				data: [480777,442555,426909,397276,438916] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기의 연도별 수입액 추이', divId:'barChart_div_2015_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			

var chart_div_2015_2 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_2_01', type: 'bar',	label: '개봉 연도별 수입액', data: [28046,28199,25452,23958,25101]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_2_02', type: 'bar', label: '밀봉 연도별 수입액', data: [8259,8143,8933,9000,13135]},	        	 
    	{ unit:'',            pieDivId:'',                       type: 'line',label: '합계', 				data: [36305,36342,34385,32958,38236]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소의 연도별 수입액 추이', divId:'barChart_div_2015_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2015_3 = function() {
	/* 방사능 */
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_01', type: 'bar', label: '개봉 : H-3 연도별 수입 방사능량',     data:[1103949,992423,1269440,509551,918128]			   },
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_02', type: 'bar', label: '밀봉 : Am-241 연도별 수입 방사능량',  data:[715,761,244,211,4087]           	    },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_03', type: 'bar', label: '밀봉 : Cf-252 연도별 수입 방사능량',  data:[12,7,39,8,9]                  },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_04', type: 'bar', label: '밀봉 : Co-60 연도별 수입 방사능량',   data:[11163724,7422572,11108106,12969271,7659685]			 },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_05', type: 'bar', label: '밀봉 : Cs-137 연도별 수입 방사능량',  data:[1315,36471,19363,122928,71352]				 },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_06', type: 'bar', label: '밀봉 : Fe-55 연도별 수입 방사능량',   data:[44,0,22,3,37]                },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_07', type: 'bar', label: '밀봉 : Ir-192 연도별 수입 방사능량',  data:[2000032,3929393,5595396,8239076,13128662]				 },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_08', type: 'bar', label: '밀봉 : Kr-85 연도별 수입 방사능량',   data:[1444,1167,568,730,524]	             },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입 방사능량',   data:[207,43,84,48,40]            },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_3_1_10', type: 'bar', label: '밀봉 : Pm-147 연도별 수입 방사능량',  data:[383,324,204,101,229]	              },
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2015_3_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_01',	type: 'bar', label: '개봉 : H-3 연도별 수입액',     data:[889,734,783,402,679]											     },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_02',	type: 'bar', label: '밀봉 : Am-241 연도별 수입액',  data:[277,263,41,168,1640]											     },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_03',	type: 'bar', label: '밀봉 : Cf-252 연도별 수입액',  data:[1314,593,1395,961,1079]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_04',	type: 'bar', label: '밀봉 : Co-60 연도별 수입액',   data:[1309,816,1437,1337,972]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_05',	type: 'bar', label: '밀봉 : Cs-137 연도별 수입액',  data:[170,669,1010,1338,638]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_06',	type: 'bar', label: '밀봉 : Fe-55 연도별 수입액',   data:[97,0,32　,6,61]								              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_07',	type: 'bar', label: '밀봉 : Ir-192 연도별 수입액',  data:[455,931,782,1144,1933]													},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_08',	type: 'bar', label: '밀봉 : Kr-85 연도별 수입액',   data:[719,347,238,309,422]												},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_09',	type: 'bar', label: '밀봉 : Ni-63 연도별 수입액',   data:[308,431,409,328,244]											},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_3_2_10',	type: 'bar', label: '밀봉 : Pm-147 연도별 수입액',  data:[120,155,78,59,137]											},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'산업분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2015_3_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};

var chart_div_2015_4 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];	
	var chartDatas =[					
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_01', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',  data:[7,5,5,5,6]             },
    	{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_02', type: 'bar', label:'개봉 : Ga-67 연도별 수입 방사능량',  data:[16,20,16,11,15]              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_03', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',  data:[166,181,285,237,258]             },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_04', type: 'bar', label:'개봉 : I-131 연도별 수입 방사능량',  data:[92196,78332,89192,92613,100580]					},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_05', type: 'bar', label:'개봉 : In-111 연도별 수입 방사능량', data:[11,11,8,9,7]            },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_06', type: 'bar', label:'개봉 : Mo-99 연도별 수입 방사능량',  data:[276090,285423,258704,248097,280623]							},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_07', type: 'bar', label:'개봉 : Sr-89 연도별 수입 방사능량',  data:[5,7,3,4,5]             },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_08', type: 'bar', label:'개봉 : Tl-201 연도별 수입 방사능량', data:[2939,2720,2286,1974,1750]	               },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_09', type: 'bar', label:'개봉 : Y-90 연도별 수입 방사능량',   data:[108,200,291,249,178]                },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_10', type: 'bar', label:'밀봉 : Co-57 연도별 수입 방사능량',  data:[16,18,13,18,14]                     },
       { unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_11', type: 'bar', label:'밀봉 : Co-60 연도별 수입 방사능량',  ddata:[395560,405870,423184,404264,2073]				},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_12', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량', data:[1,180180,75990,82103,72520]				},
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_13', type: 'bar', label:'밀봉 : Ge-68 연도별 수입 방사능량',  data:[12,12,14,10,12]                 },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_14', type: 'bar', label:'밀봉 : I-125 연도별 수입 방사능량',  data:[36,51,85,55,44]                },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_4_1_15', type: 'bar', label:'밀봉 : Ir-192 연도별 수입 방사능량', data:[22200,27095,23298,26011,24913]					},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2015_4_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_01', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',  data:[32,24,23,50,129]				 },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_02', type: 'bar', label: '개봉 : Ga-67 연도별 수입액',  data:[10,12,9,5,6]					 },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_03', type: 'bar', label: '개봉 : I-125 연도별 수입액',  data:[13477,12767,11862,11168,10]						},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_04', type: 'bar', label: '개봉 : I-131 연도별 수입액',  data:[2811,2640,2612,2046,10340]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_05', type: 'bar', label: '개봉 : In-111 연도별 수입액', data:[34,33,27,38,26]						 },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_06', type: 'bar', label: '개봉 : Mo-99 연도별 수입액',  data:[8047,8312,7503,7298,9097]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_07', type: 'bar', label: '개봉 : Sr-89 연도별 수입액',  data:[60,80,30,52,69]		 },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_08', type: 'bar', label: '개봉 : Tl-201 연도별 수입액', data:[1176,1125,807,622,555]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_09', type: 'bar', label: '개봉 : Y-90 연도별 수입액',   data:[102,360,519,422,231]			},
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_10', type: 'bar', label: '밀봉 : Co-57 연도별 수입액',  data:[77,76,51,68,68]			},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_11', type: 'bar', label: '밀봉 : Co-60 연도별 수입액',  data:[1017,1152,1134,1418,3037]			},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_12', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액', data:[2,415,97,246,214]	  },
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_13', type: 'bar', label: '밀봉 : Ge-68 연도별 수입액',  data:[456,600,580,460,532]		},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_14', type: 'bar', label: '밀봉 : I-125 연도별 수입액',  data:[126,180,302,179,151]		},
	   	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_4_2_15', type: 'bar', label: '밀봉 : Ir-192 연도별 수입액', data:[307,327,276,264,279]		},
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'의료분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2015_4_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2015_5 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];	
	var chartDatas =[					
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_01', type: 'bar', label:'개봉 : C-14 연도별 수입 방사능량',		data:[878,1175,596,1701,1856]           },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_02', type: 'bar', label:'개봉 : Cr-51 연도별 수입 방사능량',     	data:[6,5,3,1,2]            },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_03', type: 'bar', label:'개봉 : H-3 연도별 수입 방사능량',  		data:[101,7783,11629,14808,22948]	              },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_04', type: 'bar', label:'개봉 : I-125 연도별 수입 방사능량',    	data:[60,58,64,68,78]            },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_05', type: 'bar', label:'개봉 : P-32 연도별 수입 방사능량',  		data:[49,39,36,28,22]           },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_06', type: 'bar', label:'개봉 : P-33 연도별 수입 방사능량',  		data:[1,1,1,1,1]          },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_07', type: 'bar', label:'개봉 : S-35 연도별 수입 방사능량',  		data:[17,17,17,12,11]      },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_08', type: 'bar', label:'밀봉 : Cs-137 연도별 수입 방사능량',  	data:[1,116144,29378,1,1]     },
		{ unit:'(단위：GBq)', pieDivId:'pieChart_div_2015_5_1_09', type: 'bar', label:'밀봉 : Ni-63 연도별 수입 방사능량',  	    data:[47,36,55,25,34]           },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위：GBq)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (방사능량)', divId:'barChart_div_2015_5_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	/* 수입액 */
	chartDatas =[					
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_01', type: 'bar', label: '개봉 : C-14 연도별 수입액', 	data:[662,838,487,1113,1445]		              },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_02', type: 'bar', label: '개봉 : Cr-51 연도별 수입액',	data:[8,5,4,1,3]                    },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_03', type: 'bar', label: '개봉 : H-3 연도별 수입액',  	data:[171,135,107,108,124]                    },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_04', type: 'bar', label: '개봉 : I-125 연도별 수입액',	data:[89,81,65,100,100]               },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_05', type: 'bar', label: '개봉 : P-32 연도별 수입액',  data:[202,168,143,108,94]                     },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_06', type: 'bar', label: '개봉 : P-33 연도별 수입액',  data:[4,3,3,1,13]                  },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_07', type: 'bar', label: '개봉 : S-35 연도별 수입액',  data:[33,33,32,23,19]                    },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_08', type: 'bar', label: '밀봉 : Cs-137 연도별 수입액',data:[5,312,170,1,1]                   },
		{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_5_2_09', type: 'bar', label: '밀봉 : Ni-63 연도별 수입액', data:[465,369,556,201,349]             },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위：백만원)', title:'교육･연구분야 방사성동위원소 연도별･핵종별 수입현황 (수입액)', divId:'barChart_div_2015_5_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2015_6 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['캐나다','스위스','남아프르카공화국','폴란드','네덜란드','일본','독일','미국','러시아','영국','프랑스','헝가리','이집트','체코','벨기에','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2015_6_1_01', type: 'bar', label:'개봉 국가별 수입 방사능량',	data: 	[727573314,214699859,172253500,81009540,46724185,35082704,15799552,10138632,9818320,8682539,5270439,219503,178895,13893,3784,10349]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2015_6_1_02', type: 'bar', label:'개봉 국가별 수입액',  		data: 	[426329,420809,3143803,763489,3745908,1920167,2306485,1855987,1556268,980734,1794190,1053113,2443,2669520,1294253,1167649]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (개봉 방사성동위원소)', divId:'barChart_div_2015_6_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['러시아','캐나다','미국','영국','벨기에','네덜란드','기타'];
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2015_6_2_01', type: 'bar', label:'밀봉 국가별 수입 방사능량',	data: 	[11985469398,9915199040,1599928747,30240840,18648222,15463965,7505345]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2015_6_2_02', type: 'bar', label:'밀봉 국가별 수입액',  		data: 	[1894977,4149942,4209021,15353,77115,202556,2586806]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 국가별 수입현황 (밀봉 방사성동위원소)', divId:'barChart_div_2015_6_2_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};		

var chart_div_2015_7 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','독일','일본','영국','싱가포르','네덜란드','오스트레일리아','체코','중국','스웨덴','인도','캐나다'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2015_7_1_01', type: 'bar', label:'내장기기의 국가별 수입 대수',	data: 	[259,108,35,19,9,3,3,3,2,1,1,1]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2015_7_1_02', type: 'bar', label:'내장기기의 국가별 수입액',  	data: 	[9609712,2146077,713082,2254773,146034,885227,1000272,2035,69334,1578470,145331,332328]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 내장기기의 국가별 수입현황', divId:'barChart_div_2015_7_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2015_8 = function() {
	/* 방사능 */		
	var chartDataObj = {};
	var chartLabels = ['미국','일본','중국','독일','말레이시아','이탈리아','영국','스페인','네덜란드','프랑스','기타'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2015_8_1_01', type: 'bar', label:'방사선발생장치의 국가별 수입대수',	data: 	[443,317,130,125,95,32,31,18,12,8,29]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2015_8_1_02', type: 'bar', label:'방사선발생장치의 국가별 수입액',  	data: 	[326076463,31045770,4209034,17927543,3739955,1711726,13193661,1040604,2614884,400608,7536414]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'대수 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치의 국가별 수입현황', divId:'barChart_div_2015_8_1_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2015_9 = function() {			
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_9_1_01', type: 'bar',	label: '개봉 연도별 수출액', 	data: [6034,6494,5303,5983,7272]},
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_9_1_02', type: 'bar',   label: '밀봉 연도별 수출액',	data: [2074,1900,2005,1622,1386]},	        	 
    	{ unit:'',            pieDivId:'',                       	type: 'line',	label: '합계', 	            data: [8108,8394,7308,7605,8658]},
	];
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사성동위원소 연도별 수출현황', divId:'barChart_div_2015_9_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	 		
};

var chart_div_2015_10 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2011년', '2012년', '2013년', '2014년', '2015년'];
	var chartDatas =[					
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_10_1_01', type: 'bar',		label: '내장기기 연도별 수출액',				data: [688,798,1400,1296,2911] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_10_1_02', type: 'bar',		label: '방사선발생장치 연도별 수출액',         data: [20705,18083,25618,29931,36254] },
    	{ unit:'(단위：백만원)', pieDivId:'pieChart_div_2015_10_1_03', type: 'bar',		label: '방사선발생장치 부품 연도별 수출액',    	data: [750,829,263,850,830] },
    	{ unit:'',            pieDivId:'',                          type: 'line',	    label: '합계',                   		    data: [22143,19710,27281,32077,39995] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:백만원)', title:'방사선기기 연도별 수출현황', divId:'barChart_div_2015_10_1_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);	
};			



