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
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useQueryClient } from "@tanstack/react-query";

import { dateFormatter } from "@libs/utils";
import { Link } from "react-router-dom";

const wpApiUrl = import.meta.env.VITE_WP_API_URL;

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
  const queryClient = useQueryClient();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      onMouseEnter={async () => {
        const queryKey = ["blog", String(id)];

        // XÓA CACHE ĐỂ TEST
        // queryClient.removeQueries({ queryKey });
        // console.log(`🟡 Bắt đầu prefetch cho ID: ${id}`);

        await queryClient.prefetchQuery({
          queryKey,
          queryFn: () =>
            fetch(`${wpApiUrl}/cases/${id}`).then((res) => res.json()),
          staleTime: 1000 * 60 * 5,
        });

        // const state = queryClient.getQueryState(queryKey);
        // console.log("✅ Query state: ", state);

        // if (state?.status === "success") {
        //   console.log(`✅ Prefetch thành công cho ID: ${id}`);
        // } else {
        //   console.log(`❌ Prefetch lỗi/chưa xong cho ID: ${id}`);
        // }
      }}
      className="w-[calc(33.333%-22px)] sp:w-full"
    >
      <CardHeader
        className="flex min-h-[122px] !items-start [&_.MuiCardHeader-title]:line-clamp-2 [&_.MuiCardHeader-title]:font-bold"
        title={title}
        subheader={dateFormatter(date)}
      />
      <CardMedia
        className="size-full h-[35%] max-h-[194px] object-cover"
        component="img"
        height="194"
        image={thumb}
        alt=""
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {shortDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/blog/p${id}/`}>
          <IconButton aria-label="detail">
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
          className="pointer-events-none m-4 line-clamp-6 overflow-hidden !p-0"
        ></CardContent>
      </Collapse>
    </Card>
  );
}
