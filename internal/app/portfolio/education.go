package portfolio

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DisplayEducation(c *gin.Context) {
	res := GetEducation()
	c.JSON(http.StatusOK, res)
}

func UpsertEducation(c *gin.Context) {
	// id := c.Param("id")
	var info EducationeSchema
	err := c.BindJSON(&info)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}
	// err = UpdateEducation(id, info)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update Education"})
	// 	return
	// }
	c.JSON(http.StatusOK, gin.H{"message": "Education updated"})
}
