import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import CircularStatic from './loader';
import SearchAppBar from './appbar';
import { useNavigate } from "react-router-dom";

function Card() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, Setdata] = useState([])

  
  const getHandler = () =>{
    axios.get('https://fakestoreapi.com/products')
    .then((success) =>{
      Setdata(success.data)
      setIsLoading(false)
    }
    )
    .catch((err) => {
      console.log(err)
      setIsLoading(false)
    }
    )
  }
  useEffect(() => {
    getHandler();
  }, []);
  
  // const navigate = useNavigate()
  // const sendData = (e)=>{
  //   console.log(e)
  //   navigate('/detail',{
  //     state: {
  //       data: e
  //   }
  // })
  // }
return (
  <><div>
    <SearchAppBar />
    <br />
  </div><div className="container">
      {isLoading ? <Box className="loader" sx={{ display: 'flex' }}>
        <CircularStatic />
      </Box> :
        data.map((x, i) => {
          return (

            <>
              <div className='main' key={i}>
                <div className='full'>
                  <div className='title'> {x.title}</div>
                  <br />
                  <br />
                  <div>
                    <img className='image' src={x.image} />
                  <br />
                  <br />
                  </div>
                  <div className='price'>Price: {x.price}</div>
                  <Button onClick={()=>{sendData(x)}} className='btns' variant='outlined' color='success'>Add to Cart</Button>
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </>
          );
        }
        )}
    </div></>
  
  );
  }
export default Card;
