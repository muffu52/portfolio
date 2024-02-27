package portfolio

import (
	"encoding/json"
	"os"
)

func GetInformation() InformationSchema {

	// Read data from JSON file
	file, err := os.Open("../data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Decode JSON data
	var jsonData map[string]interface{}
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&jsonData); err != nil {
		panic(err)
	}

	// Parse information
	infoList := make([]InformationSchema, 0)
	for _, infoData := range jsonData["information"].([]interface{}) {
		info := InformationSchema{
			Id:      infoData.(map[string]interface{})["id"].(string),
			Name:    infoData.(map[string]interface{})["name"].(string),
			Email:   infoData.(map[string]interface{})["email"].(string),
			Address: infoData.(map[string]interface{})["address"].(string),
			Summary: infoData.(map[string]interface{})["summary"].(string),
			Profile: infoData.(map[string]interface{})["profile"].(string),
		}
		infoList = append(infoList, info)
	}

	return infoList[0]
}

func GetExperience() []ExperienceSchema {
	// Read data from JSON file
	file, err := os.Open("../data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Decode JSON data
	var jsonData map[string]interface{}
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&jsonData); err != nil {
		panic(err)
	}

	// Parse experience
	experienceList := make([]ExperienceSchema, 0)
	for _, expData := range jsonData["experience"].([]interface{}) {
		exp := ExperienceSchema{
			Id:          expData.(map[string]interface{})["id"].(string),
			Title:       expData.(map[string]interface{})["title"].(string),
			Company:     expData.(map[string]interface{})["company"].(string),
			Location:    expData.(map[string]interface{})["location"].(string),
			StartDate:   expData.(map[string]interface{})["start_date"].(string),
			EndDate:     expData.(map[string]interface{})["end_date"].(string),
			Description: expData.(map[string]interface{})["description"].(string),
			Link:        expData.(map[string]interface{})["link"].(string),
		}
		experienceList = append(experienceList, exp)
	}

	return experienceList
}

func GetEducation() []EducationeSchema {
	// Read data from JSON file
	file, err := os.Open("../data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Decode JSON data
	var jsonData map[string]interface{}
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&jsonData); err != nil {
		panic(err)
	}

	// Parse education
	educationList := make([]EducationeSchema, 0)
	for _, eduData := range jsonData["education"].([]interface{}) {
		edu := EducationeSchema{
			Id:          eduData.(map[string]interface{})["id"].(string),
			Institution: eduData.(map[string]interface{})["institution"].(string),
			Degree:      eduData.(map[string]interface{})["degree"].(string),
			StartDate:   eduData.(map[string]interface{})["start_date"].(string),
			EndDate:     eduData.(map[string]interface{})["end_date"].(string),
			Location:    eduData.(map[string]interface{})["location"].(string),
			Description: eduData.(map[string]interface{})["description"].(string),
		}
		educationList = append(educationList, edu)
	}

	return educationList
}

func GetSkills() []SkillSchema {
	// Read data from JSON file
	file, err := os.Open("../data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Decode JSON data
	var jsonData map[string]interface{}
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&jsonData); err != nil {
		panic(err)
	}

	// Parse skills
	skillList := make([]SkillSchema, 0)
	for _, skillData := range jsonData["skill"].([]interface{}) {
		skill := SkillSchema{
			Id:    skillData.(map[string]interface{})["id"].(string),
			Name:  skillData.(map[string]interface{})["skill_name"].(string),
			Level: int8(skillData.(map[string]interface{})["skill_level"].(float64)), // Assuming skill_level is a number in JSON
		}
		skillList = append(skillList, skill)
	}

	return skillList
}

func GetProjects() []ProjectSchema {
	// Read data from JSON file
	file, err := os.Open("../data.json")
	if err != nil {
		panic(err)
	}
	defer file.Close()

	// Decode JSON data
	var jsonData map[string]interface{}
	decoder := json.NewDecoder(file)
	if err := decoder.Decode(&jsonData); err != nil {
		panic(err)
	}

	// Parse projects
	projectList := make([]ProjectSchema, 0)
	for _, projectData := range jsonData["project"].([]interface{}) {
		project := ProjectSchema{
			Id:          projectData.(map[string]interface{})["id"].(string),
			Name:        projectData.(map[string]interface{})["name"].(string),
			Description: projectData.(map[string]interface{})["description"].(string),
			StartDate:   projectData.(map[string]interface{})["start_date"].(string),
			EndDate:     projectData.(map[string]interface{})["end_date"].(string),
			Link:        projectData.(map[string]interface{})["link"].(string),
			Image:       projectData.(map[string]interface{})["image"].(string),
		}
		projectList = append(projectList, project)
	}

	return projectList
}
