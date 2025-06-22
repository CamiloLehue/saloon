export interface CartType {
    id: number,
    nombre: string,
    descripcion: string,
    precio: number,
    href: string,
}

export interface CartContextType {
    cart: CartType[],
    addToCart: (item: CartType) => void,
    removeFromCart: (item: CartType) => void,
    clearCart: () => void,
    uniqueItems: (arr: CartType[]) => number[],
}