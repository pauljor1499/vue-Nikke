import { ref } from "vue";

export let products = ref([
  {
    ID: 1,
    NAME: "Nike Air Max 2021",
    TYPE: "men",
    PRICE: 8595.65,
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite1.png",
  },
  {
    ID: 2,
    NAME: "Nike Air Force 1 '07 Next Nature",
    TYPE: "men",
    PRICE: 5295.0,
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite2.png",
  },
  {
    ID: 3,
    NAME: "Nike Air Force 1 Crater Next Nature",
    TYPE: "women",
    PRICE: 4095.0,
    COLOR: "blue",
    DESCRIPTION: "",
    IMAGE: "favourite3.png",
  },
  {
    ID: 4,
    NAME: "Nike Dri-FIT Strike",
    TYPE: "women",
    PRICE: 1495.5,
    COLOR: "red",
    DESCRIPTION: "",
    IMAGE: "favourite4.png",
  },
  {
    ID: 5,
    NAME: "Nike SuperRep Go 3 Next Nature Flyknit",
    TYPE: "kid",
    PRICE: 5295.75,
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
