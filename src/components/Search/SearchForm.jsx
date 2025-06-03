import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";

const SearchForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "all",
    },
  });
  const handleSubmitForm = (data) => {
    console.log("data ne", data);
  };
  return (
    <div className="sticky right-0 top-5 mr-5 max-h-[86vh] w-[30%] overflow-auto rounded-lg border p-4 shadow-md">
      <form className="space-y-4" onSubmit={handleSubmit(handleSubmitForm)}>
        <FormField
          name="mediaType"
          label="Media type"
          control={control}
          Component={MediaTypeInput}
        />
        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />
        <FormField
          name="rating"
          label="Ratings"
          control={control}
          Component={RatingInput}
        />
      </form>
    </div>
  );
};
export default SearchForm;
