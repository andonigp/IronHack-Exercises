// ITERATION 1
const calculateBtn = document.getElementById("calculate")

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector('.price span').innerText)
  let qty  = product.querySelector(".quantity input").value
  let subtotal = price * qty
  let subtotalTag = product.querySelector('.subtotal span')
  subtotalTag.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  const allProducts = document.getElementsByClassName('product')
  let total = 0
  for (let i = 0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
    //console.log(total)
  }

  // ITERATION 3
  let totalTag = document.getElementById('total-value')
  totalTag.innerText = (`Total: $${total.toFixed(2)}`)
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget.parentNode;
  let targetNode = target.parentNode
  let removeFrom = targetNode.parentNode
  //console.log('The target in remove is:', removeFrom);
  removeFrom.removeChild(targetNode)
  calculateAll()
}

// ITERATION 5

function createProduct(event) {
  const targetTable = document.querySelector('tbody')
  const elementTable = targetTable.firstElementChild
  const newProduct = elementTable.cloneNode(true)

  const addLine = event.currentTarget.parentNode.parentNode
  const newElementName = addLine.firstElementChild.querySelector('input').value
  const newElementPrice = addLine.children[1].querySelector('input').value

  targetTable.appendChild(newProduct)
  newProduct.firstElementChild.innerText = newElementName
  newProduct.children[1].innerHTML = (`$<span>${newElementPrice}</span>`)
  newProduct.children[2].querySelector('input').placeholder = 0


  const allRemoveBtns = document.querySelectorAll('.btn-remove')
  allRemoveBtns.forEach((element) => {
    element.addEventListener('click', removeProduct)
  })
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const allRemoveBtns = document.querySelectorAll('.btn-remove')
  allRemoveBtns.forEach((element) => {
    element.addEventListener('click', removeProduct)
  })

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct)
});



//DUDAS:
// - Con el toFixed en el subtotal me estaba manteniendo un valor diferente.
// - Como poder agregar elementos en una lista vacia.