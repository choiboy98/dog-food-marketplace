import React from "react";

const Ingredients = props => {
    const [tags, setTags] = React.useState(props.tags);
    const removeTags = indexToRemove => {
      setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    };
    
    const addTags = event => {
      if (event.target.value !== "") {
        setTags([...tags, event.target.value]);
        event.target.value = "";
      }
    };
    
    return (
      <div className="tags-input">
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className='tag-title'>{tag}</span>
              <span className='tag-close-icon'
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
        <input
          type="text"
          onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
          placeholder="Press enter to add tags"
        />
      </div>
    );
};

export default Ingredients;


// TODO: 3 separate input that allows for ingredient name, quantity, unit -> enter -> methods -> check for empty -> add to list