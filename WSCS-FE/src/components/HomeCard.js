import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function HomeCard({imgProps}) {
    console.log(imgProps);
  return (
    <Card className='card'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image={imgProps.url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {imgProps.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {imgProps.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
