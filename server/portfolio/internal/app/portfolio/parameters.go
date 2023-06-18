package portfolio

import (
	"database/sql"
	"os"
	"time"
)

var (
	Config ConfigSchema
	db     *sql.DB
	ENV    string
	PARIS  *time.Location
)

func init() {
	Config = LoadConfig()
	db = openDbConnection()
	ENV = os.Getenv("CONFIGOR_ENV")
	PARIS, _ = time.LoadLocation("Europe/Paris")
}
