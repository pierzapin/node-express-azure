pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3005:3005'
    }

  }
  stages {
    stage('Stage1') {
      steps {
        sleep(time: 1000, unit: 'MICROSECONDS')
      }
    }
    stage('') {
      steps {
        sh '''npm install
'''
      }
    }
  }
}