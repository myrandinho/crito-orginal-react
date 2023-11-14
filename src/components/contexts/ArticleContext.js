import { useContext, useState, createContext, useEffect } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const apiUrl = "https://win23-assignment.azurewebsites.net/api/articles"
    const [articles, setArticles] = useState([])
    

    useEffect(() => {
       getArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch(apiUrl)
        if (result.status === 200)
          setArticles(await result.json())
    }


return (
    <ArticleContext.Provider value={{ articles }}>
        {children}
    </ArticleContext.Provider>
)

}