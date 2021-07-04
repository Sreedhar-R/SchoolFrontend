import React from 'react';
import Card from './Card';

const Cardlist = ({colleges}) => {
    return (
        <>
            <div class="container d-flex flex-wrap">

            {
            colleges.map((college) => {
                return <Card key={college.college_name} college={college}/>
            })
            }
            </div>
        </>
    )
}

export default Cardlist;
