import { Product } from "./typess";

export function checkSelectedProduct(selectedProducts : Product[], product : Product){
    return selectedProducts.some(item => item.id === product.id);
    
}


export function FormatPrice(price : number){
    const formatter = new Intl.NumberFormat('pt-BR', {
        style : 'currency',
        currency : 'brl',
        minimumFractionDigits : 2
    });

    return formatter.format(price);
}