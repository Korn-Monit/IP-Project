<template>
    <div>
        <div class="bg-white">
            <p>{{ childMessage }}</p>
        </div>
      
    </div>
  </template>
  
  <script>
  export default {
    props: {
      childMessage: {
        type: String,
        required: true,
      },
    },
  };
  </script>

  <style>
</style>
  