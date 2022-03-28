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
            phone: '444'

        }
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