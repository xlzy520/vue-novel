<template>
  <!--    必须有一个根节点，否则报错-->
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <p>聚合Spider</p>
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              首页
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              全网小说
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              全网影视
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              全网音乐
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Breadcrumb :style="{margin: '20px 0'}">

          <BreadcrumbItem>
            <router-link to="/">
              <Icon type="ios-home"/>
              首页
            </router-link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Icon type="ios-book"/>
            全网小说
          </BreadcrumbItem>
          <BreadcrumbItem>当前小说名</BreadcrumbItem>
        </Breadcrumb>
        <Card style="width: 80%; margin: auto">
          <div style="min-height: 200px;">
            <div style="float:left ;margin-left: 100px;margin-right: 30px">
              <img
                :src="NovelDetail.novel_img" style="height: 220px"></div>
            <div style="float:left ">
              <span style="margin-left: 10px; font-size: 20px;font-weight: bolder">{{NovelDetail.novel_name}}</span>
              <ul class="detal">
                <li>{{NovelDetail.novel_author}}</li>
<!--                <li>作品分类：网游竞技</li>-->
                <li>状态：{{NovelDetail.novel_condition}}</li>
              </ul>
              <ul class="detal">
                <li style="color: #a1b341">最新章节：{{NovelDetail.novel_new}}</li>

              </ul>
              <span class="essay">{{NovelDetail.novel_profile}}</span>
            </div>
          </div>
          <br>

        </Card>
        <Card style="width: 80%; margin-left: auto; margin-right: auto; margin-top: 20px">
          <div class="novel-section">
            <div v-for="section in sectionList" :key="section.id" class="section-item">
              <a :href="section.section_url" target="_blank">{{section.section_text}}</a>
            </div>
          </div>
          <br>

        </Card>
      </Content>
      <Footer class="layout-footer-center">聚合Spider</Footer>
    </Layout>
  </div>
</template>

<script>
  import {Message} from "view-design";

  export default {
    name: "detail",
    data() {
      return {
        NovelDetail: {},
        sectionList: [],
        id: ''
      }
    },
    methods: {
      getNovelSectionList() {
        fetch('http://localhost:5000/novel/section_data?id='+this.id).then(res=>res.json()).then(res=>{
          this.sectionList = res.data.list || []
          console.log(res);
        })
      },
      getNovelDetail() {
        fetch('http://localhost:5000/novel/detail?id='+this.id).then(res=>res.json()).then(res=>{
          this.NovelDetail = res.data.list[0] || {}
        }).catch(()=>{
          Message.error('获取失败')
        })
      },
    },
    mounted() {
      this.id = this.$route.query.id
      this.getNovelDetail()
      this.getNovelSectionList()
    },

  }
</script>

<style scoped>
  body,
  ul,
  li,
  ol {
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
  }

  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

  .layout-logo p {
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: white;
    padding-left: 15px;
  }

  .detal li {
    float: left;
    margin-left: 10px;
    margin-top: 6px;
    font-size: 14px;
  }

  .essay {
    float: left;
    width: 600px;
    margin-top: 10px;
    margin-left: 10px;
  }
  .novel-section{
    min-height: 800px;
  }
  .section-item{
    width: 33%;
    display: inline-block;
  }

</style>
