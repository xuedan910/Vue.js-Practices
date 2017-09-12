var cartData = {
    "status":1,
    "result":{
        "totalMoney":59,
        "list":[
            {
                "productId":"600100002115",
                "productName":"expensive cigarette",
                "productPrice":19,
                "productQuentity":1,
                "productImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Marlboro4wiki2.JPG/220px-Marlboro4wiki2.JPG",
            },
            {
                "productId":"600100002120",
                "productName":"alcohol",
                "productPrice":33,
                "productQuentity":5,
                "productImage":"http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2017/05/09125006/Alcohol-v-2-resized.jpg",
            },
        ],
    },
    "message":""
}

var vm = new Vue({
    el:'#app',
    data:{
        products:cartData['result']['list'],
        selectArr:[],
    },
    methods:{
        add(obj){
            obj.productQuentity++;
            if (typeof obj.disable == 'undefined') {
                this.$set(obj,'disable',false);
            }else{
                obj.disable = false;
            }
        },
        minus(obj){
            if (obj.productQuentity > 0) {
                obj.productQuentity--;
            }
            if (obj.productQuentity == 0) {
                if (typeof obj.disable == 'undefined') {
                    this.$set(obj,'disable',true);
                }else{
                    obj.disable = true;
                }
            }
        },
        selectAll(){
            this.products.forEach((each,index) => {
                this.selectArr.push(index);
            });
        },
        cancelAll(){
            this.selectArr = [];
        }
    },
    computed:{
        total(){
            let tmp = 0;
            this.products.forEach((each,index) => {
                if (this.selectArr.indexOf(index) >= 0) {
                    tmp += each['productQuentity'] * each['productPrice'];
                }
            });
            return tmp;
        }
    }
});