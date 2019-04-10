<template>
<div>{{pageName}}</div>
</template>

<script>
import { getList } from './api'
export default {
  name: 'diary',
  data () {
    return {
      pageName: 'Diary'
    }
  },
  mounted () {
    getList(res => {
      console.log('mounted', res)
    })
  }
}
</script>

<style>
</style>
