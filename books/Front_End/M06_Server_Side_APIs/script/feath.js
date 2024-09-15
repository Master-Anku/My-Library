var repoList = document.querySelector('ul');
var fetchButton = document.getElementById('fetch-button');

function getApi() {
  // Replace `octocat` with anyone else's GitHub username
//   var requestUrl = 'https://api.github.com/users/octocat/repos';
  var requestUrl = 'https://api.github.com/users/Master-Anku/repos';
    console.log(requestUrl);
  fetch(requestUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        console.log(data);
      for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.textContent = data[i].html_url;
        repoList.appendChild(listItem);
      }
    });
}

fetchButton.addEventListener('click', getApi);
