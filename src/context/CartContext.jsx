import { useState, createContext} from "react";


export const CartContext = createContext(); 


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, cantidad) => {
        
        if (isInCart(item.id)) {
            //sumo la cantidad
            alert(`Ya está en el carrito`);
        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };
   
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    const deleteAll = () => {
        setCart ([]);
    }

    const deleteOne = (id) => {
        const prodFiltrados = cart.filter ((prod)=> prod.id !== id);
        setCart(prodFiltrados);
    }

    console.log (cart);
    return (
        <CartContext.Provider value={{cart , addToCart, deleteAll, deleteOne}}>
           {children}
        </CartContext.Provider>

    )
}

export default CartProvider;