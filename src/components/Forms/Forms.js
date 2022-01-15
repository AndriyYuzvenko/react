import React, {useState} from 'react';

const Forms = ({getFilter}) => {
    const [forms, setForms] = useState({name: '', username: '', email: ''})
    const chooseFilter = (e) => {
        setForms({...forms, [e.target.name]: e.target.value})
    }
    const click = (e) => {
        e.preventDefault()
        getFilter(forms)
    }
    return (
        <div>
            <form>
                <label>Name:<input type="text" name={'name'} value={forms.name} onChange={chooseFilter}/></label>
                <label>Username:<input type="text" name={'username'} value={forms.username}
                                       onChange={chooseFilter}/></label>
                <label>Email:<input type="text" name={'email'} value={forms.email} onChange={chooseFilter}/></label>
                <button onClick={click}>Find</button>
            </form>
        </div>
    );
};

export default Forms;