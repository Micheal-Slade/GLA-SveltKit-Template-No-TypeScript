pipeline {
    agent any
    environment {
        MAP_NAME = '!!INSERT YOUR APP NAME HERE!!'
    }
    stages {
        stage('Deliver') {
            steps {
                sshagent(credentials: ['apps.london']) {
                    bat '''
                    ssh ubuntu@3.8.247.156 mkdir -p /home/ubuntu/temp/%MAP_NAME%
                    scp -r build/* ubuntu@3.8.247.156:/home/ubuntu/temp/%MAP_NAME%
                    ssh -v ubuntu@3.8.247.156 sudo mkdir -p -m 777 /var/www/html/%MAP_NAME%
                    ssh -v ubuntu@3.8.247.156 sudo cp -r /home/ubuntu/temp/%MAP_NAME%/* /var/www/html/%MAP_NAME%/
            '''
                }
            }
        }
    }
}