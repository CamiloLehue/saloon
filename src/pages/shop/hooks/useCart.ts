// import { useState } from "react"
// import type { CartType } from "../type/ShopType"



// const useCart = () => {
    
//     const [cart, setCart] = useState<CartType[]>([])

//     const addToCart = (item: CartType) => {
//         setCart([...cart, item])
//     }

//     const removeFromCart = (item: CartType) => {
//         setCart(cart.filter(c => c.id !== item.id))
//     }

//     return {
//         cart,
//         addToCart,
//         removeFromCart
//     }
// }

// export default useCart