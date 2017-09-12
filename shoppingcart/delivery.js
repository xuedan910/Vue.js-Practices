var addressData = [
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":true,
    },
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":false,
    },
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":false,
    },
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":false,
    },
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":false,
    },
    {
        "addressId":"100001",
        "userName":"Rain",
        "streetName":"City Center,Auckland",
        "postCode":"100001",
        "tel":"13437845151",
        "isDefault":false,
    },
];
var deliverData = [
    {
        "deliverWay" : "Standard Deliver",
        "deliverCost" : "Free"
    },
    {
        "deliverWay" : "Advance Deliver",
        "deliverCost" : "180"
    }
];

new Vue({
    el:'#container',
    data:{
        addressData : addressData,
        deliverData : deliverData,
        limitBy : 3,
        selectItem : 0,
        selectDeliver : 0,
    },
    computed:{
        filterAddress(){
            return this.addressData.slice(0,this.limitBy);
        }
    },
    methods:{
        setDefault(single){
            this.addressData.forEach(each => {
                if (each['isDefault']) {
                    each['isDefault'] = false;
                }
            });
            single['isDefault'] = true;
        }
    }
});