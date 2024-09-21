<template>
    <div class="container">
      <div class="two_thirds"></div>
      <div class="one_thirds">
        <div class="contact-form-container">
          <form @submit.prevent="submitForm" class="contact-form"> 
            <h2>Contact Us</h2>
            <label for="firstName">First Name:</label>  
            <input type="text" name="firstName" v-model="firstName" required />
  
            <label for="lastName">Last Name:</label>  
            <input type="text" name="lastName" v-model="lastName" required />
  
            <label for="email">Email:</label>  
            <input type="email" name="email" v-model="email" required />
  
            <label for="message">Message:</label>  
            <textarea name="message" v-model="message" required></textarea>
            
            <button type="submit">Submit</button>
          </form>
  
          <transition name="fade">
            <div v-if="successMessage" class="success-message">
              Successfully sent!
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
        successMessage: false
      };
    },
    methods: {
      submitForm() {
        console.log('Form submitted:', { firstName: this.firstName, lastName: this.lastName, email: this.email, message: this.message });
        
        this.successMessage = true;
  
        // Clear form fields
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.message = '';
  
        // Hide the success message after 3 seconds
        setTimeout(() => {
          this.successMessage = false;
        }, 3000);
      }
    }
  };
  </script>
  
  <style scoped>
  body {
    margin: 0;
    font-family: Arial;
    height: 100vh;
    display: flex;
  }
  
  .container {
    display: flex;
    height: 100vh;
    width: 100%;
  }
  
  .two_thirds {
    flex: 2;
    background-color: #7DACFF; 
  }
  
  .one_thirds {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
  }
  
  .contact-form-container {
    width: 300px;
    padding: 20px;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .contact-form h2 {
    margin-bottom: 15px;
  }
  
  .contact-form label {
    display: block;
    margin-bottom: 5px;
  }
  
  .contact-form input,
  .contact-form textarea {
    width: calc(100% - 20px);
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .contact-form button {
    padding: 10px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .contact-form button:hover {
    background-color: #0056b3;
  }
  
  .success-message {
    margin-top: 15px;
    color: green;
    text-align: center;
  }
  
  /* Fade animation */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    opacity: 0;
  }
  </style>