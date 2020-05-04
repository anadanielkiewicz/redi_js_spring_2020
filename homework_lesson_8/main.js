    const warranty = {
      type: "manufacturer",
      time: "2 years"
    }
  
    const rosefieldWomenWatch = {
      img: 'rosefieldWomenWatch.png',
      producent: "Rosefield",
      price: 99,
      model: {
        name: "West Village",
        ref: 237840,
        year: 2018
      },
      type: "WOMEN",
      itemShape: "round",
      mechanismType: "quartz",
      dateFunction: false,
      displayType: "digital",
      waterproff: "30m",
      belt: {
        material: "leather",
        style: "classic",
        width: "16mm",
        color: "grey"
      },
      caseMaterial: "steel brass",
      weight: "126 grams",
      warrantyType: warranty
    };
  
    const paulvalentineWomenWatch = {
      img: 'paulvalentineWomenWatch.png',
      producent: "Paul Valentine",
      price: 111,
      model: {
        name: "Coffee Marble",
        ref: "-",
        year: 2019
      },
      type: "WOMEN",
      itemShape: "round",
      mechanismType: "quartz",
      dateFunction: false,
      displayType: "digital",
      waterproff: "50m",
      belt: {
        material: "leather",
        style: "classic",
        width: "14mm",
        color: "coffe marble"
      },
      caseMaterial: "stainless steel",
      weight: "",
      warrantyType: warranty
    };
  
    const fossilMenWatch = {
      img: 'fossilMenWatch.png',
      producent: "Fossil",
      price: 159,
      model: {
        name: "Machine",
        ref: "FS4656",
        year: 2019
      },
      type: "MEN",
      itemShape: "round",
      mechanismType: "quartz",
      dateFunction: true,
      displayType: "chronograph",
      waterproff: "50m",
      belt: {
        material: "leather",
        style: "fashion",
        width: "22mm",
        color: "brown"
      },
      caseMaterial: "stainless steel",
      weight: "83g",
      warrantyType: warranty
    };
  
    const plantwearMenWatch = {
      img: 'plantwearMenWatch.jpg',
      producent: "Plantwear",
      price: 111,
      model: {
        name: "Raw Palisander",
        ref: "-",
        year: 2019
      },
      type: "MEN",
      itemShape: "round",
      mechanismType: "quartz",
      dateFunction: false,
      displayType: "digital",
      waterproff: "lack",
      belt: {
        material: "wood",
        style: "fashion",
        width: "20mm",
        color: "brown"
      },
      caseMaterial: "wood - Palisander",
      weight: "141g",
      warrantyType: warranty
    };
  
    let products = [];
    let productsCart = [];
    products.push(rosefieldWomenWatch, paulvalentineWomenWatch, fossilMenWatch, plantwearMenWatch);

    const watchesListEl = document.querySelector('.js-watches-list'); // products
    const cartListEl = document.querySelector('.js-cart-list'); //shopping list
    
    const shoppingListBtnEl = document.querySelector('.shoppingListBtn');

    const totalBtnEl  = document.querySelector('.totalBtn');
    const totalSum = document.querySelector('.js-total-sum');

    let sum=0;

    // Creating position in shopping list
    function displayCartList(watches) {
      const cartLiEl = document.createElement('li');
     // cartLiEl.classList.add("cart");

      cartLiEl.innerHTML = `  
        <p> ${watches.producent} ${watches.model.name} </p> 
        <span> Price: $ ${watches.price} </span>  
      `; 
      return cartLiEl
    }

    //Creating position in shop
    function displayWatches(watches){
      const liEl=document.createElement('li'); 
      liEl.classList.add("card");
  
      liEl.innerHTML = `
      <img class="watchPhoto" src="${watches.img}" />
      <h2>${watches.producent} (${watches.model.name})</h2>
      <h2>${watches.price} €</h2>
      <p> ${watches.type} WATCH </p>
      <p> ref: ${watches.model.ref} </p>
      <p> year of production: ${watches.model.year} </p>
      <li> FUNCTIONS: </li>
      <li> date function: ${watches.dateFunction}</li>
      <li> display type: ${watches.displayType}</li>
      <li> waterproof: ${watches.waterproff}</li>
      <br>
      
      <button class="buyBtn"> Buy now </button>
    `;
       
    watchesListEl.appendChild(liEl);
    
    const addToCartListEl = liEl.querySelector('.buyBtn');  
    addToCartListEl.addEventListener('click', function() {
      productsCart.push(watches);
      sum += watches.price;
      addToCartListEl.setAttribute("disabled", "true");
    });
  }
  
  products.forEach(displayWatches);

// Show shopping list function
  shoppingListBtnEl.addEventListener('click', function() {
    cartListEl.innerHTML = '';
    productsCart.forEach( function(watches) {
      const cartLiEl= displayCartList(watches);
      cartListEl.appendChild(cartLiEl);
    });
  });

// Show total price function
  totalBtnEl.addEventListener('click', function() {
    totalSum.innerHTML = `
    <p> Total price: ${sum} € </p>
    `
  });