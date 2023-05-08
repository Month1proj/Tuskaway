interface Person {
    name: string,
    email: string,
    password: string,
    isAdmin: boolean,
    id?: number
  }
  
  class ResetPassword {
    static async getEmail() {
      const resetEmail = ResetPassword.readEmail()
      console.log(resetEmail)
      if (!resetEmail.email || !ResetPassword.isValidEmail(resetEmail.email)) {
        alert("Please enter a valid email address");
        return;
      }
      const response = await fetch("http://localhost:3000/persons");
      const persons = await response.json() as Person[];
      const person = persons.find(person => person.email === resetEmail.email);
      if (!person) {
        alert("Invalid email");
        return;
      }
      console.log(person);
  
      // display user's details
      const userDetails = document.querySelector('#user-details') as HTMLDivElement;
      userDetails.innerHTML = `Name: ${person.name}, Email: ${person.email}, Password: ${person.password}, isAdmin: ${person.isAdmin}`;
    }
    
    static isValidEmail(email: string) {
      const emailRegex = /\S+@\S+\.\S+/;
      return emailRegex.test(email);
    }
    
    static readEmail() {
      const email = document.querySelector('#email') as HTMLInputElement;
      return { email: email.value }
    }
  }
  
  const btn = document.querySelector('#btn') as HTMLButtonElement
  btn.addEventListener('click', async() => {
    ResetPassword.getEmail()
  })
  