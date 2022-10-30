var Report = {
	FORM_ID : "formReport",
	PAGE_INDEX_ID : "pageIndex",
	TOTAL_CNT : 0,
	MENU_NO : 0,
	OPENER_KEY : "",
	STATUS : "",
	CALLBACK_FUNCTION : "",
	POPS_CODE : "",
	ASK_CORP : "",
	IDOC_NOXX : "",
	ASK_TYPE : "",
	RCV_DATE : "",
	ACTION_STATUS : "",
	IDOC_NOXX_LIST : "",
	IDOC_NOXX_GROUP : "",
	IDOC_NOXX_ARRAY : "",
	
	
	/**
	 * 개요 :  목록 초기화
	 * 
	 * @Author : lsj
	 * @Date : 2014. 12. 26.
	 * @param 
	 */
	formInitList : function() {
		$jquery("#" + Report.FORM_ID).validationEngine({    
			createArea : "#content_body",
			scrollOverflow : 90,
			binded : true
		});
	},
	//페이지 인덱스 설정
	setPageIndex : function(pageIndex) {
		$jquery("#" + Report.FORM_ID + " #" + Report.PAGE_INDEX_ID).val(pageIndex);
	},
 
    //수출입요건확인현황 페이지번호 클릭
	fn_egov_link_page : function(pageIndex) {
		Report.setPageIndex(pageIndex);
		Report.refreshStatusList();
	},
	
	//수출입요건확인현황 페이지번호 클릭
	fn_egov_link_page_month : function(pageIndex) {
		Report.setPageIndex(pageIndex);
		Report.refreshMonStatList();
	},
	
	
	//월별 승인방사능/수량현황 조회버튼 클릭
	searchMon : function(thisObj) {
		this.setPageIndex(1);
		this.refreshMonStatList(thisObj);
	},
	//월별 승인방사능/수량현황 조회
	refreshMonStatList : function(thisObj) {
		if($jquery("#conStartDe").val() != ""){
			if($jquery("#conEndDe").val()==""){
				alert("승인일자 종료일자를 입력해 주세요.");
				return;
			}
		}
		if($jquery("#conEndDe").val() != ""){
			if($jquery("#conStartDe").val()==""){
				alert("승인일자 시작일자를 입력해 주세요.");
				return;
			}
		}
		
		if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
			var conStartDe = $jquery("#conStartDe").val();
			conStartDe = conStartDe.replace(/-/gi,"");
			
			var conEndDe = $jquery("#conEndDe").val();
			conEndDe = conEndDe.replace(/-/gi,"");
			
			if(conStartDe >conEndDe){
				alert("승인일 시작일이 종료일보다 큽니다.");
				return;
			}
		}			
		
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val($jquery('#paging :selected').val());
		
		//사용자로그등록
		gf_LogInsertProc(jsContextPath + "/board/report/retrieveMonthStat.do", gf_FormDataToJson("#" + Report.FORM_ID), true);
		
		$jquery("#content_body").ajaxload(
			"blockLoad",
			 jsContextPath + "/board/report/retrieveMonthStat.do",
			"POST",
			"html",
			$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	
	//수출입요건확인현황 조회버튼 클릭
	search : function(thisObj) {
		this.setPageIndex(1);
		this.refreshStatusList(thisObj);
	},
	//수출입요건확인현황 조회
	refreshStatusList : function(thisObj) {
		if($jquery("#conStartDe").val() != ""){
			if($jquery("#conEndDe").val()==""){
				alert("승인일자 종료일자를 입력해 주세요.");
				return;
			}
		}
		if($jquery("#conEndDe").val() != ""){
			if($jquery("#conStartDe").val()==""){
				alert("승인일자 시작일자를 입력해 주세요.");
				return;
			}
		}
		
		if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
			var conStartDe = $jquery("#conStartDe").val();
			conStartDe = conStartDe.replace(/-/gi,"");
			
			var conEndDe = $jquery("#conEndDe").val();
			conEndDe = conEndDe.replace(/-/gi,"");
			
			if(conStartDe >conEndDe){
				alert("승인일 시작일이 종료일보다 큽니다.");
				return;
			}
		}			
		
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val($jquery('#paging :selected').val());
		
		//사용자로그등록
		gf_LogInsertProc(jsContextPath + "/board/report/retrieveAgencyStat.do", gf_FormDataToJson("#" + Report.FORM_ID), true);
		
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveAgencyStat.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	//수출입요건확인현황 상세페이지 조회
	costStatusDetailView : function(thisObj, idocNoxx) {
		  // 2017.02.24 ywlee 검색조건 유지 위한.. 
		  //아래에서 idocNoxx값을 셋팅하니 여기서는 삭제 후 다시 넣자 
		  // 상세에서 목록으로 이동시 기존 파리미터값 셋팅
		  removeFormParameter(Report.FORM_ID, "idocNoxx");
		  var parmVal = $jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
		 // console.log(jsContextPath + "/apply/formApply.do#AC=/apply/retrieveApplyDetail.do&VA=content_body&idocNoxx="+idocNoxx+"&"+parmVal) ;
		  location.href = 	jsContextPath + "/apply/formApply.do#AC=/apply/retrieveApplyDetail.do&VA=content_body&idocNoxx="+idocNoxx+"&"+parmVal;
	},

	_formValidate : function() {
		if ($jquery("#" + Report.FORM_POP_ID).validationEngine("validate")) {
			if(Report.replaceAll($jquery("#toDay").val(),"-","")  < Report.replaceAll($jquery("#regsDate").val(),"-","")){
				alert("오늘 이후의 날짜는 선택하실수 없습니다.");
				return false;
			}
		} else {
			$jquery.growlUI("info", "입력값을 확인하세요");
			return false;
		}
		return true;
	},
	
	 replaceAll : function(str, searchStr, replaceStr) {
		    return str.split(searchStr).join(replaceStr);
	},
	
	calDateRange : function(val1, val2){
        var FORMAT = "-";

        // FORMAT을 포함한 길이 체크
        if (val1.length != 10 || val2.length != 10)
            return null;

        // FORMAT이 있는지 체크
        if (val1.indexOf(FORMAT) < 0 || val2.indexOf(FORMAT) < 0)
            return null;

        // 년도, 월, 일로 분리
        var start_dt = val1.split(FORMAT);
        var end_dt = val2.split(FORMAT);
        
        // 월 - 1(자바스크립트는 월이 0부터 시작하기 때문에...)
        // Number()를 이용하여 08, 09월을 10진수로 인식하게 함.
        start_dt[1] = (Number(start_dt[1]) - 1) + "";
        end_dt[1] = (Number(end_dt[1]) - 1) + "";

        var from_dt = new Date(start_dt[0], start_dt[1], start_dt[2]);
        var to_dt = new Date(end_dt[0], end_dt[1], end_dt[2]);

        return (to_dt.getTime() - from_dt.getTime()) / 1000 / 60 / 60 / 24;
    },
    
    /**
	 * 개요 : 엑셀 다운로드
	 * 
	 * @Author : lsj
	 * @Date : 2014. 12. 8.
	 * @param thisObj
	 */
	excelDownload : function(thisObj){
		return false;
//		if(Report.TOTAL_CNT == 0){
//			alert("해당 데이터가 없습니다");
//		}else{
			
			// 접수기간 검색조건 유효성 체크
			if($jquery("#conStartDe").val() != ""){
				if($jquery("#conEndDe").val()==""){
					alert("접수기간 종료일자를 입력해 주세요.");
					$jquery("#conEndDe").focus();
					return;
				}
			}
			
			if($jquery("#conEndDe").val() != ""){
				if($jquery("#conStartDe").val()==""){
					alert("접수기간 시작일자를 입력해 주세요.");
					$jquery("#conStartDe").focus();
					return;
				}
			}
			
			if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
				var conStartDe = $jquery("#conStartDe").val();
				conStartDe = conStartDe.replace(/-/gi,"");
			//	$jquery("#conStartDe").val(conStartDe);		// "-"를 제거한 문자열로 대체시켜준다. ()   
				
				var conEndDe = $jquery("#conEndDe").val();
				conEndDe = conEndDe.replace(/-/gi,"");
			//	$jquery("#conEndDe").val(conEndDe);
				
				if(conStartDe >conEndDe){
					alert("접수기간 시작일이 종료일보다 큽니다.");
					$jquery("#conStartDe").focus();
					return;
				}
			}			
			
			$jquery.growlUI("info", "엑셀 다운로드를 요청하였습니다.<br />잠시만 기다려주세요.");
			
			$jquery("#" + this.FORM_ID + ' #pagingEnable').val('0');
			$jquery("#recordCountPerPage").val('999999999');
			$jquery("#pageIndex").val('1');
			
			$jquery("#" + Report.FORM_ID).attr("action", "excelDownload.do");
			$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
			$jquery("#" + Report.FORM_ID).submit();
	//	}
	},
	
	/**
	 * 개요 : report1
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	research : function(thisObj) {
		location.href=jsContextPath + "/board/report/formReport.do";
	},
	
	/**
	 * 개요 : report1
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report1 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport1.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report2
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report2 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport2.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report3
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report3 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport3.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report4
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report4 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport4.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report5
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report5 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport5.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report6
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report6 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport6.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report7
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report7 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport7.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	/**
	 * 개요 : report7
	 * 
	 * @Author : L S J
	 * @Date : 2015. 03. 02.
	 * @param thisObj
	 */
	report8 : function(thisObj) {
		$jquery("#content_body").ajaxload(
				"blockLoad",
				jsContextPath + "/board/report/retrieveReport8.do",
				"POST",
				"html",
				$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	
	//모델 통계 조회버튼 클릭
	searchModel : function(thisObj) {
		this.setPageIndex(1);
		this.refreshModelStatList(thisObj);
	},
	//모델 통계 조회
	refreshModelStatList : function(thisObj) {
	
		
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val($jquery('#paging :selected').val());
		//사용자로그등록
		gf_LogInsertProc(jsContextPath + "/board/report/retrieveModelStat.do", gf_FormDataToJson("#" + Report.FORM_ID), true);
		
		$jquery("#content_body").ajaxload(
			"blockLoad",
			 jsContextPath + "/board/report/retrieveModelStat.do",
			"POST",
			"html",
			$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	searchModelDetail : function(thisObj) {
		
	},
	
	//모델통계현황 페이지번호 클릭
	fn_egov_link_page_model : function(pageIndex) {
		Report.setPageIndex(pageIndex);
		Report.refreshModelStatList();
	},
	
	//모델 통계 엑셀다운로드 
	excelDownloadModel : function(thisObj){
		//
		if(Report.TOTAL_CNT == 0){
			alert("해당 데이터가 없습니다");
			return false;
		}
		
		$jquery.growlUI("info", "엑셀 다운로드를 요청하였습니다.<br />잠시만 기다려주세요.");
			
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val('0');
		
		//$jquery("#recordCountPerPage").val('999999999');
		//$jquery("#pageIndex").val('1');
		
		$jquery("#" + Report.FORM_ID).attr("action", "excelDownloadModel.do");
		$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
		$jquery("#" + Report.FORM_ID).submit();
	},
	
	
	//엑셀내려받기
	excelDownload : function(thisObj){
		//
		if(Report.TOTAL_CNT == 0){
			alert("해당 데이터가 없습니다");
			return false;
		}
		// 접수기간 검색조건 유효성 체크
		if($jquery("#conStartDe").val() != ""){
			if($jquery("#conEndDe").val()==""){
				alert("접수기간 종료일자를 입력해 주세요.");
				$jquery("#conEndDe").focus();
				return;
			}
		}
		
		if($jquery("#conEndDe").val() != ""){
			if($jquery("#conStartDe").val()==""){
				alert("접수기간 시작일자를 입력해 주세요.");
				$jquery("#conStartDe").focus();
				return;
			}
		}
			
		if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
			var conStartDe = $jquery("#conStartDe").val();
			conStartDe = conStartDe.replace(/-/gi,"");
		
			var conEndDe = $jquery("#conEndDe").val();
			conEndDe = conEndDe.replace(/-/gi,"");
 			
			if(conStartDe >conEndDe){
				alert("접수기간 시작일이 종료일보다 큽니다.");
				$jquery("#conStartDe").focus();
				return;
			}
		}			
			
		$jquery.growlUI("info", "엑셀 다운로드를 요청하였습니다.<br />잠시만 기다려주세요.");
			
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val('0');
		$jquery("#recordCountPerPage").val('999999999');
		$jquery("#pageIndex").val('1');
		
		$jquery("#" + Report.FORM_ID).attr("action", "excelDownload.do");
		$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
		$jquery("#" + Report.FORM_ID).submit();
	},
	//
	excelDownloadMonth : function(thisObj){
		//
		if(Report.TOTAL_CNT == 0){
			alert("해당 데이터가 없습니다");
			return false;
		}
		// 접수기간 검색조건 유효성 체크
		if($jquery("#conStartDe").val() != ""){
			if($jquery("#conEndDe").val()==""){
				alert("접수기간 종료일자를 입력해 주세요.");
				$jquery("#conEndDe").focus();
				return;
			}
		}
		
		if($jquery("#conEndDe").val() != ""){
			if($jquery("#conStartDe").val()==""){
				alert("접수기간 시작일자를 입력해 주세요.");
				$jquery("#conStartDe").focus();
				return;
			}
		}
			
		if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
			var conStartDe = $jquery("#conStartDe").val();
			conStartDe = conStartDe.replace(/-/gi,"");
		
			var conEndDe = $jquery("#conEndDe").val();
			conEndDe = conEndDe.replace(/-/gi,"");
 			
			if(conStartDe >conEndDe){
				alert("접수기간 시작일이 종료일보다 큽니다.");
				$jquery("#conStartDe").focus();
				return;
			}
		}			
			
		$jquery.growlUI("info", "엑셀 다운로드를 요청하였습니다.<br />잠시만 기다려주세요.");
			
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val('0');
		$jquery("#recordCountPerPage").val('999999999');
		$jquery("#pageIndex").val('1');
		
		$jquery("#" + Report.FORM_ID).attr("action", "excelDownloadMonth.do");
		$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
		$jquery("#" + Report.FORM_ID).submit();
	},
	
	
	
	/**
	 * 개요 : 제작사 조회 팝업
	 * 
	 * @Author : lsj
	 * @Date : 2014. 11. 28.
	 * @param thisObj
	 */
	createMcorPopView : function() {
		var pUrl = jsContextPath + "/model/formModelPop.do";
        var pName = "createMcorPop";
        var pWidth = 860;
        var pHeight = 600;
        var openerKey = Report.FORM_ID;
        var returnFunction = ''; //callback function

        var PopupWindow = PopUpWindowOpenOnlyScroll(pName, pWidth, pHeight);
        
        addFormParameter("popupForm", "flag", "mcor");
        
        $jquery('#popupForm input[name="openerKey"]').val(openerKey);
        $jquery('#popupForm input[name="returnFunction"]').val(returnFunction);
        $jquery('#popupForm').attr('target', pName);
        $jquery('#popupForm').attr('action', pUrl).submit();
        
        PopupWindow.focus();
	},
	
	
	//제작사 통계 조회버튼 클릭
	searchMcor : function(thisObj) {
		this.setPageIndex(1);
		this.refreshMcorStatList(thisObj);
	},
	//제작사 통계 조회
	refreshMcorStatList : function(thisObj) {

		$jquery("#" + this.FORM_ID + ' #pagingEnable').val($jquery('#paging :selected').val());
		
		//사용자로그등록
		gf_LogInsertProc(jsContextPath + "/board/report/retrieveMcorStat.do", gf_FormDataToJson("#" + Report.FORM_ID), true);
		
		$jquery("#content_body").ajaxload(
			"blockLoad",
			 jsContextPath + "/board/report/retrieveMcorStat.do",
			"POST",
			"html",
			$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize()
		);
	},
	//제작사 통계
	fn_egov_link_page_mcor : function(pageIndex) {
		Report.setPageIndex(pageIndex);
		Report.refreshMcorStatList();
	},
	//모델 통계 엑셀다운로드 
	excelDownloadMcor : function(thisObj){
		//
		if(Report.TOTAL_CNT == 0){
			alert("해당 데이터가 없습니다");
			return false;
		}
		/*
		// 접수기간 검색조건 유효성 체크
		if($jquery("#conStartDe").val() != ""){
			if($jquery("#conEndDe").val()==""){
				alert("접수기간 종료일자를 입력해 주세요.");
				$jquery("#conEndDe").focus();
				return;
			}
		}
		
		if($jquery("#conEndDe").val() != ""){
			if($jquery("#conStartDe").val()==""){
				alert("접수기간 시작일자를 입력해 주세요.");
				$jquery("#conStartDe").focus();
				return;
			}
		}
			
		if($jquery("#conStartDe").val() != "" && $jquery("#conEndDe").val() != ""){
			var conStartDe = $jquery("#conStartDe").val();
			conStartDe = conStartDe.replace(/-/gi,"");
		
			var conEndDe = $jquery("#conEndDe").val();
			conEndDe = conEndDe.replace(/-/gi,"");
 			
			if(conStartDe >conEndDe){
				alert("접수기간 시작일이 종료일보다 큽니다.");
				$jquery("#conStartDe").focus();
				return;
			}
		}			
		
		if($jquery("#conMcorName").val()==""){
			alert("제작사를  입력해 주세요.");
			$jquery("#conMcorName").focus();
			return;
		}
		*/
			
		$jquery.growlUI("info", "엑셀 다운로드를 요청하였습니다.<br />잠시만 기다려주세요.");
			
		$jquery("#" + this.FORM_ID + ' #pagingEnable').val('0');
		//$jquery("#recordCountPerPage").val('999999999');
		//$jquery("#pageIndex").val('1');
		
		$jquery("#" + Report.FORM_ID).attr("action", "excelDownloadMcor.do");
		$jquery("#" + Report.FORM_ID).separator("separatorRemoveForm").serialize();
		$jquery("#" + Report.FORM_ID).submit();
	}
	
};
