<template>
  <div id="app">
    <div v-if="productItems && productItems.length">
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Action</th>
        </tr>
        <tr v-for="(product, i) in productItems" :key="i">
          <td>
            <input type="text" placeholder="Name" v-model="product.name" />
          </td>
          <td>
            <input type="number" placeholder="Quantity" v-model.number="product.quantity"
              @change="updateProductItem(product)" />
          </td>
          <td>
            <input type="number" placeholder="Price" v-model.number="product.price"
              @change="updateProductItem(product)" />
          </td>
          <td>${{ product.amount }}</td>
          <td @click="removeProductAt(i)" class="np-remove-btn">Remove</td>
        </tr>
      </table>
      <div class="np-items-total">
        Total amount: <strong>${{ totalItemsAmount }}</strong>
      </div>
    </div>

    <div class="np-new-item-desc">
      <div class="np-new-item-head"><strong>Add new product</strong></div>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Amount</th>
        </tr>
        <tr>
          <td>
            <input type="text" placeholder="Product name" v-model="itemName" />
          </td>
          <td>
            <input type="number" placeholder="Quantity" v-model.number="itemQuantity" />
          </td>
          <td>
            <input type="number" placeholder="Price" v-model.number="itemPrice" />
          </td>
          <td>${{ itemQuantity * itemPrice }}</td>
        </tr>
      </table>
      <div @click="addNewProduct()" class="np-add-item-btn">Add</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      itemName: null,
      itemQuantity: 0,
      itemPrice: 0,
      itemAmount: 0,
      productItems: [],
      totalItemsAmount: 0,
    };
  },
  methods: {
    addNewProduct() {
      this.itemName &&
        this.itemQuantity &&
        this.itemPrice &&
        this.productItems.push({
          name: this.itemName,
          quantity: this.itemQuantity,
          price: this.itemPrice,
          amount:
            parseFloat(Number(this.itemQuantity)) *
            parseFloat(Number(this.itemPrice)),
        });
      this.itemName = null;
      this.itemQuantity = this.itemPrice = 0;
      this.updateTotalAmount();
    },
    updateProductItem(product) {
      product.amount = product.quantity * product.price;
      this.updateTotalAmount();
    },
    updateTotalAmount() {
      this.totalItemsAmount = 0;
      this.productItems.forEach((item) => {
        this.totalItemsAmount += item.amount;
      });
    },
    removeProductAt(productIndex) {
      this.productItems = this.productItems.filter((p, i) => {
        return i !== productIndex;
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input {
  border: 1px solid #a389ad;
  font-size: 14px;
  padding: 4px 8px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
}

input:hover {
  border: 1px solid #a389ad;
  font-size: 14px;
  padding: 4px 8px;
  outline: none;
  border-radius: 4px;
  transition: all 0.3s;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #a389ad;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #e6d7ec;
}

.np-new-item-desc {
  margin-top: 20px;
  padding: 4px;
  border: 1px solid #e6d7ec;
  max-width: 720px;
}

.np-new-item-head {
  padding: 8px 0px 12px 0px;
}

.np-add-item-btn {
  width: 80px;
  background: #7a3097;
  text-align: center;
  color: #ffffff;
  padding: 4px;
  font-size: 14px;
  border-radius: 4px;
  margin: 12px 0px 8px 0px;
  cursor: pointer;
}

.np-items-total {
  margin-top: 12px;
  font-weight: 600;
}

.np-remove-btn {
  cursor: pointer;
  color: #6b0f0f;
}

.np-credits {
  font-size: 12px;
  margin-top: 12px;
}
</style>
