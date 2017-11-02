<template>
  <div class="Search">
    <div class="m-hmsrch">
      <form action="" class="m-input">
      <div class="inputcover">
        <i class="closei a"></i>
        <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="newsearch" v-on:keyup.enter="addNew()">
        <i class="closei b" v-on:click="reutnF"  v-bind:class="classObject"></i>
      </div>
      </form>
    </div>
<!-- {{newsearch}} v-if="newsearch != 音乐"-->
    <div class="m-default"  v-bind:class="classNone">
        <section class="default-title">
          <h3>热门搜索</h3>
          <ul class="list">
            <li class="item" v-for="hot in hots">
              <a href="#">{{hot.first}}</a>
            </li>
          </ul>
        </section>

        <section class="default-content">
          <ul class="list" v-if="searchall !== null">
            <li class="item" v-for="(s,index) in searchall" v-show="s.isfinished">
              <i class="histy"></i>
              <span>{{s.content}}</span>
              <i class="close" v-on:click="removeTodo(index)"></i>
            </li>
          </ul>
          <ul v-else></ul>
        </section>
    </div>
    
 <!-- v-else-if="newsearch == 音乐" -->
    <div class="hotcont" v-bind:class="classObject">
      <div class="hotcont_ul">
        <a href="#" class="hotcont_liA" v-for="track in tracks">
          <div class="remdli">
            <div class="remd_left">
              <div class="name">
              <p> {{track.name}} <!-- <span>电影《一代倾城逐浪花》主题曲</span> --></p>
            </div>
            <div class="desc">
              <i class="desc_bg" v-show="track.sq"></i>
              <span>{{track.desc}}</span>
            </div>
          </div>

          </div>
          <div class="remd_right">
            <span class="right_bg"></span>
          </div>
        </a>


      </div>
    </div>
    <!-- <div v-else></div> -->
  </div>
</template>

<script>
import datas from '../assets/data/api-3.json'
import searchdata from '../assets/data/api-4.json'
// console.log(Store)
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome search',
      searchall: [],
      newsearch: '',
      classObject: 'display',
      classNone: ''
      // ccCc: 'display'
    }
  },
  created () {
    this.hots = datas.result.hots
    this.tracks = searchdata.result.tracks
    this.key = searchdata.result.key
  },
  methods: {
    removeTodo: function (index) {
      this.searchall.splice(index, 1)
    },
    reutnF: function () {
      this.classObject = 'display'
      this.classNone = ''
    },
    addNew: function () {
      // console.log(this.newsearch)
      if (this.newsearch !== null) {
        this.classObject = ''
        this.classNone = 'display'
      }
      this.searchall.push({
        content: this.newsearch,
        isfinished: true
      })
      this.newsearch = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .m-hmsrch{
    height: 100%;
    width: 100%;
  }
  .m-input{
    padding: 15px 10px;
    border-bottom: 1px solid rgba(0,0,0,.1);
  }
  .display{
    display: none;
  }
  .inputcover{
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
  }
  .closei{
    position: absolute;
    
    margin: 0 8px;
    vertical-align: middle;
    width: 13px;
    height: 13px;
  }
  .a{
    left: 0;
    top: 9px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
  }
  .b{
    right: 0;
    top: 9px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyOCAyOCI+PGcgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjYmNiZGJkIiBkPSJNMTQsMGM3LjczMiwwLDE0LDYuMjY4LDE0LDE0YzAsNy43MzItNi4yNjgsMTQtMTQsMTQKCVMwLDIxLjczMiwwLDE0QzAsNi4yNjgsNi4yNjgsMCwxNCwweiIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ViZWNlYiIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCI+PHBhdGggZD0ibTE5IDlsLTEwIDEwIi8+PHBhdGggZD0ibTkgOWwxMCAxMCIvPjwvZz48L2c+PC9zdmc+);

    
  }

  .inputcover input{
    height: 30px;
    width: 100%;
    font-size: 14px;
    line-height: 18px;
    background: transparent;
    outline: none;
    border:none;
    position: absolute;
    left: 30px;
  }

  .default-title{
    padding: 15px 10px 0;
  }
  .default-title h3{
    font-size: 12px;
    line-height: 12px;
    color: #666;
  }
  .default-title .list{
    margin: 10px 0 7px;
    display: flex;
    flex-wrap: wrap;
  }
  .default-title .list .item a{
    display: inline-block;
    height: 32px;
    margin-right: 8px;
    margin-bottom: 8px;
    padding: 0 14px;
    font-size: 14px;
    line-height: 32px;
    color: #333;
    border:1px solid #d3d4da;
    border-radius: 32px;
  }

  .default-content .item{
    display: flex;
    align-items: center;
        -webkit-box-align: center;
    height: 45px;
    font-size: 14px;
    /*line-height: 45px;*/
  }
  .default-content .item span{
    flex: 1;
    width: 1%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: normal;
    
  }
  .default-content .item i{
    margin: 0 10px;
    display: inline-block;
    vertical-align: middle;
    background-position: 0 0;
    background-size: contain;
    background-repeat: no-repeat;

  }
  .default-content .histy{
    width: 15px;
    height: 15px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljYWNhIiBkPSJtMTUgMzBjLTguMjg0IDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUgMTUtMTUgMTUgNi43MTYgMTUgMTUtNi43MTYgMTUtMTUgMTVtMC0yOGMtNy4xOCAwLTEzIDUuODItMTMgMTNzNS44MiAxMyAxMyAxMyAxMy01LjgyIDEzLTEzLTUuODItMTMtMTMtMTNtNyAxNmgtOGMtLjU1MiAwLTEtLjQ0Ny0xLTF2LTEwYzAtLjU1My40NDgtMSAxLTFzMSAuNDQ3IDEgMXY5aDdjLjU1MyAwIDEgLjQ0NyAxIDFzLS40NDcgMS0xIDEiLz48L3N2Zz4=);
  }
  
  .close{
    float: right;
    line-height: 32px;
    width: 12px;
    height: 12px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);
  }


.hotcont_liA{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 55px;
  padding: 5px 0 5px 10px ;
  border-bottom:1px solid rgba(0,0,0,.1);
  color: #333;

}

.name{
  font-size: 17px;
}
.name span,.desc span{
  color:#888;
}
.desc span{
  font-size: 12px;
  text-indent: 25px;
  padding-top: 3px;
}
.name p,.remd_li,.desc span{
  width: 250px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.remdli{
  width: 78%;
  height: 22px;
  display: flex;
  justify-content: space-between;
}
.remd_right{
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0 10px;  
}

.right_bg{
  display: inline-block;
  width: 22px;
  height: 22px; 
  background: url(../assets/bg.png) no-repeat;
  background-position: -24px 0;
  background-size: 166px 97px;
}

.desc_bg{
  position: absolute;
  display: inline-block;
  width: 22px;
  height: 22px;
  background-position: -24px 0;
  background: url(../assets/bg.png) no-repeat;
  background-size: 166px 97px;
  background-position: 5px 7px;
}
</style>
