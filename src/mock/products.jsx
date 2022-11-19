export const products = [
{
    id: 1,
    title: `Pantufla Verano Dama`,
    price: 1630,
    stock: 10,
    category: `dama`,
    img: `https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259554/VERANO_COMUNES_vlmjcu.png`,
},
{
    id: 2,
    title: `Pantufla Verano Caballero`,
    price: 1760,
    stock: 13,
    category: `caballero`,
    img: `https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259551/CABALLERO_VERANO_EDITada_eahqqy.jpg`,

},
{
    id: 3,
    title: `Pantufla Invierno Dama`,
    price: 1630,
    stock: 7,
    category: `dama`,
    img: `https://res.cloudinary.com/djjmhiwzd/image/upload/v1667259552/LUNARES_CRUZADASremovebg-preview_urru2r.png`,
}
];
//el categoryName de export const getProducts = (categoryName) =>{ podría ser cualquiér nombre
export const getProducts = (categoryName) =>{
    return new Promise ((res,rej) => {
      const prodFiltrados = products.filter ((prod) => prod.category === categoryName);
      const ref = categoryName ? prodFiltrados : products;
      setTimeout (()=>{
        res (ref);
      }, 2000);
  });//NEW PROMISE
 }; //GET PRODUCTS

//PARA EL DETAIL CONTAINER
 export const getProduct = (idProd) => {
    return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd);
        setTimeout(() => {
            res(product);
        }, 2000);
    });
};