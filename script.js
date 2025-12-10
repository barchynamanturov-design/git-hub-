let avatar = document.getElementById('avatar')
let login = document.getElementById('login')
let user_id = document.getElementById('user_id')
let inp = document.getElementById('inp')

const getgithab = async () => {
    let response = await fetch(`https://api.github.com/search/users?q=${inp.value}`)
    let data = await response.json()
    console.log(data)

    if (data.items.length === 0) {
        login.innerHTML = "Пользователь не найден"
        avatar.src = ""
        user_id.innerHTML = ""
    }

    login.innerHTML = data.items[0].login
    avatar.src = data.items[0].avatar_url
    user_id.innerHTML = data.items[0].id
};