<template>
  <button class="burger-button" type="button" />
</template>
<style scoped lang="scss">
.burger-button {
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  color: #ffffff;
  border: none;
  width: 48px;
  aspect-ratio: 1;
  position: relative;
  border-radius: 7px;
}

@media (max-width: 640px) {
  .burger-button {
    width: 36px;
  }
}

.burger-button::after {
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  content: '';
  width: 50%;
  height: 2px;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow:
    0 -8px,
    0 8px;
}
</style>
