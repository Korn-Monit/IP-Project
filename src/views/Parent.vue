<template>
    <div class="bg-white">
      <h2>{{ parentMessage }}</h2>
      <ChildComponent :childMessage="parentMessage" />
    </div>
  </template>
  
  <script>
  import ChildComponent from './Child.vue';
  
  export default {
    components: {
      ChildComponent,
    },
    data() {
      return {
        parentMessage: "Hello from the parent component!",
      };
    },
  };
  </script>
  