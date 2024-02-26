package portfolio

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func DisplaySkills(c *gin.Context) {
	res := GetSkills()
	c.JSON(http.StatusOK, res)
}

func UpsertSkill(c *gin.Context) {
	// id := c.Param("id")
	var skill SkillSchema
	err := c.BindJSON(&skill)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}
	// err = UpdateSkill(id, skill)
	// if err != nil {
	// 	c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to update skill  " + id + ": " + err.Error()})
	// 	return
	// }
	c.JSON(http.StatusOK, gin.H{"message": "skill updated"})
}
