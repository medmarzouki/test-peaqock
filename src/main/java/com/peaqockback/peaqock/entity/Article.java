package com.peaqockback.peaqock.entity;

import java.util.Date;
//import java.text.SimpleDateFormat;

public class Article {
    private int id;
    private String titre;
    private String contenu;
    private String auteur;
    private String urlImage;
    private Date dateCreation;

    public Article() {
    }

    public Article(int id, String titre, String contenu, String auteur, String urlImage) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
        this.urlImage = urlImage;
        this.dateCreation = new Date();
    }

    public Article(int id, String titre, String contenu, String auteur, String urlImage, Date dateCreation) {
        this.id = id;
        this.titre = titre;
        this.contenu = contenu;
        this.auteur = auteur;
        this.urlImage = urlImage;
        this.dateCreation = dateCreation;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getContenu() {
        return contenu;
    }

    public void setContenu(String contenu) {
        this.contenu = contenu;
    }

    public String getAuteur() {
        return auteur;
    }

    public void setAuteur(String auteur) {
        this.auteur = auteur;
    }

    public String getUrlImage() {
        return urlImage;
    }

    public void setUrlImage(String urlImage) {
        this.urlImage = urlImage;
    }

    public Date getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(Date dateCreation) {
        this.dateCreation = dateCreation;
    }
}
