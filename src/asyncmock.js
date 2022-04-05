const products = [
    {
        id: 1,
        name: 'PLANCHA CIRCULOS',
        price: 1600,
        category: 'Plancha',
        img: './images/productos/01.jpg',
        stock: 25,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha: 60 x 60 CM '
    },
    {
        id: 2,
        name: 'PLANCHA ABSTRACTO PASTEL',
        price: 2.480, category: 'Plancha',
        img: './images/productos/02.jpg',
        stock: 16,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha: 55 x 130 cm'
    },

    {
        id: 3,
        name: 'PLANCHA PLANTAS COLORES',
        price: 1200,
        category: 'tablet',
        img: './images/productos/03.jpg',
        stock: 10,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha:  Medida plancha: 60 x 130 cm'
    }
]

export const getProducts = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}