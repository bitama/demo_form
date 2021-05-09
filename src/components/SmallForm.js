import React,{useState} from 'react'

const SmallForm=()=>{
    const[form,setForm] =useState({
        firstName:"",
        lastName:"",
        reservation:"",
        email:"",
        confirmEmail:"",
        phoneNumber:"",
    })
    const onChangeHandler=(event)=>{
        setForm({
            ...form,
            [event.target.name]:event.target.value
        })

    }
    const nameValid = (str)=>{
        return str.length >=5;
    }
    return(
        <div>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center">
                        <label for="firstName">FirstName</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="firstName"/>
                        {!nameValid(form.firstName) &&<span className="alert-danger"> Must be at least 5 characters</span>}
                        
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="lastName">LastName</label>
                        <input type="text"onChange={onChangeHandler}   className="form-control" name="lastName"/>
                    </div>
                </div>
                <div className="form-group col-md-6 mx-auto center">
                    <label for="reservation">Reservation</label>
                    <input type="datetime-local"onChange={onChangeHandler}  className="form-control" name="reservation"/>
                </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="email">Email</label>
                        <input type="text"onChange={onChangeHandler} className="form-control" name="email"/>
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="confirm email">Confirm email</label>
                        <input type="text"onChange={onChangeHandler} className="form-control" name="confirmEmail"/>``
                    </div>
                    <div className="form-group col-md-6 mx-auto center ">
                        <label for="phoneNumber">PhoneNumbers</label>
                        <input type="tel"onChange={onChangeHandler} className="form-control" name="phoneNUmber"/>
                    </div>
                <button type="submit" className="btn btn-primary mt-4">Reserve</button>
            </form>
        </div>
    )
}
export default SmallForm