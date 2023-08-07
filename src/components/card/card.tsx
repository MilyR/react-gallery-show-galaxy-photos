import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

const MediaCard = ({apod, getApod}) => {
  const navigate = useNavigate();

  const handleClick =() => {
    navigate("/apod");
  }

  useEffect(() => {
   getApod()
  }, []);
  return (
    apod.url && <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        sx={{ height: 380 }}
        image={apod.url}
        title="Apod"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Apod
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {apod.title}
        </Typography>
      </CardContent>
      <CardActions>
        
        <Button size="small" onClick={handleClick}>click Here</Button>
         
      </CardActions>
    </Card>
  );
}

export default MediaCard;