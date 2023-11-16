import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleBox.scss'




  const getMonthName = (monthNumber) => {
    switch (monthNumber) {
      case '01':
        return 'Jan';
      case '02':
        return 'Feb';
      case '03':
        return 'Mar';
      case '04':
        return 'Apr';
      case '05':
        return 'Maj';
      case '06':
        return 'Jun';
      case '07':
        return 'Jul';
      case '08':
        return 'Aug';
      case '09':
        return 'Sep';
      case '10':
        return 'Okt';
      case '11':
        return 'Nov';
      case '12':
        return 'Dec';
      default:
        return 'error';
    }
  }

  const ArticleBox = ({photo, alt, topic, title, text, id, date}) => {

    const NewDateDay = date.slice(8, 10);
    const NewDateMonth = getMonthName(date.slice(5, 7));

  return (
    <article class="article-and-info">
        <Link id={id} to={`/news/${id}`}>
            <div className="photo-box">
                <img src={photo} alt={alt} />
                <div className="date-box">
                  <h3>{NewDateDay}</h3>
                  <p>{NewDateMonth}</p>
                </div>
            </div>
            <p>{topic}</p>
            <h4>{title}</h4>
            <p>{text}</p>
        </Link>
    </article>
  )
}

export default ArticleBox