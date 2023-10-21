pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                echo "Building the app..."
                ./Test
            }
        }
        stage("Test") {
            steps {
                echo "Testing the app..."
            }
        }
        stage("Deploy") {
            steps {
                echo "Deploying the app..."
            }
        }
    }
}
