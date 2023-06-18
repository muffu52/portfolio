package portfolio

import (
	"log"
	"os"

	"github.com/jinzhu/configor"
)

func GetEnv(key, fallback string) string {
	if value, ok := os.LookupEnv(key); ok {
		return value
	}
	return fallback
}

func LoadConfig() ConfigSchema {
	if _, ok := os.LookupEnv("CONFIGOR_ENV"); !ok {
		_ = os.Setenv("CONFIGOR_ENV", "dev")
	}
	var config ConfigSchema
	configPath := GetEnv("CONFIG_PATH", "./configs")
	err := configor.Load(&config, configPath+"/config.yml")

	if err != nil {
		log.Println("helpers:LoadConfig", "Error:"+err.Error())
		os.Exit(-1)
	}
	return config
}
