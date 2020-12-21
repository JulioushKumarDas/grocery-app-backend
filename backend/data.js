import bcrypt from 'bcryptjs';

const data = {
    users: [
    {
        username: 'Niranjana',
        email: 'niranjana@groceryapp.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: true,
    },
    {
        username: 'Zoro',
        email: 'zoro@op.com',
        password: bcrypt.hashSync('1234', 8),
        isAdmin: false,
    },
],

    products: [
        {
            name: 'Lays Maxx',
            category: 'Snacks',
            image: '/images/lays-maxx.jpg',
            price: 60,
            stock: 100,
            brand: 'Lays',
            rating: 3.5,
            numReviews: 500,
            description: 'Lays maxx macho chilli'
        },
        {
            name: 'Maggi',
            category: 'Snacks',
            image: '/images/maggi.jpg',
            price: 20,
            stock: 10,
            brand: 'Nestle',
            rating: 4,
            numReviews: 200,
            description: 'Nestle Maggi'
        },
    ],
};
export default data;