import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex h-[100vh] items-center justify-center text-[20px]">
        404 - Page Not Found
        <Link className="ml-2 inline-block underline" to={"/"}>
          Back Home
        </Link>
      </div>
    </>
  );
}
