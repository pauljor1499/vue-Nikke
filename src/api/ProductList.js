import { ref } from "vue";

export let products = ref([
  {
    ID: 1,
    NAME: "Nike Air Max 2021 SE",
    TYPE: "Men's Shoes",
    PRICE: 9095.0,
    COLOR: "red",
    DESCRIPTION:
      "We could use a lot of superlatives to describe these shoes. We could tell you that the new Air cushioning system delivers the most revolutionary sensation you've ever felt. Or say the cored-out foam midsole gives you an incredibly soft feel. But what fun is giving away all the surprises? Lace up and feel the next era of Air for yourself.",
    IMAGE: "Nike Air Max 2021 SE.png",
    IMAGE2: "Nike Air Max 2021 SE(2).png",
  },
  {
    ID: 2,
    NAME: "Nike ZoomX Streakfly",
    TYPE: "Road Racing Shoes",
    PRICE: 8595.0,
    COLOR: "red",
    DESCRIPTION:
      "The radiance lives on in the Nike Air Force 1 '07 Next Nature—the basketball original that lets you do good by looking good. Made from at least 20% recycled materials by weight, it keeps everything you love best: tried and true AF-1 style and comfortable cushioning.",
    IMAGE: "Nike ZoomX Streakfly.png",
    IMAGE2: "Nike Air Max 2021 SE(2).png",
  },
  {
    ID: 3,
    NAME: "Nike Air Zoom Pegasus 39",
    TYPE: "Women's Running Shoes",
    PRICE: 6595.0,
    COLOR: "blue",
    DESCRIPTION:
      "Running is your daily ritual, with every step taking you closer to your personal goal. Let the Nike Air Zoom Pegasus 39 help you ascend to new heights—whether you're training or jogging—with its intuitive design. More lightweight up top than the Pegasus 38 and ideal to wear in any season, it has a supportive sensation to help keep your feet contained, while underfoot cushioning and double Zoom Air units (1 more than the Peg 38) give you an extra pop to your step. Your trusted workhorse with wings is back. Time to fly.",
    IMAGE: "Nike Air Zoom Pegasus 39.png",
    IMAGE2: "Nike Air Zoom Pegasus 39(2).png",
  },
  {
    ID: 4,
    NAME: "Nike Air Max Terrascape 90",
    TYPE: "Women's Shoes",
    PRICE: 8095.0,
    COLOR: "red",
    DESCRIPTION:
      "You know those butterflies you get when something exciting happens? We took that feeling and put it in a shoe. The Terrascape 90 invigorates an Air Max original with a nature-ready design. Expect extra durability and cushioning without added bulk—the fly-as-ever silhouette looks just as good on the hiking trail as it does on the pavement.",
    IMAGE: "Nike Air Max Terrascape 90.png",
    IMAGE2: "Nike Air Max Terrascape 90(2).png",
  },
  {
    ID: 5,
    NAME: "Nike Air Zoom Crossover",
    TYPE: "Older Kids' Basketball Shoes",
    PRICE: 3395.0,
    COLOR: "red",
    DESCRIPTION:
      "Our first basketball shoe inspired by ladies of the league is made for ALL young hoopers to dominate their game.The Nike Air Zoom Crossover, named after a favourite move, brings an extra bounce to your step with Zoom Air while you fly sky high on the court.",
    IMAGE: "Nike Air Zoom Crossover.png",
    IMAGE2: "Nike Air Zoom Crossover(2).png",
  },
]);

export class Product_Service {
  getProducts() {
    return products;
  }

  addNewProduct(new_product) {
    products.value.push(new_product);
  }

  searchProductByID(product_id) {
    var output = products.value.filter((product) =>
      product.ID.toString().includes(product_id)
    );
    return output;
  }

  searchProductByName(product_name) {
    var output = products.value.filter((product) =>
      product.NAME.toLowerCase().includes(product_name)
    );
    return output;
  }

  updateProductByID(product_id, updated_product) {
    let index = products.value.findIndex(
      (product) => product.ID === product_id
    );
    if (index !== -1) {
      products.value.splice(index, 1, updated_product);
    }
  }

  deleteProductByID(product_id) {
    let index =
      products.value.findIndex((product) => product.ID === product_id) + 1;
    if (index !== -1) {
      products.value.splice(index, 1);
    }
  }
}
