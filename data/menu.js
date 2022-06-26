module.exports = [
    {
        displayName: 'Dashboard',
        path: '/',
        icon: 'gauge-high',
        id: 1,
    },
    {
        displayName: 'Icons',
        path: '/icons',
        icon: 'bomb',
        id: 2,
    },
    {
        displayName: 'Maps',
        path: '/maps',
        icon: 'map',
        id: 3,
    },
    {
        displayName: 'Charts',
        path: '/charts',
        icon: 'chart-bar',
        id: 4,
    },
    {
        displayName: 'Tables',
        path: '/tables',
        icon: 'table',
        id: 5,
    },
    {
        displayName: 'Forms',
        path: '/forms',
        icon: 'file-text',
        id: 6,
    },
    {
        displayName: 'Calendar',
        path: '/calendar',
        icon: 'calendar',
        id: 7,
    },
    {
        displayName: 'Messages',
        path: '/messages',
        icon: 'envelope',
        id: 8,
    },
    {
        displayName: 'Notifications',
        path: '/notifications',
        icon: 'bell',
        id: 9,
    },
    {
        displayName: 'Widgets',
        path: '/widgets',
        icon: 'mobile-button',
        id: 10,
    },
    {
        displayName: 'Multi Level',
        icon: 'cubes',
        path: '/multi-level',
        children: [
            {
                displayName: 'Level 1',
                path: '/multi-level/level-1',
                icon: 'file',
                id: 12,
                children: [
                    {
                        displayName: 'Level 2',
                        path: '/multi-level/level-1/level-2',
                        icon: 'file',
                        id: 15,
                    },
                ],
            },
            {
                displayName: 'Level 2',
                path: '/multi-level/level-2',
                icon: 'file',
                id: 13,
            },
            {
                displayName: 'Level 3',
                path: '/multi-level/level-3',
                icon: 'file',
                id: 14,
            },
        ],
        id: 11,
    },
]
