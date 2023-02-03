<template>
  <div>用户列表</div>
</template>

<script lang='ts'>
import { reactive, toRefs, onMounted } from 'vue'
export default {
  name: '',
  setup() {
    const data = reactive({})
    onMounted(() => {

    })
    return {
      ...toRefs(data),
    }
  },
}

</script>
<style scoped lang='scss'>
</style>