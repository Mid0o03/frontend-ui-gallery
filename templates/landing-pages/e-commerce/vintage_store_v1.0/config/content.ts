import { Product } from '../types';

/**
 * Text and data content for the Retro Vintage Store template.
 */
export const content = {
    // Navigation & Browser Window
    browser: {
        windowTitle: 'Internet Explorer - [Vintage_Store_v1.0]',
        addressBar: 'http://www.vintage-threads-95.com/home.html',
        systemNotification: '*** NEW ARRIVALS DROPPED *** USE CODE: FLOPPY_DISK FOR 10% OFF *** FREE SHIPPING ON ORDERS OVER 50MB *** RADICAL SAVINGS ***',
        breadcrumbPath: 'C:\\My Computer\\Local Disk (C:)\\Shop\\New_Arrivals',
    },

    // Hero Section
    hero: {
        windowTitle: 'Welcome_to_Shop.exe',
        title: {
            part1: 'AUTHENTIC',
            gradient: 'VINTAGE',
            part2: 'THREADS',
        },
        subtitle: [
            'C:\\> Loading stylistic assets...',
            'C:\\> 100% Cotton verified.',
            'C:\\> Enter the simulation.',
        ],
        buttons: {
            primary: 'ENTER STORE',
            secondary: 'CANCEL',
        },
        image: {
            src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1MYAkHz4g7WC0slM8iHrXaeK1KMq0Z52QTsC53BtR7bFybPX0ll0hg0WmiZYg6E5M_iQoGyn5pQ-G30xTD1SwH8Fv1jLskaxQTz_pjNvGe6dp49lKgkjTVFfMaNG2THo7bC0Zh1o4tZMUkWjQJFhA52IK1X91ygcDrnMKJA4SIJL3mkXjNfnJDnljZJmp-YllU_ficoLTCAhTRFp2eoxDLh0E98zpJmXGHAV2mARCovf1NbhYf9JDHietoMiMuQo2vDUqoJq1Tvdq',
            alt: 'Neon lit retro arcade room with vaporwave aesthetics',
            label: 'IMG_0921.JPG',
        },
    },

    // Widgets
    widgets: {
        findFiles: {
            title: 'Find_Files',
            label: 'Search for files or folders named:',
            placeholder: 'e.g. Acid Wash Jeans',
            button: 'Search Now',
        },
        categories: {
            title: 'C:\\Categories',
            items: [
                'Windbreakers',
                'Graphic_Tees',
                'Denim_Jackets',
                'Accessories',
                'Misc_Files'
            ],
        },
    },

    // Desktop Icons
    desktopIcons: [
        { label: 'My Computer', iconType: 'computer' as const },
        { label: 'My Documents', iconType: 'folder' as const },
        { label: 'Recycle Bin', iconType: 'trash' as const },
    ],

    // Product Data
    products: [
        {
            id: '1',
            filename: 'MTV_Logo_Tee.jpg',
            size: '32KB',
            type: 'JPEG Image',
            price: 24.99,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCemLqfD8wZNf3kbELU1AJ6svyZ8O35cSbv38-MoYQ8Mg95uvKByPJuL6nOiQBlara-s1TfPTWFWPA_mlBL1wYSWqVkj24zdSeCmuVMMbwFBrPMAUFipG_8D0bWqz0osB32K1l8wMVF2DwP85cBttxpqZXEuxYflhbG1fYwt06X-4vXCJXcihFcmP87fxzo1v92OdPJ-tXxsL5Rw9mtulii_aCzNt8rI1CbEb6l5_kwrM7mKHRznV-wEtwMJvY2GkxGQmJpEHQRSCUS',
            alt: 'Vintage t-shirt hanging on a wall'
        },
        {
            id: '2',
            filename: 'Neon_Windbreaker.png',
            size: '1.2MB',
            type: 'PNG Image',
            price: 55.00,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KI9XlFvQ71zibeJhTaTC-4rXhQgrV2-OBiiTKVYSsFov7UZPQ7g7kwWEBROPM76W9oTmj6lF4T0GNEKFmVCLkj1WhJut4mHYth6GfRYmtwEx50hRdgTJDFrG2eb8VwbsSwYlccf0ppuzXO4umRJpJmPQICTdNYC-MIhjHM04DV2KE-1RmBYD3cNXSlJV9EyOEWCxUNGvenjqJvHviTExDgwAnIVpaFTX959neS4O0wDcRLvEjFBgOJRRZeFnNgDB53EFEtYlTIYB',
            alt: 'Colorful retro windbreaker jacket'
        },
        {
            id: '3',
            filename: 'Acid_Wash_Denim.bmp',
            size: '5MB',
            type: 'BMP Image',
            price: 89.99,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxC4F2rEpAJcUjw--Ix60v_d7AkAPx9r4mk32LaXJRNOqUBJIMGtqeDZhAI7Vtli3iRa1WSUK5weKav-tKjoD9pZ38UE1pNM_SSIvhT2z2USR5MGCM3Jav3FEWbfhBwUmr8Vh2zrtZyW7p6tSJVIxt8up4-JSB5KjjtsTswu3ADTQhjXWgvjxGNpNMZDyct-QLWK7uktQCHWbwpWn1gQfkSu84NYGjNUKXUxg4XUWqMRO938kvpr2AsSmcee-ClMb1T1bk7G4wjye5',
            alt: 'Oversized denim jacket on model'
        },
        {
            id: '4',
            filename: 'Chunky_Sneakers.gif',
            size: '800KB',
            type: 'GIF Image',
            price: 120.00,
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdawoS3K3U7wRCO2gFWNXR4iw9JLoXnvw2FO14t_hOUTgKBBtUG_xZ0R3xZMFiS5XfwYAmpKYzCWWJJq_nnA55IjxqTNPrKJL5uQghcQRxF_iG3tIRLGNv2s7U4v8_h2roO2eHOJwq_VcXktMs8pAE_g-WCPQ1TPXJySGFg_hycn-jbOGsyYiAlXjnhIiBPDohR6WfAhG7Je0r33YGPoo4VlEFBQalHyi7JiUW16UCsp3UMWmaFndQ4MaBiRVI0gQy3H4QChGW1r_3',
            alt: 'White chunky sneakers on colored background'
        }
    ] as Product[],
};
