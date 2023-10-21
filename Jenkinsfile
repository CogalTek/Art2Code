pipeline {
    agent any
    stages {
        stage("Build") {
            steps {
                echo "Building the app..."
                sh 'chmod u+x deploy smoke-tests'
                sh './deploy staging'
                sh './smoke-tests'
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
