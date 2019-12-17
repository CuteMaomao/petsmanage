layui.use('layer', function(){
    var $ = layui.jquery, layer = layui.layer;

    //触发事件
    var active = {
        notice: function(){
            layer.open({
                type: 1
                ,title: '新增客户'
                ,closeBtn: 1
                ,area: '500px;'
                ,shade: 0.8
                ,id: 'add'
                ,btn: ['确定', '取消']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽
                ,content: '<form class="modal-form layui-form">\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="layui-form-label-col">编号：</label>\n' +
                    '            <input class="layui-input" type="text">\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="">姓名：</label>\n' +
                    '            <input class="layui-input" type="text">\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="">性别：</label>\n' +
                    '            <input class="layui-input" type="text">\n' +
                    '        </div>\n' +
                    '        <div class="layui-form-item">\n' +
                    '            <label class="">电话：</label>\n' +
                    '            <input class="layui-input" type="text">\n' +
                    '        </div>\n' +
                    '    </form>'
                ,success: function(layero){
                    //确定按钮

                }
            });
        },
        offset: function(othis){
            var type = othis.data('type')
            layer.open({
                type: 1
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