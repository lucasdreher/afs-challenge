<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/transfers">Transfers</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// colors
$primary: #42b983;
$text-color: #2c3e50;
$white: #fff;

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $text-color;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $text-color;
    border-bottom: 2px solid transparent;
    transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out;

    &:hover {
      border-color: $text-color;
    }

    &.router-link-exact-active {
      color: $primary;

      &:hover {
        border-color: $primary;
      }
    }
  }
}

input {
  border: 0;
  border-bottom: 2px solid $text-color;
  transition: border-color 0.3s ease-in-out;
  padding-top: 0.2rem;

  &:active,
  &:focus,
  &:focus-visible {
    border-color: $primary;
    outline: none;
  }
}

// buttons
.btn {
  padding: 0.5em 1em;
  font-weight: 700;
  border: 2px solid $text-color;
  background-color: $text-color;
  color: $white;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out, border-color 0.3s ease-in-out,
    background-color 0.3s ease-in-out;
}

.btn-primary {
  background-color: $primary;
  border-color: $primary;

  &:hover {
    background-color: darken($primary, 20%);
    border-color: darken($primary, 20%);
  }
}

.btn-primary-ghost {
  background-color: transparent;
  border-color: $primary;
  color: $primary;

  &:hover {
    border-color: darken($primary, 20%);
    color: darken($primary, 30%);
  }
}
</style>
