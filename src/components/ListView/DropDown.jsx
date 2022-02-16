const DropDown = ({ sortValue, setSortValue }) => {
    
  const handleChange = (event) => {
    setSortValue(event.target.value);
  };

  return (
    <div>
      <select defaultValue={sortValue} onChange={handleChange}>
        <option value="created_at">Date created</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default DropDown;
