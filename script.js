function calculateOrder() {
            var quantity = document.getElementById("quantity").value;
            var productPrice = parseFloat(document.getElementById("product").value);
            var totalPrice = quantity * productPrice;
            document.getElementById("result").innerHTML = "Total price: $" + totalPrice.toFixed(2);
        }