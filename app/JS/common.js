"use strict";

var callApi = {}, apiUrl;

apiUrl = "https://raw.githubusercontent.com/Manzar3677/test/master";
// https://raw.githubusercontent.com/Manzar3677/test/master/videoPlayer

callApi.queryUrl = function(url, body, callback){
    body = body || {};
    body._method = body._method || 'GET';
    jQuery.ajax({
        "async":true,
        "crossDomain":true,
        "dataType":"json",
        "url":url,
        "method":body.content || false,
        "data":body,
        beforeSend: function(xhr){
            if(body && body.Pay){
                xhr.setRequestHeader("Access-Control-Allow-Origin","*");
                xhr.setRequestHeader("Access-Control-Request-Method","POST","GET");
            }
            if(body && body.CORS){
                xhr.setRequestHeader("" + body.CORS);
            }
        },

        success: function(data){
            if(callback) callback(data);
        },
        error:function(jqXHR,textStatus,errorThrown){
            var err = jqXHR.resposeText;
            if(callback) callback(err);
        }
    });
};


function getMediabanner(){
    var data = {};
    data._method = 'GET';
    callApi.queryUrl(apiUrl + '/videoPlayer', data,function(res,err){
        if(res){
            var getData = res;
            var data = {};
            data.data = getData;
            // console.log(data);
            let sliderMedia = "{{#data}} <div id='{{vidName}}' class='sa_hover_container' style='padding:0% 0%; margin:0px 0%; background-image:url(&quot;{{{imgUrl}}}&quot;); background-position:center center; background-size:cover; background-repeat:no-repeat; height:300px!important;' onclick='getVidName(this.id)'></div>{{/data}}";

            var rendered = Mustache.render(sliderMedia, data);
            // console.log(rendered);
            
            document.getElementById('menu_slider').innerHTML = rendered;

        } else{
            console.log(err);
        }
    })
}

getMediabanner();

function getVideoPlayer(){
    var data = {};
    data._method = 'GET';
    callApi.queryUrl(apiUrl + '/videoPlayer', data,function(res,err){
        if(res){
            var getVideoData = res;
            var data = {};
            data.data = getVideoData;
            // console.log(data);
            let videoPlayer = '{{#data}} <div class="col-md-3 pr-0 mb-4" id="{{vidName}}" onclick="getVidName(this.id)">\n'+
            '<img src="{{{imgUrl}}}" class="img-thumnail">\n'+
            '<figcaption class="mt-3">\n'+
                '<div class="row small-mflex">\n'+
                    '<div class="col-md-2">\n'+
                        '<img src="{{{imgIcon}}}" class="thumb_icon">\n'+
                    '</div>\n'+
                    '<div class="col-md-10">\n'+
                        '<h6 class="title_h6">{{title}}</h6>\n'+
                        '<span class="text-muted video_title">{{vidTitle}}</span>\n'+
                        '<span class="text-muted video_view"> {{vidView}}</span>\n'+
                        '<span class="text-muted video_date"> {{vidDate}}</span>\n'+
                    '</div>\n'+
                '</div>\n'+
            '</figcaption>\n'+
         '</div> {{/data}}';

            var rendered = Mustache.render(videoPlayer, data);
            // console.log(rendered);
            document.getElementById('videoContainer').innerHTML = rendered;
            

        } else{
            console.log(err);
        }
    })
}

getVideoPlayer();

function getVidName(name){
    var data = {};
    data._method = 'GET';
    callApi.queryUrl(apiUrl + '/videoPlayer', data,function(res,err){
        if(res){
            console.log("res.length :",res.length);
            for(var i = 0; i < res.length; i++){
                if(res[i].vidName === name){
                    console.log(name);
                    window.location.href = "/" + name;
                }
            }

        } else{
            console.log(err);
        }
    })
}
