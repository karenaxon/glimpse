import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { feedQuery, searchQuery } from '../utils/data';
import { client } from '../client';
import MasonryLayout from './MasonryLayout';
import Spinner from './Spinner';
import { RiChatSmile3Line } from 'react-icons/ri'

const Feed = () => {
  const [pins, setPins] = useState();
  const [loading, setLoading] = useState(false);
  const { categoryId } = useParams();
  
  useEffect(() => {
    if(categoryId) {
      setLoading(true);
      const query = searchQuery(categoryId);
      client.fetch(query)
      .then((data) => {
        setPins(data);
        setLoading(false);
      });
    } else {
      setLoading(true);

      client.fetch(feedQuery)
      .then((data) => {
        setPins(data);
        setLoading(false);
      });
    }
  }, [categoryId]);

  if(loading) return <Spinner message="We are adding new ideas to your feed!" />

  if(!pins?.length) return <div 
    className=' flex justify-center text-[#0079C6]' >
    <RiChatSmile3Line className='pr-2 -mt-1' size={31} color={'#0079C6'} />
    <h2>No pins have been created for this category yet.
    </h2>
  </div>

  return (
    <div>
      {pins && <MasonryLayout pins={pins} />}
    </div>
  ) 
}

export default Feed;