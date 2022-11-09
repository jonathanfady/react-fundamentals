import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { toTitle } from "./Cases";

export default function News() {
    const params = useParams();
    const [news, setNews] = useState();

    useEffect(() => {
        if (!params.newsTopic) {
            return;
        }

        setNews(null);

        fetch(`https://newsapi.org/v2/everything?q=${params.newsTopic}&sortBy=popularity&apiKey=bcc3831a26de4127bfa86920a883c34e`)
            .then(res => res.json())
            .then(obj => setNews(obj))
    }, [params.newsTopic]);

    const newsOutput = useMemo(() => {
        if (!params.newsTopic) {
            return <div>No news found...</div>;
        }

        if (news == null) {
            return <div className="d-flex align-items-center">
                <span className="spinner-border" role="status"></span>
                <span className="ms-2">Loading...</span>
            </div>
        }

        if ((news.status === 'ok') && (news.totalResults > 0)) {
            return news.articles.map((article, index) => (
                <div className="col-md-6" key={index}>
                    <div className="card">
                        <img src={article.urlToImage} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{article.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{article.author}</h6>
                            <p className="card-text">
                                {article.content}
                            </p>
                            <a href={article.url} className="card-link" target="_blank" rel="noreferrer">View Article</a>
                        </div>
                        <div className="card-footer text-muted">
                            <p className="card-text">
                                Source : {article.source.name}<br />
                                Published on : {new Date(article.publishedAt).toDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            ));
        }

        return <div>No news found...</div>;
    }, [params.newsTopic, news]);

    return (
        <>
            <h5>{toTitle(params.newsTopic)} News from <a href="https://newsapi.org/" target="_blank" rel="noreferrer">https://newsapi.org/</a></h5>
            <div className="row g-4">
                {newsOutput}
            </div>
        </>
    )
}