import React, { useEffect, useState }  from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


const News =(props) =>{
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

    const capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const updateNews = async()=>{
      props.setProgress(10);
      let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
      // this.setState({loading: true});
      setLoading(true);
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json();
      props.setProgress(70);
      // console.log(parsedData);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
      props.setProgress(100);
    }


  //  handlePreClick =async()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2e0b9a3f0f694d8a83510666bf9e48df&page=${this.state.page - 1}&pageSize=${props.pageSize}`;
  //   this.setState({loading: true});
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false
  //   });
  //   // this.setState({page: this.state.page - 1});
  //   // this.updateNews();
  //   }

  // handleNextClick =async()=>{
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/props.pageSize))){
  //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2e0b9a3f0f694d8a83510666bf9e48df&page=${this.state.page + 1}&pageSize=${props.pageSize}`;
  //     this.setState({loading: true});
  //       let data = await fetch(url);
  //       let parsedData = await data.json();
  //       console.log(parsedData);
  //       this.setState({
  //         page: this.state.page + 1,
  //         articles: parsedData.articles,
  //         loading: false,
  //       });
  //   }
  //   // this.setState({page: this.state.page + 1});
  //   // this.updateNews();
  //   }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
    updateNews();
    // eslint disable next line
  }, []);

//   async componentDidMount(){
//     props.setProgress(10);
//     let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${this.state.page}&pageSize=${props.pageSize}`;
//     this.setState({loading: true});
//     let data = await fetch(url);
//     props.setProgress(30);
//     let parsedData = await data.json();
//     props.setProgress(70);
//     // console.log(parsedData);
//     setArticles(parsedData.articles);
//     setTotalResults(parsedData.totalResults);
//     setLoading(false);
//     // this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
//     props.setProgress(100);
//  }

const fetchMoreData = async() => {
    let url =  `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(totalResults);
        setPage(page+1);
        // this.setState({
        //   articles: articles.concat(parsedData.articles), 
        //   totalResults: totalResults, 
        //   page: page + 1,
        // });
  };


    return (
      <>
        <h1 className='text-center my-3 header'>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
        {loading && <Spinner/>}
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length !== totalResults} loader={<Spinner/>} >
          <div className="container">
            <div className="row">
                {articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                    </div> 
                })}
            </div>
          </div>
          </InfiniteScroll>
      </>
    )
}

News.defualtProps = {
  country: 'in',
  pageSize: 9,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News