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
                    '        <label>她/他是一位</label>\n' +
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
//编辑 只能修改电话号码 点击input会出现完整的电话号码
$('#cusPhoneIOne').focus(function () {
    console.log(1)
    $(this).val('18683305738');
});
//清空input数据
function clearInput(oInput) {
    oInput.val('');
}
