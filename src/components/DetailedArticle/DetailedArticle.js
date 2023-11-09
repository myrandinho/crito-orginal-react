import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
const DetailedArticle = () => {

    const [article, setArticle] = useState({})
    const { id } = useParams()

    useEffect(() =>{
        getArticle()
    }, [])

    const getArticle = async () => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles?take=${id}`)

            if (result.status === 200)
                setArticle(await result.json())
        }
    }



  return (
    <div>
        mitt namn är {article.id}
    </div>
  )
}

export default DetailedArticle