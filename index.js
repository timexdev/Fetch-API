const fetchUsers = () =>{
    fetch('https://api.github.com/users').then((response)=>{
        response.json().then(data =>{
            let content ="";
            data.map((d)=>(
                content +=`
                <div class="col-2 text-center mb-2 shadow-sm p-2">
                <img src="${d.avatar_url}" style="width:100px; border-radius:100%"> <br>
                <b>${d.login}</b> <br>
                <a href="${d.html_url}" target="_blank"><button class="btn btn-success">Open Profile</button></a>
                </div>`
            ))

            userBox.innerHTML = content
        })
    })
}