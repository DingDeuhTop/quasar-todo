<template>
  <div class="container q-mt-md">
    <h3 class="text-center">Login To Pawimawh</h3>
    <q-card class="my-card">
      <q-card-section>
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
          narrow-indicator>
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>


        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <AuthComponent :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
            <AuthComponent :tab="tab" />
          </q-tab-panel>
        </q-tab-panels>
      </q-card-section>
    </q-card>

  </div>
</template>
<script >
import AuthComponent from "components/AuthComponent";
export default {
  components: { AuthComponent },
  data() {
    return {
      tab: 'login'
    }
  }
}
</script>
<style>
body {
  font-family: 'Anton', sans-serif;
}
</style>
