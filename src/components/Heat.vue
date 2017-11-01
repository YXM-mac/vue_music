<template>

  <div class="Heat">
    <div class="tabctitem">
    	<div class="hotop">
			<div class="hotopct">
				<div class="heat_bg"></div>
				<div class="hottime">
				<p>更新日期：{{date}}</p></div>
			</div>
    	</div>	
    </div>
	<div class="hotcont">
		<div class="hotcont_ul">
			<a href="#" class="hotcont_liA" v-for="track in tracks">
			<!-- {{track}} -->
				<span class="number">
					01
				</span>
				<div class="remdli">
					<div class="remd_left">
						<div class="name">
						<p> {{track.name}} <!-- <span>电影《一代倾城逐浪花》主题曲</span> --></p>
					</div>
					<div class="desc">
						<i class="desc_bg"></i>

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
	<div class="hotfooter">
		<span class="hotview">查看完整榜单 ></span>
	</div>
  </div>


</template>

<script>

import datas from '../assets/data/api-2.json'
export default {
  name: 'Heat',
  data () {
    return {
      msg: 'Welcome Heat'
    }
  },
  created () {
    this.tracks = datas.result.playlist.tracks
    this.date = datas.result.playlist.date
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tabctitem{
	width: 100%;
	height: 100%;
}
.hotop{
	width: 100%;
	height: 125px;
	background: url(../assets/hotopbg.jpg) no-repeat;
	background-size: 100%;
}
.hotopct{
	width: 100%;
	height: 100%;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: rgba(0,0,0,.2);
}
.heat_bg{
	width: 142px;
	height: 67px;
	background: url(//s3.music.126.net/m/s/img/index_icon_2x.png?5207a28…) no-repeat;
	background-position: -24px -30px;
	background-size: 166px 97px;
}
.hottime{
	margin-top: 10px;
	color: hsla(0,0%,100%,.8);
	font-size: 12px;
}

.number{
	align-items: center;
	display: flex;
	-webkit-box-align: center;
	align-items: center;
	width: 28px;
	font-size: 17px;
}

.hotcont_liA{
  display: flex;
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
.hotfooter{
	height: 55px;
    line-height: 55px;
    text-align: center;
    font-size: 14px;
	color: #999;
}
</style>