import React, {useState} from 'react'
import './App.css'



const App = () => {

    const [cal, setCal] = useState('');

    const a = ['+', '-', '*', '/', '.'];

    const update = (event) => {
        if (a.includes(event.target.name) && cal === '' || a.includes(event.target.name) && a.includes(cal.slice(-1))) {
            return;
        }
        setCal(cal + event.target.name);
    }

    const calculation = (event) => {
         
        if (!a.includes(event.target.name)) {
            setCal(eval(cal).toString());   
        }
    }

    const clear = () => {
        setCal('');
    }

    return (
        <div className='interface'>
            <div className='answer'>
                <button name='C' onClick={clear} className='ans-btn'>{cal !== '' ? 'C' : ''}</button>
                <h3>{cal == ''? 0 : cal}</h3>
            </div>
             <div className='div-btns'>
                    <button onClick={update} className='btn' name='1'>1</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='2'>2</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}   className='btn' name='3'>3</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}   className='btn btn-cal' name='+'>+</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='4'>4</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='5'>5</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='6'>6</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn btn-cal' name='-'>-</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='7'>7</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='8'>8</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='9'>9</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn btn-cal' name='*'>*</button>
            </div>
            <div className='div-btns'>
                    <button onClick={update}  className='btn' name='0'>0</button>
            </div>

            <div className='div-btns'>
                    <button onClick={update}  className='btn btn-cal' name='/'>/</button>
            </div>
            <div className='div-btns'>
                <button className='btn btn-cal' onClick={update} name='.'>.</button>
            </div>
            <div className='div-btns'>
                <button className='btn btn-cal'
                    onClick={calculation} name='='>=</button>
            </div>
           
            
        </div>
    )
}

export default App;