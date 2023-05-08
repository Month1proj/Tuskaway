interface Person {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
  id?: number;
  picture?: string;
}

class RegisterUser {
  static async registerPerson() {
    const newPerson = RegisterUser.getReadData();
    console.log(newPerson);

    // Check if email already exists
    const response = await fetch("http://localhost:3000/persons");
    const persons = await response.json() as Person[];
    const existUser = persons.find((person) => person.email === newPerson.email);
    if (existUser) {
      alert(`The email ${existUser.email} is already in use. Please use a different email address or login instead.`);
      return;
    }

    // Validate form data
    if (!newPerson.name || !newPerson.email || !newPerson.password) {
      alert("Please fill in all fields");
      return;
    }
    if (!RegisterUser.isValidEmail(newPerson.email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Send POST request to server to register new person
    const responses = await fetch("http://localhost:3000/persons", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });
    const data = await responses.json();
    console.log(data);
       // Redirect to login.html after successful registration
       window.location.replace("login.html");
  }

  static isValidEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  }

  static async getPerson() {
    const response = await fetch("http://localhost:3000/persons");
    const persons = await response.json() as Person[];
    console.log(persons);
  }

  static getReadData() {
    const name = document.querySelector("#name") as HTMLInputElement;
    const email = document.querySelector("#email") as HTMLInputElement;
    const password = document.querySelector("#password") as HTMLInputElement;
    const photo = document.querySelector("#pic") as HTMLInputElement;
    return {
      name: name.value,
      email: email.value,
      password: password.value,
      isAdmin: false,
      picture: photo.value || "https://i.stack.imgur.com/l60Hf.png",
    };
  }
}

const button = document.querySelector("#btn") as HTMLButtonElement;
button.addEventListener("click", async (e) => {
  console.log("click");
  e.preventDefault();
  await RegisterUser.registerPerson();
});
