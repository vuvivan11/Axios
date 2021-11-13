var product = new listProduct();

function getEle(id) {
    return document.getElementById(id);
}

function getListProduct() {
    product.getProductAPI()
        .then(function (result) {
            renderData(result.data);

        })
        .catch(function (error) {
            console.log(error);
        })

}
getListProduct();

function renderData(data) {
    var content = "";
    data.forEach(function (item, index) {
        var trProduct = `<tr>
            <td>${index + 1}</td>
            <td>${item.nameProduct}</td>
            <td>${item.price}</td>
            <td><img width="50" height="auto" src="/assets/img/${item.image}"></td>
            <td>${item.description}</td>
            <td>
            <button class="btn btn-info" data-toggle="modal"
            data-target="#myModal" onclick="editProduct(${item.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${item.id})">Delete</button>
            </td>
        </tr>`;
        content += trProduct;
    })
    document.getElementById("tblDanhSachSP").innerHTML = content;
}

function deleteProduct(id) {
    product.deleteProductApi(id)
        .then(function (result) {
            alert("Delete success!");
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        })
}

function addProduct() {
    var nameProduct = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var image = getEle("HinhSP").value;
    var description = getEle("moTa").value;

    var classProduct = new Product("", nameProduct, price, image, description);
    product.addProductApi(classProduct)
        .then(function (result) {
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        })

}


document.getElementById("btnThemSP").addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";
    var modalFooter = `<button class="btn btn-success" onclick="addProduct()">Add Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = modalFooter;
})

function editProduct(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Product";
    var modalFooter = `<button class="btn btn-success" onclick="updateProduct(${id })">Update Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = modalFooter;

    product.getProductById(id)
        .then(function (result) {
            getEle("TenSP").value = result.data.nameProduct;
            getEle("GiaSP").value = result.data.price;
            getEle("HinhSP").value = result.data.image;
            getEle("moTa").value = result.data.description;
        })
        .catch(function (error) {
            console.log(error);
        })
}

function updateProduct(id){
    var nameProduct = getEle("TenSP").value;
    var price = getEle("GiaSP").value;
    var image = getEle("HinhSP").value;
    var description = getEle("moTa").value;

    var classProduct = new Product(id, nameProduct, price, image, description);
    product.updateProductApi(classProduct)
        .then(function(result){
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function(error){
            console.log(error);
        })
}

