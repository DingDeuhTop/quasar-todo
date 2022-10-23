<template>
  <div class="container">
    <q-form @submit.prevent="addTodo()" class="q-gutter-md q-pt-md q-px-sm">
      <div class="row">
        <q-input class="col-10" outlined dense v-model="newTodo" type="text" placeholder="Pawimawh Ziahna" />
        <q-btn class="col-2" label="add" type="submit" dense flat />
      </div>
    </q-form>
    <h3 class="text-center q-mt-lg" style="text-decoration: underline;">Pawi Mawh</h3>
    <q-card class="my-card  q-ma-sm" v-for="(todo, index) in todos" :key="index">
      <q-card-section class="row">
        <span class="col-8" :class="{done: todo.done}" @click="doneTodo(todo)">{{todo.content}}</span>
        <q-btn class="col-2" color="blue" dense flat icon="mdi-pen" @click="editTodo(todo, index)" />
        <q-btn class=" col-2" color="negative" dense flat icon="mdi-delete" @click="removeTodo(index)" />
      </q-card-section>
    </q-card>
    <q-dialog v-model="show_dialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-input v-model="editItem.content" type="text" label="Pawimawh" />
          <q-toggle v-model="editItem.done" color="green" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="update" color="primary" @click="updateTodo" v-close-popup />
          <q-btn flat label="Cancel" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <h4 v-if="todos.length === 0">Empty list</h4>
  </div>
</template>

<script setup>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';

const newTodo = ref('');
const defaultData = []
const xxx = localStorage.getItem('todos')
// console.log(xxx)
const todosData = JSON.parse(xxx) || defaultData;
// console.log(todosData)
const todos = ref(todosData);
const editItem = ref(''); //input v-model
const show_dialog = ref(false) //dialog v-model
const currentIndex = ref(null)

//test api call
onMounted(async () => {
  const res = await api.get('title')
  console.log(res);
})

function addTodo() {
  if (newTodo.value) {
    todos.value.push({
      done: false,
      content: newTodo.value,
    });
    console.log(todos)
    newTodo.value = '';
  }
  saveData();
}

function editTodo(data, index) {
  // console.log(data)
  currentIndex.value = index
  // editItem.value = data.content
  editItem.value = { ...data }
  show_dialog.value = true;

}

function updateTodo() {
  // todos.value[currentIndex.value].content = editItem.value
  todos.value[currentIndex.value] = editItem.value //edit todo a current index item callna
  saveData()
}

function doneTodo(todo) {
  todo.done = !todo.done
  saveData()
}
function removeTodo(index) {
  confirm("Are you sure you want to delete this item?") &&
    todos.value.splice(index, 1);
  saveData();
}

function saveData() {
  // alert(JSON.stringify(todos.value))
  // localStorage.setItem('todos', todos.value)
  // return
  const storageData = JSON.stringify(todos.value);
  localStorage.setItem('todos', storageData)
}
</script>

<style>
body {
  font-family: 'Anton', sans-serif;
}
</style>
