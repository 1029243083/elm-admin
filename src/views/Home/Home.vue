<template>
  <Layout>
    <template #header>
      <Header />
    </template>
    <template #sider>
      <Sider />
    </template>
    <template #content>
      <Content />
    </template>
  </Layout>
</template>

<script lang="ts">
  import { defineComponent, onMounted } from 'vue'
  import { getStorage } from '../../util'
  import router from '../../router/index'
  import Layout from '../../components/Layout/Layout.vue'
  import Header from '../../components/Header/Header.vue'
  import Sider from '../../components/Sider/Sider.vue'
  import Content from '../../components/content/content.vue'

  export default defineComponent({
    components: {
      Layout,
      Header,
      Sider,
      Content
    },
    setup() {
      onMounted(() => {
        const user = getStorage('user')
        if (!user) {
          router.push('/login')
          return
        }
      })
      return {}
    }
  })
</script>

<style></style>
