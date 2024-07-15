<template>
    <div id="content">

        <div class="welcome">
            <div class="title">
                Tia The Fairy Land
            </div>

            <div class="subtitle">
                <p>Fairy Land</p>
                <p>Gaming & Coding</p>
            </div>

            <div class="nav">
                <span class="navItem" @click="jumpTo('about')">关于</span>
                <span class="navItem" @click="jumpTo('about')">游玩</span>
                <span class="navItem" @click="jumpTo('join')">加入</span>
                <span class="navItem" @click="jumpTo('info')">资讯</span>
            </div>
        </div>

        <el-card shadow="hover" class="mainCard">
            <el-divider></el-divider>

            <div id="about">
                <div class="flexItem">
                    <el-image style="width: 200px; height: 200px" :src="logoicon" fit="fit"></el-image>
                </div>

                <div class="flexItem aboutMessage">
                    <div class="title">Fairy Land | Minecraft服务器</div>
                    <div class="subtitle">优质正版公益服务器</div>
                    <div class="panes">
                        <el-card class="flexItem aboutCard" shadow="hover">
                            <div>
                                <el-image style="width: 40px; height: 40px" :src="online" fit="fit"></el-image>
                            </div>

                            <div>正版</div>
                        </el-card>
                        <el-card class="flexItem aboutCard" shadow="hover">
                            <div>
                                <el-image style="width: 40px; height: 40px" :src="free" fit="fit"></el-image>
                            </div>
                            <div>公益</div>
                        </el-card>
                        <el-card class="flexItem aboutCard" shadow="hover">
                            <div>
                                <el-image style="width: 40px; height: 40px" :src="java" fit="fit"></el-image>
                            </div>
                            <div>Java 1.20</div>
                        </el-card>
                    </div>
                </div>
            </div>

            <el-divider></el-divider>

            <div id="play">
                <server-stat></server-stat>
            </div>

            <el-divider></el-divider>

            <div id="join">
                <el-card class="flexItem" shadow="hover">
                    <div @click="copyMC()">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="online" fit="fit"></el-image>
                        </div>
                        <div>直接连接服务器</div>
                    </div>

                </el-card>

                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://qm.qq.com/q/JrzjiIuLWC')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="qq" fit="fit"></el-image>
                        </div>
                        <div>QQ交流群</div>
                    </div>
                </el-card>

                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://www.bilibili.com/video/BV1Mx421S7uM')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="bilibili" fit="fit"></el-image>
                        </div>
                        <div>Bilibili</div>
                    </div>
                </el-card>
            </div>

            <el-divider></el-divider>

            <div id="info">
                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://wiki.mc.ttfl.net')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="wiki" fit="fit"></el-image>
                        </div>
                        <div>服务器百科</div>
                    </div>

                </el-card>

                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://ttfl.net')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="rule" fit="fit"></el-image>
                        </div>
                        <div>服务器守则</div>
                    </div>
                </el-card>

                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://wiki.mc.ttfl.net/donate')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="donate" fit="fit"></el-image>
                        </div>
                        <div>服务器赞助</div>
                    </div>
                </el-card>

                <el-card class="flexItem" shadow="hover">
                    <div @click="openLink('https://ttfl.net')">
                        <div>
                            <el-image style="width: 100px; height: 100px" :src="map" fit="fit"></el-image>
                        </div>
                        <div>服务器地图</div>
                    </div>
                </el-card>
            </div>
        </el-card>
    </div>
</template>

<script>
import ServerStat from "../ServerStat.vue"

export default {
    name: "ContentSection",
    components: { ServerStat },
    data() {
        return {
            logoicon: require("../../../static/images/logoicon.png"),
            online: require("../../../static/images/minecraft.png"),
            free: require("../../../static/images/free.png"),
            java: require("../../../static/images/java.png"),
            qq: require("../../../static/images/qq.png"),
            bilibili: require("../../../static/images/bilibili.png"),
            wiki: require("../../../static/images/wiki.png"),
            rule: require("../../../static/images/rule.png"),
            map: require("../../../static/images/map.png"),
            donate: require("../../../static/images/donate.png")
        }
    },
    methods: {
        jumpTo(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        },
        copyMC() {
            this.$clipboard("mc.ttfl.net");
            this.$message({
                message: '服务器地址已复制',
                type: 'success'
            });
        },
        openLink(link) {
            window.open(link);
        }
    }
}
</script>

<style scoped>
.welcome {
    padding-top: 200px;
    padding-bottom: 70px;
    background-image: url("../../../static/images/background.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}

.welcome .title {
    font-family: "blankspot-owlw4";
    font-size: 100px;
    font-weight: bold;
    color: rgb(194, 255, 182);
}

.welcome .subtitle {
    font-size: 30px;
    margin-top: 30px;
    font-weight: bolder;
    color: rgb(115, 250, 227);
}

.welcome .nav {
    margin-top: 50px;
}

.navItem {
    margin-inline: 20px;
    color: skyblue;
    font-size: 23px;
    cursor: pointer;
}

.navItem:hover {
    color: blue;
    text-decoration: underline;
    font-weight: bold;
}

.mainCard {
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    top: -50px;
}

#about {
    display: flex;
    align-items: center;
}

#about .flexItem {
    margin-inline: 5px;
    flex: 1;
}

#about .aboutMessage {
    text-align: left;
}

#about .aboutMessage .title {
    font-size: 30px;
    font-weight: bolder;
}

#about .aboutMessage .subtitle {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
}

#about .panes {
    display: flex;
    align-items: center;
    width: 80%;
    margin-right: 10%;
}

#about .panes .aboutCard {
    text-align: center;
}

#join {
    display: flex;
    align-items: center;
    width: 100%;
}

#join .flexItem {
    margin-inline: 10px;
    flex: 1;
    cursor: pointer;
}

#info {
    display: flex;
    align-items: center;
    width: 100%;
}

#info .flexItem {
    margin-inline: 10px;
    flex: 1;
    cursor: pointer;
}
</style>