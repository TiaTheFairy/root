<template>
  <div id="frame" :style="{ height: height + 'px', display: hide ? 'none' : 'flex' }" key="index">
    <div class="logo">
      <div class="image">
        <el-image style="width: 30px; height: 30px" :src="logoicon" fit="fit"></el-image>
      </div>
      <div class="name">TTFL</div>
    </div>

    <div class="links">
      <span class="linkItem">首页</span>
      <span class="linkItem" @click="gotoLink('http://wiki.mc.ttfl.net')">百科</span>
      <span class="linkItem" @click="gotoLink('')">地图</span>
      <span class="linkItem" @click="gotoLink('')">Coding</span>
      <span class="linkItem">
        <el-dropdown @command="gotoLink">
          <span class="el-dropdown-link linkItem">
            项目<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="">Tia Dos 记事本</el-dropdown-item>
            <el-dropdown-item command="">Tia Mini 小游戏</el-dropdown-item>
            <el-dropdown-item command="">暨小园 校园论坛</el-dropdown-item>
            <el-dropdown-item command="">旧版官网</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span class="linkItem">
        <el-dropdown @command="gotoLink">
          <span class="el-dropdown-link linkItem">
            相关链接<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="https://minecraft.net">Minecraft</el-dropdown-item>
            <el-dropdown-item command="https://namemc.come">NameMC</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header-Bar",
  props: {
    height: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      logoicon: require("../../../static/images/logoicon.png"),
      hide: false
    }
  },
  methods: {
    gotoLink(target) {
      if (target == "") {
        this.$message({
          message: '该网站还未做解析呢',
          type: 'warning'
        });
      } else {
        window.open(target)
      }
    }
  }
}
</script>

<style scoped>
#frame {
  width: 100%;
  background-color: lightgray;
  position: fixed;
  top: 0;
  left: 0;
  transition: height 0.3s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
}

.links {
  display: flex;
  align-items: center;
}

.linkItem {
  margin-inline: 10px;
  cursor: pointer;
  font-size: 20px;
}

.linkItem:hover {
  text-decoration: underline;
  font-weight: bold;
}

.logo {
  display: flex;
  align-items: center;
}

.logo .image {
  margin-right: 10px;
}

.logo .name {
  font-size: 20px;
}
</style>
