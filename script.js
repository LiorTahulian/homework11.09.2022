let products = [
                    [1, 'Coat', '₪150'],
                    [2, 'Shirt', '₪100'],
                    [3, 'Hat', '₪35'],
                    [4, 'Pants', '₪135']
]


function addProduct(numberProduct) {

    for (i = 0; i < products.length; i++) {
        if (numberProduct == i) {
            let newParagraph = document.createElement("p");
            newParagraph.setAttribute('class', 'colornewParagraph');
            let newButton = document.createElement("button");
            newButton.setAttribute('class', 'removeProduct');
            newButton.innerHTML = 'Remove Product';
            newButton.onclick = function removeProduct() {
                newParagraph.innerHTML = "";
            } 
            let newContent = document.createTextNode(products[i][1] + ' ' + '--' + ' ' + products[i][2] + ' ');
            newParagraph.appendChild(newContent);
            newParagraph.appendChild(newButton);
            document.body.appendChild(newParagraph);
            
        }
    }
}

