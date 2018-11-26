package com.peaqockback.peaqock.service;

import com.peaqockback.peaqock.entity.Article;

import java.util.List;

public interface IArticleService {

    List<Article> getArticles();
    void addArticle(Article article);
    void updateArticle(Article oldArticle, Article article);
    void deleteArticle(int id);
    void deleteArticle(String titre);
}
