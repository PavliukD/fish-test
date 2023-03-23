import { api } from "./api/api";


function App() {

  const resp = api.get()
  console.log(resp)

  return (
    <div >
      WTF
    </div>
  );
}

export default App;
