function App() {
  return (
    // <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }} >
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

    // Example-1

    // <div className="grid grid-cols-3" >
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

    // Example-2

    <div className="grid grid-cols-12" >
      <div className="col-span-5" style={{ background: "green" }} >
        Hii there from first div
      </div>
      <div className="col-span-5" style={{ background: "red" }} >
        Hii there from second div
      </div>
      <div className="col-span-2" style={{ background: "yellow" }} >
        Hii there from third div
      </div>
    </div>
  )
}

export default App
