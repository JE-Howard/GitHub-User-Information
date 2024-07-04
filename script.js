function cutAtFirstLetter(date) {
    const regex = /^[^a-zA-Z]*[a-zA-Z]/;
    const match = date.match(regex);
    if (match) {
      const index = match.index + match[0].length - 1;
      return date.slice(0,index);
    }
    return '';
  }

async function searchUser(){
    const username = document.getElementById('username').value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (data.message === "Not Found"){
        document.getElementById('user-info').innerHTML = '<p> User not found </p>';
    } else {
        document.getElementById('user-info').innerHTML = `
            <img src="${data.avatar_url}" alt="Avatar" width="30%">
            <p><b>Name:</b> ${data.name}</p>
            <p><b>Username:</b> ${data.login}</p>
            <p><b>Bio:</b> ${data.bio}</p>
            <p><b>Location:</b> ${data.location}</p>
            <p><b>Public Repos:</b> ${data.public_repos}</p>
            <p><b>Public Gists:</b> ${data.public_gists} </p>
            <p><b>Followers:</b> ${data.followers}</p>
            <p><b>Following:</b> ${data.following}</p>
            <p><b>User Since:</b> ${cutAtFirstLetter(data.created_at)}</p>
            <p><a href="${data.html_url}" target="_blank">View Profile</a></p>

        `;
    }
}


