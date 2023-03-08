import React from 'react';


let Toast = (props) => {
    return (
        <div>
            <div className='search-content'>
                <h1>What are you planning to make today?</h1>
                <div className='search-wrap'>
                    {props.tags.map((tag, index) => (
                        <div className='toast' key={index}>
                        <span>{tag}</span>
                        <box-icon name='x' color="#F51055" onClick={() => props.removeTags(index)}></box-icon>
                        </div>
                    ))}
                    <input type="text" className='searchbox' placeholder='Start typing your ingredients' onKeyUp={props.addTags}/>
                </div>
                <button className='btn' onClick={props.getRecipes}>Get Recipe</button>
            </div>
        </div>
    )
}



export default Toast;