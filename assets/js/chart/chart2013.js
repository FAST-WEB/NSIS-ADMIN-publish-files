var chart_div_2013_1 = function() {
	
	var chartDataObj = {};
	var chartLabels = ['개봉','밀봉'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_1_1_03', type: 'bar', label:'방사성동위원소 수출입요건확인 수출 방사능량',	data: 	[64046853, 3826554379]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_1_1_04', type: 'bar', label:'방사성동위원소 수출입요건확인 수출액', data: 	[5983390, 1622789]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수출액 (단위：천원)', title:'방사성동위원소 수출입요건확인 방사능량 및 금액 (수출)', divId:'barChart_div_2013_1_1_02'};
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_1_1_01', type: 'bar', label:'방사성동위원소 수출입요건확인 수입 방사능량',	data: 	[872015566, 22069689325]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_1_1_02', type: 'bar', label:'방사성동위원소 수출입요건확인 수입액', data: 	[23958906, 9000084]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 수출입요건확인 방사능량 및 금액 (수입)', divId:'barChart_div_2013_1_1_01'};
	viewMultiBarchart(chartDataObj);					
	viewPiechart(chartDataObj);
	
	chartLabels = ['방사성동위원소 내장기기','방사선발생장치','방사선발생장치부품'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2013_1_2_03', type: 'bar', label:'방사선기기 수출입요건확인 수출 수량',	data: 	[190, 5699, 86]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_1_2_04', type: 'bar', label:'방사선기기 수출입요건확인 수출액', data: 	[1296081, 29931850, 850633]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수출액 (단위：천원)', title:'방사선기기 수출입요건확인 수량 및 금액 (수출)', divId:'barChart_div_2013_1_2_02'};
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2013_1_2_01', type: 'bar', label:'방사선기기 수출입요건확인 수입 수량',	data: 	[457, 1521, 1307]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_1_2_02', type: 'bar', label:'방사선기기 수출입요건확인 수입액', data: 	[13186260, 375430854, 8660700]},				
	];		      				
	chartDataObj = {legendPosition: 'bottom', legendDisplay: true, chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선기기 수출입요건확인 수량 및 금액 (수입)', divId:'barChart_div_2013_1_2_01'};
	viewMultiBarchart(chartDataObj);					
	viewPiechart(chartDataObj);
};

var chart_div_2013_2 = function() {
	
	var chartDataObj = {};
	var chartLabels = ['산업분야','의료분야','교육 및 연구분야'];
	var chartDatas = [					
    	{ unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_2_1_01', type: 'bar',		label: '개봉 이용분야별 수입 방사능량',	     	data: [1269512802,  350749176, 12633069] },
    	{ unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_2_1_02', type: 'bar',		label: '밀봉 이용분야별 수입 방사능량',         	data: [16898204510, 522584286, 29481418] },    	
    	{ unit:'',           pieDivId:'',                       type: 'line',	    label: '합계',         data: [18167717312, 873333462, 42114487] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위:MBq)', title:'방사성동위원소 이용분야별 수입현황 (방사능량)', divId:'barChart_div_2013_2_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['산업분야','의료분야','교육 및 연구분야'];
	chartDatas = [					
    	{ unit:'(단위：ea)', pieDivId:'pieChart_div_2013_2_2_01', type: 'bar',		label: '내장기기 이용분야별 수입 수량',	    		data: [ 969,  5 , 56] },
    	{ unit:'(단위：ea)', pieDivId:'pieChart_div_2013_2_2_02', type: 'bar',		label: '방사선발생장치 이용분야별 수입 수량',         	data: [1903, 19,  88] },  
       { unit:'(단위：ea)', pieDivId:'pieChart_div_2013_2_2_03', type: 'bar',		label: '방사선발생장치부품 이용분야별 수입 수량',       data: [1330,  8,  66] },    	  	
    	{ unit:'',          pieDivId:'',                        type: 'line',	    label: '합계',           							data: [4202, 32, 210] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수량 (단위:ea)', title:'방사선기기 이용분야별 수입현황 (수량)', divId:'barChart_div_2013_2_02'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = ['산업분야','의료분야','교육 및 연구분야'];
	chartDatas = [					
    	{ unit:'(단위：천원)', pieDivId:'pieChart_div_2013_2_3_01', type: 'bar',		label: '개봉 이용분야별 수입액',	     				data: [843639,  23642354, 1029704] },
    	{ unit:'(단위：천원)', pieDivId:'pieChart_div_2013_2_3_02', type: 'bar',		label: '밀봉 이용분야별 수입액',         				data: [5519061, 2529027, 1147570] },    
       { unit:'(단위：천원)', pieDivId:'pieChart_div_2013_2_3_03', type: 'bar',		label: '내장기기 이용분야별 수입액',	    data: [12640711,  6337247, 3010347] },
    	{ unit:'(단위：천원)', pieDivId:'pieChart_div_2013_2_3_04', type: 'bar',		label: '방사선발생장치 이용분야별 수입액',         	data: [303647764, 80612951, 22946141] },  
       { unit:'(단위：천원)', pieDivId:'pieChart_div_2013_2_3_05', type: 'bar',		label: '방사선발생장치부품 이용분야별 수입액',         	data: [8067701, 89600, 354766] },    	  	
    	{ unit:'',          pieDivId:'',                        type: 'line',	    label: '합계',           			data: [330718876, 113211179, 28488528] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수입액 (단위:천원)', title:'방사성동위원소, 방사선기기 이용분야별 수입현황 (금액)', divId:'barChart_div_2013_2_03'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
};

var chart_div_2013_3 = function() {
		
	var chartDataObj = {};
	var chartLabels = ['Am-241', 'Au-198', 'C-14', 'Cf-252', 'Co-57', 'Co-60', 'Cs-137', 'Ge-68', 'H-3', 'I-125', 'I-131', 'Ir-192', 'Kr-85', 'Mo-99', 'Na-22', 'Ni-63', 'Pm-147', 'Se-75'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_3_1_01', type: 'bar', label:'개봉 핵종별 수출 방사능량',	data: 	[0, 0, 102595, 0, 0, 0, 0, 0, 611, 1, 8362000, 0, 0, 50405400, 0, 0, 0, 0]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_3_1_02', type: 'bar', label:'개봉 핵종별 수출액',  	data: 	[0, 0, 0, 0, 0, 0, 0, 0, 48395, 585224, 371007, 0, 0, 1599439, 0, 0, 0, 0]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수출액 (단위：천원)', title:'방사성동위원소 핵종별 수출현황 (개봉)', divId:'barChart_div_2013_3_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_3_2_01', type: 'bar', label:'밀봉 핵종별 수출 방사능량',	data: 	[1110, 50500, 0, 1300, 2305, 230191792, 100344, 4475, 0, 445, 0, 4117032973, 99000, 0, 4, 1817, 18500, 288]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_3_2_02', type: 'bar', label:'밀봉 핵종별 수출액',  	data: 	[0, 2092, 2698682, 0, 0, 0, 66472, 0, 0, 0, 0, 1891580, 25706, 0, 0, 19841, 0, 0]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수출액 (단위：천원)', title:'방사성동위원소 핵종별 수출현황 (밀봉)', divId:'barChart_div_2013_3_02'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
  
};

var chart_div_2013_4 = function() {
		
	var chartDataObj = {};
	var chartLabels = ['Am-241', 'Am-241/Be', 'Ba-133', 'C-14', 'Ca-45', 'Cf-252', 'Cl-36', 'Co-57', 'Co-60', 'Cr-51', 'Cs-134', 'Cs-137', 'Eu-152', 'Fe-55', 'Ga-67', 'Ge/Ga-68', 'Ge-68', 'H-3', 'I-123', 'I-125', 'I-131', 'In-111', 'Ir-192', 'Kr-85', 'Lu-177', 'M(Cd-109)', 'M(I-125)', 'Mn-54', 'Mo-99', 'Na-22', 'Ni-63', 'Np-237', 'P-32', 'P-33', 'Pm-147', 'Po-210', 'Ra-223', 'Ra-226', 'Ru-106', 'S-35', 'Se-75', 'Sn-113', 'Sr-85', 'Sr-89', 'Sr-90', 'Tl-201', 'W/Re-188', 'W-188', 'Y-90', 'Zn-65'];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_4_1_01', type: 'bar', label:'개봉 핵종별 수입 방사능량',	data: 	[37,0,0,596864,148,0,4,185,4,8288,1,189,1,4,16206,3700,185,1281069045,9250,312409,89191522,8115,0,72520,12179,1,159,37,258854312,19,4,1,35892,322,0,0,24,1,0,17214,0,185,78,2518,37,2285934,18500,88060,290880,19]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_4_1_02', type: 'bar', label:'개봉 핵종별 수입액',  	data: 	[3302,0,0,592627,586,0,6289,1206,1284,26382,1234,8010,1161,1032,9325,63663,3263,890512,9286,11989831,2612243,27550,0,59109,6754,24239,83894,2771,7505860,1479,1032,1951,142918,2646,0,0,72,1484,0,32335,0,5652,2643,31359,2155,807064,9467,22085,518836,1358]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 핵종별 수입현황 (개봉)', divId:'barChart_div_2013_4_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：MBq)', pieDivId:'pieChart_div_2013_4_2_01', type: 'bar', label:'밀봉 핵종별 수입 방사능량',	data: 	[246207,37000,10,0,0,41500,0,16472,11531289908,0,0,124730945,740,22607,4,0,13663,11000,0,84903,0,0,5766062279,576580,0,0,0,0,0,29,140316,0,0,0,203685,1351,0,0,79,0,26792440,0,0,0,7400,0,0,0,0,0]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_4_2_02', type: 'bar', label:'밀봉 핵종별 수입액',  	data: 	[214756,100181,345,0,0,1448866,0,60436,2571113,0,0,1277945,12306,37543,0,0,580104,0,0,301749,0,0,1147736,237831,0,0,0,0,0,17072,974934,0,0,0,78231,2569,0,0,54952,0,49932,0,0,0,27165,0,0,0,0,0]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'방사능량 (단위：MBq)', yLabel_right:'수입액 (단위：천원)', title:'방사성동위원소 핵종별 수입현황 (밀봉)', divId:'barChart_div_2013_4_02'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
  
};

var chart_div_2013_5 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2009년', '2010년', '2011년', '2012년', '2013년'];
	var chartDatas =[					
    	{ unit:'(단위：MBq)',	pieDivId:'pieChart_div_2013_5_01', type: 'bar',		label: '개봉 연도별 수출추이',	data: 	[31875327,	    113571487,	102620116,	   82010326,	   58870605] },
    	{ unit:'(단위：MBq)', 	pieDivId:'pieChart_div_2013_5_02', type: 'bar',		label: '밀봉 연도별 수출추이',	data:	[1724174650,	2523098794,	3318969700,	3073952664,	4347505752] },    	
    	{ unit:'',           pieDivId:'',                       type: 'line',		label: '합계',	data: 	[1756049977,	2636670281,	3421589816,	3155962990,	4406376357] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위:MBq)', title:'방사성동위원소의 연도별 수출추이', divId:'barChart_div_2013_5_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	var chartDataObj = {};
	var chartLabels = ['2009년', '2010년', '2011년', '2012년', '2013년'];
	var chartDatas =[					
    	{ unit:'(단위：ea)',	pieDivId:'pieChart_div_2013_5_03', type: 'bar',		label: '내장기기 연도별 수출추이',	data: 	[74,	161,	170,	114,	694] },
    	{ unit:'(단위：ea)', 	pieDivId:'pieChart_div_2013_5_04', type: 'bar',		label: '방사선 발생장치 연도별 수출추이',	data:	[611,	905,	1600,	1360,	2784] },
		{ unit:'(단위：ea)', 	pieDivId:'pieChart_div_2013_5_05', type: 'bar',		label: '방사선발생장치 부품 연도별 수출추이',	data:	[14,	21,	    36,	55,	    155] },    	
    	{ unit:'',           pieDivId:'',                       type: 'line',		label: '합계',	data: 	[699,	1087, 	1806,	1529,	3633] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수량 (단위:ea)', title:'방사선기기의 연도별 수출추이', divId:'barChart_div_2013_5_02'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);		
};	

var chart_div_2013_6 = function() {	
	var chartDataObj = {};
	var chartLabels = ['2009년', '2010년', '2011년', '2012년', '2013년'];
	var chartDatas =[					
    	{ unit:'(단위：MBq)',	pieDivId:'pieChart_div_2013_6_01', type: 'bar',		label: '개봉 연도별 수입추이',	data: 	[925864128,	1165922072,	1476636327,	1371251900,	1632895047] },
    	{ unit:'(단위：MBq)', 	pieDivId:'pieChart_div_2013_6_02', type: 'bar',		label: '밀봉 연도별 수입추이',	data:	[3148878647,	6682851362,	20991800295,	12350433505,	17450270213] },    	
    	{ unit:'',           pieDivId:'',                       type: 'line',		label: '합계',	data: 	[4074742775,	7848773434,	22468436622,	13721685405,	19083165260] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'방사능량 (단위:MBq)', title:'방사성동위원소의 연도별 수입추이', divId:'barChart_div_2013_6_01'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	var chartDataObj = {};
	var chartLabels = ['2009년', '2010년', '2011년', '2012년', '2013년'];
	var chartDatas =[					
    	{ unit:'(단위：ea)',	pieDivId:'pieChart_div_2013_6_03', type: 'bar',		label: '내장기기 연도별 수입추이',	data: 	[514,	715,	550,	888,	1030] },
    	{ unit:'(단위：ea)', 	pieDivId:'pieChart_div_2013_6_04', type: 'bar',		label: '방사선 발생장치 연도별 수입추이',		data:	[841,	1830,	2009,	1998,	2010] },
		{ unit:'(단위：ea)', 	pieDivId:'pieChart_div_2013_6_05', type: 'bar',		label: '방사선발생장치 부품 연도별 수입추이',		data:	[545,	805,	875,	959,	1404] },    	
    	{ unit:'',           pieDivId:'',                       type: 'line',		label: '합계',					data: 	[1900,	3350,	3434,	3845,	4444] },
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel:'수량 (단위:ea)', title:'방사선기기의 연도별 수입추이', divId:'barChart_div_2013_6_02'};				
	viewBarchart(chartDataObj);
	viewPiechart(chartDataObj);		
};	


var chart_div_2013_7 = function() {
		
	var chartDataObj = {};
	var chartLabels = [
		'발생장치-엑스선발생장치(100 KVP이하)', '발생장치-엑스선발생장치(101-200 KVP)', '발생장치-엑스선발생장치(201 KVP이상)', '발생장치-가속이온주입기(3Mev)',
		'발생장치부분품-엑스선발생장치(100 KVP이하)', '발생장치부분품-엑스선발생장치(101-200 KVP)', '발생장치부분품-엑스선발생장치(201 KVP이상)', '발생장치부분품-선형가속주입기(4MV)' 
	];	
	var chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)',  pieDivId:'pieChart_div_2013_7_1_01', type: 'bar', label:'방사선발생장치(부분품)의 용량별 수출 수량',		data: 	[2689, 72, 72, 2, 76, 53, 24, 2]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_7_1_02', type: 'bar', label:'방사선발생장치(부분품)의 용량별 수출액',  	data: 	[10833751, 11512712, 11512712, 983384, 228960, 33619, 0, 0]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수출액 (단위：천원)', title:'방사선발생장치(부분품)의 용량별 수출·입현황 (수출)', divId:'barChart_div_2013_7_01'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
	
	chartLabels = [
		'발생장치-엑스선발생장치(100 KVP이하)', '발생장치-엑스선발생장치(101-200 KVP)', '발생장치-엑스선발생장치(201 KVP이상)', '발생장치-가속이온주입기(3~4.5Mev)', '발생장치-사이크로트론(16.5Mev~230Mev)', '발생장치-선형가속장치(6Mev~9MeV)', '발생장치-선형가속치료장치(10MV~15MV)',
		'발생장치부분품-엑스선발생장치(100 KVP이하)', '발생장치부분품-엑스선발생장치(101-200 KVP)', '발생장치부분품-엑스선발생장치(201 KVP이상)', '발생장치부분품-선형가속치료장치(4~9MV)' 
	];	
	chartDatas =[					
		{ legendDisplay: false, yAxisId:'y-axis-left',  unit:'(단위：ea)', pieDivId:'pieChart_div_2013_7_2_01', type: 'bar', label:'방사선발생장치(부분품)의 용량별 수입 수량',	data: 	[1543,319,1208,8,5,5,10,1053,288,61,2]},		
		{ legendDisplay: false, yAxisId:'y-axis-right', unit:'(단위：천원)', pieDivId:'pieChart_div_2013_7_2_02', type: 'bar', label:'방사선발생장치(부분품)의 용량별 수입액',  	data: 	[248976608,30379359,30341558,14846203,47459290,11881870,23320970,4250738,3023620,924746,312964]},		
	];		      				
	chartDataObj = {chartLabels:chartLabels, chartDatas:chartDatas, xLabel:'', yLabel_left:'수량 (단위：ea)', yLabel_right:'수입액 (단위：천원)', title:'방사선발생장치(부분품)의 용량별 수출·입현황 (수입)', divId:'barChart_div_2013_7_02'};				
	viewMultiBarchart(chartDataObj);
	viewPiechart(chartDataObj);
  
};

