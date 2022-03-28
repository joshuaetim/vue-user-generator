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
    created() {
        fetch('https://randomuser.me/api')
        .then(function(res) {
            return res.json()
        })
        .then(result => {
            let results = result.results

            this.dob = results[0].dob.date
            this.age = results[0].dob.age
            this.title = results[0].name.title
            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
            this.street = results[0].location.street.number + " " + results[0].location.street.name
            this.city = results[0].location.city
            this.state = results[0].location.state
            this.postcode = results[0].location.postcode
            this.phone = results[0].phone
            this.username = results[0].login.username
            this.password = results[0].login.password

        })

        // console.log(results)

        // this.firstName = results[0].name.first
        // this.lastName = results[0].name.last
        // this.email = results[0].email
        // this.gender = results[0].gender
        // this.picture = results[0].picture.large
    },
    methods: {
        async getUser(){
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()

            // console.log(results)

            this.firstName = results[0].name.first
            this.lastName = results[0].name.last
            this.email = results[0].email
            this.gender = results[0].gender
            this.picture = results[0].picture.large
        }
    },
})

app.mount('#app')