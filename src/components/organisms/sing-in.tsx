import { Box, Button, TextField } from '@mui/material';
import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';

interface ISignInPageProps {
    setStateLogIn: Dispatch<SetStateAction<boolean>>
}

function SignInPage(props: ISignInPageProps) {
  const {setStateLogIn} = props

  return (
    <Box style={{background: "#2196f3", width: "100%", height: "97vh", display: "flex", justifyContent: "center", alignItems:"center"}}>
        <Box style={{display: "flex", justifyContent: "center", flexDirection:"column"}}>
            <TextField style={{background: "white", border: "10px", display: "block", marginBottom:"15px"}}/>
            <TextField style={{background: "white", border: "10px", display: "block", marginBottom:"15px"}}/>
            <Button variant="contained" onClick={()=> {setStateLogIn(true)}}>Sign-in</Button>
        </Box>
    </Box>
  );
}

export default SignInPage;
