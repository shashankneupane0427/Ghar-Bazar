import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import useProperties from '../hooks/useProperties';

const Listing = () => {
    const [filter, setFilter] = useState();
    const { data, isError, isLoading } = useProperties(); // Destructure from the object

    return (
        <main className='my-24'>
            <div className='max-padd-container py-10 xl:py-24 bg-gradient-to-r via-white to-white'>
                <div>
                    <Searchbar filter={filter} setFilter={setFilter} />
                    {/* CONTAINER */}
                    <div>
                        {isLoading && <p>Loading properties...</p>}
                        {isError && <p>Failed to load properties.</p>}
                        {data && data.map(property => (
                            <div key={property.id}>
                                <h3>{property.name}</h3>
                                <p>{property.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Listing;
