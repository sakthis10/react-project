import '../Assests/Home.css'
import { Hotel } from 'lucide-react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Home = () =>{
    return (
        <>
        <div  className='pagediv'>
            <div className='navbar'>
                <p className='sakthihotel' style={{marginTop:'30px'}}><b> <Hotel />Hotel Gouravam</b></p>
                <a href='https://mui.com/material-ui/react-app-bar/' className='navc' style={{marginLeft:'500px',marginTop:'40px'}}>Signup</a>
                <a href='https://mui.com/material-ui/react-app-bar/' className='navc' style={{marginLeft:'100px',marginTop:'40px' }}>Need help?</a>
                <a href='https://mui.com/material-ui/react-app-bar/' className='navc' style={{marginLeft:'100px',marginTop:'40px'}}>Support</a>
                
                <Button variant="contained" sx={{marginLeft:'100px',marginTop:'30px',height:'40px',width:'120px'}}>Login</Button>
            </div>
            <div className='logindiv'>
                <p style={{color:'white',marginLeft:'20px',fontSize:'20px',marginBottom:'20px'}}><b>Your journey begins with a click and a sign-in</b></p>
                <div className='logsignup'><button className='button'>Sign up</button></div>
            </div>
        </div>
            <div style={{height:'60vh',display:'flex'}}>
                <div className='aboutstay'><p style={{fontSize:'30px',marginTop:'20px',marginLeft:'30px'}}><b>About Hotel Gouravam🛎️<br></br></b></p><p style={{fontSize:'20px',marginTop:'20px',marginLeft:'30px', color:'#373737'}}><b>Welcome to Hotel Gouravam🛎️, the ultimate destination for booking your dream hotel.<br></br> Whether you're planning a romantic getaway, a family vacation,<br></br>or a business trip, we've got you covered.<br></br><br></br>
                With our extensive collection of hotels around the world, you can find the perfect accommodation that suits your needs and budget.<br></br> Our user-friendly website makes it easy to search, compare, and book hotels in just a few clicks.<br></br><br></br>Experience the convenience and comfort of StayBook and start planning your next unforgettable stay today!</b></p></div>
                <div className='image1'>
                    <div className='image1inner'>
                        
                    </div>
                </div>
            </div>
            <div style={{height:'60vh',display:'flex'}}>
                <div className='image2'>
                    <div className='image2inner'>
                        
                    </div>
                </div>
                <div className='aboutstay'><p style={{fontSize:'30px',marginTop:'100px',marginLeft:'30px'}}><b>Your gateway to seamless travel experiences – book with ease, stay with confidence🌴<br></br></b></p><p style={{marginTop:'30px',marginLeft:'30px',color:'#373737',fontSize:'20px'}}><b>Unlock your next adventure with our hotel booking app—<br></br>where convenience meets curated stays, and every click is a step toward unforgettable journeys</b></p></div>
            </div>
            <div className='calculation'>
                <div className='calculation1'><p className='cal1style'><b style={{fontSize:'60px',marginLeft:'180px',marginTop:'500px',color:'#6cbb3c'}}>10K+<br/></b></p><p style={{marginLeft:'130px',marginTop:'10px',fontSize:'30PX',color:'#6cbb3c'}}><b>Happy Customers</b></p></div>
                <div className='calculation2'><p className='cal1style'><b style={{fontSize:'60px',marginLeft:'180px',marginTop:'500px',color:'#6cbb3c'}}>500+<br/></b></p><p style={{marginLeft:'90px',marginTop:'10px',fontSize:'30PX',color:'#6cbb3c'}}><b>Destinations Worldwide</b></p></div>
                <div className='calculation3'><p className='cal1style'><b style={{fontSize:'60px',marginLeft:'180px',marginTop:'500px',color:'#6cbb3c'}}>24/7<br/></b></p><p style={{marginLeft:'130px',marginTop:'10px',fontSize:'30PX',color:'#6cbb3c'}}><b>Customer support</b></p></div>
            </div>
            <div className='lastsign'>
                <p style={{fontSize:'35px' ,marginLeft:'400px',marginTop:'70px'}}><b>Sign up, unlock dreams, book stays, tell tales.</b></p>
                <button style={{marginLeft:'700px',marginTop:'30px'}} className='button'><b>Sign up</b></button>
            </div>
            <div className='navbar' style={{height:'30vh'}}>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'300px'}}>About</a>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'100px'}}>Services</a>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'100px'}}>Support</a>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'100px'}}>Help</a>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'100px'}}>Contact</a>
                <a href='http://localhost:3000/' className='footer' style={{marginTop:'80px',marginLeft:'100px'}}>Terms and conditions</a>
            </div>
        </>
    )
}
export default Home;
