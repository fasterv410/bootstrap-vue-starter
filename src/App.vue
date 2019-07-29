<template>
  <div id="app">
    <router-view name="header" />
    <main id="main_container">
      <router-view />
    </main>
    <router-view name="navigator" />
  </div>
</template>
