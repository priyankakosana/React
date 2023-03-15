import './App.css';
import {useState} from 'react';
import Axios from 'axios';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LightbulbIcon from '@mui/icons-material/LightbulbCircle';
import InputAdornment from '@mui/material/InputAdornment';

function App() {
  const [data, setData] = useState('Lets play with Numbers!!')
  const [input, setInput] = useState('')

  
  const handleInput = (inp) => {
    const regex = /^[0-9\b]+$/;
    if (inp.target.value === "" || regex.test(inp.target.value)) {
      setInput(inp.target.value)
    }
  }

  const handleAPI = () => {
      Axios.get(`http://numbersapi.com/${input?input:0}`)
      .then(res => {
        console.log("Getting from Server ::::", res.data)
        setData(res.data)
      }).catch(err => console.log(err))
    }


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Number Trivia</h1>
        <div>
          <TextField type='number' id="input-field" value={input} onChange={handleInput} label="Enter a Number" variant="outlined" placeholder="Default number is 0" sx={{ m: 1, width: '25ch' }} InputProps={{
            style: {
              width: "400px"
            },
            endAdornment: 
              <InputAdornment position="start">
                <LightbulbIcon />
              </InputAdornment>
          }}/>
        </div>
        <br></br>
        <Button onClick={handleAPI} variant="contained">Submit</Button> 
        <br></br>
        <Card variant='outlined' className='resultData' style={{
          backgroundColor: "#BDCDD6",
          color: "#443C68"
          }}>{data}</Card>
      </header>
    </div>
  );
}

export default App;
