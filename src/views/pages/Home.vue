<template>
  <div class="home overflow">
    <div class="container_center">
      <Header />
      <div class="home__content">
        <section class="home__content-banner">
          <div class="banner__text">
            <div class="banner__text-sub-title text">
              Welcome to
            </div>
            <div class="banner__text-title">
              Game
              <div class="title-after">
                Fun
              </div>
            </div>
            <p class="banner__text-paragraph">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type
              specimen book.
            </p>
            <router-link to="/flip" tag="button" class="banner__text-button button">
              Let's play
            </router-link>
          </div>
          <div class="banner__img">
            <img class="banner__img-astronaut" src="assets/images/layouts/astronaut.png" alt="ảnh">
            <div class="banner__img-planet">
              <img class="planet1" src="assets/images/layouts/Hành tinh 1@4x.png" alt="planet">
              <img class="planet1" src="assets/images/layouts/Hành tinh 2@4x.png" alt="planet">
              <img class="planet1" src="assets/images/layouts/Hành tinh 3@4x.png" alt="planet">
            </div>
            <div class="banner__img-star">
              <img src="assets/images/layouts/Sao@4x.png" alt="star">
            </div>
          </div>
        </section>
        <section class="home__content-product content">
          <div class="product__header">
            <div class="product__header-title text">
              New games
            </div>
            <p class="product__header-paragraph">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </p>
          </div>
          <div class="product__content content">
            <swiper class="home2__slider" :options="swiperOption">
              <swiper-slide v-for="(itemSlide, indexSlide) in slideGame" :key="indexSlide" class="slide">
                <div class="slide__img">
                  <img :src="`assets/images/layouts/${itemSlide.imgGame}.png`" alt="Game">
                </div>
                <div class="slide__name">
                  {{ itemSlide.nameGame }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="product__broad">
            <div class="product__broad-content">
              <div class="content__img">
                <img src="../../../public/assets/images/layouts/Mask Group 6.png" alt="game">
              </div>
              <div class="content__text">
                <div class="content__text-title">
                  Christmas's Flip
                </div>
                <p class="content__text-paragraph">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the dummy
                  text ever since the 1500s, when an unknown printer
                  took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
                <button class="content__text-button button">
                  Let's play
                </button>
              </div>
            </div>
          </div>
        </section>
        <section class="home__content-information content">
          <div class="information__header">
            <div class="information__header-title text">
              News
            </div>
            <p class="information__header-paragraph">
              Lorem Ipsum is simply dummy text of the printing
              and typesetting industry.
            </p>
          </div>
          <div class="information__broad">
            <div v-for="(itemInformation, indexInformation) in information" :key="indexInformation" class="information__broad-content">
              <div class="content-img">
                <img src="../../../public/assets/images/layouts/Group 11.png" alt="image">
              </div>
              <div class="content-text">
                <div class="text-information">
                  <div class="content-text__title">
                    {{ itemInformation.title }}
                  </div>
                  <p class="content-text__paragraph">
                    {{ itemInformation.paragraph }}
                  </p>
                  <div class="content-text__button button">
                    More details
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="home__content-embark">
          <div class="embark__title">
            <div class="embark__title-text text">
              Join Our Community
            </div>
            <p class="embark__title-paragraph">
              Be part of our amazing community and stay
              tuned for the news.
            </p>
            <div class="embark__title-input">
              <input type="text" placeholder="Enter your email">
              <button class="embark__title-button button">
                Join us
              </button>
            </div>
          </div>
          <div class="embark__img">
            <img src="../../../public/assets/images/layouts/Background-assets-06@4x.png" alt="embark">
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  name: 'Home',
    components: {
      Swiper,
      SwiperSlide,
      Header,
      Footer
    },
  data (){
    return {
      slideGame: [
        {
          id: 'GA1',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip"
        },
        {
          id: 'GA2',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip 2"
        },
        {
          id: 'GA3',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip 3"
        },
        {
          id: 'GA4',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip 4"
        },
        {
          id: 'GA5',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip 5"
        },
        {
          id: 'GA6',
          imgGame: 'ImageName',
          nameGame: "Christmas's Flip 6"
        },
      ],
      information: [
        {
          title: 'Game Trending',
          paragraph: 'Lorem Ipsum is simply dummy text of the print ting and type setting industry.'
        },
        {
          title: 'Game Trending',
          paragraph: 'Lorem Ipsum is simply dummy text of the print ting and type setting industry.'
        },
        {
          title: 'Game Trending',
          paragraph: 'Lorem Ipsum is simply dummy text of the print ting and type setting industry.'
        },
      ],
      swiperOption: {
          loop: true,
          slidesPerView: 5,
          spaceBetween: 0,
          breakpoints: {
            320: {
              slidesPerView: 2,
            },
            374: {
              slidesPerView: 2,
            },
            479: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3
            },
            768: {
              slidesPerView: 4,
            },
            992: {
              slidesPerView: 5,
            }
          },
          pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        },
    }
  },
}
</script>