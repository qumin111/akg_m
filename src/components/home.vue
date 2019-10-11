<template>
  <div class="home" ref="home">
    <div class="nav " :class="{ show_nav : isActive}">
      <div class="clear nav_top " :class="{ nav_black : nav_black }">
        <div class="nav_logo left" @click="toTop(150)"></div>
        <div class="nav_link right " @click="muen" >
          <span class="nav_icon"></span>
        </div>
      </div>
      <transition name="slide-fade">
        <ul class="nav_ul font_15" v-if="isActive">
          <li class="clear fff" @click="scrollIntoView('one')"><span class="nav_li_t left">{{$t('nav_server')}}</span><span class="right nav_li_row"></span></li>
          <li class="clear" @click="scrollIntoView('two')"><span class="nav_li_t left">{{$t('nav_team')}}</span><span class="right nav_li_row"></span></li>
          <li class="clear" @click="scrollIntoView('three')"><span class="nav_li_t left">{{$t('nav_vision')}}</span><span class="right nav_li_row"></span></li>
          <li class="clear" @click="scrollIntoView('four')"><span class="nav_li_t left">{{$t('nav_contact')}}</span><span class="right nav_li_row"></span></li>
          <li class="clear" @click="scrollIntoView('four')">
            <span @click="changeLang('zh-CN')">{{$t("ZH")}}</span>
            <span @click="changeLang('en-us')"> / {{$t("EN")}}</span>
          </li>
        </ul>
      </transition>
    </div>
    <div class="header">
      <swiper :options="swiperOption_banner">
        <swiper-slide class="" v-for="item in bannerList" :key="item.id">
          <img :src="'http://www.akgvc.com:8082'+item.img" alt="" @click="jump(item.src)">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

<!-- 我们的服务 -->
    <div class="bg_white text_center pad15" id="one">
      <div class="animated slideInLeft">
        <h3 class="font_15 server_top color_33">{{$t('nav_server')}}</h3>
        <p class="color_99 font_12 server_bot">OUR SERVICES</p>
      </div>

      <div class="box_shadow text_center animated flipInX guwen_box_mag">
        <div class=" icon_box guwen"></div>
        <h4 class="font_14">{{$t('tougu')}}</h4>
        <p class="color_99 guwen_text font_12">{{$t('tougu_des')}}</p>
      </div>
      
      <div class="box_shadow text_center zixun_box_mag animated flipInX">
        <div class=" icon_box zixun"></div>
        <h4 class="font_14">{{$t('zixun')}}</h4>
        <p class="color_99 guwen_text font_12">{{$t('zixun_des')}}</p>
      </div>
    </div>

<!-- 课程亮点 -->
    <div class="text_center pad15">
      <h3 class="font_15 server_top color_33">{{$t('kecheng')}}</h3>
      <p class="font_10 yellow_btn kecheng_yellow_dis">{{$t('tougu_server')}}</p>
      <!-- <iframe src="http://h5school.haoxuezhang.cn/index.php?from=timeline&isappinstalled=0" class="kecheng_video"></iframe> -->
      <div class="kecheng_video"><img src="../assets/case_big.png" alt=""></div>
      <ul class="kecheng_ul">
        <li><span class="dot"></span><span class="font_12 color_66">{{$t('kecheng_one')}}</span></li>
        <li><span class="dot"></span><span class="font_12 color_66">{{$t('kecheng_two')}}</span></li>
        <li><span class="dot"></span><span class="font_12 color_66">{{$t('kecheng_three')}}</span></li>
        <li><span class="dot"></span><span class="font_12 color_66">{{$t('kecheng_four')}}</span></li>
      </ul>
      <div class="kecheng_btn font_14" @click="showCode">{{$t('kecheng_zixun')}}</div>
    </div>

<!-- 我们的优势 -->
    <div class="bg_white text_center pad15">
      <h3 class="font_0 server_top color_33" :class="{'font_15 animated bounceInLeft' : scroll_youshi_animate}">{{$t('youshi')}}</h3>
      <p class="color_99 font_0 server_bot" :class="{'font_12 animated bounceInLeft' : scroll_youshi_animate}">OUR ADVANTAGES</p>
      <ul class="youshi_ul font_reg">
        <li>
          <span class="icon_box" :class="{'shizi animated flipInY' : scroll_youshi_animate}"></span>
          <div class="">
            <h6 class="font_14 color_33 youshi_s_tit">{{$t('shizi')}}</h6>
            <p class="color_99 font_12 youshi_des">{{$t('shizi_des')}}</p>
          </div>
        </li>
        <li>
          <span class="icon_box " :class="{'kecheng_icon animated flipInY' : scroll_youshi_animate}"></span>
          <div class="">
            <h6 class="font_14 color_33 youshi_s_tit">{{$t('fengfukecheng')}}</h6>
            <p class="color_99 font_12 youshi_des">{{$t('fengfukecheng_des')}}</p>
          </div>
        </li>
        <li>
          <span class="icon_box " :class="{'shequn animated flipInY' : scroll_youshi_animate}"></span>
          <div class="">
            <h6 class="font_14 color_33 youshi_s_tit">{{$t('jiaoyi')}}</h6>
            <p class="color_99 font_12 youshi_des">{{$t('jiaoyi_des')}}</p>
          </div>
        </li>
        <li>
          <span class="icon_box " :class="{'anli animated flipInY' : scroll_youshi_animate}"></span>
          <div class="">
            <h6 class="font_14 color_33 youshi_s_tit">{{$t('dingjianli')}}</h6>
            <p class="color_99 font_12 youshi_des">{{$t('dingjianli_des')}}</p>
          </div>
        </li>
      </ul>
      <!-- 案例 -->
      <div class="case_shadow">
        <h3 class="font_15 ">{{$t('case')}}</h3>
        <p class="color_99 font_12 server_bot">CASE</p>
        <div class="case_one_box">
          <div class="" :class="{'case_cont animated bounceInLeft' : scroll_case_animate}"></div>
          <p class="color_33 font_0" :class="{'font_13 case_jiben animated bounceInRight' : scroll_case_animate}">{{$t('case_fenxi')}}</p>
        </div>
        <p class="font_10 yellow_btn">{{$t('tougu_server')}}</p>
      </div>
    
      <div class="box_shadow text_center k_xian">
        <div class="case_two_box">
          <div class="" :class="{'k_xian_img animated bounceInRight' : scroll_case2_animate}"></div>
          <div>
            <p class="color_33 font_0 k_xian_fenxi" :class="{'font_13 animated bounceInLeft' : scroll_case2_animate}">{{$t('case_k_xian')}}</p>
            <p class="color_99 font_0 k_xian_back" :class="{'font_12 animated bounceInLeft' : scroll_case2_animate}">{{$t('case_huibao')}}</p>
          </div>
        </div>
        <p class="font_10 yellow_btn">{{$t('zixun_server')}}</p>
      </div>

      <!-- <div class="box_shadow text_center k_xian">
        <div class="ftx"></div>
        <p class="color_33 font_13">我们提供的服务</p>
        <p class="color_99 font_12 server_des">全程陪同，7*24⼩小时贴身式咨询服务；针对⽬目标客户的⽤用户特点，定制化推⼴广⽅方案；针对衍⽣生品交易易平台，制定独有市场教育⽅方案；针对⽤用户平台认知不不⾜足，快讯、软⽂文密集全媒体覆盖； 针对平台币特性，递进式市场⽅方案设计与执⾏行行；针对核⼼心⼈人员特点，全⽅方位定制化个⼈人IP打造与重塑</p>
        
        <p class="color_33 font_13">达成的目标</p>
        <p class="color_99 font_12 server_des">2019年年7⽉月扶持FTX交易易所，中国区从零起步 20天实现:平台新增⽤用户20,000+平台币销售超1000万美⾦金金平台⽇日交易易流⽔水增⻓长26倍 平台币价格较最初发⾏行行价涨幅5倍，较基石轮涨幅18倍</p>
        
        <p class="font_10 yellow_btn">投顾服务</p>
      </div> -->

<!-- 团队成员 -->
      <div id="two">
        <div >
          <h3 class="font_0 server_top " :class="{'font_15 animated slideInLeft' : scroll_two_animate }">{{$t('nav_team')}}</h3>
          <p class="color_99 font_0 server_bot" :class="{'font_12 animated slideInLeft' : scroll_two_animate }">OUR TEAM</p>
        </div>
        <swiper :options="swiperOption">
          <swiper-slide class="team_swiper_item">
            <div class="box_shadow text_center">
              <span class="icon_box team_icon_box rumyu"></span>
              <p class="font_15 color_33 name">Rum</p>
              <p class="color_99 font_12 team_des">{{$t('team_yu')}}</p>
            </div>
          </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center ">
                <span class="icon_box team_icon_box Arkin"></span>
                <p class="font_15 color_33 name">Arkin</p>
                <p class="color_99 font_16 team_des">{{$t('team_Arkin')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Mr_cang"></span>
                <p class="font_15 color_33 name">{{$t('Mr_cang')}}</p>
                <p class="color_99 font_16 team_des">{{$t('team_cang')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Chuck"></span>
                <p class="font_15 color_33 name">Chuck</p>
                <p class="color_99 font_16 team_des">{{$t('team_Chuck')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Wendy"></span>
                <p class="font_15 color_33 name">Wendy</p>
                <p class="color_99 font_16 team_des">{{$t('team_Wendy')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Wag"></span>
                <p class="font_15 color_33 name">Wag</p>
                <p class="color_99 font_16 team_des">{{$t('team_Wag')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Bill"></span>
                <p class="font_15 color_33 name">Bill</p>
                <p class="color_99 font_16 team_des">{{$t('team_Bill')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Taylor"></span>
                <p class="font_15 color_33 name">Taylor</p>
                <p class="color_99 font_16 team_des">{{$t('team_Taylor')}}</p>
              </div>
            </swiper-slide>
            <swiper-slide class="team_swiper_item">
              <div class="box_shadow text_center">
                <span class="icon_box team_icon_box Mafee"></span>
                <p class="font_15 color_33 name">Mafee</p>
                <p class="color_99 font_16 team_des">{{$t('team_Mafee')}}</p>
              </div>
            </swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>

        
      </div>

<!-- 关于AKG -->
        <h3 class="font_15 server_top " id="three">{{$t('nav_vision')}}</h3>
        <p class="color_99 font_12 server_bot">Vision</p>
        <p class="color_99 font_12 about_des">{{$t('vision_one')}}<br>{{$t('vision_two')}}</p>
        <ul class="about_ul">
          <li class="" :class="{'about_one animated flipInX' : scroll_vision_animate}" @click="jump('https://ftx.com/')"></li>
          <li class="" :class="{'about_two animated flipInX' : scroll_vision_animate}" @click="jump('http://ufex.com/')"></li>
          <li class="" :class="{'about_three animated flipInX' : scroll_vision_animate}"></li>
          <li class="" :class="{'about_four animated flipInX' : scroll_vision_animate}" @click="jump('https://www.ccfox.com/')"></li>
        </ul>
    </div>
<!-- 联系我们 -->
    <div class="contact" id="four">
      <p class="font_15 ">{{$t('nav_contact')}}</p>
      <div class="contact_flex">
        <ul>
          <li class="contact_phone">718042970</li>
          <li class="contact_email">info@akgvc.com</li>
          <li class="contact_feiji">AKGVenture</li>
        </ul>

        <ul class="text_center">
          <li class="xiaomishu">{{$t('weixin')}}</li>
        </ul>
      </div>
    </div>

    <!-- <div class="footer text_center font_12">京ICP备案14246-46号</div> -->
    <transition name="slide-fade">
      <div class="dialog" v-if="isShow">
        <div>
          <img src="../assets/zixuncode.jpg" alt="">
        </div>
        <span class="dialog_cancel" @click="cancel"></span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      docTop:0,
      isShow: false,
      isActive: false,
      nav_black: false,
      scroll_two_animate: false,
      scroll_three_animate: false,
      scroll_four_animate: false,
      scroll_youshi_animate: false,
      scroll_case_animate: false,
      scroll_case2_animate: false,
      scroll_vision_animate: false,
      bannerList: [],
      swiperOption_banner: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        }
      }
    },
  computed: {
    
  },
  created() {
    this.$http.get('http://www.akgvc.com:8082/port/Slide/getSlideList').then((res) => {
        this.bannerList = res.data.data;
    }).catch((err) => {
        console.log(err);
    });
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    showCode () {
      this.isShow = true;
    },
    cancel () {
      this.isShow = false;
    },
    muen: function () {
      this.isActive = !this.isActive;
    },
    jump (a) {
      window.open(a);
    },
    handleScroll: function () {
      this.isActive = false;
      let docTop = document.documentElement.scrollTop;
      this.docTop = docTop;
      // console.log(docTop);
      if (docTop > 50) {
        this.nav_black = true;
      } else {
         this.nav_black = false;
      }
      if (docTop >= 3300) {
        this.scroll_three_animate = true;
      } 
      if (docTop >= 1700) {
        this.scroll_youshi_animate = true;
      }
      if (docTop >= 2400) {
        this.scroll_case_animate = true;
      }
      if (docTop >= 2500) {
        this.scroll_case2_animate = true;
      }
      if (docTop >= 3600) {
        this.scroll_two_animate = true;
      } 
      if (docTop >= 4200) {
        this.scroll_vision_animate = true;
      }
    },
    toTop(i){
      //参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop-=i;
      if (document.documentElement.scrollTop>0) {
          var c=setTimeout(()=>this.toTop(i),16);
      }else {
        clearTimeout(c);
      }
    },
    scrollIntoView (type) {
      const _type = '#' + type;
      const el = type ? document.querySelector(_type) : null
      document.body.scrollTop = el.offsetTop ;
      document.documentElement.scrollTop = el.offsetTop - 60;
      this.isActive = false;
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    },
    changeLang (val) {
      localStorage.lang = val;
      this.$i18n.locale = val;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.home {
  box-sizing: border-box;
  width: 100%;
}
.pad15 {
  padding-left: 15px;
  padding-right: 15px;
}
.font_reg{
  font-family: 'PingFangSC-Regular'
}
[data-dpr="1"] .font_15 {
    font-size: 15PX;
}
[data-dpr="1"] .font_14 {
  font-size: 14PX; /*PX*/
}
[data-dpr="1"] .font_13 {
  font-size: 13PX; /*PX*/
}
[data-dpr="1"] .font_12 {
  font-size: 12PX; /*PX*/
}
[data-dpr="1"] .font_10 {
  font-size: 10PX; /*px*/
}
.font_0{
  font-size: 0;
}
.font_15 {
  font-size: 30PX; /*px*/
}
.font_14 {
  font-size: 28PX; /*PX*/
}
.font_13 {
  font-size: 26PX; /*PX*/
}
.font_12 {
  font-size: 24PX; /*PX*/
}
.font_10 {
  font-size: 20PX; /*px*/
}
[data-dpr="3"] .font_15 {
    font-size: 45PX;
}
[data-dpr="3"] .font_14 {
  font-size: 42PX; /*PX*/
}
[data-dpr="3"] .font_13 {
  font-size: 39PX; /*PX*/
}
[data-dpr="3"] .font_12 {
  font-size: 36PX; /*PX*/
}
[data-dpr="3"] .font_10 {
  font-size: 30PX; /*px*/
}

.bg_white {
  background-color: #fff;
}

.color_99 {
  color: #999;
}
.color_66 {
  color: #666;
}
.color_33 {
  color: #333;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 99;
}
.nav_black {
  background-color: #2E344C;
}
.nav_logo {
  width: 48px;
  height: 16px;
  background: url("../assets/logo_w.png") no-repeat center;
  background-size: cover;
}
.nav_icon {
  display: inline-block;
  width: 20px;
  height: 16px;
  background: url("../assets/menu.png") no-repeat center;
  background-size: cover;
  vertical-align: middle;
}
.nav_top {
  height: 40px;
  padding: 12px;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 5;
}
.show_nav {
  background-color: #fff;
  box-shadow: 0 0 10px 0px #e8e8e8;
  .nav_top {
    border-bottom: 1px solid #E5E5E5;
  }
  .nav_icon {
    background: url("../assets/cancel.png") no-repeat center;
    background-size: cover;
    } 
    .nav_black {
      background-color: #fff;
    }
  } 
.nav_ul {
  width: 100%;
  color: #333;
  text-align: left;
  padding: 0 12px;
  background-color: #fff;
  li {
    line-height: 46px;
  }
  li:not(:last-child){ 
    border-bottom: 1px solid #E5E5E5;
  }
}
.nav_li_row {
  width: 5px;
  height: 46px;
  background: url("../assets/rr.png") no-repeat center;
  background-size: 10px;
  margin-right: 10px;
}

.header{
  width: 100%;
  height: 150px;
}
.tit_box {
  width: 264.2px;
  height: 78.6px;
  padding: 12px;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 3px;
}
.tit_cont {
  text-align: center;
  color: #fff;
  width: 100%;
  height: 52.1px;
  padding-top: 10px;
  background-color: rgba(255,255,255,0.15);
  border-radius: 3px;
  h1{
    font-size: 22px; /*px*/
    line-height: 16.93px;
  }
}

.box_shadow {
  box-shadow: 0 0 5px 0 #e8e8e885;
  padding: 20px;
}

.server_top {
  padding-top: 20px;
}
.server_bot{
  padding-bottom: 20px;
  padding-top: 10px;
}
.icon_box {
  display: inline-block;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0 0 5px 0px #e8e8e885; 
  margin-bottom: 15px;  
}
.guwen {
  background:  url("../assets/guwen.png") no-repeat center;
  background-size: 15px;
}
.zixun {
  background:  url("../assets/zixun.png") no-repeat center;
  background-size: 15px;
}
.guwen_box_mag{
  -webkit-animation-delay: 0.5s;//延迟
  animation-delay: 0.5s;
}
.zixun_box_mag {
  margin-top: 10px;
  -webkit-animation-delay: 0.7s;//延迟
  animation-delay: 0.7s;
}
.guwen_text {
  padding-top: 12px;
  line-height: 18px;
}

.yellow_btn {
  display: inline-block;
  padding:3px 8px;
  border-radius: 10px;
  color: #fff;
  background-color: #FAAD15;
}
.kecheng_yellow_dis {
  margin-top: 12px;
  margin-bottom: 15px;
}
.kecheng_video {
  width: 100%;
  height: 148px;
  margin-bottom: 15.8px;
}
.kecheng_ul {
  li {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:flex-start;
    text-align: left;
    line-height: 18px;
    margin-bottom: 12px;
  }
  .dot {
    width: 7px;
    height: 5px;
    background-color: #C8D1DA;
    border-radius: 50%;
    margin-top: 7px;;
    margin-right: 12px;
    margin-left: 5px;
  }
}
.kecheng_btn {
  display: inline-block;
  padding: 8px 32px;
  background-color: #1C202F;
  color: #fff;
  line-height: 20px;
  border-radius: 30px;
  box-shadow: 0 7px 10px 0px #1c202f38;
  margin-bottom: 16px;
  margin-top: 5px;
}

.youshi_ul {
  li {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:flex-start;
    text-align: left;
    margin-bottom: 13px;
  }
  .icon_box {
    width: 50px;
    height: 50px;
    flex-shrink:0;
    margin-right: 13px;
  }
  .youshi_s_tit {
    padding-bottom: 12px;
  }
  .youshi_des {
    line-height: 16px;
  }
}
.shizi {
  background:  url("../assets/shizi.png") no-repeat center;
  background-size: 20px;
  -webkit-animation-delay: 0.3s;//延迟
  animation-delay: 0.3s;
}
.kecheng_icon {
  background:  url("../assets/kecheng.png") no-repeat center;
  background-size: 20px;
  -webkit-animation-delay: 0.6s;//延迟
  animation-delay: 0.6s;
}
.shequn {
  background:  url("../assets/shequn.png") no-repeat center;
  background-size: 20px;
  -webkit-animation-delay: .9s;//延迟
  animation-delay: .9s;
}
.anli {
  background:  url("../assets/anli.png") no-repeat center;
  background-size: 20px;
  -webkit-animation-delay: 1.2s;//延迟
  animation-delay: 1.2s;
}

.case_cont {
  width: 100%;
  height: 128px;
  background: url("../assets/case_big.png") no-repeat center;
  background-size: cover;
  -webkit-animation-delay: 0.2s;//延迟
  animation-delay: 0.2s;
}
.case_jiben {
  margin-bottom: 22px;
  margin-top: 16.5px;
    -webkit-animation-delay: 0.3s;//延迟
  animation-delay: 0.3s;
}
.case_shadow{
  box-shadow: 0 4px 5px 0px #e8e8e885; 
  padding-bottom: 22px;
}
.case_one_box {
  height: 179px;
}
.case_two_box {
  height: 268px;
}
.k_xian {
  margin-top: 8px;
}
.k_xian_img {
  width: 182px;
  height: 193px;
  display: inline-block;
  background: url("../assets/case_two.png") no-repeat center;
  background-size: cover;
  -webkit-animation-delay: 0.8s;//延迟
  animation-delay: 0.8s;
}
.k_xian_fenxi {
  margin-top: 16px;
  margin-bottom: 10px;
  -webkit-animation-delay: 0.9s;//延迟
  animation-delay: 0.9;
}
.k_xian_back {
  margin-bottom: 22px;
  -webkit-animation-delay: 0.9s;//延迟
  animation-delay: 0.9s;
}
.ftx {
  display: inline-block;
  width: 100px;
  height: 36px;
  background-color: tomato;
  margin-bottom: 16px;
}
.server_des {
  margin-top: 12px;
  margin-bottom: 20px;
  text-align: left;
  line-height: 18px;
}
.team_icon_box {
  margin-top: -76px;
}
.rumyu {
  background:  url("../assets/rumyu.jpeg") no-repeat center;
  background-size: cover; 
}
.Arkin {
  background:  url("../assets/Arkin.jpg") no-repeat center;
  background-size: cover; 
}
.Chuck {
  background:  url("../assets/Chuck.jpeg") no-repeat center;
  background-size: cover; 
}
.Mr_cang {
  background:  url("../assets/Mr_cang.jpeg") no-repeat center;
  background-size: cover; 
}
.Wendy {
  background:  url("../assets/Wendy.jpeg") no-repeat center;
  background-size: cover; 
}
.Wag {
  background:  url("../assets/Wag.jpeg") no-repeat center;
  background-size: cover; 
}
.Bill {
  background:  url("../assets/Bill.jpeg") no-repeat center;
  background-size: cover; 
}
.Taylor {
  background:  url("../assets/Taylor.jpeg") no-repeat center;
  background-size: cover; 
}
.Mafee {
  background:  url("../assets/mafee.jpeg") no-repeat center;
  background-size: cover; 
}
.team_des {
  width: 90%;
  display: inline-block;
  line-height: 18px;
  padding-top: 12px;
}
.about_des {
  line-height: 18px;
  text-align: left;
}
.about_ul {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    margin-top: 15px;
    padding-bottom: 30px;
    li{
      flex-shrink:0;
      box-shadow: 0 0 5px 0px #e8e8e885; 
      height: 35px;
    }
}
.about_one {
  width: 80px;
  height: 40px;
  background:  url("../assets/about_one.png") no-repeat center;
  background-size: 50px; 
}
.about_two {
  width: 80px;
  background:  url("../assets/about_two.png") no-repeat center;
  background-size: 50px; 
}
.about_three {
  width: 80px;
  background:  url("../assets/about_three.png") no-repeat center;
  background-size: 60px; 
}
.about_four {
  width: 80px;
  background:  url("../assets/ccfox.jpeg") no-repeat center;
  background-size: 60px; 
  cursor: pointer;
}
.contact {
  width: 100%;
  background-color: #2E344C ;
  color: #ffffff;
  padding: 15px 15px 20px 15px;
}
.contact_flex {
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.contact_phone {
  padding-left: 24px;
  background:  url("../assets/phone.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
  margin-top: 15px;
  margin-bottom: 10px;
}
.contact_email{
  padding-left: 24px;
  background:  url("../assets/email.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
  margin-bottom: 10px;
}
.contact_feiji {
  padding-left: 24px;
  background:  url("../assets/plant.png") no-repeat left center;
  background-size: contain;
  line-height: 16px;
}
.xiaomishu {
  display: inline-block;
  padding-top: 46px;
  background:  url("../assets/zixuncode.jpg") no-repeat top center;
  background-size: 33px;
  line-height: 16px;
  color: #ffffffba;
  width: 100px;
}
.qqun {
  width: 40px;
  display: inline-block;
  padding-top: 46px;
  background:  url("../assets/zixuncode.jpg") no-repeat top center;
  background-size: 33px;
  line-height: 16px;
  color: #ffffffba;
}
.footer {
  background-color: #1C202F;
  color: #ffffffba;
  line-height: 37px;
}

.slide-fade-enter-active {
  transition: all .6s ease;
}
.slide-fade-leave-active {
  transition: all .4s ease;
}

.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-100px);
  opacity: 0;
}
.swiper-container {
    height: 150px;
    width: 100%;
}
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
    box-sizing: content-box;
}
.swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}
.swiper-wrapper:hover {
    transition: background-color .25s linear,color .05s linear,opacity .25s linear,filter .25s linear,visibility .25s linear,transform .25s linear;
}
.swiper-slide{
    text-align: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.swiper-slide {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    transition-property: -webkit-transform;
    transition-property: transform;
    transition-property: transform,-webkit-transform;
}

.swiper-button-prev {
  left: 10px;
  background:  url("../assets/icon-l.png") no-repeat top center;
  background-size: contain;
}
.swiper-button-next{
  right: 10px;
  background:  url("../assets/icon-r.png") no-repeat top center;
  background-size: contain;
}
.swiper-button-next, .swiper-button-prev {
    position: absolute;
    top: 50%;
    width: 15px;
    height: 15px;
    z-index: 10;
    cursor: pointer;
}
.swiper-pagination {
    position: absolute;
    text-align: center;
    transition: opacity .3s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 10;
    bottom: 10px;
    left: 0;
    width: 100%;
  }
.swiper-pagination-bullet {
    width: 20px;
    height: 2px;
    display: inline-block;
    border-radius: 4px;
    background: rgba(255,255,255,.4);
    margin-right: 3px;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
}
.dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  text-align: center;
  z-index: 99;
  img{
    width: 200px;
    height: 200px;
    display: inline-block;
    margin-top: 100px;
  }
}
.dialog_cancel {
  display: inline-block;
  width: 30px;
  height: 30px;
  background:  url("../assets/dialog_cancel.png") no-repeat center;
  background-size: contain;
  margin-top: 20px;
}
</style>
