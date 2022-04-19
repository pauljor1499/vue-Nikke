import { ref } from "vue";

export let products = ref([
  {
    ID: 1,
    NAME: "Piattos",
    PRICE: "12.00",
    TYPE: "Men's Wear",
    IMAGE: "favourite1.png",
  },
  {
    ID: 2,
    NAME: "Chippy",
    PRICE: "8.75",
    TYPE: "Men's Wear",
    IMAGE: "favourite2.png",
  },
  {
    ID: 3,
    NAME: "Super Crunch",
    PRICE: "15.00",
    TYPE: "Men's Wear",
    IMAGE: "favourite3.png",
  },
  {
    ID: 4,
    NAME: "Goya",
    PRICE: "32.25",
    TYPE: "Men's Wear",
    IMAGE: "favourite4.png",
  },
  {
    ID: 5,
    NAME: "Gatorade",
    PRICE: "40.50",
    TYPE: "Men's Wear",
    IMAGE: "favourite5.png",
  },
]);

export class API {
  getProducts() {
    return products;
  }

  addNewProduct(new_product) {
    products.value.push(new_product);
  }
}
