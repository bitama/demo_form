import React,{useState} from "react";
const BigForm = (props) => {
    const[firstName,setFirstName]=useState("")
    const[lastName,setLastName]=useState("")
    const[reservation,setReservation]=useState("")
    const[email,setEmail]=useState("")
    const[confirm,setConfirmEmail]=useState("")
    const[phone,setPhone]=useState("");
    
    
    const[firstNameError,setFirstNameError]=useState("")

    const onFirstNameChange =(event) => {
        setFirstName(event.target.value);
        if(event.target.value.length < 3){
            setFirstNameError("FistName must be at least 3 characters!!")
        }
        else{
            setFirstNameError("")
        }
    }
    const onLastNameChange =(event) => {
        setLastName(event.target.value);
    }
    const onReservationChange =(event) => {
        setReservation(event.target.value);
    }
    const onEmailChange =(event) => {
        setEmail(event.target.value);
    }
    const onConfirmEmailChange =(event) => {
        setConfirmEmail(event.target.value);
    }
    const onPhoneChange =(event) => {
        setPhone(event.target.value);
    }
    return(
    <div className="max-auto center">
        <form>
            <div className="form-row">
                <div className="form-group col-md-6 mx-auto center">
                    <label for="firstName">FirstName</label>
                    <input type="text" onChange={onFirstNameChange}className="form-control" name="firstName"/>
                    <span className="alert-danger">{firstNameError}</span>
                </div>
                <div className="form-group col-md-6 mx-auto center ">
                    <label for="lastName">LastName</label>
                    <input type="text"onChange={onLastNameChange}  className="form-control" name="lastName"/>
                </div>
            </div>
            <div className="form-group col-md-6 mx-auto center">
                <label for="reservation">Reservation</label>
                <input type="datetime-local"onChange={onReservationChange} className="form-control" name="reservation"/>
            </div>
                <div className="form-group col-md-6 mx-auto center ">
                    <label for="email">Email</label>
                    <input type="text"onChange={onEmailChange} className="form-control" name="email"/>
                </div>
                <div className="form-group col-md-6 mx-auto center ">
                    <label for="confirm email">Confirm email</label>
                    <input type="text"onChange={onConfirmEmailChange} className="form-control" name="confirmEmail"/>``
                </div>
                <div className="form-group col-md-6 mx-auto center ">
                    <label for="phoneNumber">PhoneNumbers</label>
                    <input type="tel"onChange={onPhoneChange} className="form-control" name="phoneNUmber"/>
                </div>
            <button type="submit" className="btn btn-primary mt-4">Reserve</button>
        </form>
    </div>
    )
}
export default BigForm