const app = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            gender: 'male',
            title: "Mr.",
            picture: 'https://randomuser.me/portraits/men/20.jpg',
            email: 'patrickstar@gmail.com',
            dob: 'ttt',
            age: 23,
            street: 'rand',
            postcode: 'rand',
            state: 'rand',
            city: 'rand',
            phone: '444',
            username: 'josh',
            password: 'secret'

        }
    },
    mounted() {
        fetchDataAPI(this)
    },
    methods: {
        getUser(){
            fetchDataAPI(this)
        }
    },
})

function updateFields(that, results) {
    that.dob = new Date(results[0].dob.date).toLocaleDateString()
    that.age = results[0].dob.age
    that.title = results[0].name.title
    that.firstName = results[0].name.first
    that.lastName = results[0].name.last
    that.email = results[0].email
    that.gender = results[0].gender
    that.picture = results[0].picture.large
    that.street = results[0].location.street.number + " " + results[0].location.street.name
    that.city = results[0].location.city
    that.state = results[0].location.state
    that.postcode = results[0].location.postcode
    that.phone = results[0].phone
    that.username = results[0].login.username
    that.password = results[0].login.password
}

async function fetchDataAPI(that) {
    const res = await fetch('https://randomuser.me/api')
    const { results } = await res.json()

    updateFields(that, results)
}

app.mount('#app')