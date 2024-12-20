<script setup>
const posts = [
  {
    id: 1,
    title: 'Post 1',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg', // Example image
  },
  {
    id: 2,
    title: 'Post 2',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg', // Example image
  },
  {
    id: 3,
    title: 'Post 3',
    summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg', // Example image
  },
];
</script>

<template>
  <div class="container mt-4">
    <!-- Header Section with Image and Text -->
    <div class="row align-items-center mb-5">
      <div class="col-md-6">
        <h1 class="display-4">Welcome to the Blog</h1>
        <p class="lead">
          This is where you can explore insightful articles and discover
          updates on a variety of topics. Join us and start reading today!
        </p>
        <router-link to="/post" class="btn btn-primary btn-lg">
          View All Posts
        </router-link>
      </div>
      <div class="col-md-6">
        <img
          src="https://plus.unsplash.com/premium_photo-1684581214880-2043e5bc8b8b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZyUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
          alt="Blog Image"
          class="img-fluid rounded shadow"
        />
      </div>
    </div>

    <!-- Featured Posts Section -->
    <div class="row">
      <div
        v-for="post in posts"
        :key="post.id"
        class="col-md-4 mb-4"
      >
        <div class="card h-100">
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.summary }}</p>
            <router-link
              :to="`/post/${post.id}`"
              class="btn btn-primary"
            >
              Read More
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

.card {
  border-radius: 8px;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
