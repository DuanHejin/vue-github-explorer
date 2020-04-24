<template>
  <div>
    Here is Test.vue
    <button class="btn btn-primary" @click="handleClick">show alert</button>
  </div>
</template>

<script>
export default {
  name: "Test",
  methods: {
    handleClick: function handleClick() {
      alert("you click the button in Test.vue component")
    }
  }
}
</script>

<style scoped>

</style>