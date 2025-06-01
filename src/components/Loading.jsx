import { CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 flex items-center justify-center bg-slate-950 opacity-100 transition-all  duration-[0.3s]">
      <CircularProgress size={80} sx={{ color: "red" }} />
    </div>
  );
};
export default Loading;
