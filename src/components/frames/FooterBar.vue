<template>
  <div>
    <el-divider>
      <el-image style="width: 30px; height: 30px" :src="logoicon" fit="fit"></el-image>
    </el-divider>



    <div>
      版权所有:
      © 2016-2024 ttfl.net 版权所有
    </div>

    <div>
      备案号:
      xxxxxxxxxxxxxxxxxxxxx
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer-Bar",
  data() {
    return {
      logoicon: require("../../../static/images/logoicon.png")
    }
  }
}
</script>

<style scoped></style>