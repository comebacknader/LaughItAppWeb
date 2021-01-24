pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from Github' 
                git url: 'https://github.com/comebacknader/LaughItAppWeb.git'
            }
        }
        stage('Pull Master Branch') {
            steps  {
                echo 'Pulling master branch'
                dir('LaughItAppWeb') {
                    bat 'git pull origin master'                    
                }
            }
        }
        stage('Build') {
            steps {
                dir('LaughItAppWeb') {
                    echo 'Installing packages...'
                    bat 'npm install'
                    echo 'Building web application...'
                    bat 'npm run build'
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Test step activated.'
                dir('LaughItAppWeb') {
                    // bat 'npm test'
                }
            }
        }
        stage('Deploy to S3') {
            steps {
                echo 'Deploy step activated.'
                dir('LaughItAppWeb') {
                    withAWS(region: 'us-west-1', credentials: 'lia-web-s3') {
                        s3Delete(bucket: 'lia-s3-webapp-landing',  path: '**/*')
                        s3Upload(bucket: 'lia-s3-webapp-landing', includePathPattern: 'dist/**')
                    }
                }
            }
        }
    }
}
