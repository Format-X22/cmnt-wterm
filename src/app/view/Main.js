Ext.define('Com.view.Main', {
    extend: 'Ext.container.Container',
    xtype: 'appMain',
    layout: 'vbox',
    items: [
        {
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'spacer',
                    width: 20,
                },
                {
                    xtype: 'label',
                    html: 'Commun Trade',
                },
                {
                    xtype: 'spacer',
                    width: 35,
                },
                {
                    itemId: 'trade',
                    xtype: 'button',
                    text: 'Trade',
                    pressed: true,
                },
                {
                    itemId: 'references',
                    xtype: 'button',
                    text: 'References',
                },
                {
                    itemId: 'contracts',
                    xtype: 'button',
                    text: 'Contracts',
                },
                {
                    itemId: 'api',
                    xtype: 'button',
                    text: 'API',
                },
                {
                    itemId: 'news',
                    xtype: 'button',
                    text: 'News',
                },
                '->',
                {
                    xtype: 'button',
                    text: 'Register',
                },
                {
                    xtype: 'button',
                    text: 'Login',
                },
            ],
        },
        {
            xtype: 'container',
            flex: 1,
            layout: 'hbox',
            items: [
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'Trade box',
                            flex: 1,
                            border: true,
                        },
                        {
                            xtype: 'panel',
                            title: 'Control',
                            height: 200,
                            border: true,
                        },
                    ],
                },
                {
                    xtype: 'panel',
                    title: 'Pairs',
                    layout: 'vbox',
                    width: 350,
                    collapsible: 'right',
                    items: [
                        {
                            xtype: 'tabpanel',
                            flex: 8,
                            items: [
                                {
                                    title: 'CMN',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'grid',
                                            columns: [
                                                {
                                                    text: 'pair',
                                                    dataIndex: 'pair',
                                                    flex: 1,
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'price',
                                                    dataIndex: 'price',
                                                    align: 'right',
                                                    flex: 1,
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'volume',
                                                    dataIndex: 'volume',
                                                    align: 'right',
                                                    flex: 1,
                                                },
                                                {
                                                    text: 'change',
                                                    dataIndex: 'change',
                                                    flex: 1,
                                                    align: 'right',
                                                    cell: {
                                                        encodeHtml: false,
                                                    },
                                                    renderer: value => {
                                                        let color;
                                                        let sign;

                                                        if (value > 0) {
                                                            color = 'green';
                                                            sign = '+';
                                                        } else {
                                                            color = 'red';
                                                            sign = '';
                                                        }

                                                        return `<span style="color: ${color}">${sign}${value} %</span>`;
                                                    },
                                                },
                                            ],
                                            store: [
                                                {
                                                    pair: 'CYBER',
                                                    price: 150,
                                                    volume: 20,
                                                    change: 15,
                                                },
                                                {
                                                    pair: 'GLS',
                                                    price: 90,
                                                    volume: 2090,
                                                    change: -5,
                                                },
                                                {
                                                    pair: 'MEAT',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                                {
                                                    pair: 'XXX',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                                {
                                                    pair: 'MEMO',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                                {
                                                    pair: 'TOP',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: 'BTC',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'grid',
                                            columns: [
                                                {
                                                    text: 'pair',
                                                    dataIndex: 'pair',
                                                    flex: 1,
                                                },
                                                {
                                                    xtype: 'numbercolumn',
                                                    text: 'price',
                                                    dataIndex: 'price',
                                                    align: 'right',
                                                },
                                                {
                                                    text: 'volume',
                                                    dataIndex: 'volume',
                                                    align: 'right',
                                                },
                                                {
                                                    text: 'change',
                                                    dataIndex: 'change',
                                                    align: 'right',
                                                },
                                            ],
                                            store: [
                                                {
                                                    pair: 'CMN',
                                                    price: 150,
                                                    volume: 20,
                                                    change: 15,
                                                },
                                                {
                                                    pair: 'CYBER',
                                                    price: 150,
                                                    volume: 20,
                                                    change: 15,
                                                },
                                                {
                                                    pair: 'ETH',
                                                    price: 90,
                                                    volume: 2090,
                                                    change: -5,
                                                },
                                                {
                                                    pair: 'LTC',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    title: 'USDC',
                                    layout: 'fit',
                                    items: [
                                        {
                                            xtype: 'grid',
                                            columns: [
                                                {
                                                    text: 'pair',
                                                    dataIndex: 'pair',
                                                    flex: 1,
                                                },
                                                {
                                                    text: 'price',
                                                    dataIndex: 'price',
                                                },
                                                {
                                                    text: 'volume',
                                                    dataIndex: 'volume',
                                                },
                                                {
                                                    text: 'change',
                                                    dataIndex: 'change',
                                                },
                                            ],
                                            store: [
                                                {
                                                    pair: 'CMN',
                                                    price: 150,
                                                    volume: 20,
                                                    change: 15,
                                                },
                                                {
                                                    pair: 'CYBER',
                                                    price: 150,
                                                    volume: 20,
                                                    change: 15,
                                                },
                                                {
                                                    pair: 'ETH',
                                                    price: 90,
                                                    volume: 2090,
                                                    change: -5,
                                                },
                                                {
                                                    pair: 'LTC',
                                                    price: 80,
                                                    volume: 2000,
                                                    change: 3,
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            xtype: 'panel',
                            title: 'Troll box',
                            flex: 5,
                            border: true,
                            layout: 'vbox',
                            items: [
                                {
                                    xtype: 'container',
                                    flex: 1,
                                    items: [
                                        {
                                            xtype: 'container',
                                            height: '100%',
                                            scrollable: {
                                                x: false,
                                                y: true,
                                            },
                                            items: [
                                                {
                                                    xtype: 'list',
                                                    store: [
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        {
                                                            name: 'userC',
                                                            message:
                                                                'Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla Bla-Bla ',
                                                        },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                        { name: 'userA', message: 'Hello' },
                                                        { name: 'userB', message: 'Here' },
                                                        { name: 'userC', message: 'To the Moon!' },
                                                    ],
                                                    itemTpl: '<b>{name}</b>: {message}',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    xtype: 'toolbar',
                                    layout: 'hbox',
                                    padding: 10,
                                    items: [
                                        {
                                            itemId: 'message',
                                            xtype: 'textfield',
                                            placeholder: 'message...',
                                            flex: 1,
                                        },
                                        {
                                            itemId: 'send',
                                            xtype: 'button',
                                            text: 'send',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});
