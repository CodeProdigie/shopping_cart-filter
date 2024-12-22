const products=[
    {
        id:1,
        name:"Cartoon T-shirt",
        price:100,
        url:"images/f1.jpg",
        classid:"t-shirt"
    },
    {
        id:2,
        name:"Awesome T-shirt",
        price:200,
        url:"images/f2.jpg",
        classid:"t-shirt"
    },
    {
        id:3,
        name:"Garden T-shirt",
        price:300,
        url:"images/f3.jpg",
        classid:"t-shirt"
    },
    {
        id:4,
        name:"Waterfall T-shirt",
        price:400,
        url:"images/f4.jpg",
        classid:"t-shirt"
    },
    {
        id:5,
        name:"Nike set bronze",
        price:25,
        url:"images/shoes5.png",
        classid:"nike-shoes"
    },
    {
        id:6,
        name:"Nike set silver",
        price:50,
        url:"images/shoes6.png",
        classid:"nike-shoes"
    },
    {
        id:7,
        name:"Nike set gold",
        price:75,
        url:"images/shoes7.png",
        classid:"nike-shoes"
    },
    {
        id:8,
        name:"Nike set platinum",
        price:100,
        url:"images/shoes8.png",
        classid:"nike-shoes"
    },
]


const pageproducts=document.querySelector(".allproducts");




const loadproducts=()=>{
    products.map(item => {
     let newitem=document.createElement("div");
     newitem.classList.add("product","all");
     newitem.classList.add(item.classid.toLowerCase())
     newitem.innerHTML=`
     <div class="image">
     <img src=${item.url} alt="">
 </div>
 <h2>${item.name}</h2>
 <div class="adjust">
     <h3>${item.price.toLocaleString()}<span>$</span></h3>
     <i class="bx bx-cart"></i>
 </div>
     `
     pageproducts.appendChild(newitem);
    })
}
loadproducts()



const goods=document.querySelectorAll(".allproducts .product");


goods.forEach(good=>{
    good.addEventListener("click",(e)=>{
        let item=e.target;
        if(item.classList.contains("bx-cart")){
            let qty=document.querySelector("header .cart span");
            let newqty=parseInt(qty.innerHTML)+1;
            qty.textContent=newqty;
        }
    })
})


const filterbtns=document.querySelectorAll(".filter-btns button");


filterbtns.forEach(btn=>{
    btn.onclick=()=>{
       filterloopedproducts(btn)
    }
})


function filterloopedproducts(btn){
  goods.forEach(itemproduct =>{
    if(itemproduct.classList.contains(btn.id)){
        itemproduct.style.display="block";
    }else{
        itemproduct.style.display="none";
    }
  })
}



const searchinput=()=>{
    const searchbox=document.getElementById("searchbar").value.toUpperCase();
    const storeitems=document.getElementById("allproducts")
    const productitems=document.querySelectorAll(".allproducts .product")
    const pname=storeitems.getElementsByTagName("h2")

    for(var i=0;i<pname.length;i++){
   let match=productitems[i].getElementsByTagName('h2')[0];
   if(match){
    let textvalue=match.textContent || match.innerHTML
    if(textvalue.toUpperCase().indexOf(searchbox)> -1){
        productitems[i].style.display=""
    }else{
        productitems[i].style.display="none"
    }
   }
    }

}