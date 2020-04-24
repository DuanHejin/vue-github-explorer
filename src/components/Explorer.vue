<template>
  <div>
    <div v-if="!!fullPath">
      <div class="title">
        <span><b>fullPath is: {{fullPath}}</b></span>
        <button class="btn btn-default" @click="goBack" :disabled="!relativePath">Back</button>
      </div>
      <div class="table-responsive" v-if="sortedFiles && sortedFiles.length > 0">
        <table class="table table-bordered table-hover">
          <thead>
            <tr class="info">
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="file in sortedFiles" :key="file.name">
              <td>
                <div v-if="file.type == 'dir'">
                  <a class="cursor-pointer" @click="onClickDirName(file.path)">{{file.name}}</a>
                </div>
                <div v-else>
                  {{file.name}}
                </div>
              </td>
              <td>{{file.type}}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div v-else>No repository found!</div>
    </div>

    <div v-else>Please input the repository path to search.</div>
  </div>
</template>

<script>
import { getContents } from '../services/githubUtils';

export default {
  name: 'Explorer',
  data() {
    return {
      files: [],
      fullPath: '',
      relativePath: ''
    }
  },
  props: {
    repo: {
      type: String,
      required: true
    }
  },
  methods: {
    goBack: function() {
      this.relativePath = this.relativePath.split('/').slice(0, -1).join('/')
      this.fullPath = `${this.repo}/${this.relativePath}`;
      this.getFileList(this.relativePath);
    },
    onClickDirName: function (path) {
      this.fullPath = `${this.repo}/${path}`;
      this.getFileList(path)
    },
    getFileList: function (path = '') {
      this.relativePath = path;
      const vm = this;
      getContents(this.repo, path).then(function({data}) {
        vm.files = data;
      });
    },
  },
  computed: {
    sortedFiles: function() {
      return this.files.slice(0).sort((a, b) => {
        if (a.type !== b.type) {
          return a.type === 'dir' ? -1 : 1;
        } else {
          return a.name < b.name ? -1 : 1;
        }
      });
    },
  },
  watch: {
    repo: function() {
      this.fullPath = this.repo;
      this.getFileList();
    }
  },
}
</script>

<style >
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;;
  }
</style>