document.addEventListener('DOMContentLoaded', function () {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('cartButton')) {
            const itemName = event.target.parentElement.querySelector('p:nth-child(2)').textContent;
            const itemPrice = event.target.parentElement.querySelector('p:nth-child(3)').textContent.slice(1);
            addToCart(itemName, itemPrice);
        }
    });

    function addToCart(itemName, itemPrice) {
        // Check if the item is already in the cart
        const existingCartItem = Array.from(cartList.children).find(item => item.textContent.includes(itemName));

        if (existingCartItem) {
            // If item already exists, increment the quantity
            const quantity = parseInt(existingCartItem.textContent.match(/x(\d+)/)[1]) + 1;
            existingCartItem.textContent = `${itemName} - €${itemPrice} x${quantity}`;
        } else {
            // If item is not in the cart, add a new container with the item and line break
            const cartItemContainer = document.createElement('div');
            const cartItem = document.createElement('span');
            cartItem.textContent = `${itemName} - €${itemPrice} x1`;
            const lineBreak = document.createElement('br');

            // Append the item and line break to the container
            cartItemContainer.appendChild(cartItem);
            cartItemContainer.appendChild(lineBreak);

            // Append the container to the cart list
            cartList.appendChild(cartItemContainer);
        }

        updateTotalPrice(itemPrice);
    }

    function updateTotalPrice(itemPrice) {
        const currentTotal = parseFloat(totalPrice.textContent.slice(1));
        const newTotal = currentTotal + parseFloat(itemPrice);
        totalPrice.textContent = `€${newTotal.toFixed(2)}`;
    }

    
    const wishlistButtons = document.querySelectorAll(".wishlist");
    wishlistButtons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.style.backgroundColor === "green") {
                button.style.backgroundColor = "red";
            } else {
                button.style.backgroundColor = "green";
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    const customerContainer = document.querySelector('.flex-container');

    const numberOfCustomers = 8;

    fetch(`https://randomuser.me/api/?results=${numberOfCustomers}`)
        .then(response => response.json())
        .then(data => {
            const customers = data.results;

            customers.forEach(customer => {
                const customerElement = createCustomerElement(customer);
                customerContainer.appendChild(customerElement);
            });
        })
        .catch(error => console.error('Error fetching customer data:', error));

    function createCustomerElement(customer) {
        const customerDiv = document.createElement('div');
        customerDiv.classList.add('customer');

        const customerImage = document.createElement('img');
        customerImage.src = customer.picture.large;
        customerImage.alt = 'Customer Image';

        const title = customer.name.title.charAt(0).toUpperCase() + customer.name.title.slice(1);
        const fullName = `${title} ${customer.name.first} ${customer.name.last}`;
        const country = customer.location.country;

        const customerInfo = document.createElement('p');
        customerInfo.textContent = `${fullName} - ${country}`;

        customerDiv.appendChild(customerImage);
        customerDiv.appendChild(customerInfo);

        return customerDiv;
    }
});


