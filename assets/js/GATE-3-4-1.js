$(function(){
    $('input[name=inlineRadioUsageOptions5]').change(function(){
        var checkedValue = $(this).val();
        if(checkedValue == 1){
            $('#inlineRadioUsageOptions5Cotainer').html(`<div class="d-flex flex-column py-2">
            <div class="d-flex align-items-center">
                <span>핵종명 : </span>
                <input type="text" class="form-control col-4 mx-2"
                    value="" placeholder="" aria-label="세관 수입신고번호 입력">
                <button class="btn btn-secondary btn-sm"
                    aria-label="핵종명 검색">핵종명 검색</button>
            </div>
            <div style="height:200px;" class="overflow-auto mt-3">
                <table
                    class="table table-light table-bordered ct__table-leftside text-center"
                    id="" cellspacing="0">
                    <thead>
                        <tr>
                            <th scope="col">핵종</th>
                            <th scope="col">최소수량(Bq)</th>
                            <th scope="col">최소농도(Bq/g)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Ac-228
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Ac-228
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Ac-228
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Ac-228
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                Ac-228
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`);
        }
        else if(checkedValue == 2){
            $('#inlineRadioUsageOptions5Cotainer').html(`<div class="d-flex flex-column py-2">
            <div style="height:200px;" class="overflow-auto mt-3">
                <table
                    class="table table-light table-bordered ct__table-leftside text-center"
                    id="" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="col-1" scope="col">선택</th>
                            <th scope="col">항목</th>
                            <th scope="col">용도 및 용량</th>
                            <th scope="col">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>1.</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox pl-4">
                                    <input type="checkbox" class="custom-control-input"
                                        id="tableCheck1">
                                    <label class="custom-control-label" for="tableCheck1"
                                        aria-label="테이블 row 선택"></label>
                                </div>
                            </td>
                            <td>가</td>
                            <td></td>
                            <td>
                                <button type="button"
                                class="btn btn-secondary btn-sm"
                                data-target="#modalView01" data-toggle="modal"
                                aria-label="별표">별표</button>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>1)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>1)</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`);
        }
        else if(checkedValue == 3){
            $('#inlineRadioUsageOptions5Cotainer').html(`<div class="d-flex flex-column py-2">
            <div style="height:200px;" class="overflow-auto mt-3">
                <table
                    class="table table-light table-bordered ct__table-leftside text-center"
                    id="" cellspacing="0">
                    <thead>
                        <tr>
                            <th class="col-1" scope="col">선택</th>
                            <th scope="col">항목</th>
                            <th scope="col">용도 및 용량</th>
                            <th scope="col">비고</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox pl-4">
                                    <input type="checkbox" class="custom-control-input"
                                        id="tableCheck1">
                                    <label class="custom-control-label" for="tableCheck1"
                                        aria-label="테이블 row 선택"></label>
                                </div>
                            </td>
                            <td>1.</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox pl-4">
                                    <input type="checkbox" class="custom-control-input"
                                        id="tableCheck2">
                                    <label class="custom-control-label" for="tableCheck2"
                                        aria-label="테이블 row 선택"></label>
                                </div>
                            </td>
                            <td>2.</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="custom-control custom-checkbox pl-4">
                                    <input type="checkbox" class="custom-control-input"
                                        id="tableCheck3">
                                    <label class="custom-control-label" for="tableCheck3"
                                        aria-label="테이블 row 선택"></label>
                                </div>
                            </td>
                            <td>3.</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>`);
        }
    });
});