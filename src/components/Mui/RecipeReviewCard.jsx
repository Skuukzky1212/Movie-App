import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { dateFormatter } from "@libs/utils";
import { Link } from "react-router-dom";

const ExpandMore = styled((props) => {
  // eslint-disable-next-line no-unused-vars
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

export default function RecipeReviewCard({
  title,
  id,
  date,
  thumb,
  shortDescription,
  content,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className="w-[calc(33.333%-22px)] sp:w-full">
      <CardHeader className="[&_.MuiCardHeader-title]:line-clamp-2 [&_.MuiCardHeader-title]:font-bold min-h-[122px] flex !items-start" title={title} subheader={dateFormatter(date)} />
      <CardMedia className="size-full h-[35%] max-h-[194px] object-cover" component="img" height="194" image={thumb} alt="" />
      <CardContent>
        <Typography
          className="text-"
          variant="body2"
          sx={{ color: "text.secondary" }}
        >
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       <Link to={`/blog/p${id}`}>
          <IconButton aria-label="detail" >
            <VisibilityIcon />
          </IconButton>
       </Link>
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
        <CardContent
          dangerouslySetInnerHTML={{ __html: content }}
          className="line-clamp-6 overflow-hidden !p-0 m-4"
        ></CardContent>
      </Collapse>
    </Card>
  );
}
