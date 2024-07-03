import './App.css';
import DataStore from './components/DataStore';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
function App() {

  const Item = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
  }));

  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 4, padding: '0.5rem' }}>
        <Grid container spacing={1}>
          <Grid xs={12} md={2}>
          <Item>
            <SideBar />
            </Item>
           
          </Grid>
          <Grid xs={12} md={10}>
          <Item>
            <DataStore/>
            </Item>
          </Grid>
        </Grid>
      </Box>

    </>
  );
}

export default App;
