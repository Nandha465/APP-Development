const productsData = [
    {
        id: 1,
        tag: "hero-product",
        tagline: "The only creatures that are evolved enough to convey pure love are dogs and infants.",
        heroImage: "/images/products/jbl660nc-1.jpg",
        images: [
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-2.png",
            "/images/products/jbl660nc-2.png",
            
        ],
        brand: "JBL",
        title: "Dog Toys",
        info: "Until one has loved an animal, a part of one's soul remains unawakened.",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 9999,
        originalPrice: 14999,
        quantity: 1,
        ratings: 1234,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 2,
        tag: "featured-product",
        images: [
            "/images/products/boat518-1.jpeg",
            "/images/products/boat518-1.jpeg",
            "/images/products/boat518-1.jpeg",
            "/images/products/boat518-1.jpeg",
            
        ],
        brand: "boAt",
        title: "Dog Toys",
        info: "On-Ear Wireless Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Wireless",
        finalPrice: 1299,
        originalPrice: 3990,
        quantity: 1,
        ratings: 1321,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 3,
        tag: "hero-product",
        tagline: "Pets leave paw prints on our hearts.",
        heroImage: "/images/products/dog-5.png",
        images: [
            
            "/images/products/boat131-3.jpg",
            "/images/products/boat131-3.jpg",
            "/images/products/boat131-3.jpg",
            "/images/products/boat131-3.jpg",
        ],
        brand: "boAt",
        title: "Pets",
        info: "Wireless In-Ear Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 1099,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1244,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 4,
        images: [
            "/images/products/boat110-1.jpg",
            "/images/products/boat110-1.jpg",
            "/images/products/boat110-1.jpg",
            "/images/products/boat110-1.jpg",
        ],
        brand: "boAt",
        title: "Cat Toys",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 449,
        originalPrice: 999,
        quantity: 1,
        ratings: 556,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 5,
        images: [
            "/images/products/boat410-1.jpg",
            "/images/products/boat410-1.jpg",
            "/images/products/boat410-1.jpg",
            "/images/products/boat410-1.jpg",
        ],
        brand: "boAt",
        title: "Cat Toys",
        info: "Bluetooth & Wired On-Ear Headphones",
        category: "Headphones",
        type: "On Ear",
        connectivity: "Bluetooth & Wired",
        finalPrice: 1599,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1563,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 6,
        images: [
            "/images/products/cat-6.jpg",
            "/images/products/cat-6.jpg",
            "/images/products/cat-6.jpg",
            "/images/products/cat-6.jpg",
        ],
        brand: "JBL",
        title: "Cat Food",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 3699,
        originalPrice: 5299,
        quantity: 1,
        ratings: 836,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 7,
        tag: "hero-product",
        tagline: "Cats are connoisseurs of comfort.",
        heroImage: "/images/products/cat-5.jpeg",
        images: [
            "/images/products/fish-4.jpg",
            "/images/products/fish-4.jpg",
            "/images/products/fish-4.jpg",
            "/images/products/fish-4.jpg",
        ],
        brand: "Sony",
        title: "Cats",
        info: "Wireless Over-Ear Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 13489,
        originalPrice: 19990,
        quantity: 1,
        ratings: 679,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 8,
        tag: "featured-product",
        images: [
            "/images/products/fish-3.jpg",
            "/images/products/fish-3.jpg",
            "/images/products/fish-3.jpg",
            "/images/products/fish-3.jpg",
        ],
        brand: "JBL",
        title: "Fish Food",
        info: "Wireless Over-Ear NC Headphones",
        category: "Headphones",
        type: "Over Ear",
        connectivity: "Wireless",
        finalPrice: 5999,
        originalPrice: 7999,
        quantity: 1,
        ratings: 755,
        rateCount: 4,
        path: "/product-details/",
    },
    {
        id: 9,
        tag: "featured-product",
        images: [
            "/images/products/toy-1.jpg",
            "/images/products/toy-1.jpg",
            "/images/products/toy-1.jpg",
            "/images/products/toy-1.jpg",
        ],
        brand: "boAt",
        title: "Toys",
        info: "In-Ear Wireless Neckbands",
        category: "Neckbands",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 899,
        originalPrice: 2990,
        quantity: 1,
        ratings: 1464,
        rateCount: 5,
        path: "/product-details/",
    },
    {
        id: 10,
        images: [
            "/images/products/toy-2.jpg",
            "/images/products/toy-2.jpg",
            "/images/products/toy-2.jpg",
            "/images/products/toy-2.jpg",
        ],
        brand: "JBL",
        title: "Toys",
        info: "In-Ear Truly Wireless Earbuds",
        category: "Earbuds",
        type: "In Ear",
        connectivity: "Wireless",
        finalPrice: 2999,
        originalPrice: 6999,
        quantity: 1,
        ratings: 801,
        rateCount: 4,
        path: "/product-details/",
    },
    
    {
        id: 13,
        tag: "featured-product",
        images: [
            "/images/products/toy-3.jpeg",
            "/images/products/toy-3.jpeg",
            "/images/products/toy-3.jpeg",
            "/images/products/toy-3.jpeg",
        ],
        brand: "JBL",
        title: "Toys",
        info: "In-Ear Wired Earphones",
        category: "Earphones",
        type: "In Ear",
        connectivity: "Wired",
        finalPrice: 999,
        originalPrice: 1599,
        quantity: 1,
        ratings: 1144,
        rateCount: 5,
        path: "/product-details/",
    },
    
//     {
//         id: 15,
//         images: [
//             "/images/products/sonych710n-1.png",
//             "/images/products/sonych710n-2.png",
//             "/images/products/sonych710n-3.png",
//             "/images/products/sonych710n-4.png",
//         ],
//         brand: "Sony",
//         title: "Sony WH-CH710N",
//         info: "Wireless Over-Ear NC Headphones",
//         category: "Headphones",
//         type: "Over Ear",
//         connectivity: "Wireless",
//         finalPrice: 8520,
//         originalPrice: 14990,
//         quantity: 1,
//         ratings: 853,
//         rateCount: 4,
//         path: "/product-details/",
//     },
//     {
//         id: 16,
//         images: [
//             "/images/products/jbl500bt-1.png",
//             "/images/products/jbl500bt-2.png",
//             "/images/products/jbl500bt-3.png",
//             "/images/products/jbl500bt-4.png",
//         ],
//         brand: "JBL",
//         title: "JBL Tune 500BT",
//         info: "On-Ear Wireless Headphones",
//         category: "Headphones",
//         type: "On Ear",
//         connectivity: "Wireless",
//         finalPrice: 3282,
//         originalPrice: 3999,
//         quantity: 1,
//         ratings: 364,
//         rateCount: 4,
//         path: "/product-details/",
//     },
//     {
//         id: 17,
//         images: [
//             "/images/products/boat381-1.png",
//             "/images/products/boat381-2.png",
//             "/images/products/boat381-3.png",
//             "/images/products/boat381-4.png",
//         ],
//         brand: "boAt",
//         title: "boAt Airdopes 381",
//         info: "In-Ear Wireless Earbuds",
//         category: "Earbuds",
//         type: "In Ear",
//         connectivity: "Wireless",
//         finalPrice: 1699,
//         originalPrice: 4990,
//         quantity: 1,
//         ratings: 1011,
//         rateCount: 5,
//         path: "/product-details/",
//     },
//     {
//         id: 18,
//         images: [
//             "/images/products/sony-ex14ap-1.png",
//             "/images/products/sony-ex14ap-2.png",
//             "/images/products/sony-ex14ap-3.png",
//             "/images/products/sony-ex14ap-4.png"
//         ],
//         brand: "Sony",
//         title: "Sony MDR-EX14AP",
//         info: "In-Ear Wired Earphones",
//         category: "Earphones",
//         type: "In Ear",
//         connectivity: "Wired",
//         finalPrice: 549,
//         originalPrice: 1290,
//         quantity: 1,
//         ratings: 530,
//         rateCount: 4,
//         path: "/product-details/",
//     },
//     {
//         id: 19,
//         images: [
//             "/images/products/sonyxb400-1.png",
//             "/images/products/sonyxb400-2.png",
//             "/images/products/sonyxb400-3.png",
//             "/images/products/sonyxb400-4.png",
//         ],
//         brand: "Sony",
//         title: "Sony WI-XB400",
//         info: "Wireless Extra Bass In-Ear Neckbands",
//         category: "Neckbands",
//         type: "In Ear",
//         connectivity: "Wireless",
//         finalPrice: 2690,
//         originalPrice: 4990,
//         quantity: 1,
//         ratings: 474,
//         rateCount: 4,
//         path: "/product-details/",
//     },
];

export default productsData;