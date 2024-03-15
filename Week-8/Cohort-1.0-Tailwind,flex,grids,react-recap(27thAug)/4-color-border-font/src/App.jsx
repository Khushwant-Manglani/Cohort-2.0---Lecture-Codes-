function App() {
  return (
    <div>
      {/* <div style={{ background: "green", color: "red", fontSize: "12px", borderRadius: "4px" }} >
        Hii there from first div
      </div> */}

      {/* With tailwind */}
      <div className="bg-green-500 text-red-500 text-xs rounded" >
        Hii there from first div
      </div>
    </div>
  )
}

export default App
