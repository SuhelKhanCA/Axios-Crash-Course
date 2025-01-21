// AXIOS GLOBAL
axios.defaults.headers.common["X-Auth-Token"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// GET REQUEST
function getTodos() {
  console.log("GET Request");
  // axios({
  //   method: "GET",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   params : {
  //       _limit : 5
  //   }
  // }).then(
  //   (response) => showOutput(response)
  // ).catch (err => console.log(err)
  // );

  // axios.get('https://jsonplaceholder.typicode.com/todos', { params: { _limit: 5 } })
  //   .then(response => showOutput(response))
  //   .catch(err => console.error(err));

  // axios
  //   .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
  //   .then((response) => showOutput(response))
  //   .catch((err) => console.error(err));
  
  // USE timeout if needed
  axios
    .get("https://jsonplaceholder.typicode.com/todos", { timeout : 5000 })
    .then((response) => showOutput(response))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log("POST Request");
  // axios({
  //   method: "POST",
  //   url: "https://jsonplaceholder.typicode.com/todos",
  //   data : {
  //     title: 'New Todo',
  //     completed : false
  //   }
  // }).then(
  //   (response) => showOutput(response)
  // ).catch (err => console.log(err)
  // );
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New todo 1",
      completed: false,
    })
    .then((response) => showOutput(response))
    .catch((err) => console.error(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  console.log("PUT/PATCH Request");
  // PUT
  // axios
  //   .put("https://jsonplaceholder.typicode.com/todos/1", {
  //     title: "This is updated New todo 1",
  //     completed: true,
  //   })
  //   .then((response) => showOutput(response))
  //   .catch((err) => console.error(err));

  // PATCH : userId won't gayab
  axios
    .patch("https://jsonplaceholder.typicode.com/todos/1", {
      title: "This is updated New todo 1",
      completed: true,
    })
    .then((response) => showOutput(response))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE Request");
  axios
    .delete("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => showOutput(response))
    .catch((err) => console.error(err));
}

// SIMULTANEOUS DATA
function getData() {
  console.log("Simultaneous Request");
  axios
    .all([
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
      axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5"),
    ])
    .then((response) => {
      console.log(response[0]);
      console.log(response[1]);

      showOutput(response[1]);
    })
    .catch((err) => console.error(err));
}

// CUSTOM HEADERS
function customHeaders() {
  console.log("Custom Headers");
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization : 'some JWT token'
    }
  }
  axios
    .post("https://jsonplaceholder.typicode.com/todos", {
      title: "New todo 3",
      completed: false,
    }, config)
    .then((response) => showOutput(response))
    .catch((err) => console.error(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  console.log("Transform Response");

  const options = {
    method: "POST",
    url: "https://jsonplaceholder.typicode.com/todos",
    data: {
      title : 'Hello World!'
    },
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data;
    })
  };
  axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  console.log("Error Handling");
  axios
    .get("https://jsonplaceholder.typicode.com/todosss?_limit=5", {
      // Limit the catch
      validateStatus: function (status) {
        return status < 500; // Reject only if status is greater
      }
    })
    .then((response) => showOutput(response))
    .catch((error) => {
      if (error.response) {
        // Server Responded with a status other than 200 range
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);

        if (error.response.status === 404) {
          alert('Error : Page Not Found');
        }
      } else if (error.request) {
        // Request was made but there was no response
        console.error(error.request);
      } else {
        console.error(error.message);
      }
    });
}

// CANCEL TOKEN
function cancelToken() {
  console.log("Cancel Token");

  const source = axios.CancelToken.source();

  axios
    .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
      cancelToken : source.token
    })
    .then((response) => showOutput(response))
    .catch(thrown => {
      if (axios.isCancel(thrown)) {
        console.log('Request cancelled', thrown.message);
      }
    });
  
  if(true) {
    source.cancel('Request cancelled !');
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  (config) => {
    console.log(
      `${config.method.toUpperCase()} request send to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES

const axiosInstance = axios.create({
  // other custom settings
  baseURL: "https://jsonplaceholder.typicode.com"
});

// automatic runs
// axiosInstance.get('/comments').then(response => showOutput(response)).catch(error => console.error(error));

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
document.getElementById("sim").addEventListener("click", getData);
document.getElementById("headers").addEventListener("click", customHeaders);
document
  .getElementById("transform")
  .addEventListener("click", transformResponse);
document.getElementById("error").addEventListener("click", errorHandling);
document.getElementById("cancel").addEventListener("click", cancelToken);
