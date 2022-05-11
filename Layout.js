import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AnimalCard from './AnimalCard';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Layout(props) {
    
  return (
//     <Grid container>
//     <Grid xs={8} item>
//       <Box
//         height="100%"
//         display="flex"
//         justifyContent="center"
//         flexDirection="column"
//       >
//          {props.results.map((result) => (
//       <AnimalCard key={result.id} result={result}
//       align="center"/>
//     ))}
//       </Box>
//     </Grid>
    
//   </Grid>
 <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}   justify="center"
 align="center" >
  {Array.from(props.results).map((result, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
     <AnimalCard key={result.id} result={result} ></AnimalCard>
   </Grid>
  ))}
</Grid>



  );
}
