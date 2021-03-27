"use strict";

var callApi = {}, apiUrl;

apiUrl = "https://raw.githubusercontent.com/Manzar3677/test/master";
// https://raw.githubusercontent.com/Manzar3677/test/master/videoPlayer

callApi.queryUrl = function(url, body, callback){
    body = body || {};
    body._method = body._method || 'GET';
    $.ajax({
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



var allData = [];
var ref;

function getReletedVideo(){
    var data = {};
    data._method = 'GET';
    callApi.queryUrl(apiUrl + '/videoPlayer', data,function(res,err){
        if(res){
            console.log("res :",res);
            
            var url = window.location.href;
            var path = url.split('/');
            var finalVal = path[path.length - 1];
            // console.log(finalVal);
            for(var i = 0; i < res.length; i++){
                if(res[i].vidName === finalVal){
                    // console.log(res[i]);
                   
                    let relatedVideo = '<iframe class="iframe-div" src="{{videoUrl}}"\n'+
                    'frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"\n'+
                    'allowfullscreen></iframe>\n'+
                    '<figcaption class="mt-3 figcap mb-5">\n'+
                        '<h5 class="title_h6">{{title}}</h5>\n'+
                        '<div class="row figSub">\n'+
                            '<div class="col-6">\n'+
                                '<span class="video_title">{{vidTitle}}</span>\n'+
                                '<span class="video_view"> {{vidView}}</span>\n'+
                                '<span class="video_date"> {{vidDate}}</span>\n'+
                            '</div>\n'+
                            '<div class="col-6 icon-container">\n'+
                                '<i class="fa fa-thumbs-o-up img1" aria-hidden="true" onclick="likeCount()"></i> &nbsp; <span class="text-muted like"><b id="like">0</b></span>&nbsp; &nbsp;\n'+
                                '<i class="fa fa-thumbs-o-down img2" aria-hidden="true" onclick="disLikeCount()"></i>  &nbsp; <span class="text-muted dislike"><b id="disLike">0</b></span> &nbsp; &nbsp;\n'+
                                '<a href="https://web.whatsapp.com/send?https://manzar3677.github.io/" data-action="share/whatsapp/share"><i class="fa fa-share img3" aria-hidden="true"></i></a> &nbsp; <span class="text-muted share"><b>SHARE</b></span>\n'+
                            '</div>\n'+
                        '</div>\n'+
                    '</figcaption>'

                    var rendered = Mustache.render(relatedVideo,res[i]);
                    // console.log(rendered);
                    document.getElementById('videoByVidName').innerHTML = rendered;
                    ref = res.splice(i,1);
                }
               
                var getVideoData = res;
                var data = {};
                data.data = getVideoData;

                if( window.screen > 767 + 'px'  && res.length >= 4){
                   document.getElementById("allVideos").style.overflowY  = "scroll";
                   document.getElementById("allVideos").style.height  = "600px";
                   console.log(window.screen);
                }

                console.log(res.length);
                let allVideo = '{{#data}}<div class="row mb-2 videoList" id="{{vidName}}" onclick="selectVid(this.id)">\n'+
                    '<div class="col">\n'+
                        '<img src="{{imgUrl}}" class="img-thumnail-2">\n'+
                    '</div>\n'+
                    '<div class="col">\n'+
                        '<h6 class="title_h6">{{title}}</h6>\n'+
                        '<img src="{{imgIcon}}" class="thumb_icon">\n'+
                        '<span class="video_title">{{vidTitle}}</span>\n'+
                        '<span class="video_view"> {{vidView}}</span>\n'+
                        '<span class="video_date"> {{vidDate}}</span>\n'+
                    '</div>\n'+
                '</div>{{/data}}'

                var rendered = Mustache.render(allVideo,data);
                // console.log(rendered);
                document.getElementById('allVideos').innerHTML = rendered;
            }

        } else{
            console.log(err);
        }
    })
}

getReletedVideo();

function selectVid(vidName){
    console.log(vidName);
    ref.push(allData[0]);
    window.location.href = '/' + vidName;
}

function likeCount(){
    var ele = document.getElementById('like').innerHTML;
    ele++;
    document.getElementById('like').innerHTML = ele;
}

function disLikeCount(){
    var ele = document.getElementById('disLike').innerHTML;
    ele++;
    document.getElementById('disLike').innerHTML = ele;
}

// https://www.pngkey.com/png/full/207-2071219_arrow-share-conversion-comments-share-icon.png (black share)
//    background: #fff;font-size: 30px;border-radius: 20px;padding: 5px 7px;