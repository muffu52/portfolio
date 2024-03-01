package main

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"os"
	"os/signal"
	"server/internal/app/portfolio"
	"syscall"
	"time"

	"github.com/gin-gonic/gin"
	"github.com/go-co-op/gocron"
)

func main() {
	fmt.Println("Hello World the app is running!")
	// Listen for SIGINT and SIGTERM signals to gracefully shutdown the application
	signalChan := make(chan os.Signal, 1)
	signal.Notify(signalChan, os.Interrupt, syscall.SIGTERM)
	r := gin.New()
	// r.LoadHTMLGlob("./dist/index.html")
	// r.Static("/static", "dist/assets")
	r.Use(portfolio.CORSMiddleware())
	r.GET("/", func(c *gin.Context) {
		c.File("../dist/index.html")
	})
	r.Static("/assets", "../dist/assets")
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

	if portfolio.ENV == "production" {
		gin.SetMode(gin.ReleaseMode)
	}
	fmt.Println("Starting c-link server, env:", portfolio.ENV)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Create a context for handling application lifecycle
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel() // Ensure cancel is called to release resources

	scheduler := gocron.NewScheduler(time.UTC)

	// Add a task to the scheduler
	scheduler.Every(5).Seconds().Do(makeAPIRequest, ctx) // Schedule task every 5 seconds

	// Start the scheduler in a separate goroutine
	go func() {
		// Start the scheduler
		scheduler.StartBlocking()
	}()

	fmt.Println("Cron job started")

	// Start the HTTP server in a separate goroutine
	go func() {
		if err := r.Run(":" + port); err != nil {
			fmt.Println("Error starting HTTP server:", err)
		}
	}()

	// Block until a signal is received
	<-signalChan

	// Cancel the context to stop the cron job
	cancel()

	fmt.Println("Shutting down gracefully...")
	// Optionally, you can wait for some time for the cron job to finish before exiting
	time.Sleep(2 * time.Second)
	fmt.Println("Goodbye!")

}

func makeAPIRequest(ctx context.Context) {
	apiUrl := "https://mufaddalenayathh.onrender.com/information"

	// Create a new HTTP request with the provided context
	req, err := http.NewRequestWithContext(ctx, http.MethodGet, apiUrl, nil)
	if err != nil {
		fmt.Println("Error creating HTTP request:", err)
		return
	}

	// Send the HTTP request
	response, err := http.DefaultClient.Do(req)
	if err != nil {
		fmt.Println("Error making GET request:", err)
		return
	}
	defer response.Body.Close()

	_, err = io.ReadAll(response.Body)
	if err != nil {
		fmt.Println("Error reading response body:", err)
		return
	}
	// fmt.Println("Response body:", string(body))
}
