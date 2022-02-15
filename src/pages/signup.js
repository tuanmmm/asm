import { signup } from "../api/users";
const Signup = {
    async render() {
      return `
              <form id="formSignup">
                  <input type="text" placeholder="Username" id="username"/>
                  <input type="email"  placeholder="Email" id="email"/>
                  <input type="password" placeholder="Password" id="password"/>
                  <button type="submit" >Đăng ký</button>
              </form>
          `;
    },
    afterRender() {
      const formSignup = document.querySelector("#formSignup");
      formSignup.addEventListener("submit", (e) => {
        e.preventDefault();
        // call api
        signup({
          username: document.querySelector("#username").value,
          email: document.querySelector("#email").value,
          password: document.querySelector("#password").value,
        }).then(res=>window.location.href="/#/");
        // window.location.href="/#/";
        // thông báo bạn đăng nhập thành công....
      });
    },
  };
  export default Signup;