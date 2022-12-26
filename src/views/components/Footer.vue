<template>
  <div class="footer">
    <div class="footer__container container_center">
      <div class="footer__logo">
        Game
        <div class="logo-after">
          Fun
        </div>
      </div>
      <div class="footer__content">
        <div v-for="(itemFooter, indexFooter) in footer" :key="indexFooter" class="footer__content-text">
          <div class="text-title">
            {{ itemFooter.title }}
          </div>
          <ul class="text-list">
            <li v-for="(itemList, indexList) in itemFooter.listFooter" :key="indexList" class="list-item">
              {{ itemList.item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__img">
      <img src="../../../public/assets/images/layouts/Background-assets-02@4x.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data () {
    return {
      footer: [
        {
          title: 'Product',
          listFooter: [
            {
              item: 'Rating game'
            },
            {
              item: 'Login'
            },
            {
              item: 'Register'
            }
          ]
        },
        {
          title: 'Service',
          listFooter: [
            {
              item: 'Partners'
            },
            {
              item: 'News'
            },
            {
              item: 'Download'
            }
          ]
        },
        {
          title: 'Copyright 2022',
          listFooter: [
            {
              item: 'Support'
            },
            {
              item: 'Privacy'
            }
          ]
        }
      ]
    }
  }
}
</script>