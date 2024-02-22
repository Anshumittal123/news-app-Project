import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"


export default class News extends Component {
    static defualtProps = {
      country: 'in',
      pageSize: 9,
      category: 'general',
    }

    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string,
    }

    capitalizeFirstLetter = (string)=>{
      return string.charAt(0).toUpperCase() + string.slice(1);
    };
    constructor(props){
        super(props);
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
    }

    // async updateNews(){
    //   const url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e0b9a3f0f694d8a83510666bf9e48df&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading: true});
    //     let data = await fetch(url); 
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    // }


  //  handlePreClick =async()=>{
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e0b9a3f0f694d8a83510666bf9e48df&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
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
  //   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
  //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2e0b9a3f0f694d8a83510666bf9e48df&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
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

  async componentDidMount(){
    this.props.setProgress(10);
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false});
    this.props.setProgress(100);
 }

fetchMoreData =async() => {
    let url =  `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          articles: this.state.articles.concat(parsedData.articles), 
          totalResults: parsedData.totalResults, 
          page: this.state.page + 1,
        });
  };

  render() {
    return (
      <>
        <h1 className='text-center my-3'>NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length !== this.state.totalResults} loader={<Spinner/>} >
          <div className="container">
            <div className="row">
                {this.state.articles.map((element)=>{
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
}
