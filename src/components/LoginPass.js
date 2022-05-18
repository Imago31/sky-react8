/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

function LoginPass() {

  const  regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  const handlerChange = (e) => {
    e.preventDefault();
    const login = document.querySelector("input[name='login']");
    const pass = document.querySelector("input[name='pass']");
    const button = document.querySelector(".button");
    const loginValue = document.querySelector("input[name='login']").value;
    const passValue = document.querySelector("input[name='pass']").value;
    regEmail.test(loginValue);
    if(!regEmail.test(loginValue)){
      const error = document.createElement('p');
      error.textContent = "Введите логин в правильном формате";
      error.classList.add("mesLogin")
      error.style = "color: red";
      login.after(error);
    }
    if(passValue.length < 6){
      const error = document.createElement('p');
      error.textContent = "Пароль должен быть больше 5 символов";
      error.classList.add("mesPass")
      error.style = "color: red";
      pass.after(error);
    }
    if(regEmail.test(loginValue) && passValue.length > 5){
            const error = document.createElement('p');
            error.textContent = "Вы прошли авторизацию";
            error.classList.add("loged")
            error.style = "color: red";
            button.after(error);
    }

  }
  const handlerClick = () => {
    document.querySelector(".mesLogin").remove();
  }
  const handlerClick2 = () => {
    document.querySelector(".mesPass").remove();
  }

 
  return (
    <div>
      <form onSubmit={handlerChange}>
        <input onClick={handlerClick} name="login" placeholder="login" />
        <input onClick={handlerClick2} name="pass" placeholder="pass"/>
        <button className="button" >Login</button>
      </form>
    </div>
  );
}

export default LoginPass;