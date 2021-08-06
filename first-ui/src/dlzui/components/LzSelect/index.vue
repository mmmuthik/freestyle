<template>
  <div>
    <button @click="handleClick">BUTTON</button>
    <ul class="lz-select-dropdown" :class="{show}">
      <li>12313</li>
      <li>12313</li>
      <li>12313</li>
      <li>12313</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "LzSelect",
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleClick() {
      this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
.lz-select-dropdown {
  width: 100px;
  background-color: #f00;
  opacity: 0;
  transform: rotateX(90deg);
  transition: all ease 300ms;

  &.show {
    animation: selectFadeIn 500ms forwards;
  }
}

@keyframes selectFadeIn {
  0% {
    opacity: 0;
    transform: rotateX(90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0);
  }
}

@keyframes selectFadeOut {
  0% {
    opacity: 1;
    transform: rotateX(0);
  }
  100% {
    opacity: 0;
    transform: rotateX(90deg);
  }
}
</style>

<style>
.lz-select-dropdown {
  margin: 0;
  padding: 0;
}
</style>
