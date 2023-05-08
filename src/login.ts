interface person {
    name:string,
    email:string,
    password:string,
    isAdmin:boolean,
    id?:number
}
class LoginUser {
    static async loginUser() {
      const loginData = LoginUser.getLoginData();
      if (!loginData.email || !loginData.password) {
        alert("Please fill in all fields");
        return;
      }
      // Find the person with the given email address
      const response = await fetch("http://localhost:3000/persons");
      const persons = await response.json() as person[];
      const person = persons.find(person => person.email === loginData.email);
      if (!person) {
        alert("Invalid email or password");
        return;
      }
      
      // Check if the password matches
      if (person.password !== loginData.password) {
        alert("Invalid email or password");
        return;
      }
      
      // Redirect to the appropriate page based on user role
      LoginUser.redirectToPage(person);
    }
    
    static getLoginData() {
      const email = document.querySelector('#email1') as HTMLInputElement;
      const password = document.querySelector("#password1") as HTMLInputElement;
      return {email: email.value, password: password.value};
    }
  
    static redirectToPage(person: person) {
      if (person.isAdmin) {
        window.location.href = "../admin/admin.html";
      } else {
        const userPage = window.open("../user/user.html")!;
        userPage.document.write(`
          <h1>Welcome ${person.name}!</h1>
          <p>Email: ${person.email}</p>
        `);
      }
    }
    
  }
  
    


const button1 = document.querySelector("#btn1")as HTMLButtonElement 
button1.addEventListener('click',async(e)=>
    {       console.log('click')
            e.preventDefault()
            await LoginUser.loginUser()

    })

 