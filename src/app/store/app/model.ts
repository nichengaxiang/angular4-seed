export interface IAppState {
    menus: any[]
}

export const initialState: IAppState = {
    menus: [
        {
            text: '首页',
            path: '/home',
            type: 'level1',
            isFolded: true,
            icon: 'icon-case',
            children: [
                {
                    text: '首页',
                    path: '/home',
                    type: 'level2'
                }
            ]
        },
        {
            text: '登录',
            path: '/account/login',
            queryParams: { pageType: 'sideMenu' },
            type: 'level1',
            isFolded: true,
            icon: 'icon-person'
        }
    ]
}
