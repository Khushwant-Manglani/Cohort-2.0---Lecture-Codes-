function App() {
  return <div>
    {/* This is not the way we define component inside component the cleaner way is in 6 folder */}
    <CardWrapper innerComponent={ <TextComponent /> } />
    <CardWrapper innerComponent={ <TextComponent /> } />

  </div>  
}

function TextComponent() {
 return <div>
  Hii there
 </div> 
}

function CardWrapper({ innerComponent }) {
  // create a div with the border: (hint: 2px solid black)
  // and inside the div, renders the prop

  return <div style={{ border: "2px solid black", margin: 10}}>
    <h1>{ innerComponent }</h1>
  </div>

}

export default App
