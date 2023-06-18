package main

import (
	"fmt"
	"os"
	"server/server/internal/app/portfolio"

	"github.com/gin-gonic/gin"
)

func main() {
	fmt.Println("Hello World!")
	r := gin.New()
	r.Use(portfolio.CORSMiddleware())
	information := r.Group("/information")
	information.GET("", portfolio.DisplayInformation)
	information.PUT("/:id", portfolio.UpsertInformation)
	// information.DELETE("/:id", portfolio.DeleteInformation)

	experience := r.Group("/experience")
	experience.GET("", portfolio.DisplayExperience)
	experience.PUT("/:id", portfolio.UpsertExperience)
	// experience.DELETE("/:id", portfolio.DeleteExperience)
	experience.POST("", portfolio.PostExperience)

	projects := r.Group("/projects")
	projects.GET("", portfolio.DisplayProjects)
	projects.PUT("/:id", portfolio.UpsertProject)
	// projects.DELETE("/:id", portfolio.DeleteProject)
	// projects.POST("", portfolio.InsertProject)

	skills := r.Group("/skills")
	skills.GET("", portfolio.DisplaySkills)
	skills.PUT("/:id", portfolio.UpsertSkill)
	// skills.DELETE("/:id", portfolio.DeleteSkill)
	// skills.POST("", portfolio.InsertSkill)

	education := r.Group("/education")
	education.GET("", portfolio.DisplayEducation)
	education.PUT("/:id", portfolio.UpsertEducation)
	// education.DELETE("/:id", portfolio.DeleteEducation)
	// education.POST("", portfolio.InsertEducation)

	fmt.Println("Starting c-link server, env:", portfolio.ENV)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	r.Run(":" + port)
}
