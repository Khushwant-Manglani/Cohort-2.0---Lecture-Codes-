function App() {
  return <div>
    <CardWrapper>
      <CardWrapper>
        <TextComponent />
      </CardWrapper>
    </CardWrapper>

    <CardWrapper>
      Hii there 
    </CardWrapper>
  </div>  
}

function CardWrapper({ children }) {
  console.log(children);
  
  // create a div with the border: (hint: 2px solid black)
  // and inside the div, renders the prop

  return <div style={{ border: "2px solid black", margin: 10}}>
    <h1>{ children }</h1>
  </div>

}

function TextComponent() {
  return <div>
    Hii there from TextComponent
  </div>
}

export default App
