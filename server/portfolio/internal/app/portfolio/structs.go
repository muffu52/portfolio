package portfolio

type ConfigSchema struct {
	Service struct {
		Name   string      `yaml:"name"`
		Port   interface{} `yaml:"port"`
		Domain interface{} `yaml:"domain"`
	} `yaml:"service"`
	Postgres struct {
		Host     string `yaml:"host"`
		User     string `yaml:"user"`
		Password string `yaml:"password"`
		Database string `yaml:"database"`
	} `yaml:"postgres"`
}

type InformationSchema struct {
	Id      string `yaml:"id"`
	Name    string
	Email   string
	Address string
	Summary string
	Profile string
}

type ExperienceSchema struct {
	Id          string `yaml:"id"`
	Title       string
	Company     string
	Location    string
	StartDate   string
	EndDate     string
	Description string
	Link        string
}

type ProjectSchema struct {
	Id          string `yaml:"id"`
	Name        string
	Description string
	StartDate   string
	EndDate     string
	Link        string
	Image       string
}

type SkillSchema struct {
	Id    string `yaml:"id"`
	Name  string
	Level int8
}

type EducationeSchema struct {
	Id          string `yaml:"id"`
	Institution string
	Degree      string
	StartDate   string
	EndDate     string
	Location    string
	Description string
}
