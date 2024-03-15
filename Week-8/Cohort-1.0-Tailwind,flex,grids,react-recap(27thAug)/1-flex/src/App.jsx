function App() {
  return (
    // <div style={{ display: "flex", justifyContent: "space-between" }} >
    //   <div style={{ background: "green" }} >
    //     Hii there from first div
    //   </div>
    //   <div style={{ background: "red" }} >
    //     Hii there from second div
    //   </div>
    //   <div style={{ background: "yellow" }} >
    //     Hii there from third div
    //   </div>
    // </div>

    // With tailwind

    <div className="flex justify-between" >
      <div style={{ background: "green" }} >
        Hii there from first div
      </div>
      <div style={{ background: "red" }} >
        Hii there from second div
      </div>
      <div style={{ background: "yellow" }} >
        Hii there from third div
      </div>
    </div>
  )
}

export default App
