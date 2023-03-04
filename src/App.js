
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
  let sendData=()=>{
    console.log(teachers)
  }
    let deleteTeacher=(e)=>{
    let ans = window.confirm("Do you want delete");

    let re = e.target.closest('tr');

    console.log(e.target.closest('tr').querySelector('td:first-child').innerHTML) ;

    let delid = e.target.closest('tr').querySelector('td:first-child').innerHTML ;


    console.log( typeof ans);

    if(ans === true)
    {
      fetch(`http://localhost:1337/api/teachers/${delid}`,
     { method:"DELETE"}
      )
      .then((res)=>{return res.json();})
      .then((data)=>{ 
        re.remove(); 
        console.log(data); 
        window.alert('Deleted successfully')
      
      
      })
      .catch((err)=>{});
    
    }else{
      console.log('not ok')

    }
  }


  //3 return statement
  return (
    <>
      <div className='container mt-5 '>
        <form >
          <h1>CREATE TEACHER</h1>
          <div className="mb-3 ">
            <label htmlFor="name" className="form-label">Teacher Name</label>
            <input type="name" className="form-control" id="name" aria-describedby="name" />
            
          </div>
          
          <button type="button" onClick={sendData} className="btn btn-primary">Submit</button>
        </form>
        <br />
        <hr />

        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>

              <th scope="col">createdAt</th>
              <th scope="col ">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              teachers.map((cv, idx, arr) => {
                return <tr>
                  <td >{cv.id}</td>
                  <td>{cv.name}</td>
                  <td>{cv.createdAt}</td>
                  <td><button className='btn btn-success btn-sm ms-3'>view</button>
                  <button className='btn btn-primary btn-sm ms-3'>edit</button>
                  <button className='btn btn-danger btn-sm ms-3' onClick={(e)=>{deleteTeacher(e)}} >delete</button></td>

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
