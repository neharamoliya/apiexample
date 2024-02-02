import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function App() {

  const [data, setData] = useState([]);
  const [firstname, setFirstname] = useState('')

  // useEffect(()=>{

  //   setData(firstname != '' ? 'yes data chasnge' :'creative')

  // },[firstname])


  useEffect(() => {
    //  charchtr data
    axios({
      method: 'get',
      url: 'https://rickandmortyapi.com/api/character',
    })
      .then(function (response) {
        // console.log('chachter rick api', response)
        setData(response.data.results)
      });



  }, [])

  return (
    <body>
      <div className="App">
      <h1 className="title">The Rick and Morty API</h1>
      <div className="background">
        <Container>
          <div className="main" style={{ display: 'flex', flexWrap: 'wrap' }} >
            {
              data.map((item) => {

                return (

                  <div className="main-api" style={{ width: '50%' }}>
                    <div className="box">
                      <div className="image"><img src={item.image} className="image"></img></div>
                      <div className="item">
                        <h1 className='first-title'>{item.name}</h1>
                        <li>{item.status}-{item.species}</li>
                        <div className="text">Last known location:</div>
                        <p>{item.location.name}</p>
                        <p>Gender:{item.gender}</p>
                      </div>
                    </div>
                  </div>


                )

              })
            }
          </div>
        </Container>
      </div>
      {/* <button onClick={()=>{setFirstname('gaurav malaviya')}}>change name of depand state firstname</button> */}

    </div>
    </body>
  );
}

export default App;
