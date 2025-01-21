# Axios-Crash-Course

This project demonstrates the use of Axios for making HTTP requests. It includes examples of GET, POST, PUT, DELETE requests, handling responses, intercepting requests and responses, and canceling requests.

## Table of Contents

- [Axios-Crash-Course](#axios-crash-course)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
    - [GET Request](#get-request)
    - [POST Request](#post-request)
    - [PUT Request](#put-request)
    - [DELETE Request](#delete-request)
    - [Handling Responses](#handling-responses)
    - [Intercepting Requests \& Responses](#intercepting-requests--responses)
    - [Canceling Requests](#canceling-requests)
  - [Styling](#styling)
    - [CSS](#css)
    - [JavaScript](#javascript)
  - [Footer](#footer)
    - [HTML](#html)
  - [License](#license)
  - [Snapshot](#snapshot)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/suhelkhanca/Axios-Crash-Course.git
    ```
2. Navigate to the project directory:
    ```sh
    cd Axios-Crash-Course
    ```
3. Open `index.html` in your browser to view the application.

## Usage

This project demonstrates various features of Axios, including making HTTP requests, handling responses, intercepting requests and responses, and canceling requests.

## Features

### GET Request

```javascript
axios
  .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  .then((response) => showOutput(response))
  .catch((error) => console.error(error));
```

### POST Request

```javascript
axios
  .post("https://jsonplaceholder.typicode.com/todos", {
    title: "New Todo",
    completed: false,
  })
  .then((response) => showOutput(response))
  .catch((error) => console.error(error));
```

### PUT Request

```javascript
axios
  .put("https://jsonplaceholder.typicode.com/todos/1", {
    title: "Updated Todo",
    completed: true,
  })
  .then((response) => showOutput(response))
  .catch((error) => console.error(error));
```

### DELETE Request

```javascript
axios
  .delete("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => showOutput(response))
  .catch((error) => console.error(error));
```

### Handling Responses

```javascript
function showOutput(response) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${response.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">Headers</div>
      <div class="card-body">
        <pre>${JSON.stringify(response.headers, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">Data</div>
      <div class="card-body">
        <pre>${JSON.stringify(response.data, null, 2)}</pre>
      </div>
    </div>
    <div class="card mt-3">
      <div class="card-header">Config</div>
      <div class="card-body">
        <pre>${JSON.stringify(response.config, null, 2)}</pre>
      </div>
    </div>
  `;
}
```

### Intercepting Requests & Responses

```javascript
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

### Canceling Requests

```javascript
const source = axios.CancelToken.source();

axios
  .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
    cancelToken: source.token,
  })
  .then((response) => showOutput(response))
  .catch((thrown) => {
    if (axios.isCancel(thrown)) {
      console.log("Request cancelled", thrown.message);
    }
  });

if (true) {
  source.cancel("Request cancelled!");
}
```

## Styling

The project includes a dark and bright mode feature. You can toggle between the two modes using the "Toggle Theme" button.

### CSS

```css
body.dark-mode {
  background-color: #000;
  color: #fff;
}

body.bright-mode {
  background-color: #fff;
  color: #000;
}

#res.dark-mode {
  background-color: #333;
  color: #fff;
}

#res.bright-mode {
  background-color: #f9f9f9;
  color: #000;
}
```

### JavaScript

```javascript
document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("bright-mode");
  document.getElementById("res").classList.toggle("dark-mode");
  document.getElementById("res").classList.toggle("bright-mode");
});
```

## Footer

The footer includes your name, email, and social media links using FontAwesome icons.

### HTML

```html
<footer class="bg-dark text-white text-center py-4 mt-5 rounded">
  <div class="container">
    <p class="mb-1">&copy; 2023 Suhel Khan</p>
    <p class="mb-1">
      Email:
      <a href="mailto:suhelkhanca@gmail.com" class="text-white"
        >suhelkhanca@gmail.com</a
      >
    </p>
    <div class="d-flex justify-content-center">
      <a href="https://www.facebook.com" class="text-white mx-2"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://www.twitter.com" class="text-white mx-2"
        ><i class="fab fa-twitter"></i
      ></a>
      <a href="https://www.linkedin.com" class="text-white mx-2"
        ><i class="fab fa-linkedin-in"></i
      ></a>
      <a href="https://www.github.com" class="text-white mx-2"
        ><i class="fab fa-github"></i
      ></a>
    </div>
  </div>
</footer>
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This documentation provides an overview of the project, including installation instructions, usage examples, and details about the various features implemented using Axios.

## Snapshot
![image](https://github.com/user-attachments/assets/165790ea-24e0-4bb2-84af-9ae4bb1b9508)
![image](https://github.com/user-attachments/assets/eb6f7aa7-02ce-4a80-a577-54fe8d03465a)
![image](https://github.com/user-attachments/assets/2fae2e55-1673-4175-a452-c4ff77e8f691)
![image](https://github.com/user-attachments/assets/8e8ce02a-98e2-414d-93b0-ce5ce3438e99)
