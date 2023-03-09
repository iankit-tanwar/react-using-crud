
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

//defination area
export default function UpdateTeacher() {


    const [searchParams,setSearchParams]=useSearchParams();

    console.log(searchParams.get("id"))

    //2.1hook area
  useEffect(()=>{
    console.log(searchParams.get("name"))
    
  })


    //2.2function defination area
    let changeValue = () => { }



    let sendData = () => { }


    //2.3return statement
    return (
        <>
            <div className='container'>
                <h1>EDIT TEACHER</h1>
                <form >
                    <input  type= "hidden" name='id' value={searchParams.get("id")} />

                    <div className="mb-3 ">
                        <label htmlFor="teachername" className="form-label">Teacher Name</label>
                        <input type="text" className="form-control" id="teachername" name='name' value={searchParams.get("name")} onChange={(e) => { changeValue(e) }} aria-describedby="name" />

                    </div>

                    <button type="button" onClick={() => { sendData() }} className="btn btn-primary">Submit</button>
                </form>
            </div>

        </>
    )
}
