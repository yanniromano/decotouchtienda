const products = [
    {
        id: '1',
        name: 'PLANCHA CIRCULOS',
        price: '$1.600',
        category: 'nuevo',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/subway-biselado-blanco-junta-gris1-fb4b4e93620a61eb1f15924291988302-320-0.jpg',
        stock: 25,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha: 60 x 60 CM '
    },
    {
        id: '2',
        name: 'PLANCHA ABSTRACTO PASTEL',
        price: '$ 2.480',
        category: 'espacios',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/f4b957dc64790edf5632c590178456001-1a4808cc71e23fcd0b15232920421047-640-0.jpg',
        stock: 16,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha: 55 x 130 cm'
    },

    {
        id: '3',
        name: 'PLANCHA PLANTAS COLORES',
        price: '$ 1.980',
        category: 'mural',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/ramitas-cuadrado1-ebd56fc6a78187903216256830259417-640-0.jpg', stock: 10,
        stock: 10,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha:  Medida plancha: 60 x 130 cm'
    },

    {
        id: '4',
        name: 'PLANCHA Eucaliptos',
        price: '$ 1.980',
        category: 'espacios',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/eucaliptus-grisaceo1-f9b0e32f925c4998e516255337122402-640-0.jpg', stock: 10,
        stock: 10,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha:  Medida plancha: 60 x 130 cm'
    },
    {
        id: '5',
        name: 'PLANCHA LIBERTY TIERRA',
        price: '$ 1.980',
        category: 'mural',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/liberty-tierra1-6583d747680c69ed8116255349626845-640-0.jpg', stock: 50,
        stock: 10,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha:  Medida plancha: 60 x 60 CM'
    },
    {
        id: '6',
        name: 'PLANCHA ABSTRACTO PASTEL',
        price: '$2.480',
        category: 'nuevo',
        img: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/139/735/products/plancha-abstracto-pastel1-d01531c64f732c123915985530035745-640-0.jpg', stock: 10,
        stock: 10,
        description: 'Las planchas de vinilo son geniales para decorar grandes superficies y crear falsos empapelados. Medida plancha:  Medida plancha: 55 x 130 cm'
    }
]

const categories = [
    { id: 'mural', description: 'Murales' },
    { id: 'nuevo', description: 'Lo Nuevo!' },
    { id: 'espacios', description: 'Espacios' }
]

export const getCategories = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 500)
    })
}

export const getProducts = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categoryId ? products.filter(prod => prod.category === categoryId) : products)
        }, 500)
    })
}

export const getProductsById = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}