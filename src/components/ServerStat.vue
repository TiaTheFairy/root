<template>
    <div>
        <div v-loading="loading">
            <div v-if="info != null">
                <el-descriptions class="margin-top" title="服务器在线状态" :column="1" border>
                    <template slot="extra">
                        <el-button type="primary" size="small" @click="getInfo(false)"
                            icon="el-icon-refresh">刷新</el-button>
                    </template>
                    <el-descriptions-item :label-style="desc_style">
                        <template slot="label"><i class="el-icon-share"></i>服务器状态</template>
                        <div v-if="info.online"><el-tag type="success">在线</el-tag></div>
                        <div v-else><el-tag type="danger">服务器正在日常重启/维护中</el-tag></div>
                    </el-descriptions-item>

                    <el-descriptions-item :label-style="desc_style">
                        <template slot="label"><i class="el-icon-c-scale-to-original"></i>MOTD</template>
                        <div v-html="info.motd.html"></div>
                    </el-descriptions-item>
                    <el-descriptions-item :label-style="desc_style">
                        <template slot="label"><i class="el-icon-magic-stick"></i>版本号</template>
                        <div v-html="info.version.name_html"></div>
                    </el-descriptions-item>
                    <el-descriptions-item :label-style="desc_style">
                        <template slot="label"><i class="el-icon-connection"></i>检测玩家数</template>
                        <div v-if="list.length < 2">
                            <el-tag type="danger">接口获取过于频繁, 请求被拒绝! 正在重试...</el-tag>
                        </div>
                        <div v-else>{{ info.players.online }} / {{ info.players.max }}</div>
                    </el-descriptions-item>
                    <el-descriptions-item :label-style="desc_style">
                        <template slot="label"><i class="el-icon-user"></i>部分在线玩家</template>
                        <div v-if="list.length < 2">
                            <el-tag type="danger">接口获取过于频繁, 请求被拒绝! 正在重试...</el-tag>
                        </div>
                        <div v-else>
                            <span v-for="item in list" :key="item.name_raw">
                                <el-tag class="player" @click="clickName(item.name_raw)">{{ item.name_raw }}</el-tag>
                            </span>
                            <el-tag class="player">......</el-tag>
                        </div>

                    </el-descriptions-item>
                </el-descriptions>
            </div>

            <div v-else>
                ! 无法从接口获取服务器数据, 可能是您的网络状况较差
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "ServerStatus",
    data() {
        return {
            info: null,
            loading: false,
            isLoading: false,
            list: [],
            desc_style: {
                'width': '20%',
                'text-align': 'center',
                'color': 'black'
            },
            autoRefresh: null,
            autoRetry: null,
            listDenied: false
        }
    },
    methods: {
        clickName(name) {
            this.$clipboard(name);
            this.$message({
                message: '玩家名称已复制',
                type: 'success'
            });
            window.open("https://namemc.com/search?q=" + name);
        },
        async getInfo(isAuto) {
            if (!isAuto) {
                this.loading = true;
            }
            this.isLoading = true;
            try {
                const response = await fetch('https://api.mcstatus.io/v2/status/java/mc.ttfl.net');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const data = await response.json();
                this.info = data;
                this.loading = false;
                this.isLoading = false;

                this.list = this.info.players.list.filter(item => item.uuid == "")
                if (this.list.length == 0) {
                    this.listDenied = true;
                }
                else {
                    this.listDenied = false;
                    this.autoRetry = null;
                }
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        },
        autoGet() {
            if (this.listDenied) {
                clearInterval(this.autoRefresh);
                this.autoRetry = setInterval(() => {
                    this.getInfo();
                }, 10000);
            }
            if (!this.isLoading && !this.listDenied) {
                this.getInfo(true);
            }
        }
    },
    mounted() {
        this.getInfo();

        this.autoRefresh = setInterval(() => {
            this.autoGet();
        }, 500)
    }
}
</script>

<style scoped>
.title {
    display: flex;
    width: 100%;
    align-content: space-around;
}

.player {
    margin-inline: 5px;
    margin-bottom: 5px;
    cursor: pointer;
}

.player:hover {
    font-size: larger;
}

.item {
    width: 400px;
}
</style>