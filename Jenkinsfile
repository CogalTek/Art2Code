pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                echo "Building the app..."
                sh "docker-compose -f docker-compose-dev.yml build"
                sh "docker-compose -f docker-compose-dev.yml up -d"
            }
        }
        stage("Test") {
            steps {
                echo "Testing the app..."
                sh 'chmod +x Test'
                sh "./Test"
                sh "docker-compose -f docker-compose-dev.yml down"
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying the app..."
                sh 'docker-compose down'
                sh 'docker-compose pull'
                sh 'docker-compose up -d'
            }
        }
    }
}
