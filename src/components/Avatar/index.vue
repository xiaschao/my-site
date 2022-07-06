<template>
  <img
    class="avatar-img avatar-container"
    :src="imgUrl"
    alt=""
    :style="{
      width: size + 'px',
      height: size + 'px',
    }"
  />
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true, //属性值必须要传递过来
    },
    size: {
      type: Number,
      default: 150,
    },
  },
};
</script>

<style scoped>
.avatar-img {
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
