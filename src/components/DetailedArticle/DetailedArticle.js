import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './DetailedArticle.scss'
import OldPost from '../assets/OldPost/OldPost';
import CategoryPosts from '../assets/CategoryPosts/CategoryPosts';

const DetailedArticle = () => {

    const [article, setArticle] = useState({})
    const { id } = useParams()

    useEffect(() =>{
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)

            if (result.status === 200)
                setArticle(await result.json())
        }
    }



  return (
    <section className="news-details">
        <div className="container">
            <div className="left-side">
                <div className="full-article">
                    <h2>{article.title}</h2>
                    <div className="date-subject-author">
                        <div className="article-date">
                        <p>{article.published && article.published.slice(0, -9)}</p>
                        </div>
                        <div className="small-yellow-circle"></div>
                        <div className="article-category">
                            <p>{article.category}</p>
                        </div>
                        <div className="small-yellow-circle"></div>
                        <div className="article-author">
                            <p>{article.author}</p>
                        </div>
                    </div>
                    <img src={article.imageUrl} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa.
                        Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. <br></br><br></br>
                        Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. 
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy. <br></br><br></br>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero,
                        sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. <br></br><br></br>
                        Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                        Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                    </p>
                    <div className="the-qoute">
                        <img src="/images/qoute-sign.svg" alt="qoute" />
                        <h3>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.</h3>
                    </div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </p>
                </div>
                <div className="article-tags">
                    <div className="large-tag">Digitalization</div>
                    <div className="large-tag">School</div>
                    <div className="medium-tag">IT</div>
                    <div className="medium-tag">Design</div>
                    <div className="small-tag">Work</div>
                    <div className="large-tag">Tech</div>
                </div>
            </div>
            <div className="side-section">
                <form className="news-search-box">
                    <i className="fa-sharp fa-regular fa-magnifying-glass"></i>
                    <input className="myinput" placeholder="Type to search..." />
                </form>
                
                <div className="recent-posts">
                    <h3>Recent Posts</h3>
                    <div className="small-underline"></div>
                    <OldPost title="How To Blow Through Capital At An Incredible Rate" date="Jan 14, 2020"/>
                    <OldPost title="Design Studios That Everyone Should Know About? " date="Jan 14, 2020"/>
                    <OldPost title="How did we get 1M+ visitors in 30 days without anything!" date="Jan 14, 2020"/>
                    <div className="recent-post-and-date-no-border">
                        <h4>Figma On Figma: How We Built Our Website Design System</h4>
                        <p>Jan 14, 2020</p>
                    </div>
                </div>
                <div className="category">
                    <h3>Categories</h3>
                    <div className="small-underline"></div>
                    <CategoryPosts category="Technology  - " post=" 20 Posts" />
                    <CategoryPosts category="Freelancing  - " post=" 7 Posts" />
                    <CategoryPosts category="Writing  - " post=" 16 Posts" />
                    <CategoryPosts category="Marketing   - " post=" 11 Posts" />
                    <CategoryPosts category="Business  - " post=" 35 Posts" />
                    <CategoryPosts category="Education  - " post=" 14 Posts" />
                </div>
            </div>
        </div>
    </section>
    
  )
}

export default DetailedArticle