<script>
// Options API
export default {
  data(){
    return {
      name: "Hamada",
      status: "pending",
      tasks: ["Task One", "Task Two", "Task Three"],
      link: "https://google.com"
    };
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        thhis.status = 'pending';
      } else if (this.status === 'pending') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
    }
  }
};

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<h1>{{ name }}</h1>
<p v-if="status === 'active'">User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is inactive</p>

<h3>Tasks:</h3>
<ul>
  <li v-for = "task in tasks" :key = "task">{{ task }}</li>
</ul>
<!-- <a v-bind:href="link">Click for Google</a> -->
<a :href="link">Click for Google</a>
<br />
<!-- <button v-on:click="toggleStatus">Change Status</button> -->
<button @click="toggleStatus">Change Status</button>


  <RouterView />
</template>

<style scoped>

</style>



<!-- Code Next Page -->
<!-- <script>
export default {
  // Composition API
  setup() { // Setup Function
    const name = "Hamada";
    const status = "active";
    const tasks = ["Task One", "Task Two", "Task Three"];
  }
};

import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

<h1>{{ name }}</h1>
<p v-if="status === 'active'">User is active</p>
<p v-else-if="status === 'pending'">User is pending</p>
<p v-else>User is inactive</p>

<h3>Tasks:</h3>
<ul>
  <li v-for = "task in tasks" :key = "task">{{ task }}</li>
</ul>
<br />
 <button v-on:click="toggleStatus">Change Status</button> 
<button @click="toggleStatus">Change Status</button>


  <RouterView />
</template>

<style scoped>

</style> -->