function json2url(json) {
    var arr=[];
    json.t=Math.random();
    for(var key in json){
        arr.push(key+'='+json[key])
    }
    return arr.join('&');
}
function ajax(json) {

    var json=json || {};

    if(!json.url){
        alert('地址是必须传的！');
        return;
    }

    var type=json.type || 'get';
    var data=json.data || {};

    //创建一个ajax对象
    var xhr=new XMLHttpRequest();

    switch (type.toLowerCase()){
        case 'get':
            //创建连接
            xhr.open('get',json.url+'?'+json2url(data),true);
            //发送
            xhr.send();
            break;
        case 'post':
            //创建连接
            xhr.open('post',json.url,true);
            //设置请求头
            xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            //发送
            xhr.send(json2url(data));
            break;
    }
    //等待接收
    xhr.onreadystatechange=function () {
        if(xhr.readyState==4){
            if(xhr.status>=200 && xhr.status<300 || xhr.status==304){
                json.success && json.success(xhr.responseText);
            }else{
                json.error && json.error(xhr.status)
            }
        }
    }
}