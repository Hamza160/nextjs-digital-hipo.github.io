export const PRODUCT_CATEGORIES = [
    {
        label:'UI Kits',
        value:'ui_kits' as const,
        featured: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc: '/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },
            {
                name: 'Bestsellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
            }
        ]
    },
    {
        label:'Icons',
        value:'icons' as const,
        featured: [
            {
                name: 'Favourite Icon Picks',
                href: '#',
                imageSrc: '/icons/picks.jpg'
            },
            {
                name: 'New Arrivals',
                href: '#',
                imageSrc: '/icons/new.jpg'
            },
            {
                name: 'Bestselling Icons',
                href: '#',
                imageSrc: '/icons/bestsellers.jpg'
            }
        ]
    }
];