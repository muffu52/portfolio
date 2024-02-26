package portfolio

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DisplayInformation(c *gin.Context) {
	res := GetInformation()
	c.JSON(http.StatusOK, res)
}

func UpsertInformation(c *gin.Context) {
	// id := c.Param("id")
	var info InformationSchema
	err := c.BindJSON(&info)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}
	// err = UpdateInformation(id, info)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update information"})
	// 	return
	// }
	c.JSON(http.StatusOK, gin.H{"message": "Information updated"})
}
