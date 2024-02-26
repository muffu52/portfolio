package portfolio

// import (
// 	"database/sql"
// 	"errors"
// 	"fmt"

// 	_ "github.com/lib/pq"
// )

// func openDbConnection() (db *sql.DB) {
// 	var err error
// 	host := Config.Postgres.Host
// 	user := Config.Postgres.User
// 	password := Config.Postgres.Password
// 	database := Config.Postgres.Database
// 	applicationName := Config.Service.Name
// 	connStr := fmt.Sprintf("user=%s password=%s host=%s dbname=%s application_name=%s sslmode=disable", user, password, host, database, applicationName)

// 	db, err = sql.Open("postgres", connStr)
// 	if err != nil {
// 		fmt.Println("Error connecting to database: ", err)
// 		panic(err)
// 	}
// 	// defer db.Close()
// 	return
// }

// func GetInformation() InformationSchema {
// 	var row InformationSchema
// 	rows, err := db.Query("SELECT id, name, email, address, summary, profile FROM public.information")
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer rows.Close()
// 	for rows.Next() {

// 		err = rows.Scan(&row.Id, &row.Name, &row.Email, &row.Address, &row.Summary, &row.Profile)
// 		if err != nil {
// 			panic(err)
// 		}

// 	}
// 	return row
// }

// func UpdateInformation(id string, information InformationSchema) error {

// 	_, err := db.Exec("UPDATE public.information SET name=$1, email=$2, address=$3, summary=$4, profile=$5 WHERE id=$6", information.Name, information.Email, information.Address, information.Summary, information.Profile, id)

// 	return err
// }

// func InsertExperience(experience ExperienceSchema) error {
// 	_, err := db.Exec("INSERT INTO public.experience (id, title, company, 'location', start_date, end_date, description, link) VALUES ($1, $2, $3, $4, $5, $6, $7)",
// 		experience.Id, experience.Title, experience.Company, experience.Location, experience.StartDate, experience.EndDate, experience.Description, experience.Link)
// 	return err
// }

// func GetExperience() []ExperienceSchema {
// 	var row ExperienceSchema
// 	var list []ExperienceSchema
// 	rows, err := db.Query("SELECT id, title, company, location, start_date, end_date, description, link FROM public.experience")
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer rows.Close()
// 	for rows.Next() {

// 		err = rows.Scan(&row.Id, &row.Title, &row.Company, &row.Location, &row.StartDate, &row.EndDate, &row.Description, &row.Link)
// 		if err != nil {
// 			panic(err)
// 		}
// 		list = append(list, row)
// 	}
// 	return list
// }

// func UpdateExperience(id string, experience ExperienceSchema) error {
// 	var count int
// 	err := db.QueryRow("SELECT COUNT(*) FROM public.experience WHERE id=$1", id).Scan(&count)
// 	if err != nil {
// 		return err
// 	}

// 	if count == 0 {
// 		return errors.New("experience not found")
// 	}

// 	_, err = db.Exec("UPDATE public.experience SET title=$1, company=$2, location=$3, start_date=$4, end_date=$5, description=$6, link=$7 WHERE id=$8", experience.Title, experience.Company, experience.Location, experience.StartDate, experience.EndDate, experience.Description, experience.Link, id)

// 	return err
// }

// func GetProjects() []ProjectSchema {
// 	var row ProjectSchema
// 	var list []ProjectSchema
// 	rows, err := db.Query("SELECT id, name, description, start_date, end_date, link, image FROM public.project")
// 	if err != nil {
// 		panic(err)
// 	}
// 	defer rows.Close()
// 	for rows.Next() {
// 		err = rows.Scan(&row.Id, &row.Name, &row.Description, &row.StartDate, &row.EndDate, &row.Link, &row.Image)
// 		if err != nil {
// 			panic(err)
// 		}
// 		list = append(list, row)
// 	}
// 	return list
// }

// func UpdateProject(id string, project ProjectSchema) error {
// 	var count int
// 	err := db.QueryRow("SELECT COUNT(*) FROM public.project WHERE id=$1", id).Scan(&count)
// 	if err != nil {
// 		return err
// 	}

// 	if count == 0 {
// 		return errors.New("project not found")
// 	}
// 	_, err = db.Exec("UPDATE public.project SET name=$1, description=$2, start_date=$3, end_date=$4, link=$5, image=$6 WHERE id=$7", project.Name, project.Description, project.StartDate, project.EndDate, project.Link, project.Image, id)

// 	return err
// }

// func GetSkills() []SkillSchema {
// 	var row SkillSchema
// 	var list []SkillSchema
// 	rows, err := db.Query("SELECT id, skill_name, skill_level FROM public.skill")
// 	if err != nil {
// 		panic(err)
// 	}
// 	for rows.Next() {
// 		err = rows.Scan(&row.Id, &row.Name, &row.Level)
// 		if err != nil {
// 			panic(err)
// 		}
// 		list = append(list, row)
// 	}
// 	return list
// }

// func UpdateSkill(id string, skill SkillSchema) error {

// 	var count int
// 	err := db.QueryRow("SELECT COUNT(*) FROM public.skill WHERE id=$1", id).Scan(&count)
// 	if err != nil {
// 		return err
// 	}

// 	if count == 0 {
// 		return errors.New("skill not found")
// 	}

// 	_, err = db.Exec("UPDATE public.skill SET skill_name=$1, skill_level=$2 WHERE id=$3", skill.Name, skill.Level, id)

// 	return err
// }

// func GetEducation() []EducationeSchema {
// 	var row EducationeSchema
// 	var list []EducationeSchema
// 	rows, err := db.Query("SELECT id, institution, degree, start_date, end_date, location, description FROM public.education")
// 	if err != nil {
// 		panic(err)
// 	}
// 	for rows.Next() {
// 		err = rows.Scan(&row.Id, &row.Institution, &row.Degree, &row.StartDate, &row.EndDate, &row.Location, &row.Description)
// 		if err != nil {
// 			panic(err)
// 		}
// 		list = append(list, row)
// 	}
// 	return list
// }

// func UpdateEducation(id string, education EducationeSchema) error {

// 	var count int
// 	err := db.QueryRow("SELECT COUNT(*) FROM public.education WHERE id=$1", id).Scan(&count)
// 	if err != nil {
// 		return err
// 	}

// 	if count == 0 {
// 		return errors.New("education not found")
// 	}
// 	_, err = db.Exec("UPDATE public.education SET institution=$1, degree=$2, start_date=$3, end_date=$4, location=$5, description=$6 WHERE id=$7",
// 		education.Institution, education.Degree, education.StartDate, education.EndDate, education.Location, education.Description, id)

// 	return err
// }
