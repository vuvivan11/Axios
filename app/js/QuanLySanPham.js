function listProduct(){
    this.getProductAPI = function(){
        return axios({
            url: "https://6188a4a2d0821900178d7416.mockapi.io/api/product",
            method: "GET",
        });
    }
}