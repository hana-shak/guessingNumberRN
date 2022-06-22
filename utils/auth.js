import axios from 'axios'; 

const Apikey = 'c9b9'; 
const Apiusername = 'hanashakboua';


export async function createUser(email, password){
    const response = await axios.post(
        'http://143.244.183.12:4200/users.json?Api-Key=' + Apikey + '&Api-Username=' + Apiusername,
        {
            "name": "coolest User",
            "email": email,
            "password": password,
            "username": "first name",
            "active": true,
            "approved": true,
           " user_fields[1]": true,
            "external_ids": {}
          }
        //   {
        //     "name": "lolo",
        //     "email": "lolo@gmail.com",
        //     "password": "1234567",
        //     "username": "lolo2",
        //     "active": true,
        //     "approved": true,
        //     "user_fields[1]": true,
        //     "external_ids": {}
        //   }
        )
}