import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInputs/MediaTypeInput";
import GenresInput from "./FormInputs/GenresInput";

const SearchForm = () => {
  const { handleSubmit, control } = useForm();
  const handleSubmitForm = (data) => {
    console.log("data ne", data);
  };
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
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
      <button type="submit">Submit</button>
    </form>
  );
};
export default SearchForm;
