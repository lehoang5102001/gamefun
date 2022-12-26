<template>
  <div class="flip overflow">
    <div class="container_center">
      <Header />
      <div class="flip__header">
        <div class="flip__header-content">
          <div class="content__text">
            Christmas's Flip
          </div>
          <p class="content__paragraph">
            Use Mouse to play Christmas's Flip
          </p>
        </div>
      </div>
      <div class="flip__content">
        <div class="flip__content-broad content">
          <ul v-if="broadList" class="broad__list">
            <li
              v-for="(itemFlip, indexFlip) in flipList"
              :key="indexFlip"
              class="broad__list-item"
              :class="{flipImage: activeBeforeFlipItem === itemFlip.name || activeAfterFlipItem === itemFlip.name, hide: itemFlip.status}"
              @click="clickItemFlip(itemFlip)"
            >
              <div class="item-front">
                <img src="../../../public/assets/images/layouts/flip.png" alt="ảnh">
              </div>
              <div class="item-back">
                <img :src="`assets/images/layouts/FlipImage${itemFlip.number}.png`" alt="">
              </div>
            </li>
          </ul>
          <div v-if="playAgain" class="play-again" @click="clickPlayAgain()">
            <i class="fa-solid fa-rotate-right" />
            Play Again
          </div>
          <div v-if="broadImg" class="broad__img">
            <img src="../../../public/assets/images/layouts/broadFlip.jpg" alt="image">
          </div>
          <div class="broad__scores">
            <div class="broad__scores-text">
              Score:
            </div>
            <div class="broad__score-number">
              {{ score }}
            </div>
            <div class="broad__score-img">
              <img src="../../../public/assets/images/layouts/astronaut.png" alt="">
            </div>
            <div class="broad__score-countdown">
              <div class="countdown__timer">
                <span id="minute">{{ minutes }}</span>
                <span id="colon">:</span>
                <span id="seconds">{{ seconds }}</span>
              </div>
              <button v-if="!timer" id="start" class="countdown__button" @click="startTimer">
                <i class="far fa-play-circle" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Flip',
  components: {
    Header,
    Footer
  },
  data () {
    return {
      activeAfterFlipItem: '',
      activeBeforeFlipItem: '',
      score: 0,
      timer: null,
      broadList: true,
      broadImg: false,
      playAgain: false,
      totalTime: (0.75 * 60),
      arr: [],
      successArr: [],
      numberArr: [],
      flipList: [
        {
          id: 1,
          name: 'card1',
          number: 1,
          image: 'FlipImage1',
          status: false
        },
        {
          id: 2,
          name: 'card2',
          number: 1,
          status: false
        },
        {
          id: 3,
          name: 'card3',
          number: 1,
          status: false
        },
        {
          id: 4,
          name: 'card4',
          number: 1,
          status: false
        },
        {
          id: 5,
          name: 'card5',
          number: 1,
          status: false
        },
        {
          id: 6,
          name: 'card6',
          number: 1,
          status: false
        },
        {
          id: 7,
          name: 'card7',
          number: 1,
          status: false
        },
        {
          id: 8,
          name: 'card8',
          number: 1,
          status: false
        },
        {
          id: 9,
          name: 'card9',
          number: 1,
          status: false
        },
        {
          id: 10,
          name: 'card10',
          number: 1,
          status: false
        },
        {
          id: 11,
          name: 'card11',
          number: 1,
          status: false
        },
        {
          id: 12,
          name: 'card12',
          number: 1,
          status: false
        },
        {
          id: 13,
          name: 'card13',
          number: 1,
          status: false
        },
        {
          id: 14,
          name: 'card14',
          number: 1,
          status: false
        },
        {
          id: 15,
          name: 'card15',
          number: 1,
          status: false
        },
        {
          id: 16,
          name: 'card16',
          number: 1,
          status: false
        },
        {
          id: 17,
          name: 'card17',
          number: 1,
          status: false
        },
        {
          id: 18,
          name: 'card18',
          number: 1,
          status: false
        },
        {
          id: 19,
          name: 'card19',
          number: 1,
          status: false
        },
        {
          id: 20,
          name: 'card20',
          number: 1,
          status: false
        },
        {
          id: 21,
          name: 'card21',
          number: 11,
          status: false
        },
        {
          id: 22,
          name: 'card22',
          number: 1,
          status: false
        },
        {
          id: 23,
          name: 'card23',
          number: 1,
          status: false
        },
        {
          id: 24,
          name: 'card24',
          number: 1,
          status: false
        },
      ],
    }
  },
  computed: {
    minutes () {
      return this.padTime(Math.floor(this.totalTime / 60));
    },
    seconds () {
      return this.padTime(this.totalTime - (this.minutes * 60));
    }
  },
  created (){
    this.numberArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
    this.numberArr = this.numberArr.sort(() => Math.random() - 0.5)
    for (let i = 0; i < this.flipList.length; i++) {
      this.flipList[i].number = this.numberArr[i]
    }
    console.log(this.numberArr);
  },
  mounted () {
  },
  methods: {
    clickItemFlip (itemFlip) {
      if (this.arr.length === 2) {
        this.arr.splice(0,3)
        this.activeAfterFlipItem = ''
      }
      this.arr.push(itemFlip)
      this.activeBeforeFlipItem = this.arr[0].name
      this.activeAfterFlipItem = this.arr[1].name
      if (this.arr[0].id === this.arr[1].id){
        this.arr.splice(0,1)
      }
      if (this.arr[0].number === this.arr[1].number) {
        this.successArr.push(this.arr[0], this.arr[1])
        for(let i = 0; i < this.successArr.length; i++) {
          this.successArr[i].status = true
        }
        this.score = this.successArr.length * 50
      }
    },
    clickPlayAgain () {
      this.numberArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12]
      this.numberArr = this.numberArr.sort(() => Math.random() - 0.5)
      for (let i = 0; i < this.flipList.length; i++) {
      this.flipList[i].number = this.numberArr[i]
      }
      for(let i = 0; i < this.successArr.length; i++) {
          this.successArr[i].status = false
        }
        this.activeBeforeFlipItem = ''
        this.activeAfterFlipItem = ''
        this.playAgain = false
        this.broadImg = false
        this.broadList = true
        this.totalTime = (0.75 * 60)
        this.successArr = []
    },
    startTimer () {
        this.timer = setInterval(() => this.countdown(), 1000);
        this.resetButton = true;
    },
    padTime (time) {
        return time;
    },
    countdown () {
        if(this.minutes === 0 && this.seconds === 0) {
          if (this.successArr.length < 24) {
            this.broadList = false
            this.playAgain = true
          }
          else {
            this.broadImg = true
            this.playAgain = true
            this.broadList = false
          }
          return
        }
        else {
          this.totalTime--;
        }
    }
  }
}
</script>
