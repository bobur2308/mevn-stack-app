<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form data
const title = ref('');
const content = ref('');
const image = ref(null);  // To hold the selected image

// Error and success messages
const errorMessage = ref('');
const successMessage = ref('');

// Handle form submission
const submitPost = async () => {
  const formData = new FormData();

  // Append data to formData
  formData.append('title', title.value);
  formData.append('content', content.value);
  if (image.value) {
    formData.append('image', image.value);  // Append image
  }

  try {
    const response = await axios.post('/api/posts', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',  // Set the content type for file uploads
      },
    });

    // On success, show success message and redirect
    successMessage.value = 'Post created successfully!';
    setTimeout(() => {
      router.push('/'); // Redirect to home or posts list after success
    }, 2000);
  } catch (error) {
    errorMessage.value = 'Error creating post. Please try again.';
  }
};
</script>

<template>
  <div class="container mt-5">
    <h2>Add New Post</h2>

    <form @submit.prevent="submitPost">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          v-model="title"
          type="text"
          class="form-control"
          id="title"
          placeholder="Enter post title"
          required
        />
      </div>

      <div class="mb-3">
        <label for="content" class="form-label">Content</label>
        <textarea
          v-model="content"
          class="form-control"
          id="content"
          rows="5"
          placeholder="Enter post content"
          required
        ></textarea>
      </div>

      <!-- Image upload field -->
      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <input
          type="file"
          class="form-control"
          id="image"
          @change="event => image.value = event.target.files[0]"
        />
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Submit Post</button>
      </div>

      <!-- Error and success messages -->
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
      <div v-if="successMessage" class="alert alert-success">{{ successMessage }}</div>
    </form>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
}
</style>
