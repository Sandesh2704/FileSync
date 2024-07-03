import React from 'react'
import Typography from '@mui/material/Typography';
import { Box, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import DownloadIcon from '@mui/icons-material/Download';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function DataStore() {

  const items = Array(15).fill(null); 

  return (
    <>
      <Box borderRadius={2} sx={{ backgroundColor: 'white' }}>
        <Typography gutterBottom variant="h5" component="div" borderBottom={1} py={1} px={2}>
          Welcome to FileSync
        </Typography>


        <Box sx={{ flexGrow: 1 }} py={1} px={2}>
          <Grid container spacing={2}>
                       {items.map((item, index) => (
        <Grid item xs={3} key={index}>
          <Card>
            <CardContent>
              <Typography gutterBottom variant="span" component="div">
                Lizard
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
            />
            <CardActions>
              <Stack direction="row" spacing={1}>
                <IconButton aria-label="delete">
                  <DeleteIcon />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                  <DownloadIcon />
                </IconButton>
                <IconButton color="secondary">
                  <ZoomOutMapIcon />
                </IconButton>
                <Button variant="outlined" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </CardActions>
          </Card>
        </Grid>
      ))}
          </Grid>
        </Box>


















      
      </Box>

    </>
  )
}
