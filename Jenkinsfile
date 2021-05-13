pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning repository from Github' 
                git url: 'https://github.com/comebacknader/LaughItAppWeb.git'
            }
        }
        stage('Build') {
            steps {
                echo 'Installing packages...'
                sh 'npm install'
                echo 'Building web app...'
                sh 'npm run build'
           }
        }
        stage('Test') {
            steps {
                echo 'Test step activated.'
            }
        }
        stage('Deploy to S3') {
            steps {
                echo 'Deploy step activated.'
                dir('dist') {
                    withAWS(region: 'us-west-1', credentials: 'lia-web-s3') {
                        sh "dir"
                        s3Delete(bucket: 'lia-s3-webclient-dev',  path: '**/*')
                        s3Upload(bucket: 'lia-s3-webclient-dev', includePathPattern: '**/*')
                    }
                }
            }
        }
    }
}
