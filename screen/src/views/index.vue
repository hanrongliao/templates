<template>
  <div class="index">
    <v-chart class="echarts-resize" :options="options" autoresize></v-chart>
  </div>
</template>

<script>
import { getList } from '@/api/list';

export default {
  name: 'index',
  data() {
    return {
      options: {},
    };
  },
  created() {
    getList()
      .then((res) => {
        console.log(res);
      });
  },
};
</script>

<style type="text/scss" lang="scss">
.index {
  height: vh(600);
  width: vw(1000);
}
</style>
