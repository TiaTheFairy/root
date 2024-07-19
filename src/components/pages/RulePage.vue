<template>
    <el-card class="rulePage">
        <el-card class="rule" shadow="hover">
            <div slot="header">
                <span class="title">{{ ruleData.title }}</span>
            </div>
            <div class="data">
                <el-collapse>
                    <el-collapse-item v-for="chapter in ruleData.chapter" :key="chapter.index" :name="chapter.index">
                        <template slot="title">
                            {{ chapter.index }} 、 {{ chapter.name }}
                        </template>

                        <div v-for="rule in chapter.item" :key="rule">
                            <div>{{ rule }}</div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-card>

        <el-card class="announcement" shadow="hover">
            <div slot="header">
                <span class="title">{{ announcementData.title }}</span>
            </div>
            <div class="data">
                <el-collapse>
                    <el-collapse-item v-for="chapter in announcementData.chapter" :key="chapter.index"
                        :name="chapter.index">
                        <template slot="title">
                            {{ chapter.index }} 、 {{ chapter.name }}
                        </template>

                        <div v-for="rule in chapter.item" :key="rule">
                            <div>{{ rule }}</div>
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </el-card>

        <el-card class="history" shadow="hover">
            <div slot="header">
                <span class="title">{{ historyData.title }}</span>
            </div>
            <div class="data">
                <div>监禁仅在线时才会计算时间QWQ</div>
                <el-table :data="historyData.data" style="width: 100%">
                    <el-table-column prop="date" label="日期" min-width="100"></el-table-column>
                    <el-table-column prop="name" label="名称" min-width="100"></el-table-column>
                    <el-table-column prop="type" label="类型" miin-width="100"></el-table-column>
                    <el-table-column prop="time" label="时间" min-width="100"></el-table-column>
                    <el-table-column prop="reason" label="原因" min-width="150"></el-table-column>
                </el-table>
            </div>
        </el-card>
    </el-card>
</template>

<script>
export default {
    name: "RulePage",
    data() {
        return {
            ruleData: "",
            announcementData: "",
            historyData: "",
        }
    },
    methods: {
        getData() {
            this.ruleData = require("../../../static/data/rule.json");
            this.announcementData = require("../../../static/data/announcement.json");
            this.historyData = require("../../../static/data/history.json");
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scoped>
.rulePage {
    margin-bottom: 30px;
    border-radius: 50px;
    position: relative;
    top: -50px;
}

.title {
    font-size: 25px;
    text-align: left;
}
</style>