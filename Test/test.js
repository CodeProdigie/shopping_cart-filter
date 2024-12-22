const items=[
    {
        id:1,
        name:"product 1",
        image:"../images/f1.jpg",
        price:10
    },
    {
        id:2,
        name:"product 2",
        image:"../images/f2.jpg",
        price:20
    },
    {
        id:3,
        name:"product 3",
        image:"../images/f3.jpg",
        price:30
    },
    {
        id:4,
        name:"product 4",
        image:"../images/f4.jpg",
        price:40
    }
]


/// display dom content

const products=document.querySelector(".products")

function display(){
   items.map(product =>{
    let list=document.createElement("div");
    list.classList.add("product");
    list.innerHTML=`
    <img src=${product.image} alt="#">
    <h2>${product.name}</h2>
    <div class="content">
        <p>${product.price}<span>$</span></p>
        <button>Buy <i class="bx bx-cart"></i></button>
    </div>
    `
    products.appendChild(list)
   })
}

display()


/// search items

const search=()=>{
    const saerchbox=document.querySelector(".searchbox").value.toUpperCase();
    const allproducts=document.querySelector(".products");
    const indproducts=document.querySelectorAll(".product");
    const keynode=allproducts.getElementsByTagName("h2");


    for(var i=0;i<keynode.length;i++){
        let keyterm=indproducts[i].getElementsByTagName("h2")[0];
        if(keyterm){
            let keymatch=keyterm.textContent || keyterm.innerHTML;
            if(keymatch.toUpperCase().indexOf(saerchbox)> -1){
                indproducts[i].style.display="";
            }else{
                indproducts[i].style.display="none";
            }
        }
    }
}