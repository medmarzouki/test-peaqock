package com.peaqockback.peaqock.service;

import com.peaqockback.peaqock.entity.Article;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ArticleMockServiceImpl implements IArticleService {

    private List<Article> articles;

    public ArticleMockServiceImpl() {
        articles = new ArrayList<Article>();
        articles.add(new Article(1, "Hello world", "1descriptiondescriptiondescriptiondescriptiondescriptiondescription", "Mohamed Marzouki", "https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg"));
        articles.add(new Article(2, "Hello world", "2descriptiondescriptiondescriptiondescriptiondescriptiondescription", "Mohamed Marzouki", "https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg"));
        articles.add(new Article(3, "Hello world", "3descriptiondescriptiondescriptiondescriptiondescriptiondescription", "Mohamed Marzouki", "https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg"));
        articles.add(new Article(4, "Hello world", "4descriptiondescriptiondescriptiondescriptiondescriptiondescription", "Mohamed Marzouki", "https://www.fixpocket.com/public_assets/uploads/beats/1525674588536234-1QbGIX1496037475.jpg"));

    }

    @Override
    public List<Article> getArticles() {
        return articles;
    }

    @Override
    public void addArticle(Article article) {
        article.setId((articles.get(articles.size() -1).getId()) + 1);
        article.setDateCreation(new Date());
        articles.add(article);
    }

    @Override
    public void updateArticle(Article oldArticle, Article article) {
        System.out.println(articles.contains(oldArticle));
        Iterator it = articles.iterator();
        int i=0;
        while (it.hasNext()){
            if(((Article)it.next()).getId() == oldArticle.getId()){
                articles.remove(articles.get(i));
            }
            i++;
        }
        articles.add(article);
    }

    @Override
    public void deleteArticle(int id) {
        Iterator it = articles.iterator();
        int i=0;
        while (it.hasNext()){
            if(((Article)it.next()).getId() == id){
                articles.remove(articles.get(i));
            }
            i++;
        }

    }

    @Override
    public void deleteArticle(String titre) {
        Article article = new Article();
        article.setTitre(titre);
        articles.remove(article);
    }
}
