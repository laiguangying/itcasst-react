import React, {useEffect,useState} from 'react';
import axios from 'axios';

function MovieList(props) {

  // const [movieData,setMovieData] = useState();

  useEffect(() => {
    axios.get('http://v.juhe.cn/movie/movies.today?key=30e3b9a76cc73a8a9832daf3924a8f71&cityid=2')
      .then((response) => {
        console.log(response);
        // setMovieData(response);
      })
      .catch((err) => {

      })
      .finally(() => {

      })
  }, []);

  const {type, page} = props.match.params;
  return (
    <div>
      MovieList---{type}---{page}
    </div>
  );
}

export default MovieList;