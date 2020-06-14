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
                            <router-link to="/">  <Icon type="ios-navigate"></Icon>
                            首页</router-link>
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


                    <textarea ref="textarea" :style="{'height': height}" v-model="value" class="textarea" ></textarea>
            <ButtonGroup class="button_all">
                <Button type="primary" icon="ios-skip-backward" class="button_left"></Button>
                <Button type="primary" icon="ios-skip-forward" class="button_right"></Button>
            </ButtonGroup>


            <Footer class="layout-footer-center">聚合Spider</Footer>
        </Layout>
    </div>
</template>

<script>

    export default {
        name: "content",

    }
</script>

<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 500px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .layout-logo p{
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: white;
        padding-left: 15px;
    }
    .layout-logo p{
        width: 100px;
        height: 30px;
        line-height: 30px;
        color: white;
        padding-left: 15px;
    }
    .textarea {
        display: inline-block;
        width: 1000px;
        height: 800px;
        margin-top: 20px;
        margin-left: auto;
        margin-right: auto;
        font-size: 20px;
        resize: none;
        background-color: #E9FAFF;
    }
    .button_all{
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10px;

    }
    .button_left{
        margin-right: 937px;
    }
</style>