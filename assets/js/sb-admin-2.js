/** @format */

; (function ($) {
  'use strict' // Start of use strict

  // Toggle the side navigation
  $('#sidebarToggle, #sidebarToggleTop').on('click', function (e) {
    $('body').toggleClass('sidebar-toggled')
    $('.sidebar').toggleClass('toggled')
    if ($('.sidebar').hasClass('toggled')) {
      $('.sidebar .collapse').collapse('hide')
    }
  })

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide')
    }
  })

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail
      this.scrollTop += (delta < 0 ? 1 : -1) * 30
      e.preventDefault()
    }
  })

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop()
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn()
    } else {
      $('.scroll-to-top').fadeOut()
    }
  })

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this)
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr('href')).offset().top,
        },
        1000,
        'easeInOutExpo'
      )
    e.preventDefault()
  })

  // Custion Script
  // Table Checkbox Select All
  $(document).on('change', '[type="checkbox"].check-select-all', function (e) {
    let table = e.currentTarget.closest('table')
    if (e.currentTarget.checked) {
      $(table).find('.custom-checkbox input[type="checkbox"]').prop('checked', true)
    } else {
      $(table).find('.custom-checkbox input[type="checkbox"]').prop('checked', false)
    }
  })

  // ToolTip
  $('[data-toggle="tooltip"]').tooltip()

  // WorkStatus [work | system] Switch Toggle
  $(document).on('click', '.ct__switch--handle', function (e) {
    let target = e.currentTarget.dataset.target
    let checked = e.target.dataset.statusSystem === 'true' ? true : false
    $(target).prop('checked', checked)
    $('.ct__switch--handle').removeClass('active')
    $(e.target).addClass('active')
  })

  $(document).on('click', '.ct__switch--admin input', function (e) {
    let checked = e.currentTarget.checked
    let target = $(`.ct__switch--handle[data-status-system="${checked}"]`)

    $('.ct__switch--handle').removeClass('active')
    $(target).addClass('active')
  })

  // Stepper
  $(document).on('click', 'button[data-stepper]', function () {
    let { stepper } = this.dataset
    let target = $(this).closest('.ct__stepper').find('input')
    if (stepper === 'plus') $(target).val(+$(target).val() + 1)
    else if (stepper === 'minus' && +$(target).val() !== 0) $(target).val(+$(target).val() - 1)
  })

  // Tabs
  $(document).on('click', '#agreementTab .nav-link', function () {
    $('#agreementTab .nav-link').tab('dispose')
    $(this).tab('show')
  })

  $(document).on('click', '.nav-link-close', function () {
    $(this).closest('.nav-item').remove()

    if (!$('#subPageTabs').find('.nav-link').length) $('#subPageTabs').remove()
    else $('#subPageTabs').find('.nav-link').eq(0).tab('show')
  })

  $(document).on('click', '.nav-link-close-all ', function () {
    $('#subPageTabs').remove()
  })

  // 행추가
  $(document).on('click', '#insertRowToTable, #deleteRowToTable', function () {
    let target = this.dataset.controls

    if (this.id === 'insertRowToTable') {
      let trElement = null

      if (target === '#programManageTable') trElement = programManageTableElement
      else if (target === '#userGroupTable') trElement = userGroupTableElement
      else if (target === '#codeManageTable') trElement = codeManageTableElement
      else if (target === '#addWordTable') trElement = addWordTableElement
      else if (target === '#systemManageTable') trElement = systemManageTableElement
      else if (target === '#adminPolicyTable') trElement = adminPolicyTableElement
      else if (target === '#PortImconfHandleTable') trElement = PortImconfHandleTableElement
      else if (target === '#PortExconfHandleTable') trElement = PortExconfHandleTableElement
      else if (target === '#INSYS27Table') trElement = INSYS27TableElement
      else if (target === '#NEQIS4Table') trElement = NEQIS4TableElement

      if (target === '#INSYS27Table') {
        $(target).find('tbody.main-tbody').append(trElement)
      } 
      else if (target === '#NEQIS4Table') {
        $(target).find('tbody.main-tbody').append(trElement)
      } 
      else {
        $(target).find('tbody').prepend(trElement)
      }

      // 행삭제
    } else if (this.id === 'deleteRowToTable') {

      if (target === '#INSYS27Table') {
        $(target).find('tbody.main-tbody > tr:last-child').remove();
      }
      else if (target === '#NEQIS4Table') {
        $(target).find('tbody.main-tbody > tr:last-child').remove();
      } 
      else {
        $(target).find('tbody > tr')[0].remove();
      }

    }

  })


  $(document).on('click', '#insertRowToList, #deleteRowToList', function () {
    let target = this.dataset.controls

    if (this.id === 'insertRowToList') {
      let trElement = null

      if (target === '#ParticipantHandleList') trElement = ParticipantHandleListElement
      if (target === '#CelebrityHandleList') trElement = CelebrityHandleListElement
      if (target === '#NEQIS5HandleList') trElement = NEQIS5HandleListElement
      if (target === '#NEQIS5_1_HandleList') trElement = NEQIS5_1_HandleListElement
      if (target === '#NEQIS5_2_HandleList') trElement = NEQIS5_2_HandleListElement
      if (target === '#NEQIS5_3_HandleList') trElement = NEQIS5_3_HandleListElement

      $(target).append(trElement)

      // 행삭제
    } else if (this.id === 'deleteRowToList') {
      if (target === '#ParticipantHandleList') $(this).closest('.ParticipantHandlewrap').remove()
      if (target === '#CelebrityHandleList') $(this).closest('.CelebrityHandlewrap').remove()
      if (target === '#NEQIS5HandleList') $(this).closest('.NEQIS5Handlewrap').remove()
      if (target === '#NEQIS5_1_HandleList') $(this).closest('.NEQIS5_1_Handlewrap').remove()
      if (target === '#NEQIS5_2_HandleList') $(this).closest('.NEQIS5_2_Handlewrap').remove()
      if (target === '#NEQIS5_3_HandleList') $(this).closest('.NEQIS5_3_Handlewrap').remove()
    }
  })

  $('#select_cpr').change(function () {
    let seleted = $(this).find(':selected').data('cpr');
    if (seleted == '2') {
      let content = `
      <tr class="added-country-wrap">
        <th class="col-2 text-center">
            <span class="">국가</span>
        </th>
        <td colspan="3">
            <div class="d-flex">
                <select id="select_cpr" class="col-4 form-control mr-1" aria-label="국가 선택">
                    <option selected>선택</option>
                    <option >선택</option>
                    <option >선택</option>
                    <option >선택</option>
                </select>
            </div>
        </td>
      </tr>`;

      $('tr.cooperation-wrap').after(content);
    } else {
      $('tr.added-country-wrap').remove();
    }
  });

  $("#selectDateFilter").change(function(){
    var selectValue = $(this).val();
    if(selectValue == 'date'){
      $('#DateFilterContainer').html(`<input type="date" class="form-control" style="width:140px; min-width: unset;" value="" placeholder=""
      aria-label="신청일자 시작일 선택">
  <span class="text-center mx-2"> ~ </span>
  <input type="date" class="form-control" style="width:140px; min-width: unset;" value="" placeholder=""
      aria-label="신청일자 종료일 선택">`);
    }
    else if(selectValue == 'month'){
      $('#DateFilterContainer').html(`<select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 시작일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:80px; min-width: unset;" aria-label="신청일자 시작일 월 선택">
      <option selected>09</option>
      <option>08</option>
      <option>07</option>
      <option>06</option>
  </select>
  <span class="text-center mx-2"> ~ </span>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 종료일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:80px; min-width: unset;" aria-label="신청일자 종료일 월 선택">
      <option selected>09</option>
      <option>08</option>
      <option>07</option>
      <option>06</option>
  </select>`);
    }
    else if(selectValue == 'quarter'){
      $('#DateFilterContainer').html(`<select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 시작일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 시작일 분기 선택">
      <option selected>1분기</option>
      <option>2분기</option>
      <option>3분기</option>
      <option>4분기</option>
  </select>
  <span class="text-center mx-2"> ~ </span>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 종료일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 종료일 분기 선택">
      <option selected>1분기</option>
      <option>2분기</option>
      <option>3분기</option>
      <option>4분기</option>
  </select>`);
    }
    else if(selectValue == 'half'){
      $('#DateFilterContainer').html(`<select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 시작일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 시작일 반기 선택">
      <option selected>상반기</option>
      <option>하반기</option>
  </select>
  <span class="text-center mx-2"> ~ </span>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 종료일 연도 선택">
      <option selected>2022</option>
      <option>2021</option>
      <option>2020</option>
      <option>2019</option>
  </select>
  <select id="" class="form-control mr-1" style="width:100px; min-width: unset;" aria-label="신청일자 종료일 반기 선택">
      <option selected>상반기</option>
      <option>하반기</option>
  </select>`);
    }
  })

})(jQuery) // End of use strict

$(window).on('load', function () {
  $('.active-modal').modal('show');
});

var dropZoneId = "drop-zone";
var buttonId = "clickHere";
var mouseOverClass = "mouse-over";
var dropZone = $("#" + dropZoneId);
var inputFile = dropZone.find("input");
var finalFiles = {};

$(function () {

  var ooleft = dropZone.offset().left;
  var ooright = dropZone.outerWidth() + ooleft;
  var ootop = dropZone.offset().top;
  var oobottom = dropZone.outerHeight() + ootop;

  document.getElementById(dropZoneId).addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    dropZone.addClass(mouseOverClass);
    var x = e.pageX;
    var y = e.pageY;

    if (!(x < ooleft || x > ooright || y < ootop || y > oobottom)) {
      inputFile.offset({
        top: y - 15,
        left: x - 100
      });
    } else {
      inputFile.offset({
        top: -400,
        left: -400
      });
    }

  }, true);

  if (buttonId != "") {
    var clickZone = $("#" + buttonId);

    var oleft = clickZone.offset().left;
    var oright = clickZone.outerWidth() + oleft;
    var otop = clickZone.offset().top;
    var obottom = clickZone.outerHeight() + otop;

    $("#" + buttonId).mousemove(function (e) {
      var x = e.pageX;
      var y = e.pageY;
      if (!(x < oleft || x > oright || y < otop || y > obottom)) {
        inputFile.offset({
          top: y - 15,
          left: x - 160
        });
      } else {
        inputFile.offset({
          top: -400,
          left: -400
        });
      }
    });
  }

  document.getElementById(dropZoneId).addEventListener("drop", function (e) {
    $("#" + dropZoneId).removeClass(mouseOverClass);
  }, true);


  inputFile.on('change', function (e) {
    finalFiles = {};
    $('#filename').html("");
    var fileNum = this.files.length,
      initial = 0,
      counter = 0;

    $.each(this.files, function (idx, elm) {
      finalFiles[idx] = elm;
    });

    for (initial; initial < fileNum; initial++) {
      counter = counter + 1;
      $('#filename').append('<div id="file_' + initial + '"><span class="fa-stack fa-lg"><i class="fa fa-file fa-stack-1x "></i><strong class="fa-stack-1x" style="color:#FFF; font-size:12px; margin-top:2px;">' + counter + '</strong></span> ' + this.files[initial].name + '&nbsp;&nbsp;<span class="fa fa-times-circle fa-lg closeBtn" onclick="removeLine(this)" title="remove"></span></div>');
    }
  });


})

function deleteRow(obj){
  $(obj).closest('tr').remove();
}

function removeLine(obj) {
  inputFile.val('');
  var jqObj = $(obj);
  var container = jqObj.closest('div');
  var index = container.attr("id").split('_')[1];
  container.remove();

  delete finalFiles[index];
  //console.log(finalFiles);
}

function equal_info(title) {
  $(".equal-info-list").append("<li role='button' class='list-group-item'>" + title + "<button type='button' class='btn' onclick='remove_equal_info(this);' aria-label='삭제'><i class='fas fa-times-circle'></i></button></li>");
}

function remove_equal_info(obj) {
  $(obj).closest('li').remove();
}

function confirmMessage(msg) {
  var delConfirm = confirm(msg);
  if (delConfirm) {
    alert('완료');
  }
  else {
    alert('취소');
  }
}

const adminPolicyTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="시스템 선택">
      <option selected>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="로그인최대시도">
      <option selected>1회</option>
      <option>3회</option>
      <option>5회</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="의무변경">
      <option selected>1개월</option>
      <option>3개월</option>
      <option>6개월</option>
      <option>12개월</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="임시비번유효시간">
      <option selected>1시간</option>
      <option>2시간</option>
      <option>3시간</option>
      <option>4시간</option>
      <option>5시간</option>
      <option>6시간</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="휴면전환">
      <option selected>1개월</option>
      <option>3개월</option>
      <option>6개월</option>
      <option>12개월</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="휴면전환 메일발송">
      <option selected>발송</option>
      <option>미발송</option>
    </select>
  </td>
</tr>
`

const systemManageTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="시스템 선택">
      <option selected>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="시작IP" aria-label="시작IP"></td>
  <td><input type="text" class="form-control form-control-sm" placeholder="종료IP" aria-label="종료IP"></td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="허용여부">
      <option selected>허용</option>
      <option>허용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td><input type="text" class="form-control form-control-sm" placeholder="비고" aria-label="비고"></td>
  <td>2022-01-01 13:00</td>
</tr>
`

const addWordTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td>
  <input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명">
</td>
<td>쉼표(,)로 구분</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
</tr>
`

const codeManageTableElement = `
<tr>
<td scope="row">1</td>
<td></td>
<td><input type="text" class="form-control form-control-sm" placeholder="시스템명" aria-label="시스템명"></td>
<td>
  <button class="btn btn-info btn-icon-split btn-sm mr-2">
    <span class="icon text-white-50">
      <i class="fas fa-search"></i>
    </span>
    <span class="text">상세보기</span>
  </button>
</td>
<td><input type="text" class="form-control form-control-sm" placeholder="코드명 입력" aria-label="코드명 입력"></td>
<td>CD001</td>
<td><input type="text" class="form-control form-control-sm" placeholder="코드설명 입력" aria-label="코드설명 입력"></td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
<td>
  <select id="" class="form-control form-control-sm custom-select custom-select-sm"
    aria-label="사용여부">
    <option selected>사용</option>
    <option>사용안함</option>
  </select>
</td>
</tr>
`

const userGroupTableElement = `
<tr>
  <td scope="row">1</td>
  <td>
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="사용여부">
      <option selected>사용</option>
      <option>사용안함</option>
    </select>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm"
      aria-label="운영관리시스템 선택">
      <option selected>운영관리시스템</option>
      <option>운영관리시스템</option>
    </select>
  </td>
  <td>
    <input type="text" class="form-control form-control-sm" placeholder="권한명 입력" aria-label="권한명 입력">
  </td>
  <td>
  <input type="text" class="form-control form-control-sm" placeholder="권한설명 입력" aria-label="권한설명 입력">
  </td>
  <td>2022-01-01 13:00</td>
  <td>2022-01-01 13:00</td>
</tr>`

const programManageTableElement = `
<tr>
  <td scope="row" class="text-center">
    <button class="btn btn-sm btn-info" aria-label="수정"><i class="fas fa-edit"></i></button>
  </td>
  <td>
    <select id="" class="form-control form-control-sm custom-select custom-select-sm" aria-label="시스템 선택">
      <option selected="">해외정보활용</option>
      <option>해외정보활용</option>
      <option>해외정보활용</option>
      <option>해외정보활용</option>
    </select>
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="시스템명 입력" aria-label="시스템명 입력">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="프로그램URL 입력" aria-label="프로그램URL 입력">
  </td>
  <td>
      <input type="text" class="form-control form-control-sm" placeholder="프로그램설명 입력" aria-label="프로그램설명 입력">
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="listCheck10">
      <label class="custom-control-label" for="listCheck10" aria-label="목록옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="detailCheck10">
      <label class="custom-control-label" for="detailCheck10" aria-label="상세옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="assignCheck10">
      <label class="custom-control-label" for="assignCheck10" aria-label="등록옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="modifyCheck10">
      <label class="custom-control-label" for="modifyCheck10" aria-label="수정옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="deleteCheck10">
      <label class="custom-control-label" for="deleteCheck10" aria-label="삭제옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="excelCheck10">
      <label class="custom-control-label" for="excelCheck10" aria-label="엑셀다운옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="downloadCheck10">
      <label class="custom-control-label" for="downloadCheck10" aria-label="파일다운옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-checkbox ml-2">
      <input type="checkbox" class="custom-control-input" id="printCheck10">
      <label class="custom-control-label" for="printCheck10" aria-label="출력옵션 선택/해제"></label>
    </div>
  </td>
  <td>
    <div class="custom-control custom-switch">
      <input type="checkbox" class="custom-control-input" id="switchID1" checked="">
      <label class="custom-control-label" for="switchID1" aria-label="switchID1"></label>
    </div>
  </td>
</tr>`

const PortImconfHandleTableElement = `
<tr>
  <td>
      <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="모델 입력">
              <span class="mx-1">/</span>
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="품명 입력">
              <span class="mx-1">/</span>
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="핵종 입력">
              <span class="mx-1">/</span>
          </div>
          <div class="d-flex align-items-center mt-2">
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="방사능량 입력">
              <select id="" class="form-control custom-select"
                  aria-label="방사능량 단위 선택">
                  <option selected>선택</option>
                  <option>선택</option>
                  <option>선택</option>
                  <option>선택</option>
              </select>
              <span class="mx-1">/</span>
              <input type="text" class="form-control mr-2" value=""
                  placeholder="" aria-label="HS부호">
              <button class="btn btn-secondary btn-sm"
                  data-target="#modalViewProducer" data-toggle="modal"
                  aria-label="모델조회">모델조회</button>
          </div>
      </div>
  </td>
  <td>
      <div class="d-flex align-items-center">
          <input type="text" class="form-control" value=""
              placeholder="" aria-label="사용기관">
          <button class="btn btn-secondary btn-sm mx-2"
              data-target="#modalViewProducer" data-toggle="modal"
              aria-label="기관조회">기관조회</button>
          <button class="btn btn-dark btn-sm"
              aria-label="삭제">삭제</button>
      </div>
  </td>
  <td>
      <div class="d-flex flex-column">
          <div class="d-flex">
              <div class="custom-control custom-radio">
                  <input class="custom-control-input" type="radio"
                      name="inlineRadioUsageOptions4" id="radio4_1"
                      value="">
                  <label class="custom-control-label"
                      for="radio4_1">신규</label>
              </div>
              <div class="custom-control custom-radio mx-1">
                  <input class="custom-control-input" type="radio"
                      name="inlineRadioUsageOptions4" id="radio4_2"
                      value="">
                  <label class="custom-control-label"
                      for="radio4_2">교체</label>
              </div>
          </div>
          <div class="d-flex my-1">
              <span class="text-info small">
                  <i class="fas fa-info-circle"></i><span>교체 인허가 변경이 없는 경우</span>
              </span>
          </div>
          <div class="d-flex">
              <input type="text" class="form-control mr-2" value=""
                  placeholder="" aria-label="수량 입력">
              <select id="" class="form-control custom-select"
                  aria-label="수량 선택">
                  <option selected>선택</option>
                  <option>선택</option>
                  <option>선택</option>
                  <option>선택</option>
              </select>
          </div>
      </div>
  </td>
  <td>
      <div class="d-flex">
          <input type="text" class="form-control" value=""
              placeholder="" aria-label="단가 입력">
      </div>
  </td>
  <td class="col-2">
      <div class="d-flex align-items-center">
          <select id="" class="form-control custom-select"
              aria-label="수량 선택">
              <option selected>선택</option>
              <option>선택</option>
              <option>선택</option>
              <option>선택</option>
          </select>
          <button class="btn btn-dark btn-sm"
              aria-label="삭제">삭제</button>
      </div>
  </td>
</tr>`

const PortExconfHandleTableElement = `
<tr>
  <td>
      <div class="d-flex flex-column">
          <div class="d-flex align-items-center">
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="모델 입력">
              <span class="mx-1">/</span>
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="품명 입력">
              <span class="mx-1">/</span>
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="핵종 입력">
              <span class="mx-1">/</span>
          </div>
          <div class="d-flex align-items-center mt-2">
              <input type="text" class="form-control" value=""
                  placeholder="" aria-label="방사능량 입력">
              <select id="" class="form-control custom-select"
                  aria-label="방사능량 단위 선택">
                  <option selected>선택</option>
                  <option>선택</option>
                  <option>선택</option>
                  <option>선택</option>
              </select>
              <span class="mx-1">/</span>
              <input type="text" class="form-control mr-2" value=""
                  placeholder="" aria-label="HS부호">
              <button class="btn btn-secondary btn-sm"
                  data-target="#modalViewProducer" data-toggle="modal"
                  aria-label="모델조회">모델조회</button>
          </div>
      </div>
  </td>
  <td>
      <div class="d-flex align-items-center">
          <input type="text" class="form-control" value=""
              placeholder="" aria-label="사용기관">
          <button class="btn btn-secondary btn-sm mx-2"
              data-target="#modalViewProducer" data-toggle="modal"
              aria-label="기관조회">기관조회</button>
          <button class="btn btn-dark btn-sm"
              aria-label="삭제">삭제</button>
      </div>
  </td>
  <td>
      <div class="d-flex flex-column">
          <div class="d-flex">
              <input type="text" class="form-control mr-2" value=""
                  placeholder="" aria-label="수량 입력">
              <select id="" class="form-control custom-select"
                  aria-label="수량 선택">
                  <option selected>선택</option>
                  <option>선택</option>
                  <option>선택</option>
                  <option>선택</option>
              </select>
          </div>
      </div>
  </td>
  <td>
      <div class="d-flex">
          <input type="text" class="form-control" value=""
              placeholder="" aria-label="단가 입력">
      </div>
  </td>
  <td class="col-2">
      <div class="d-flex align-items-center">
          <select id="" class="form-control custom-select"
              aria-label="수량 선택">
              <option selected>선택</option>
              <option>선택</option>
              <option>선택</option>
              <option>선택</option>
          </select>
          <button class="btn btn-dark btn-sm"
              aria-label="삭제">삭제</button>
      </div>
  </td>
</tr>`

const ParticipantHandleListElement = `
<div class="d-flex align-items-center justify-content-between ParticipantHandlewrap mt-2">
    <div class="d-flex align-items-center">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="기관" aria-label="기관 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="이름" aria-label="이름 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="부서" aria-label="부서 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="직책" aria-label="직책 입력">
    </div>
    <div class="d-flex align-items-center">
        <button id="deleteRowToList"
            class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#ParticipantHandleList">
            <i class="fas fa-minus"></i>
        </button>
    </div>
</div>
`

const CelebrityHandleListElement = `
<div class="d-flex align-items-center justify-content-between CelebrityHandlewrap mt-2">
    <div class="d-flex align-items-center">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="기관" aria-label="기관 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="이름" aria-label="이름 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="부서" aria-label="부서 입력">
        <input type="text" class="form-control col-2 mr-1" value=""
        placeholder="직책" aria-label="직책 입력">
        <button class="btn btn-dark btn-sm"
    data-target="#modalView01" data-toggle="modal"
    aria-label="면담인사 검색">검색</button>
    </div>
    <div class="d-flex align-items-center">
      <button id="deleteRowToList"
          class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#CelebrityHandleList">
          <i class="fas fa-minus"></i>
      </button>
    </div>
</div>
`

const INSYS27TableElement = `
<tr>
  <td class="p-0 pt-4">
      <table class="table-bordered ct__table-leftside w-100">
          <tr>
              <th class="col-2 text-center">
                  <span class="ct__required">제목</span>
              </th>
              <td>
                  <div class="d-flex">
                      <input type="text" class="form-control" value=""
                          placeholder="" aria-label="제목 선택" required>
                  </div>
              </td>
          </tr>
          <tr>
              <th class="col-2 text-center">
                  <span class="ct__required">내용</span>
              </th>
              <td colspan="5">
                  <div class="d-flex">
                      <textarea name="" id="" cols="30" rows="2"
                          class="form-control" aria-label="내용 입력" required></textarea>
                  </div>
              </td>
          </tr>
      </table>
  </td>
</tr>
`

const NEQIS4TableElement = `
<tr>
    <td class="p-0">
        <table class="ct__table-leftside w-100">
            <tr>
                <th class="col-2 text-center">
                    <span class="">위도</span>
                </th>
                <td class="col-4">
                    <div class="d-flex">
                        <input type="text" class="form-control" value=""
                            placeholder="" aria-label="위도 입력" >
                    </div>
                </td>
                <th class="col-2 text-center">
                    <span class="">경도</span>
                </th>
                <td class="col-4">
                    <div class="d-flex">
                        <input type="text" class="form-control" value=""
                            placeholder="" aria-label="경도 입력" >
                    </div>
                </td>
            </tr>
            <tr>
                <th class="col-2 text-center">
                    <span class="">주소</span>
                </th>
                <td colspan="3">
                    <div class="d-flex">
                        <input type="text" class="form-control" value=""
                            placeholder="" aria-label="주소 입력" >
                    </div>
                </td>
            </tr>
        </table>
    </td>
</tr>
`

const NEQIS5HandleListElement = `
<div class="d-flex align-items-center justify-content-between NEQIS5Handlewrap mt-3">
    <div class="d-flex align-items-center">
        <input type="file" class="" id="inputGroupFile01"
            aria-label="인증보유 현황 업로드">
        <label class="" for="inputGroupFile01"></label>
        <button id="deleteRowToList"
          class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#NEQIS5HandleList">
          <i class="fas fa-minus"></i>
        </button>
    </div>
</div>
`
const NEQIS5_1_HandleListElement = `
<div class="d-flex align-items-center justify-content-between NEQIS5_1_Handlewrap mt-3">
    <div class="d-flex align-items-center">
        <input type="file" class="" id="inputGroupFile01"
            aria-label="인력인증기준 업로드">
        <label class="" for="inputGroupFile01"></label>
        <button id="deleteRowToList"
          class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#NEQIS5_1_HandleList">
          <i class="fas fa-minus"></i>
        </button>
    </div>
</div>
`
const NEQIS5_2_HandleListElement = `
<div class="d-flex align-items-center justify-content-between NEQIS5_2_Handlewrap mt-3">
    <div class="d-flex align-items-center">
        <input type="file" class="" id="inputGroupFile01"
            aria-label="품질기술 관련 보유 인증 업로드">
        <label class="" for="inputGroupFile01"></label>
        <button id="deleteRowToList"
          class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#NEQIS5_2_HandleList">
          <i class="fas fa-minus"></i>
        </button>
    </div>
</div>
`
const NEQIS5_3_HandleListElement = `
<div class="d-flex align-items-center justify-content-between NEQIS5_2_Handlewrap mt-3">
    <div class="d-flex align-items-center">
        <input type="file" class="" id="inputGroupFile01"
            aria-label="설비 보유 현황 업로드">
        <label class="" for="inputGroupFile01"></label>
        <button id="deleteRowToList"
          class="btn btn-secondary rounded-circle btn-sm" aria-label="항목 삭제" data-controls="#NEQIS5_2_HandleList">
          <i class="fas fa-minus"></i>
        </button>
    </div>
</div>
`

$('.btn-number').click(function(e){
  e.preventDefault();
  
  fieldName = $(this).attr('data-field');
  type      = $(this).attr('data-type');
  var input = $("input[name='"+fieldName+"']");
  var currentVal = parseInt(input.val());
  if (!isNaN(currentVal)) {
      if(type == 'minus') {
          
          if(currentVal > input.attr('min')) {
              input.val(currentVal - 1).change();
          } 
          if(parseInt(input.val()) == input.attr('min')) {
              $(this).attr('disabled', true);
          }

      } else if(type == 'plus') {

          if(currentVal < input.attr('max')) {
              input.val(currentVal + 1).change();
          }
          if(parseInt(input.val()) == input.attr('max')) {
              $(this).attr('disabled', true);
          }

      }
  } else {
      input.val(0);
  }
});
$('.input-number').focusin(function(){
  $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
   
   minValue =  parseInt($(this).attr('min'));
   maxValue =  parseInt($(this).attr('max'));
   valueCurrent = parseInt($(this).val());
   
   name = $(this).attr('name');
   if(valueCurrent >= minValue) {
       $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
   } else {
       alert('Sorry, the minimum value was reached');
       $(this).val($(this).data('oldValue'));
   }
   if(valueCurrent <= maxValue) {
       $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
   } else {
       alert('Sorry, the maximum value was reached');
       $(this).val($(this).data('oldValue'));
   }
});

$(".input-number").keydown(function (e) {
   // Allow: backspace, delete, tab, escape, enter and .
   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
        // Allow: Ctrl+A
       (e.keyCode == 65 && e.ctrlKey === true) || 
        // Allow: home, end, left, right
       (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
   }
   // Ensure that it is a number and stop the keypress
   if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
       e.preventDefault();
   }
});

function handleFileSelect(event) {
  $("#preview").empty();
  var input = this;
  var delBtn = `<div class="file-edit-icon position-absolute">
  <a href="#" style="width: 20px; height: 20px;" class="d-flex justify-content-center align-items-center preview-de rounded-circle bg-dark text-white text-decoration-none" aria-label="삭제"><i class="fas fa-minus"></i></a>
  </div>`;
  if (input.files && input.files.length) {
      var reader = new FileReader();
      this.enabled = false
      reader.onload = (function (e) {
          $("#preview").append(['<img class="thumb" src="', e.target.result, '" title="', escape(e.name), '"/>'].join(''));
          $("#preview").append(delBtn);
      });
      reader.readAsDataURL(input.files[0]);
  }
}
$('#file').change(handleFileSelect);
$(document).on("click", ".file-edit-icon", function() {
  $("#preview").empty();
  $("#file").val("");
});
$('.preview-edit').click( function() {
$("#file").click();
} );