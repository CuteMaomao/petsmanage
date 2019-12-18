layui.use('layer', function(){
    var $ = layui.jquery, layer = layui.layer;

    //触发事件
    var active = {
        notice: function(){
            layer.open({
                type: 1
                ,title: '查看信息'
                ,closeBtn: 1
                ,area: '500px;'
                ,shade: 0.8
                ,id: 'lookCustomer'
                ,btn: ['确定', '取消']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽
                ,content: '<form class="modal-form layui-form">\n' +
                    '    <div class="layui-form-item">\n' +
                    '        <div class="customer-form-hs">\n' +
                    '            <img src="../images/huangqian/girl.jpg">\n' +
                    '            <div class="customer-status">普通会员</div>\n' +
                    '        </div>\n' +
                    '        <div class="customer-form-name">\n' +
                    '            <h5 class="customer-form-username">allalallala</h5>\n' +
                    '            <h5 class="customer-form-othername">（allalallala）</h5>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div class="layui-form-item modal-form-sex">\n' +
                    '           <label>她/他是一位</label>\n' +
                    '            <img src="../images/huangqian/boy.jpg">\n' +
                    '            <img src="../images/huangqian/girl.jpg">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">手机号码：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="186****5738">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">地址：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="成都">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">订单数量：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="120">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">本月消费金额：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="120">\n' +
                    '    </div>\n' +
                    '</form>'//性别头像高亮
                ,success: function(layero){
                    //确定按钮

                }
            });
        },
        notice1: function(){
            layer.open({
                type: 1
                ,title: '编辑信息'
                ,closeBtn: 1
                ,area: '500px;'
                ,shade: 0.8
                ,id: 'editCustomer'
                ,btn: ['确定', '取消']
                ,btnAlign: 'c'
                ,moveType: 1
                ,content: '<form class="modal-form layui-form">\n' +
                    '    <div class="layui-form-item">\n' +
                    '        <div class="customer-form-hs">\n' +
                    '            <img src="../images/huangqian/girl.jpg">\n' +
                    '            <div class="customer-status">普通会员</div>\n' +
                    '        </div>\n' +
                    '        <div class="customer-form-name">\n' +
                    '            <h5 class="customer-form-username">allalallala</h5>\n' +
                    '            <h5 class="customer-form-othername">（allalallala）</h5>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div class="layui-form-item modal-form-sex">\n' +
                    '        <label>她/他是一位</label>\n' +
                    '            <img src="../images/huangqian/boy.jpg">\n' +
                    '            <img src="../images/huangqian/girl.jpg">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">手机号码：</label>\n' +
                    '        <input id="cusPhoneIOne" class="layui-input" type="text" value="186****5738">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">地址：</label>\n' +
                    '        <input class="layui-input" disabled type="text" value="成都">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">订单数量：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="120">\n' +
                    '    </div>\n' +
                    '    <div class="customer-form-item">\n' +
                    '        <label class="">本月消费金额：</label>\n' +
                    '        <input class="layui-input" type="text" disabled value="120">\n' +
                    '    </div>\n' +
                    '</form>'
                ,success: function(layero){
                    //确定按钮

                }
            });
        },
        offset: function(othis){
            var type = othis.data('type')
            layer.open({
                title: '删除提示'
                ,type: 1
                ,offset: type
                ,id: ''+type
                ,content: '<div style="padding: 20px 100px;">确定要删除吗</div>'
                ,btn: ['确定','取消']
                ,btnAlign: 'c'
                ,shade: 0.1
                ,yes: function(){
                    layer.closeAll();
                }
            });
        }
    };
    //按钮点击出现模态框
    $('.ope-btn').on('click', function(){
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });
});
//表格
layui.use('table', function() {
    var table = layui.table;
    table.render({
        elem: '#customer-table'
        ,url:'/customer'
        ,cellMinWidth: 80 //常规单元格的最小宽度
        ,page: true //开启分页
        // ,where: {token: 'sasasas', id: 123} //传递额外参数
        ,cols: [[
            {field:'', width:80, title: ''}
            ,{field:'username', width:80, title: '用户名'}
            ,{field:'othername', width:80, title: '昵称'}
            ,{field:'sex', width:80, title: '性别', sort: true}
            ,{field:'phone', width:137,title: '手机号码', sort: true}
            ,{field:'address', width:137, title: '地址', sort: true}
            ,{field:'ordernum', width:137, title: '订单数量', sort: true}
            ,{field:'monthtotal', width:137, title: '本月消费金额', sort: true}
            ,{field:'operation', width:137, title: '操作', sort: true,toolbar:'#lastOpeBtn'}
        ]]
    });
})
//分页
layui.use(['laypage', 'layer'], function(){
    var laypage = layui.laypage
        ,layer = layui.layer;
    //总页数大于页码总数
    laypage.render({
        elem: 'page-box'
        ,count: 50 //数据总数
        ,jump: function(obj){
            console.log(obj)
        }
    });
});
//表单 查看信息
layui.use(['form','layer'], function() {
    var form = layui.form,
        $ = layui.jquery

    //监听form表单提交事件
    form.on('submit(addClientSub)', function(data){
        var param=data.field;
        console.log(JSON.stringify(param));
        $.ajax({
            url:"/look",
            type:'post',
            data:JSON.stringify(param),
            success:function(res){

            },
            error:function(){

            }
        });
        //return false;
    });
});

//编辑 只能修改电话号码 点击input会出现完整的电话号码
$('#cusPhoneIOne').focus(function () {
    console.log(1)
    $(this).val('18683305738');
});
//清空input数据
function clearInput(oInput) {
    oInput.val('');
}
var oTBody=document.getElementById('customer-tbody');
var oPageBox=document.getElementById('page-li');
var iNow=1;//当前页码
/**
 * 获取页码
 */
function getPageNum(){
    $.ajax({
        url:'/getCon',
        success:function (res) {
            var json=JSON.parse(res);
            console.log(json)
            if (json.error){
                alert('获取页码错误！')
            } else {
                //成功 创建页码
                oPageBox.innerHTML='';
                for (var i=0;i<json.count;i++){
                    var oLi=document.createElement('li');
                    oLi.innerHTML='<a href="javascript:;" class="page-li">'+(i+1)+'</a>';
                    oPageBox.appendChild(oLi);
                    if (i==(iNow-1)){
                        oLi.classList.add('active');
                    }
                }
            }
        }
    })
}
getPageNum();
// 表格按钮数据
var btnAllStr='<button data-method="notice" class="layui-btn layui-btn-sm layui-btn-normal ope-btn">查看</button>\n' +
    '                        <button data-method="notice1" class="layui-btn layui-btn-sm layui-btn-warm ope-btn">编辑</button>\n' +
    '                        <button data-method="offset" data-type="auto" class="layui-btn layui-btn-sm layui-btn-danger ope-btn">删除</button>\n' +
    '                        <select name="">\n' +
    '                            <option value="0" selected="">更多</option>\n' +
    '                            <option value="1">发送短信</option>\n' +
    '                            <option value="2" >加入黑名单</option>\n' +
    '                            <option value="3">移出黑名单</option>\n' +
    '                        </select>';
/**
 * 创建页面数据
 */
function createData(data) {
    oTBody.innerHTML = '';
    for (var i = 0; i < data.length; i++) {
        var oTr = document.createElement('tr');
        oTr.setAttribute('data-id', data[i].id);
        oTr.innerHTML = '<td><img src="' + data[i].headurl + '">\n' +
            '                        <span></span></td>' +
            '<td>' + data[i].username + '</td>' +
            '<td>' + data[i].othername + '</td>' +
            '<td>' + data[i].sex + '</td>' +
            '<td>' + data[i].phone + '</td>' +
            '<td>' + data[i].addrid1 + '</td>' +
            '<td>120</td>' +
            '<td>120</td>' +
            '<td>' + btnAllStr + '</td>';
        oTBody.appendChild(oTr);
    }
}
/**
 * 获取页面数据
 * @param num
 */
function getPageData(n) {
    $.ajax({
        url:'/getData',
        data:{
            num:n
        },
        success:function (res) {
            var json=JSON.parse(res);
            console.log(res)
            if (json.error){
                alert('获取页面数据错误！')
            }else {
                //创建数据
                createData(json.data);
            }
        }
    })
}
getPageData(iNow);
//点击页码到相应的页面
// oPageBox.onclick=function () {
//     var oSrc=event.srcElement;
//     if (oSrc.nodeName='A'){
//         iNow=oSrc.innerHTML;
//         getPageData(iNow);
//         for (var i=0;i<oPageBox.children.length;i++){
//             oPageBox.children[i].classList.remove('active');
//         }
//         oSrc.parentNode.classList.add('active');
//     }
// };
