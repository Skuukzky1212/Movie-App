import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";
import RatingInput from "./FormInputs/RatingInput";
import { useEffect } from "react";

const SearchForm = ({ setSearchFormValue }) => {
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "all",
    },
  });
  const handleSubmitForm = (data) => {
    // console.log("data ne", data);
  };

  const formValue = watch();

  useEffect(() => {
    setSearchFormValue(formValue || {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(formValue)]);

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
