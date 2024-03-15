function App() {
  return (
    <div className="grid grid-cols-12" >
      {/* After mid breakpoint */}
      <div className="col-span-12 md:col-span-5" style={{ background: "green" }} >
        Hii there from first div
      </div>
      <div className="col-span-12 md:col-span-5" style={{ background: "red" }} >
        Hii there from second div
      </div>
      <div className="col-span-12 md:col-span-2" style={{ background: "yellow" }} >
        Hii there from third div
      </div>
    </div>
  )
}

export default App
