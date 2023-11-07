const App = () => {
    return (
      <div>
        <nav></nav>
      </div>
    )
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  )
  

  function AjustarQuantidade(){
    return b = b + 1
  }

  function AjustarPreço() {
    return c = c + 59.99; 
  }

  function AjustarQuantidade2(){
    return b = b - 1
  }

  function AjustarPreço2() {
    return c = c - 59.99; 
  }

  function Ajuste(){
    AjustarPreço();
    AjustarQuantidade()
  }

  function Ajuste2(){
    AjustarPreço2();
    AjustarQuantidade2()
  }

  let c = 59.99
  let b = 1

  console.log (c, b)