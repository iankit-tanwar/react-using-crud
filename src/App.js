
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  //1 hook area
  //const[variable,setVariable]=useState(initailValue);

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Ankit', createdAt: '12345' },
    { id: 2, name: 'tanwar', createdAt: '1243784378345' }]);


  console.log(teachers)


  useEffect(() => {


    fetch('http://localhost:1337/api/teachers').then((res) => { return res.json() })
      .then((data) => {
        console.log(data.data)

        let newobj = data.data.map((cv, idx, arr) => {
          return {
              id: cv.id,
              name: cv.attributes.name,
              createdAt: cv.attributes.createdAt
          }
      
      
      })
        setTeachers(newobj);

      }).catch()

  }, []);


  //2 function area


  //3 return statement
  return (
    <>
      <div className='container mt-5 '>
        <form >
          <div className="mb-3 ">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <br />
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>

              <th scope="col">createdAt</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers.map((cv, idx, arr) => {
                return <tr>
                  <td >{cv.id}</td>
                  <td>{cv.name}</td>
                  <td>{cv.createdAt}</td>

                </tr>
              })
            }

          </tbody>
        </table>
      </div>


    </>
  );
}

export default App;
