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
import AddIcon from '@mui/icons-material/Add';

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

export default function RecipeReviewCard({key, value}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card id='card-item'>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <AddIcon />
          </IconButton>
        }
        title={value.name}
        id="head"
      />
      <CardMedia
        component="img"
        image={value.images[0]}
        alt={value.title}
      />
      <CardContent id="content">
        <Typography variant="body2" color="text.secondary">
       

          Targeted muscles:
              {value.muscles.map((text, index) => (
               <span> {text } </span>
              
               ))}
               <Typography paragraph><img src={value.muscle_diagram}></img></Typography>
                  
               
          Equipments required: {value.equipment}
          
        </Typography>
     </CardContent>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{"position":"relative" , "top":"-10px"}}
          id="expand-bt"
        >
        <ExpandMoreIcon />
        </ExpandMore>
      
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent id='expand-content'>
          <Typography paragraph>Instructions:</Typography>
          <Typography paragraph sx={{"text-align":"left"}}>
              <ul>
              {value.instructions.map((text, index) => (
              <div>  
              <li><span> {text } <br></br> </span> </li>
              <center><img src={value.images[index]} width={400}></img></center>
              </div>
              ))}
                  
              </ul>
         
              
            
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
