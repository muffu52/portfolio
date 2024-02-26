package portfolio

import (
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func DisplayExperience(c *gin.Context) {
	res := GetExperience()
	c.JSON(http.StatusOK, res)
}

func UpsertExperience(c *gin.Context) {
	// id := c.Param("id")
	var exp ExperienceSchema
	err := c.BindJSON(&exp)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}
	// err = UpdateExperience(id, exp)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	// 	return
	// }
	c.JSON(http.StatusOK, gin.H{"message": "experience updated"})
}

func PostExperience(c *gin.Context) {
	var experience ExperienceSchema
	if err := c.ShouldBindJSON(&experience); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	experience.Id = uuid.New().String()

	// err := InsertExperience(experience)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
	// 	return
	// }

	c.JSON(http.StatusOK, gin.H{"message": "Project added successfully"})
}
