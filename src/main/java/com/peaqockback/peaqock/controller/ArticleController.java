package com.peaqockback.peaqock.controller;

import com.peaqockback.peaqock.entity.Article;
import com.peaqockback.peaqock.service.IArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article")
@CrossOrigin
public class ArticleController {

    @Autowired
    private IArticleService articleService;


    @GetMapping
    public List<Article> getArticles(){
        return articleService.getArticles();
    }

    @PostMapping
    public void addArticle(@RequestBody Article article){
        articleService.addArticle(article);
    }

    @PutMapping
    public void updateArticle(@RequestBody Article[] article){
        articleService.updateArticle(article[0], article[1]);
    }

    @DeleteMapping("/{id}")
    public void deleteArticle(@PathVariable int id){
        articleService.deleteArticle(id);
    }
}
