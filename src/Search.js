import React from 'react';
const {useState} = React;


function Search({id, genres}) {

    const [value,setValue] = useState('');

    const onChangehandler = (e) => {
        setValue(e.target.value);
    };
    return (
        <div>
            <input value={value} onChange={onChangehandler} placeholder="장르검색"></input>
        </div>
    );
}


export default Search;