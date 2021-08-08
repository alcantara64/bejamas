export interface IProduct {
    id: string;
    name: string;
    category: string;
    price: number;
    currency: string
    image: {
        src: string
        alt: string
    },

    bestseller: boolean;
    featured: true;
    details: null | Detail
}
type Detail = {
    dimmentions: any;
    size: number;
    description: string
    recommendations: Array<any>
}
