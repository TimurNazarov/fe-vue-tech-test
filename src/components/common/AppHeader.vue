<script setup lang="ts">
const menuItems = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Contact Us', route: '/contact-us' }
]
</script>

<template>
  <header class="app-header">
    <div class="app-container">
      <nav class="nav">
        <router-link
            v-for="item in menuItems"
            :key="item.route"
            :to="item.route"
            class="nav-link"
            active-class="active"
        >
          {{ item.label }}
        </router-link>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  background: white;
}

.nav {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #007bff;
}

.router-link-exact-active {
  color: #007bff;
  border-bottom: 2px solid #007bff;
}
</style>
