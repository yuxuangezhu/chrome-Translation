// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//alert(1);
$(document).ready(function () {
  $("#send_content").focus();
  //alert(1);
  $("#send").click(function(){
    $("#content").empty();
    var aa = $("#send_content").val();
    var from = 'auto';//$("#from").val();
    var to = 'auto';//$("#to").val();
    if (aa=="") {
      alert("请输入文字");
    }
    var url='https://openapi.baidu.com/public/2.0/bmt/translate?client_id=CrPex3zRb0qfZ2T3Knl6ZbZH&q='+aa+'&from='+from+'&to='+to+'';
    $.ajax({
      dataType:'jsonp',
      //data:'id=10',
      jsonp:'callback',
      url:url,
      success:function(data){
        if(data.error_code == 52001){
          alert("TIMEOUT：超时（52001）【请调整文本字符长度】");
        }else if(data.error_code == 52002){
          alert("SYSTEM ERROR：翻译系统错误（52002）");
        }else if(data.error_code == 52003){
          alert("UNAUTHORIZED USER：未授权的用户（52003）");
        }
        //alert(2);
        var result = data.trans_result;
        //console.log(data);
        //console.log(data.trans_result);
        for(var i=0;i<result.length;i++){
          $("#content").append("<p>原文："+result[0].src+"</p>");
          $("#content").append("<p>翻译："+result[0].dst+"</p>");
        }
        $("#send_content").val("");
        $("#send_content").attr("placeholder","这里输入文字");
        $("#send_content").focus();
      },
    });
  });
  document.onkeydown = function (e) {
            e = e || event;
            if (e.keyCode == 13) {  //判断是否单击的enter按键(回车键)
                var aa = $("#send_content").val();
                var from = 'auto';//$("#from").val();
                var to = 'auto';//$("#to").val();
              if (aa=="") {
                alert("请输入文字");
              }
              $("#content").empty();
              var url='https://openapi.baidu.com/public/2.0/bmt/translate?client_id=CrPex3zRb0qfZ2T3Knl6ZbZH&q='+aa+'&from='+from+'&to='+to+'';
              $.ajax({
                dataType:'jsonp',
                //data:'id=10',
                jsonp:'callback',
                url:url,
                success:function(data){
                  if(data.error_code == 52001){
                    alert("TIMEOUT：超时（52001）【请调整文本字符长度】");
                  }else if(data.error_code == 52002){
                    alert("SYSTEM ERROR：翻译系统错误（52002）");
                  }else if(data.error_code == 52003){
                    alert("UNAUTHORIZED USER：未授权的用户（52003）");
                  }
                  //alert(2);
                  var result = data.trans_result;
                  //console.log(data);
                  //console.log(data.trans_result);
                  for(var i=0;i<result.length;i++){
                    $("#content").append("<p>原文："+result[0].src+"</p>");
                    $("#content").append("<p>翻译："+result[0].dst+"</p>");
                  }
                  $("#send_content").val("");
                  $("#send_content").attr("placeholder","这里输入文字");
                  $("#send_content").focus();
                },
              });
            }
   }
});