import React from 'react';
import { useParams } from 'react-router-dom';

function VideoDeatil(props) {
  const params = useParams();
  return (
    <div>
      VideoDetail {params.keyword}
    </div>
  );
}

export default VideoDeatil;