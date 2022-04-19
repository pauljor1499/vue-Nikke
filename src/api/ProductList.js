import { ref } from "vue";

export let products = ref([
  {
    ID: 1,
    NAME: "Piattos",
    TYPE: "men",
    PRICE: "12.00",
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite1.png",
  },
  {
    ID: 2,
    NAME: "Chippy",
    TYPE: "men",
    PRICE: "8.75",
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite2.png",
  },
  {
    ID: 3,
    NAME: "Super Crunch",
    TYPE: "women",
    PRICE: "15.00",
    COLOR: "",
    DESCRIPTION: "",
    IMAGE: "favourite3.png",
  },
  {
    ID: 4,
    NAME: "Goya",
    TYPE: "women",
    PRICE: "32.25",
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite4.png",
  },
  {
    ID: 5,
    NAME: "Gatorade",
    TYPE: "kid",
    PRICE: "40.50",
    COLOR: "red",
    DESCRIPTION: "",
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
