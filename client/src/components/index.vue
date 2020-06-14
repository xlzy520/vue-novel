<template>
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
      <div>
        <Input search enter-button placeholder="请在此处键入任何你想搜索的内容..." class="input_box"/>

      </div>
      <Content :style="{display: 'flex',margin: '40px 20px 0', background: '#fff', minHeight: '500px'}">
        <div class="list_content">
          <div class="list_top">
            <i>热门小说</i>
            <div class="top-btns">
              <Button icon="md-refresh" type="success" @click="refresh('novel')">点击刷新</Button>
              <Button type="primary">查看更多</Button>
            </div>
          </div>
          <div border class="list_box">
            <Card class="list_box_li" v-for="novel in novelList" :key="novel.id"
                  @click.native="goToDetail(novel)">
              <p class="name">
                <a>{{novel.novel_name}}</a>
              </p>
              <div class="content-middle">
                <p class="content text-overflow-hidden" :title="novel.novel_profile">
                  {{novel.novel_profile}}
                </p>
                <a class="img_url">
                  <img :src="novel.novel_img"
                       width="103px"
                       height="136px"></a>
              </div>
              <div class="detail">
                <span>
                  <Tag color="geekblue">
                    <Icon type="ios-contact-outline"/>{{novel.novel_author}}
                </Tag>
                </span>
                <span>
                  <Tag color="warning"><Icon type="ios-book-outline"/>{{novel.novel_condition}}</Tag>
                </span>
              </div>
            </Card>
          </div>
          <br>
        </div>

        <div class="list_content">
          <div class="list_top">
            <i>热门小说</i>
            <Button type="primary" @click="refresh('novel')">点击刷新</Button>
            <Button type="primary">查看更多</Button>
          </div>
          <div border class="list_box">
            <Card class="list_box_li" v-for="novel in novelList" :key="novel.id">
              <p class="name">
                <router-link to="/detail">{{novel.novel_name}}</router-link>
              </p>
              <div class="content-middle">
                <p class="content">
                  {{novel.novel_profile}}
                </p>
                <a class="img_url">
                  <img :src="novel.novel_img"
                       width="103px"
                       height="136px"></a>
              </div>
              <div class="detail">
                <span>
                  <Tag color="geekblue">
                    <Icon type="ios-contact-outline"/>{{novel.novel_author}}
                </Tag>
                </span>
                <span>
                  <Tag color="warning"><Icon type="ios-book-outline"/>{{novel.novel_condition}}</Tag>
                </span>
              </div>
            </Card>
          </div>
          <br>
        </div>

        <div class="list_content">
          <div class="list_top">
            <i>热门小说</i>
            <Button type="primary" @click="refresh('novel')">点击刷新</Button>
            <Button type="primary">查看更多</Button>
          </div>
          <div border class="list_box">
            <Card class="list_box_li" v-for="novel in novelList" :key="novel.id">
              <p class="name">
                <router-link to="/detail">{{novel.novel_name}}</router-link>
              </p>
              <div class="content-middle">
                <p class="content">
                  {{novel.novel_profile}}
                </p>
                <a class="img_url">
                  <img :src="novel.novel_img"
                       width="103px"
                       height="136px"></a>
              </div>
              <div class="detail">
                <span>
                  <Tag color="geekblue">
                    <Icon type="ios-contact-outline"/>{{novel.novel_author}}
                </Tag>
                </span>
                <span>
                  <Tag color="warning"><Icon type="ios-book-outline"/>{{novel.novel_condition}}</Tag>
                </span>
              </div>
            </Card>
          </div>
          <br>
        </div>


      </Content>
      <Footer class="layout-footer-center">聚合Spider</Footer>
    </Layout>
  </div>
</template>

<script>
  import {Message} from 'view-design'
  export default {
    name: "index",
    data() {
      return {
        novelList: []
      }
    },
    methods: {
      // 立即刷新
      refresh(module){
        switch (module) {
          // 如果是立即刷新小说，就调用getNovelList
          case 'novel':
            this.getNovelList(true)
            break;
          default:
              break;
        }
      },
      // 获取小说列表
      getNovelList(isRefresh) {
        fetch('http://localhost:5000/novel/detail').then(res=>res.json()).then(res=>{
          this.novelList = res.data.list || []
          isRefresh && Message.success('刷新成功')
        }).catch(()=>{
          Message.error('获取失败')
        })
      },
      // 跳转到详情页
      goToDetail(novel){
        this.$router.push('/detail?id='+novel.id)
      }
    },
    mounted() {
      this.getNovelList()
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

  .layout-logo p {
    width: 100px;
    height: 30px;
    line-height: 30px;
    color: white;
    padding-left: 15px;
  }

  .layout-nav {
    width: 500px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }

  .input_box {
    height: 22px;
    width: 500px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;

  }

  .list_top button {
    margin-left: 10px;
    height: 22px;
  }

  .list_top {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .top-btns{
    display: flex;
    justify-content: space-between;
  }

  .list_top i {
    margin-left: 5px;
    /*margin-right: 140px;*/
  }

  .list_box {
    width: 377px;
    position: relative;
  }

  .list_content {
    margin-left: 90px;

  }

  .list_box_li {
    cursor: pointer;
    height: 245px;
    border: 1px solid #e8eaec;
    margin-bottom: 10px;
  }

  .name {
    margin-top: 5px;
    margin-left: 15px;
    margin-bottom: 10px;
    font-size: 16px;
    font-weight: bold;
  }

  .content {
    float: left;
    width: 235px;
    margin-left: 15px;
    color: rgba(0, 0, 0, .45);
    overflow-y: scroll;
    max-height: 150px;
  }

  .img_url {
    float: left;
    vertical-align: center;
  }

  .detail{
    padding: 5px 12px;
    display: flex;
    justify-content: space-between;
  }

  .detail ul {
    margin-top: 145px;

  }

  .detail ul li {
    float: left;
    margin-left: 10px;
  }

  .content-middle{
    display: flex;
  }

  .text-overflow-hidden{

  }


</style>
