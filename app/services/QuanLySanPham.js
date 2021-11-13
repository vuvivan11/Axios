function listProduct(){
    this.getProductAPI = function(){
        return axios({
            url: "https://6188a4a2d0821900178d7416.mockapi.io/api/product",
            method: "GET",
        });
    };

    this.deleteProductApi = function(id){
        return axios({
            url: `https://6188a4a2d0821900178d7416.mockapi.io/api/product/${id}`,
            method: "DELETE",
        });
    }


    this.addProductApi = function(classProduct){
        return axios({
            url: `https://6188a4a2d0821900178d7416.mockapi.io/api/product`,
            method: "POST",
            data: classProduct,
        });
    }

    this.getProductById = function(id){
        return axios({
            url: `https://6188a4a2d0821900178d7416.mockapi.io/api/product/${id}`,
            method: "GET",
        });
    }

    this.updateProductApi = function(classProduct){
        return axios({
            url: `https://6188a4a2d0821900178d7416.mockapi.io/api/product/${classProduct.id}`,
            method: "PUT",
            data: classProduct,
        });
    }
}

