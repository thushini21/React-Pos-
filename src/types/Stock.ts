export type Stock = {
    id: number;
    name: string;
    unitPrice: number;
    quantity: number;
    unit: 'kg' | 'ml' | 'g' | 'L' | 'pcs';
};
