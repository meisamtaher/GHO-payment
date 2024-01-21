// import {useNavigate} from 'react-router-dom';
import  { useEffect} from 'react';
import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Logo from '/vite.svg';
import { ConnectKitButton } from 'connectkit';
import { Stack } from '@mui/system';

const pages = ['MarketPlace', 'Factory'];

function MainBar() {
  const navigate = useNavigate();
  // const account = useAccount();
  // const goToProfile = ()=>{
  //   // if(account.isConnected)
  //   //   navigate("/real-token/Profile/"+account.address);
  // }
  const handleCloseNavMenu = (key: string) => {
    console.log("Redirect to page: ",key);
    if(key == "MarketPlace"){
      navigate("/real-token/Explore");
    }
    else if(key == "Factory"){
      navigate("/real-token/Mint");
    }
  };

  useEffect(() => {
  }, []);
  
  return (
    <AppBar  position="static"  >
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <img src={Logo} width={40}  height={40}/>
          <Box  sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={()=>handleCloseNavMenu(page)}
                sx={{ my: 2, color: '#352D50', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Stack sx={{ flexGrow: 0 }} direction={'row'}>
          <ConnectKitButton />

            {/* <ConnectButton  chainStatus="full" accountStatus={{smallScreen:'avatar',largeScreen: 'address',}}/>
            {account.isConnected && <Button onClick={goToProfile}>
              <Avatar  />
            </Button>} */}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default MainBar;