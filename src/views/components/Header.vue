<template>
  <div class="header">
    <div class="header__logo">
      Game
      <div class="text-after">
        Fun
      </div>
    </div>
    <div class="header__navbar">
      <ul class="header__navbar-list">
        <router-link
          v-for=" (itemNavbar, indexNavbar) in listNavbar"
          :key="indexNavbar"
          tag="li"
          :to="itemNavbar.page"
          class="list-item"
          :class="{active: activeItemNavbar === itemNavbar.key}"
          @click="clickItemNavbar(itemNavbar)"
        >
          {{ itemNavbar.title }}
        </router-link>
      </ul>
    </div>
    <div class="header__navbar-mobile">
      <i class="fa-solid fa-bars" @click="clickMenuMobile" />
      <ul class="navbar-mobile__list" :class="{menuMobile: activeItemNavbarMobile}">
        <li
          v-for="(itemNavbar, indexNavbar) in listNavbar"
          :key="indexNavbar"
          class="navbar-mobile__list-item"
          :class="{active: activeItemNavbar === itemNavbar.key }"
          @click="clickItemNavbar(itemNavbar)"
        >
          {{ itemNavbar.title }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data (){
    return {
      activeItemNavbar: '',
      activeItemNavbarMobile: false,
      listNavbar: [
        {
          id: 'LSN1',
          key: 'home',
          title: 'Home',
          page: '/'
        },
        {
          id: 'LSN2',
          key: 'games',
          title: 'Games',
          page: '/flip'
        },
        {
          id: 'LSN3',
          key: 'news',
          title: 'News',
          page: '/news'
        },
        {
          id: 'LSN4',
          key: 'about',
          title: 'About',
          page: '/about'
        },
      ],
    }
  },
  methods: {
    clickItemNavbar (itemNavbar) {
      this.activeItemNavbar = itemNavbar.key
    },
    clickMenuMobile () {
      this.activeItemNavbarMobile = !this.activeItemNavbarMobile
    }
  }
}
</script>