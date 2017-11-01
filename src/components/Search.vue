<template>
  <div class="Search">
    <div class="m-hmsrch">
      <form action="" class="m-input">
      <div class="inputcover">
        <i></i>
        <input type="text" placeholder="搜索歌曲、歌手、专辑">
      </div>
      </form>
    </div>
    <div class="m-default">
        <section class="default-title">
          <h3>热门搜索</h3>
          <ul class="list">
            <li class="item" v-for="hot in hots">
              <a href="#">{{hot.first}}</a>
            </li>
           <!--  <li class="item">
              <a href="#">石计划</a>
            </li>
            <li class="item">
              <a href="#">石头计dsfsdfsdsdf划</a>
            </li>
            <li class="item">
              <a href="#">dddddddddd</a>
            </li>
            <li class="item">
              <a href="#">asdgdfsdg</a>
            </li>
            <li class="item">
              <a href="#">asdgddfg</a>
            </li> -->
          </ul>
        </section>

       <!--  <section class="default-content">
          <ul class="list">
            <li class="item">
              <i class="histy"></i>
              <span>Taylor Swift</span>
              <i class="close"></i>
            </li>
            <li class="item">
              <i class="histy"></i>
              <span>Taylor Swift</span>
              <i class="close"></i>
            </li>
            <li class="item">
              <i class="histy"></i>
              <span>Taylor Swift</span>
              <i class="close"></i>
            </li>
            <li class="item">
              <i class="histy"></i>
              <span>Taylor Swift</span>
              <i class="close"></i>
            </li>
            <li class="item">
              <i class="histy"></i>
              <span>Taylor Swift</span>
              <i class="close"></i>
            </li>
          </ul>
        </section> -->
    </div>
  </div>
</template>

<script>
import datas from '../assets/data/api-3.json'
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Welcome search'
    }
  },
  created () {
    this.hots = datas.result.hots
    // this.date = datas.result.playlist.date
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
  .inputcover{
    position: relative;
    width: 100%;
    height: 30px;
    padding: 0 30px;
    box-sizing: border-box;
    background: #ebecec;
    border-radius: 30px;
  }
  .inputcover i{
    position: absolute;
    left: 0;
    top: 9px;
    margin: 0 8px;
    vertical-align: middle;
    width: 13px;
    height: 13px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxLDIzLjUzNWwtMS40MTQsMS40MTRsLTcuMzE1LTcuMzE0CgkJQzE0LjcwOSwxOS4xMDcsMTIuNDYsMjAsMTAsMjBDNC40NzcsMjAsMCwxNS41MjMsMCwxMEMwLDQuNDc3LDQuNDc3LDAsMTAsMGM1LjUyMywwLDEwLDQuNDc3LDEwLDEwYzAsMi4zNDItMC44MTEsNC40OS0yLjE2LDYuMTk1CgkJTDI1LjE4MSwyMy41MzV6IE0xMCwyYy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4YzQuNDE4LDAsOC0zLjU4Miw4LThTMTQuNDE4LDIsMTAsMnoiLz48L3N2Zz4=);
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
   .default-content .close{
    float: right;
    line-height: 32px;
    width: 12px;
    height: 12px;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjOTk5ODk5IiBkPSJtMTMuMzc5IDEybDEwLjMzOCAxMC4zMzdjLjM4MS4zODEuMzgxLjk5OCAwIDEuMzc5cy0uOTk4LjM4MS0xLjM3OCAwbC0xMC4zMzgtMTAuMzM4LTEwLjMzOCAxMC4zMzhjLS4zOC4zODEtLjk5Ny4zODEtMS4zNzggMHMtLjM4MS0uOTk4IDAtMS4zNzlsMTAuMzM4LTEwLjMzNy0xMC4zMzgtMTAuMzM4Yy0uMzgxLS4zOC0uMzgxLS45OTcgMC0xLjM3OHMuOTk4LS4zODEgMS4zNzggMGwxMC4zMzggMTAuMzM4IDEwLjMzOC0xMC4zMzhjLjM4LS4zODEuOTk3LS4zODEgMS4zNzggMHMuMzgxLjk5OCAwIDEuMzc4bC0xMC4zMzggMTAuMzM4Ii8+PC9zdmc+);
  }
</style>
