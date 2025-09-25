"use client";
import {useRouter} from 'next/navigation'
function Login(){

    const router = useRouter();

    let email = "";
    let password = "";
    return (
        <div style={{
            backgroundColor:"#E6E6FA",
            height: "100vh"
        }}>
           

                <div style={{
                    display: 'flex',
                    margin: 'auto',
                    height: '100vh',
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"

                }}>

                    <h1>{email}</h1>
                    <input placeholder="Email / Username" 
                style={{background:'white',
                width:'300px',
                height:'50px',
                padding:"10px",
                border: '2px solid black',
                borderRadius: '40px',
                margin:'10px' }}
                onChange={(event)=> {
                    const emailValue = event.target.value;
                    console.log(emailValue);
                    email = emailValue;
                }}
                
                />

                
                <input placeholder="Password" 
                style={{background:'white',
                width:'300px',
                height:'50px',
                padding:"10px",
                border: '2px solid black',
                borderRadius: '40px',
                margin:'10px' }}
                onChange={(event)=> {
                    const passwordValue = event.target.value;
                    console.log(passwordValue);
                    password = passwordValue;
                }}
                />
                 <button style={{
                    background: 'red',
                     padding: '10x',
                      width : "200px",
                      height: '50px',
                      color: 'white',
                       "margin": "10px"}}
                       onClick={(event)=> {
                            console.log(email);
                            console.log(password);
                            router.push(`/profile?emailKey=${email}&passwordKey=${password}`)
                       }}
                       >
                    Login
                </button>
                </div>

               
               
            
        </div>
    )
}
export default Login;