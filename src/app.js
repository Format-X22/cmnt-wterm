/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    requires: ['Com.view.Main'],
    name: 'Com',
    mainView: 'Com.view.Main',

    launch: function() {
        Ext.Viewport.add({
            xtype: 'appMain',
        });
    },
});
