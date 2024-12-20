<script setup>
// Example method for handling registration submission
const handleRegister = () => {
  console.log('Register form submitted');
};
</script>

<template>
  <form @submit.prevent="handleRegister">
    <div class="form-group">
      <label for="registerName">Full Name</label>
      <input type="text" class="form-control" id="registerName" placeholder="Enter your name" required />
    </div>
    <div class="form-group">
      <label for="registerEmail">Email address</label>
      <input type="email" class="form-control" id="registerEmail" placeholder="Enter email" required />
    </div>
    <div class="form-group">
      <label for="registerPassword">Password</label>
      <input type="password" class="form-control" id="registerPassword" placeholder="Password" required />
    </div>
    <div class="form-group">
      <label for="registerConfirmPassword">Confirm Password</label>
      <input type="password" class="form-control" id="registerConfirmPassword" placeholder="Confirm password" required />
    </div>
    <button type="submit" class="btn btn-secondary btn-block">Register</button>
  </form>
</template>

<style scoped>
/* Add styles specific to the RegisterForm */
</style>
