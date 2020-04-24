<template>
  <form @submit.prevent="handleSubmit" class="form form-horizontal">
    <div class="form-group">
      <label for class="control-label col-md-3">repo:</label>
      <div class="col-md-6">
        <input type="text" class="form-control" v-model="repo" placeholder="username/repository" />
      </div>
      <button type="submit" class="btn btn-info col-md-1">Search</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      repo: ""
    };
  },
  methods: {
    handleSubmit: function() {
      this.$emit("onClickSearch", { repo: this.repo });
    }
  }
};
</script>

<style lang="">
</style>
