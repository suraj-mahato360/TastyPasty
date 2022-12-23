import React from 'react';
// import { ReactDOM } from 'react-dom';


let Toast = () => {
    const [tags, setTags] = React.useState([]);
    const removeTags = indexToRemove => {
        setTags(tags.filter((_, index) => index !== indexToRemove));
    };
    const addTags = event => {
        if(event.key=== "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value]);
            event.target.value = "";
        }
    };
    return (
        <div>
            <div className='search-content'>
                <h1>What are you planning to make today?</h1>
                <div className='search-wrap'>
                    {tags.map((tag, index) => (
                        <div className='toast' key={index}>
                        <span>{tag}</span>
                        <box-icon name='x' color="#F51055" onClick={() => removeTags(index)}></box-icon>
                        </div>
                    ))}
                    <input type="text" className='searchbox' placeholder='Start typing your ingredients' onKeyUp={addTags}/>
                </div>
                <button className='btn'>Get Recipe</button>
            </div>
        </div>
    )
}



export default Toast;