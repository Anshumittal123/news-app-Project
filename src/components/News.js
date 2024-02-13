import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    articales = [
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "TOI News Desk",
          "title": "'Snatched NCP and ...': Sharad Pawar slams EC after losing party he founded - Times of India",
          "description": "India News: NEW DELHI: Sharad Pawar on Sunday came down heavily on the Election Commission for \"snatching\" NCP from the hands of those who founded it and giving i.",
          "url": "https://timesofindia.indiatimes.com/india/snatched-ncp-and-sharad-pawar-slams-ec-after-losing-party-he-founded/articleshow/107603520.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-107603705,width-1070,height-580,imgsize-38722,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2024-02-11T13:26:00Z",
          "content": "9 types of Indian dals and their benefits"
        },
        {
          "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
          },
          "author": "Al Jazeera",
          "title": "Khan’s PTI leads as final results in Pakistan election called - Al Jazeera English",
          "description": "The military has called for stability as multiple parties allege election tampering and announce protests.",
          "url": "https://www.aljazeera.com/news/2024/2/11/pakistan-election-results-put-imran-khans-independents-in-lead",
          "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/02/AP24041536105728-1707641906.jpg?resize=1920%2C1440",
          "publishedAt": "2024-02-11T13:16:26Z",
          "content": "Former Prime Minister Imran Khans Tehreek-e-Insaf (PTI) party and its affiliates have won the most seats in Pakistans elections, the election commission has revealed as it declared final results in t… [+4146 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "News18"
          },
          "author": null,
          "title": "Paytm Payments Bank, Wallet Woes Explained: What are the Options Before the Company? - News18",
          "description": "It can continue to be the UPI third-party application just like Google Pay and Amazon Pay, but this will depend on the National Payments Corporation of India; If PPBL loses its licence, it will need another sponsor bank, which will be held responsible for Pay…",
          "url": "https://www.news18.com/explainers/paytm-payments-bank-wallet-woes-explained-what-are-the-options-before-the-company-8774756.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2024/02/vijay-shekhar-sharma-paytm-2024-02-0c8fc46afff6d371f0d771b9577482d3-16x9.png?impolicy=website&width=1200&height=675",
          "publishedAt": "2024-02-11T12:41:07Z",
          "content": "The Reserve Bank of India (RBI) had last month restricted Paytm Payments Bank Limited (PPBL) operations, citing persistent non-compliances and continued material supervisory concerns in the bank in t… [+3189 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "NDTV News"
          },
          "author": null,
          "title": "Mithun Chakraborty's Shastri Co-Star Debashree Roy Shares Actor's Health Update: \"He Is Recuperating\" - NDTV Movies",
          "description": "\"His sugar levels had gone down,\" said Debashree Roy",
          "url": "https://www.ndtv.com/entertainment/debashree-roy-shares-an-update-on-mithun-chakraborty-s-health-he-is-better-now-5037232",
          "urlToImage": "https://c.ndtvimg.com/2024-02/0l1be9vo_alia-_625x300_11_February_24.jpg",
          "publishedAt": "2024-02-11T12:18:34Z",
          "content": "Image shared on X. (courtesy: X)\r\nVeteran actor and politician Mithun Chakraborty was hospitalised in Kolkata on Saturday. He has been diagnosed with an Ischemic Cerebrovascular Accident (Stroke) of … [+2131 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "WION"
          },
          "author": null,
          "title": "WATCH: NASA shares stunning 3-D view of Orion Nebula to mark Chinese New Year - WION",
          "description": "The National Aeronautics and Space Administration (NASA) on Saturday (Feb 10) shared a stunning three-dimensional view of the Orion Nebula, which is one of the brightest nebulae, to mark the occasion of Chinese New Year, a festival that celebrates the beginni…",
          "url": "https://www.wionews.com/science/watch-nasa-shares-stunning-3-d-view-of-orion-nebula-to-mark-chinese-new-year-689224",
          "urlToImage": "https://cdn.wionews.com/sites/default/files/2024/02/11/411421-orion-nebula.png",
          "publishedAt": "2024-02-11T11:54:41Z",
          "content": "The National Aeronautics and Space Administration (NASA) on Saturday (Feb 10) shared a stunning three-dimensional view of the Orion Nebula, which is one of the brightest nebulae, to mark the occasion… [+1831 chars]"
        },
        {
          "source": {
            "id": null,
            "name": "Hindustan Times"
          },
          "author": "Adarsh Kumar Gupta",
          "title": "‘BJP is scared of only one party, the AAP’: Arvind Kejriwal in Punjab - Hindustan Times",
          "description": "Arvind Kejriwal hit out at the central government and the Punjab governor, accusing them of stopping funds to the state. | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/bjp-is-scared-of-only-one-party-the-aap-arvind-kejriwal-in-punjab-101707645908401.html",
          "urlToImage": "https://www.hindustantimes.com/ht-img/img/2024/02/11/1600x900/PTI02-10-2024-000350B-0_1707646270944_1707646313649.jpg",
          "publishedAt": "2024-02-11T11:30:24Z",
          "content": "Delhi chief minister and AAP national convener Arvind Kejriwal addressed a gathering in Punjab's Khadoor Sahib Lok Sabha constituency on Sunday. During his speech, he hit out at the central governmen… [+1753 chars]"
        }
      ];
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articales: this.articales,
            loading: false,
        }
    }

    async componentDidMount(){
        console.log('cmd');
        let url = "newsapi.org/v2/top-headlines?country=in&apiKey=2e0b9a3f0f694d8a83510666bf9e48df";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
    }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top headlines</h2>
        <div className="row">
            {this.state.articales.map((element)=>{
                return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.length>=45?element.title.slice(0, 45):element.title} description={element.description.length>=88?element.description.slice(0, 88):element.title} imageUrl={element.urlToImage} newsUrl={element.url}/>
                </div> 
            })}
        </div>
      </div>
    )
  }
}
