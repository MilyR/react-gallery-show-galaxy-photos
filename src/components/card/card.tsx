import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../../assets/image/image.jpg";
import { useNavigate } from "react-router-dom";



const MediaCard = () => {
  const navigate = useNavigate();

  const handleClick =() => {
    navigate("/apod");
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={Image}
        title="Apod"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apod
        </Typography>
        <Typography variant="body2" color="text.secondary">
        La astrofotógrafa Cari Letelier capturó esta increíble foto de la aurora boreal
         sobre la cascada de Goðafoss en Islandia
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={handleClick}>Learn More</Button>
        
      </CardActions>
    </Card>
  );
}

export default MediaCard;