import useForm from '../lib/useForm';
import SearchBarStyles from './styles/SearchBarStyles';

export default function SearchBar({ type }) {
  const { inputs, handleChange } = useForm({
    input: '',
  });

  return (
    <SearchBarStyles
      onSubmit={async (e) => {
        e.preventDefault();
        console.log(inputs);
        // Submit the input fields to the backend:
      }}
    >
      <div id={type}>
        <label htmlFor="input">
          <input
            type="text"
            id="input"
            name="input"
            placeholder="search"
            value={inputs.input}
            onChange={handleChange}
          />
        </label>
        <button type="submit"> </button>
      </div>
    </SearchBarStyles>
  );
}
