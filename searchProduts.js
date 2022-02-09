const products = [
    {name: 'iphone 14', price: 70000},
    {name: 'samsung galaxy 14', price: 60000},
    {name: 'dell laptop', price: 50000},
    {name: 'lenovo yoga', price: 55000},
    {name: 'Asus afsus laptop 14', price: 35000},
    {name: 'smart watch samsung', price: 7000},
    {name: 'apple watch', price: 20000},
    {name: 'one plus phone 4', price: 30000},
]

function searchProducts(products, searchText){
    const result = []; // jata search dici oita all produts golo array akare push kore daker jonno
    for (const product of products){
        // product kono check korar jonno jodi kono condition di
        if(product.name.includes(searchText)){
            result.push(product);
        }
        // else if(product.price < 7000){
        //     continue;
        // }
        // else{
        //     console.log(product);
        // }
    }
    return result;
}
const matched = searchProducts(products, 'laptop');
console.log(matched);