import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export default function AnimalCard(props) {
  const { result } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let ImageComponent;
  if (result.photos && result.photos[0] && result.photos[0].full) {
    ImageComponent = () => (
      <div>
        
        <CardMedia component="img" image={result.photos[0].full} />
      </div>
    );
  } else {
    ImageComponent = () => 
      <div>
        <span>No Photo Found</span>
      </div>
    
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          R
        </Avatar>
      }
      action={
        <IconButton aria-label="settings">
          <MoreVertIcon />
        </IconButton>
      }
      title={result.name}
      subheader={result.published_at}
    />
    <ImageComponent height="194"></ImageComponent>
    <CardContent>
      <Typography variant="body2" color="text.secondary">
       {result.status}
      </Typography>
    
      <Typography variant="body2" color="text.secondary">
       {result.breed}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {result.age}
      </Typography>
      <Typography variant="body2" color="text.secondary">
       {result.gender}
      </Typography>
    </CardContent>
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
      <ExpandMore
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
      >
        <ExpandMoreIcon />
      </ExpandMore>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Typography paragraph>
        {result.description}
        </Typography>
        <Typography paragraph>
        {result.contact.email}
        </Typography>
       
      </CardContent>
    </Collapse>
  </Card>
  );
}
