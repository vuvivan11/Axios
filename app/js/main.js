var product = new listProduct();

function getListProduct() {
    product.getProductAPI()
        .then(function (result) {
            renderData(result.data);
        })
        .catch(function(error){
            console.log(error);
        })

}
getListProduct();

function renderData(data){
    var content = "";
    data.forEach(function(item){
        var trProduct = `<tr>
            <td>${item.id}</td>
            <td>${item.nameProduct}</td>
            <td>${item.price}</td>
            <td><img class="w-25 h-25" src="/assets/img/${item.image}"></td>
            <td>${item.description}</td>
        </tr>`;
        content += trProduct;
    })
    document.getElementById("tblDanhSachSP").innerHTML = content;
}