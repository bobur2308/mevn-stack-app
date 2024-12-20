<script setup>
const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg',
    creator: 'John Doe',
    createdAt: '2024-12-20 08:00:00',
  },
  {
    id: 2,
    title: 'Post 2',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg',
    creator: 'Jane Smith',
    createdAt: '2024-12-19 15:30:00',
  },
  {
    id: 3,
    title: 'Post 3',
    content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    imageUrl: 'https://t3.ftcdn.net/jpg/05/80/90/24/360_F_580902442_xmjBIVys6czucJ4T8JgbSxh6h7EAAn1P.jpg',
    creator: 'Alice Johnson',
    createdAt: '2024-12-18 10:45:00',
  },
];
</script>

<template>
  <div class="container mt-4">
    <!-- Featured Posts Section -->
    <div class="row">
      <div v-for="post in posts" :key="post.id" class="col-md-4 mb-4">
        <div class="card h-100">
          <img :src="post.imageUrl" :alt="post.title" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.content }}</p>
          </div>
          <!-- Footer with creator and creation date -->
          <div class="card-footer d-flex justify-content-between align-items-center">
            <span>{{ post.creator }}</span>
            <span>{{ new Date(post.createdAt).toLocaleString() }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.card-footer {
  font-size: 0.875rem;
  color: #555;
}

img {
  max-width: 100%;
  height: auto;
}
</style>
