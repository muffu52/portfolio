package portfolio

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DisplayProjects(c *gin.Context) {
	res := GetProjects()
	c.JSON(http.StatusOK, res)
}

func UpsertProject(c *gin.Context) {
	// id := c.Param("id")
	var project ProjectSchema
	err := c.BindJSON(&project)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}
	// err = UpdateProject(id, project)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	// 	return
	// }
	c.JSON(http.StatusOK, gin.H{"message": "Project updated"})
}
