import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../Assests/Signup2.css';
const Login1 = () =>{
    return(
        <>
            <div className='div2'>
                <h1><b>Signup</b></h1>
                <form>
                <TextField id="standard-basic" label="Email" variant="standard" sx={{marginBottom:'20px',width:'20vw',marginRight:'10px'}}/>
                <TextField id="standard-basic" label="Username" variant="standard" sx={{marginBottom:'20px',width:'20vw',marginRight:'10px'}}/>
                <TextField id="standard-password-input" label="Password" type="password" autoComplete="current-password" variant="standard" sx={{marginBottom:'20px',width:'20vw',marginRight:'50px'}}/>
                <div>
                <label className='remember'><input type='checkbox'></input>I read and agree to the<b> Terms and Conditions</b></label>
                </div>
                <Button variant="contained" sx={{marginTop:'20px',width:'100px',marginBottom:'20px'}}>Signup</Button>
                <div>
                <label>Already have an account? </label>
                <a href='https://in.hotels.com/?locale=en_IN&siteid=300000036&semcid=HCOM-IN.UB.GOOGLE.GT-c-EN.HOTEL&semdtl=a114468962921.b1124952133805.g1kwd-28172750.e1c.m1Cj0KCQiApOyqBhDlARIsAGfnyMpT5HPemyToNnHMuv6FnhqUsbfW5N_eOj8SqFQEDxgv4IdvoHXNGhkaAiovEALw_wcB.r19c41a39843f81d0b8eb64ebaa767a61e56118547a8d1bbc299baed1f74679c22.c1o27JjdRQ4rfxYXv_5LktWg.j11007810.k1.d1542542083293.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&gad_source=1&gclid=Cj0KCQiApOyqBhDlARIsAGfnyMpT5HPemyToNnHMuv6FnhqUsbfW5N_eOj8SqFQEDxgv4IdvoHXNGhkaAiovEALw_wcB'>Login</a>
                </div>
                </form>
            </div>
        </>
    )
}
export default Login1;