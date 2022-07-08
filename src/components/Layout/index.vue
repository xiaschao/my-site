<template>
  <div class="layout-container">
    <div class="left-container">
      <slot name="left"></slot>
    </div>
    <div class="main-container">
      <slot></slot>
    </div>
    <div class="right-container">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout-container {
  display: flex;
  .left-container,
  .right-container {
    flex: 0 0 auto;
    overflow: hidden;
  }
  .main-container {
    flex: 1 1 auto;
    overflow: hidden;
  }
}
</style>
